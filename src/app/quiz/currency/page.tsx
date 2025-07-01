
"use client";

import { useRouter } from 'next/navigation';
import QuizRules from '@/components/quiz/QuizRules';

export default function CurrencyRulesPage() {
  const router = useRouter();

  const handleStartTest = () => {
    router.push('/quiz/currency/test');
  };

  return <QuizRules quizTitle="Currency Test" onStartTest={handleStartTest} />;
}
