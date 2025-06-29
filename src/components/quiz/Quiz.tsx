
"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { Question } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Star, CheckCircle, XCircle, ChevronLeft } from 'lucide-react';
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


interface QuizProps {
  questions: Question[];
  onFinish: (results: {
    score: number;
    correctAnswers: number;
    incorrectAnswers: number;
    unanswered: number;
  }) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onFinish }) => {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    const [markedForReview, setMarkedForReview] = useState<boolean[]>(Array(questions.length).fill(false));

    const totalQuestions = questions.length;
    const currentQuestion: Question = useMemo(() => questions[currentQuestionIndex], [currentQuestionIndex, questions]);
    
    const handleNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };
    
    const handleNavigateToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    const handleAnswerSelect = (selectedIndex: number) => {
        if (answers[currentQuestionIndex] !== null) return;
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = selectedIndex;
        setAnswers(newAnswers);
    };

    const handleMarkForReview = () => {
        const newMarked = [...markedForReview];
        newMarked[currentQuestionIndex] = !newMarked[currentQuestionIndex];
        setMarkedForReview(newMarked);
    };

    const handleSubmitTest = () => {
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
        });
    };

    const selectedAnswerIndex = answers[currentQuestionIndex];
    
    const stats = useMemo(() => {
        const answeredCount = answers.filter(a => a !== null).length;
        const correct = answers.reduce((count, ans, i) => count + (ans !== null && ans === questions[i].answer ? 1 : 0), 0);
        const incorrect = answeredCount - correct;
        const marked = markedForReview.filter(m => m).length;
        const unanswered = totalQuestions - answeredCount;
        return { correct, incorrect, marked, unanswered };
    }, [answers, markedForReview, questions]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-screen-2xl mx-auto p-4 md:p-8">
            <Card className="lg:col-span-8 shadow-xl">
                <CardHeader>
                    <div className="flex justify-between items-center">
                       <div className="flex items-center">
                            <Button variant="outline" size="icon" className="mr-4" onClick={() => router.back()}>
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <div>
                                <p className="text-sm font-medium text-primary">Question {currentQuestionIndex + 1}/{totalQuestions}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    <span className="font-semibold text-green-600 dark:text-green-400">+1</span> for correct | <span className="font-semibold text-red-600 dark:text-red-400">-0.25</span> for incorrect
                                </p>
                            </div>
                        </div>
                    </div>
                    <Progress value={((answers.filter(a => a !== null).length) / totalQuestions) * 100} className="mt-4" />
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-6">
                    <div key={currentQuestionIndex} className="animate-fade-in-up space-y-6">
                        <div className="bg-muted/50 p-6 rounded-lg border">
                           <p className="text-xl font-semibold">{currentQuestion.question}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {currentQuestion.options.map((option, i) => {
                                const isSelected = selectedAnswerIndex === i;
                                const isCorrect = currentQuestion.answer === i;
                                let buttonClass = 'hover:bg-accent/10';
                                if (selectedAnswerIndex !== null) {
                                    if (isCorrect) buttonClass = 'correct-answer';
                                    else if (isSelected) buttonClass = 'incorrect-answer';
                                    else buttonClass = 'other-option';
                                }
                                return (
                                    <Button
                                        key={i}
                                        onClick={() => handleAnswerSelect(i)}
                                        disabled={selectedAnswerIndex !== null}
                                        variant="outline"
                                        className={`justify-start h-auto p-4 text-base text-left whitespace-normal leading-snug ${buttonClass}`}
                                    >
                                        {option}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                    {selectedAnswerIndex !== null && (
                        <div className="p-4 bg-muted/50 rounded-lg border animate-fade-in-up space-y-4">
                             <div>
                                <h4 className="font-bold text-primary flex items-center gap-2">
                                  {selectedAnswerIndex === currentQuestion.answer ? <CheckCircle className="text-green-500 h-5 w-5"/> : <XCircle className="text-red-500 h-5 w-5" />}
                                  Explanation
                                </h4>
                                <p className="text-muted-foreground mt-1">{currentQuestion.explanation}</p>
                            </div>
                        </div>
                    )}
                    <div className="flex justify-between items-center pt-4 border-t">
                        <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                        <Button variant="outline" onClick={handleMarkForReview} className={markedForReview[currentQuestionIndex] ? 'navigator-marked' : ''}>
                           <Star className={`mr-2 h-4 w-4 transition-colors ${markedForReview[currentQuestionIndex] ? 'fill-yellow-400 text-yellow-500' : ''}`} />
                            Mark
                        </Button>
                        <Button onClick={handleNextQuestion} disabled={currentQuestionIndex === totalQuestions - 1}>
                           Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="lg:col-span-4 shadow-xl">
                <CardHeader>
                    <CardTitle>Questions List</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-[calc(100%-4rem)]">
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-center">
                            <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.correct}</p>
                                <p className="text-xs font-medium text-muted-foreground">Correct</p>
                            </div>
                            <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30">
                                <p className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.incorrect}</p>
                                <p className="text-xs font-medium text-muted-foreground">Incorrect</p>
                            </div>
                            <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                                <p className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">{stats.marked}</p>
                                <p className="text-xs font-medium text-muted-foreground">Marked</p>
                            </div>
                            <div className="p-3 rounded-lg bg-muted/60">
                                <p className="text-2xl font-bold">{stats.unanswered}</p>
                                <p className="text-xs font-medium text-muted-foreground">Unanswered</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 gap-2">
                            {questions.map((_, index) => {
                                const isCurrent = index === currentQuestionIndex;
                                const answeredIndex = answers[index];
                                const isAnswered = answeredIndex !== null;
                                const isCorrect = isAnswered && answeredIndex === questions[index].answer;
                                const isMarked = markedForReview[index];

                                let variant: "default" | "secondary" | "outline" = "outline";
                                let extraClasses = "";
                                if (isCurrent) {
                                    variant = "default";
                                    extraClasses += ' ring-2 ring-primary ring-offset-background ring-offset-2';
                                } else if (isAnswered) {
                                    extraClasses += isCorrect ? ' navigator-correct' : ' navigator-incorrect';
                                }
                                if (isMarked) {
                                    extraClasses += ' navigator-marked';
                                }
                                
                                return (
                                    <Button
                                        key={index}
                                        variant={variant}
                                        size="icon"
                                        className={`h-10 w-10 font-bold transition-all duration-200 ${extraClasses}`}
                                        onClick={() => handleNavigateToQuestion(index)}
                                    >
                                        {index + 1}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="lg" className="w-full mt-6">
                          Submit Test
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will end your test and calculate your final score. This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleSubmitTest}>Submit</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                </CardContent>
            </Card>
        </div>
    );
};

export default Quiz;
