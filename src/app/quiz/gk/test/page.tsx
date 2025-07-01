
"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { 
  gkTest1Questions, 
  gkTest2Questions, 
  gkTest3Questions, 
  gkTest4Questions, 
  gkTest5Questions,
  gkTest6Questions,
  gkTest7Questions,
  type Question 
} from '@/lib/questions';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

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
      case '7':
        selectedQuestions = gkTest7Questions;
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
    return <Results results={results} />;
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

