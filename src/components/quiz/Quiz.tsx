
"use client";

import React, { useState, useMemo, useCallback } from 'react';
import type { Question } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Star, Languages, LayoutGrid, List, HelpCircle, ArrowLeft, LogOut, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useQuizLanguage } from '@/context/QuizLanguageContext';
import QuizTimer from '@/components/quiz/QuizTimer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface QuizProps {
  questions: Question[];
  quizTitle: string;
  durationInSeconds: number;
  onFinish: (results: {
    score: number;
    correctAnswers: number;
    incorrectAnswers: number;
    unanswered: number;
    questions: Question[];
    answers: (number | null)[];
    marked: boolean[];
  }) => void;
}

const instructionRules = [
    {
        title: "Scoring System",
        description: "You get +1 point for each correct answer and a penalty of -0.25 points for each incorrect answer. There is no penalty for unanswered questions.",
    },
    {
        title: "Question Palette Guide",
        description: "The color of the question button indicates its status: Green (Answered), Red (Answered), Purple (Marked for Review), Blue (Answered & Marked), Gray (Not Answered).",
    },
    {
        title: "Navigation",
        description: "Click any number in the question palette to jump directly to that question. Use the navigation buttons to proceed sequentially.",
    },
    {
        title: "Review and Submit",
        description: "You can change answers any time before the final submission. Once submitted, the test is final.",
    },
];

