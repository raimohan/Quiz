"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { User, signInAnonymously } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, firestore, isFirebaseConfigured } from '@/lib/firebase';
import { allQuestions, Question } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Bookmark } from 'lucide-react';
import CircularTimer from './CircularTimer';

type QuizState = 'onboarding' | 'in-progress' | 'finished';

const Quiz: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [quizState, setQuizState] = useState<QuizState>('onboarding');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(string | null)[]>(Array(allQuestions.length).fill(null));
    const [markedForReview, setMarkedForReview] = useState<boolean[]>(Array(allQuestions.length).fill(false));
    const [timerKey, setTimerKey] = useState(Date.now());

    const totalQuestions = allQuestions.length;
    const currentQuestion: Question = useMemo(() => allQuestions[currentQuestionIndex], [currentQuestionIndex]);
    const score = useMemo(() => {
        return answers.reduce((acc, answer, index) => {
            if (answer === allQuestions[index].answer) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }, [answers]);

    useEffect(() => {
        if (!isFirebaseConfigured) {
            console.warn("Firebase not configured. Authentication and results saving are disabled. Please update src/lib/firebase.ts");
            return;
        }

        const authenticate = async () => {
            try {
                await signInAnonymously(auth);
                auth.onAuthStateChanged(user => {
                    if (user) {
                        setUser(user);
                    } else {
                        setUser(null);
                    }
                });
            } catch (error) {
                console.error("Anonymous authentication failed:", error);
            }
        };
        authenticate();
    }, []);

    const handleStartQuiz = () => {
        setQuizState('in-progress');
        setTimerKey(Date.now());
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setTimerKey(Date.now());
        } else {
            finishQuiz();
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setTimerKey(Date.now());
        }
    };
    
    const handleNavigateToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setTimerKey(Date.now());
    };

    const handleAnswerSelect = (option: string) => {
        if (answers[currentQuestionIndex] !== null) return;
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = option;
        setAnswers(newAnswers);
    };

    const handleMarkForReview = () => {
        const newMarked = [...markedForReview];
        newMarked[currentQuestionIndex] = !newMarked[currentQuestionIndex];
        setMarkedForReview(newMarked);
    };

    const finishQuiz = async () => {
        setQuizState('finished');
        
        if (!isFirebaseConfigured) {
            return;
        }

        if (!user) {
            console.error("User not authenticated, cannot save results.");
            return;
        }

        const percentage = Math.round((score / totalQuestions) * 100);

        try {
            await addDoc(collection(firestore, "quizAttempts"), {
                userId: user.uid,
                score,
                totalQuestions,
                percentage,
                completedAt: serverTimestamp(),
            });
        } catch (error) {
            console.error("Error saving quiz results:", error);
        }
    };

    const handleAttemptAgain = () => {
        setQuizState('onboarding');
        setCurrentQuestionIndex(0);
        setAnswers(Array(totalQuestions).fill(null));
        setMarkedForReview(Array(totalQuestions).fill(false));
        setTimerKey(Date.now());
    };

    const selectedAnswer = answers[currentQuestionIndex];

    if (quizState === 'onboarding') {
        return (
            <Card className="w-full max-w-2xl text-center shadow-2xl animate-fade-in">
                <CardHeader className="p-8">
                    <CardTitle className="text-4xl font-extrabold text-primary tracking-tight">The Agniveer Knowledge Challenge</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground pt-2">Test your mettle. Begin your journey.</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                    <Button size="lg" className="text-lg px-8 py-6" onClick={handleStartQuiz}>Begin Assessment</Button>
                </CardContent>
            </Card>
        );
    }

    if (quizState === 'finished') {
        const percentage = Math.round((score / totalQuestions) * 100);
        return (
            <Card className="w-full max-w-2xl text-center shadow-2xl p-8 animate-fade-in">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">Assessment Complete!</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground pt-2">
                        {percentage >= 75 ? "Excellent work! Your dedication shines through." : "Good effort! Every attempt is a step towards mastery."}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-7xl font-bold text-primary">
                        {score} <span className="text-3xl text-muted-foreground">/ {totalQuestions}</span>
                    </div>
                    <div className="text-2xl font-semibold text-accent">{percentage}%</div>
                    <p className="text-4xl pt-4 font-bold text-gray-700 dark:text-gray-300 animate-pulse">i love you 😅❤️</p>
                    <Button size="lg" onClick={handleAttemptAgain} className="mt-4">Attempt Again</Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-screen-2xl mx-auto">
            <Card className="lg:col-span-8 shadow-xl">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-primary">Question {currentQuestionIndex + 1}/{totalQuestions}</p>
                            <p className="text-sm text-muted-foreground">Score: {score}</p>
                        </div>
                        <CircularTimer duration={10} onTimeout={handleNextQuestion} resetKey={timerKey} />
                    </div>
                    <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} className="mt-4" />
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-6">
                    <p className="text-xl font-semibold min-h-[5rem]">{currentQuestion.question}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentQuestion.options.map((option, i) => {
                            const isSelected = selectedAnswer === option;
                            const isCorrect = currentQuestion.answer === option;
                            let buttonClass = 'hover:bg-accent/10';
                            if (selectedAnswer) {
                                if (isCorrect) buttonClass = 'correct-answer';
                                else if (isSelected) buttonClass = 'incorrect-answer';
                                else buttonClass = 'other-option';
                            }
                            return (
                                <Button
                                    key={i}
                                    onClick={() => handleAnswerSelect(option)}
                                    disabled={!!selectedAnswer}
                                    variant="outline"
                                    className={`justify-start h-auto p-4 text-base text-left whitespace-normal leading-snug ${buttonClass}`}
                                >
                                    {option}
                                </Button>
                            );
                        })}
                    </div>
                    {selectedAnswer && (
                        <div className="p-4 bg-muted/50 rounded-lg border animate-fade-in">
                            <h4 className="font-bold text-primary">Explanation</h4>
                            <p className="text-muted-foreground mt-1">{currentQuestion.explanation}</p>
                        </div>
                    )}
                    <div className="flex justify-between items-center pt-4 border-t">
                        <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                        <Button variant="outline" onClick={handleMarkForReview} className={markedForReview[currentQuestionIndex] ? 'ring-2 ring-offset-2 ring-yellow-400' : ''}>
                           <Bookmark className={`mr-2 h-4 w-4 transition-colors ${markedForReview[currentQuestionIndex] ? 'fill-yellow-400 text-yellow-500' : ''}`} />
                            Mark
                        </Button>
                        <Button onClick={handleNextQuestion}>
                            {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="lg:col-span-4 shadow-xl">
                <CardHeader>
                    <CardTitle>Question Navigator</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-6 gap-2">
                    {allQuestions.map((_, index) => {
                        const isCurrent = index === currentQuestionIndex;
                        const isAnswered = answers[index] !== null;
                        const isMarked = markedForReview[index];

                        let variant: "default" | "secondary" | "outline" = "outline";
                        let extraClasses = "";
                        if (isCurrent) {
                            variant = "default";
                        } else if (isAnswered) {
                            variant = "secondary";
                        }
                        if (isMarked) {
                            extraClasses = 'ring-2 ring-offset-background ring-yellow-400';
                        }
                        
                        return (
                            <Button
                                key={index}
                                variant={variant}
                                size="icon"
                                className={`h-10 w-10 font-bold ${extraClasses}`}
                                onClick={() => handleNavigateToQuestion(index)}
                            >
                                {index + 1}
                            </Button>
                        );
                    })}
                </CardContent>
            </Card>
        </div>
    );
};

export default Quiz;
