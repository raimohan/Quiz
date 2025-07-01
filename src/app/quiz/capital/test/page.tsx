
"use client";

import { useState } from 'react';
import { capitalQuestions } from '@/lib/capital-questions';
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
}

export default function CapitalTestPage() {
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  const handleFinish = (finalResults: ResultData) => {
    setResults(finalResults);
    setQuizFinished(true);
  };

  if (quizFinished && results) {
    return <Results results={results} />;
  }

  return <Quiz questions={capitalQuestions} onFinish={handleFinish} />;
}