const Quiz: React.FC<QuizProps> = ({ questions, quizTitle, durationInSeconds, onFinish }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    const [markedForReview, setMarkedForReview] = useState<boolean[]>(Array(questions.length).fill(false));
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const { language, toggleLanguage } = useQuizLanguage();

    const totalQuestions = questions.length;
    const currentQuestion: Question = useMemo(() => questions[currentQuestionIndex], [currentQuestionIndex, questions]);
    
    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };
    
    const handleSaveAndNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleNavigateToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    const handleAnswerSelect = (selectedIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = selectedIndex;
        setAnswers(newAnswers);
    };

    const handleClearResponse = () => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = null;
        setAnswers(newAnswers);
    };

    const handleMarkForReview = () => {
        const newMarked = [...markedForReview];
        newMarked[currentQuestionIndex] = !newMarked[currentQuestionIndex];
        setMarkedForReview(newMarked);
        handleNext();
    };

    const handleSubmitTest = useCallback(() => {
        let score = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;

        for (let i = 0; i < totalQuestions; i++) {
            if (answers[i] !== null) {
                if (answers[i] === questions[i].answer) {
                    score += 1;
                    correctAnswers++;
                } else {
                    score -= 0.25;
                    incorrectAnswers++;
                }
            }
        }
        
        onFinish({
            score: parseFloat(score.toFixed(2)),
            correctAnswers,
            incorrectAnswers,
            unanswered: totalQuestions - (correctAnswers + incorrectAnswers),
            questions: questions,
            answers: answers,
            marked: markedForReview,
        });
    }, [answers, questions, onFinish, totalQuestions, markedForReview]);
    
    const getStatusInfo = useCallback((index: number) => {
        const isAnswered = answers[index] !== null;
        const isMarked = markedForReview[index];

        if (isAnswered && isMarked) return { text: 'Answered & Marked', className: 'navigator-answered-marked' };
        if (isAnswered) {
             return { text: 'Answered', className: 'navigator-answered' };
        }
        if (isMarked) return { text: 'Marked for Review', className: 'navigator-marked' };

        return { text: 'Not Answered', className: 'navigator-unanswered' };
    }, [answers, markedForReview]);

    const selectedAnswerIndex = answers[currentQuestionIndex];
    
    return (
        <div className="flex flex-col min-h-screen bg-slate-100 font-sans">
            {/* Header */}
            <header className="flex-shrink-0 bg-primary text-primary-foreground shadow-md z-10">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <QuizTimer duration={durationInSeconds} onTimeout={handleSubmitTest} />
                    <h1 className="text-xl font-bold tracking-wider hidden md:block">{quizTitle}</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="secondary" size="sm" onClick={toggleLanguage} className="bg-white/20 hover:bg-white/30 text-white">
                            <Languages className="mr-2 h-4 w-4" />
                            {language === 'en' ? 'हिन्दी' : 'English'}
                        </Button>
                         <AlertDialog>
                          <AlertDialogTrigger asChild>
                             <Button variant="secondary" size="sm">
                               <LogOut className="mr-2 h-4 w-4" /> Leave Test
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure you want to leave?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will end the test and your progress will be submitted. This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={handleSubmitTest}>Submit & Leave</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive">Submit Test</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will end the test and calculate your final score. This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={handleSubmitTest}>Submit</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-6">
                {/* Left Column: Question & Options */}
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg">Question {currentQuestionIndex + 1}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-semibold leading-relaxed text-slate-800">{currentQuestion.question[language]}</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm flex-grow">
                        <CardHeader>
                            <CardTitle className="text-lg">Options</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {currentQuestion.options[language].map((option, i) => {
                                const isSelected = selectedAnswerIndex === i;
                                
                                return (
                                    <Button
                                        key={i}
                                        onClick={() => handleAnswerSelect(i)}
                                        variant="outline"
                                        className={cn(
                                            "justify-start h-auto p-3 text-base text-left whitespace-normal leading-snug border-2 w-full",
                                            isSelected ? 'bg-primary/10 border-primary text-primary' : 'border-slate-300 hover:bg-slate-50'
                                        )}
                                    >
                                        <span className="mr-4 flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 font-bold text-slate-600">{String.fromCharCode(65 + i)}</span>
                                        <span className="flex-1">{option}</span>
                                    </Button>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Sidebar: Question Palette */}
                <Card className="col-span-12 lg:col-span-4 shadow-sm flex flex-col max-h-[calc(100vh-150px)]">
                    <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
                        <CardTitle>Questions</CardTitle>
                        <div className="flex items-center gap-2">
                            <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" className="h-8 w-8" onClick={() => setViewMode('grid')}>
                                <LayoutGrid className="h-4 w-4" />
                            </Button>
                            <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" className="h-8 w-8" onClick={() => setViewMode('list')}>
                                <List className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-2 overflow-hidden">
                        <ScrollArea className="pr-2">
                             {viewMode === 'grid' ? (
                                <ul className="grid grid-cols-3 gap-x-2 gap-y-3 justify-items-center">
                                    {questions.map((_, index) => {
                                        const status = getStatusInfo(index);
                                        const isCurrent = index === currentQuestionIndex;
                                        return (
                                            <li key={index}>
                                                <Button
                                                    className={cn('question-palette-grid-button', status.className, isCurrent ? 'ring-2 ring-primary ring-offset-2' : '')}
                                                    onClick={() => handleNavigateToQuestion(index)}
                                                >
                                                    {index + 1}
                                                </Button>
                                            </li>
                                        )
                                    })}
                                </ul>
                             ) : (
                                <ul className="space-y-2">
                                    {questions.map((question, index) => {
                                        const status = getStatusInfo(index);
                                        const isCurrent = index === currentQuestionIndex;
                                        return (
                                            <li key={index}>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        'question-palette-button',
                                                        status.className,
                                                        isCurrent ? 'ring-2 ring-primary ring-offset-2' : ''
                                                    )}
                                                    onClick={() => handleNavigateToQuestion(index)}
                                                >
                                                    <span className="font-semibold mr-2">{index + 1}.</span>
                                                    <span className="flex-1">{question.question[language]}</span>
                                                </Button>
                                            </li>
                                        )
                                    })}
                                </ul>
                             )}
                        </ScrollArea>
                    </CardContent>
                     <CardFooter className="flex flex-col items-start gap-4 text-xs text-muted-foreground border-t pt-4">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-md bg-green-500"/>Answered</div>
                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-md bg-slate-200"/>Not Visited</div>
                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-md bg-purple-500"/>Marked</div>
                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-md bg-blue-500"/>Ans &amp; Marked</div>
                        </div>
                         <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                <HelpCircle className="mr-2 h-4 w-4" /> Instructions
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Test Instructions</AlertDialogTitle>
                            </AlertDialogHeader>
                            <div className="space-y-4">
                                {instructionRules.map(rule => (
                                    <div key={rule.title}>
                                        <h4 className="font-bold">{rule.title}</h4>
                                        <p className="text-sm text-muted-foreground">{rule.description}</p>
                                    </div>
                                ))}
                            </div>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Close</AlertDialogCancel>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                    </CardFooter>
                </Card>
            </main>

            {/* Footer */}
            <footer className="flex-shrink-0 bg-white border-t">
                 <div className="container mx-auto px-4 py-3 flex justify-center items-center flex-wrap gap-3">
                    <Button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {language === 'en' ? 'Previous' : 'पिछला'}
                    </Button>

                    <Button variant="outline" onClick={handleMarkForReview} className={cn('font-bold', markedForReview[currentQuestionIndex] ? 'bg-purple-100 border-purple-400' : '')}>
                       <Star className={`mr-2 h-4 w-4 transition-colors ${markedForReview[currentQuestionIndex] ? 'fill-purple-500 text-purple-600' : ''}`} />
                        {markedForReview[currentQuestionIndex] ? (language === 'en' ? 'Unmark & Next' : 'अनमार्क और अगला') : (language === 'en' ? 'Mark for Review & Next' : 'समीक्षा और अगला')}
                    </Button>
                    
                    <Button
                        onClick={handleNext}
                        disabled={currentQuestionIndex === totalQuestions - 1}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold"
                    >
                        {language === 'en' ? 'Next' : 'अगला'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <Button
                        onClick={handleSaveAndNext}
                        disabled={selectedAnswerIndex === null}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                    >
                       {language === 'en' ? 'Save & Next' : 'सहेजें और अगला'} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default Quiz;
