
"use client";

import { useState } from 'react';
import Quiz from '@/components/quiz/Quiz';
import Results from '@/components/quiz/Results';
import type { User } from 'firebase/auth';
import { allQuestions } from '@/lib/questions';
import { firestore } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

interface ResultData {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
}

export default function GkTestPage() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  const saveResultsToFirestore = async (user: User | null, finalResults: ResultData) => {
    if (user) {
      try {
        const testResultRef = doc(firestore, 'quizResults', user.uid, 'tests', 'GK');
        await setDoc(testResultRef, {
          ...finalResults,
          quizType: 'GK',
          timestamp: new Date(),
          totalQuestions: allQuestions.length,
        });
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    }
  };

  const handleFinish = (user: User | null, finalResults: ResultData) => {
    setResults(finalResults);
    setQuizFinished(true);
    saveResultsToFirestore(user, finalResults);
  };

  if (quizFinished && results) {
    return <Results results={results} totalQuestions={allQuestions.length} />;
  }

  return <Quiz questions={allQuestions} onFinish={handleFinish} />;
}
