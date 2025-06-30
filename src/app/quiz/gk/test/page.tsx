
"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Quiz from '@/components/quiz/Quiz';
import Results from '@/components/quiz/Results';
import { 
  gkTest1Questions, 
  gkTest2Questions, 
  gkTest3Questions, 
  gkTest4Questions, 
  gkTest5Questions,
  gkTest6Questions,
  type Question 
} from '@/lib/questions';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

interface ResultData {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
}

function GkTest() {
  const searchParams = useSearchParams();
  const testSet = searchParams.get('set');

  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  useEffect(() => {
    let selectedQuestions: Question[] = [];

    switch (testSet) {
      case '1':
        selectedQuestions = gkTest1Questions;
        break;
      case '2':
        selectedQuestions = gkTest2Questions;
        break;
      case '3':
        selectedQuestions = gkTest3Questions;
        break;
      case '4':
        selectedQuestions = gkTest4Questions;
        break;
      case '5':
        selectedQuestions = gkTest5Questions;
        break;
      case '6':
        selectedQuestions = gkTest6Questions;
        break;
      default:
        // Default to test 1 if set is invalid or not present
        selectedQuestions = gkTest1Questions;
        break;
    }
    
    setQuestions(selectedQuestions);

  }, [testSet]);

  const handleFinish = (finalResults: ResultData) => {
    setResults(finalResults);
    setQuizFinished(true);
  };

  if (questions.length === 0) {
    return <LoadingAnimation />;
  }

  if (quizFinished && results) {
    return <Results results={results} totalQuestions={questions.length} />;
  }

  return <Quiz questions={questions} onFinish={handleFinish} />;
}


export default function GkTestPage() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <GkTest />
    </Suspense>
  );
}
