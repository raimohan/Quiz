
"use client";

import { useState } from 'react';
import Quiz from '@/components/quiz/Quiz';
import { currencyQuestions } from '@/lib/currency-questions';
import dynamic from 'next/dynamic';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const Results = dynamic(() => import('@/components/quiz/Results'), { 
  ssr: false,
  loading: () => <LoadingAnimation />,
});

interface ResultData {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
}

export default function CurrencyTestPage() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  const handleFinish = (finalResults: ResultData) => {
    setResults(finalResults);
    setQuizFinished(true);
  };

  if (quizFinished && results) {
    return <Results results={results} totalQuestions={currencyQuestions.length} />;
  }

  return <Quiz questions={currencyQuestions} onFinish={handleFinish} />;
}
