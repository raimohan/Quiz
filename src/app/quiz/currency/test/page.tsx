
"use client";

import { useState } from 'react';
import { currencyQuestions } from '@/lib/currency-questions';
import dynamic from 'next/dynamic';
import LoadingAnimation from '@/components/ui/LoadingAnimation';
import type { Question } from '@/lib/questions';

const Results = dynamic(() => import('@/components/quiz/Results'), { 
  ssr: false,
  loading: () => <LoadingAnimation />,
});

const Quiz = dynamic(() => import('@/components/quiz/Quiz'), {
  ssr: false,
  loading: () => <LoadingAnimation />,
});

interface ResultData {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  questions: Question[];
  answers: (number | null)[];
  marked: boolean[];
}

export default function CurrencyTestPage() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  const handleFinish = (finalResults: ResultData) => {
    setResults(finalResults);
    setQuizFinished(true);
  };

  if (quizFinished && results) {
    return <Results results={results} />;
  }

  // 30 seconds per question
  const quizDuration = currencyQuestions.length * 30;

  return <Quiz questions={currencyQuestions} onFinish={handleFinish} quizTitle="Currency Test" durationInSeconds={quizDuration} />;
}
