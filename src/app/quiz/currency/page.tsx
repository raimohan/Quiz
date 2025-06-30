
"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import QuizRules from '@/components/quiz/QuizRules';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function CurrencyRulesPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStartTest = () => {
    router.push('/quiz/currency/test');
  };

  if (!isClient) {
    return <LoadingAnimation />;
  }

  return <QuizRules quizTitle="Currency Test" onStartTest={handleStartTest} />;
}
