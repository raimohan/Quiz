
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuizRules from '@/components/quiz/QuizRules';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function CapitalRulesPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStartTest = () => {
    router.push('/quiz/capital/test');
  };

  if (!isClient) {
    return <LoadingAnimation />;
  }

  return <QuizRules quizTitle="Capital Test" onStartTest={handleStartTest} />;
}
