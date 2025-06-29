
"use client";

import { useState } from 'react';
import Quiz from '@/components/quiz/Quiz';
import Results from '@/components/quiz/Results';
import type { User } from 'firebase/auth';
import { currencyQuestions } from '@/lib/currency-questions';
import { firestore, isFirebaseConfigured } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

interface ResultData {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
}

export default function CurrencyTestPage() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  const saveResultsToFirestore = async (user: User | null, finalResults: ResultData) => {
    if (isFirebaseConfigured && user) {
      try {
        const testResultRef = doc(firestore, 'quizResults', user.uid, 'tests', 'Currency');
        await setDoc(testResultRef, {
          ...finalResults,
          quizType: 'Currency',
          timestamp: new Date(),
          totalQuestions: currencyQuestions.length,
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
    return <Results results={results} totalQuestions={currencyQuestions.length} />;
  }

  return <Quiz questions={currencyQuestions} onFinish={handleFinish} />;
}
