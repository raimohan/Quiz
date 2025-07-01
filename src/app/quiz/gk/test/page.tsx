
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
  const [quizTitle, setQuizTitle] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  useEffect(() => {
    let selectedQuestions: Question[] = [];
    let title = '';

    switch (testSet) {
      case '1':
        selectedQuestions = gkTest1Questions;
        title = 'General Knowledge - Test 1';
        break;
      case '2':
        selectedQuestions = gkTest2Questions;
        title = 'General Knowledge - Test 2';
        break;
      case '3':
        selectedQuestions = gkTest3Questions;
        title = 'General Knowledge - Test 3';
        break;
      case '4':
        selectedQuestions = gkTest4Questions;
        title = 'General Knowledge - Test 4';
        break;
      case '5':
        selectedQuestions = gkTest5Questions;
        title = 'General Knowledge - Test 5';
        break;
      case '6':
        selectedQuestions = gkTest6Questions;
        title = 'General Knowledge - Test 6';
        break;
      case '7':
        selectedQuestions = gkTest7Questions;
        title = 'General Knowledge - Test 7';
        break;
      default:
        selectedQuestions = gkTest1Questions;
        title = 'General Knowledge - Test 1';
        break;
    }
    
    setQuestions(selectedQuestions);
    setQuizTitle(title);

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
  
  // 30 minutes for 50 questions, 15 for 25
  const quizDuration = questions.length * 36; 

  return <Quiz questions={questions} onFinish={handleFinish} quizTitle={quizTitle} durationInSeconds={quizDuration} />;
}


export default function GkTestPage() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <GkTest />
    </Suspense>
  );
}
