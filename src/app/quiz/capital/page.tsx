
"use client";

import { useRouter } from 'next/navigation';
import QuizRules from '@/components/quiz/QuizRules';

export default function CapitalRulesPage() {
  const router = useRouter();

  const handleStartTest = () => {
    router.push('/quiz/capital/test');
  };

  return <QuizRules quizTitle="Capital Test" onStartTest={handleStartTest} />;
}
