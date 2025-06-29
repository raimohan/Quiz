
"use client";

import { useState } from 'react';
import Quiz from '@/components/quiz/Quiz';
import Results from '@/components/quiz/Results';
import { capitalQuestions } from '@/lib/capital-questions';

interface ResultData {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
}

export default function CapitalTestPage() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  const handleFinish = (finalResults: ResultData) => {
    setResults(finalResults);
    setQuizFinished(true);
  };

  if (quizFinished && results) {
    return <Results results={results} totalQuestions={capitalQuestions.length} />;
  }

  return <Quiz questions={capitalQuestions} onFinish={handleFinish} />;
}
