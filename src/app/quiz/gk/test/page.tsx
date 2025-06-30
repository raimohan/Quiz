
"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Quiz from '@/components/quiz/Quiz';
import Results from '@/components/quiz/Results';
import QuizRules from '@/components/quiz/QuizRules';
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
  const [quizTitle, setQuizTitle] = useState('');
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);

  useEffect(() => {
    let selectedQuestions: Question[] = [];
    let selectedTitle = '';

    switch (testSet) {
      case '1':
        selectedQuestions = gkTest1Questions;
        selectedTitle = 'General Knowledge - Test 1';
        break;
      case '2':
        selectedQuestions = gkTest2Questions;
        selectedTitle = 'General Knowledge - Test 2';
        break;
      case '3':
        selectedQuestions = gkTest3Questions;
        selectedTitle = 'General Knowledge - Test 3';
        break;
      case '4':
        selectedQuestions = gkTest4Questions;
        selectedTitle = 'General Knowledge - Test 4';
        break;
      case '5':
        selectedQuestions = gkTest5Questions;
        selectedTitle = 'General Knowledge - Test 5';
        break;
      case '6':
        selectedQuestions = gkTest6Questions;
        selectedTitle = 'General Knowledge - Test 6';
        break;
      default:
        // Default to test 1 if set is invalid or not present
        selectedQuestions = gkTest1Questions;
        selectedTitle = 'General Knowledge - Test 1';
        break;
    }
    
    setQuestions(selectedQuestions);
    setQuizTitle(selectedTitle);

  }, [testSet]);

  const handleFinish = (finalResults: ResultData) => {
    setResults(finalResults);
    setQuizFinished(true);
  };
  
  const handleStartTest = () => {
    setIsTestStarted(true);
  }

  if (questions.length === 0 && quizTitle === '') {
    return <LoadingAnimation />;
  }

  if (quizFinished && results) {
    return <Results results={results} totalQuestions={questions.length} />;
  }

  if (!isTestStarted) {
    return <QuizRules quizTitle={quizTitle} onStartTest={handleStartTest} />;
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
