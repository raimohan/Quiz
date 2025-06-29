
"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { User, signInAnonymously } from 'firebase/auth';
import { auth, isFirebaseConfigured } from '@/lib/firebase';
import { Question, allQuestions } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Bookmark, Sparkles, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { explainQuestion, ExplainQuestionOutput } from '@/ai/flows/explain-question-flow';

interface QuizProps {
  onFinish: (user: User | null, results: {
    score: number;
    correctAnswers: number;
    incorrectAnswers: number;
    unanswered: number;
  }) => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish }) => {
    const [user, setUser] = useState<User | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(allQuestions.length).fill(null));
    const [markedForReview, setMarkedForReview] = useState<boolean[]>(Array(allQuestions.length).fill(false));
    const [aiExplanation, setAiExplanation] = useState<string | null>(null);
    const [isAiExplanationLoading, setIsAiExplanationLoading] = useState(false);

    const totalQuestions = allQuestions.length;
    const currentQuestion: Question = useMemo(() => allQuestions[currentQuestionIndex], [currentQuestionIndex]);
    
    useEffect(() => {
        const initAuth = async () => {
            if (isFirebaseConfigured) {
                try {
                    const userCredential = await signInAnonymously(auth);
                    setUser(userCredential.user);
                } catch (error) {
                    console.error("Anonymous authentication failed:", error);
                }
            } else {
                console.warn("Firebase not configured. AI explanations and results saving are disabled.");
            }
        };
        initAuth();
    }, []);

    const resetQuestionState = useCallback(() => {
        setAiExplanation(null);
        setIsAiExplanationLoading(false);
    }, []);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            resetQuestionState();
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            resetQuestionState();
        }
    };
    
    const handleNavigateToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        resetQuestionState();
    };

    const handleAiExplain = async () => {
        if (!isFirebaseConfigured) {
            setAiExplanation("AI features are disabled. Please configure Firebase credentials to enable them.");
            return;
        }
        setIsAiExplanationLoading(true);
        setAiExplanation(null);
        try {
            const result: ExplainQuestionOutput = await explainQuestion({
                question: currentQuestion.question,
                options: currentQuestion.options,
                answer: currentQuestion.options[currentQuestion.answer],
                explanation: currentQuestion.explanation,
            });
            setAiExplanation(result.detailedExplanation);
        } catch (error) {
            console.error("Error fetching AI explanation:", error);
            setAiExplanation("Sorry, I couldn't generate an explanation right now. Please try again.");
        } finally {
            setIsAiExplanationLoading(false);
        }
    };

    const handleAnswerSelect = (selectedIndex: number) => {
        if (answers[currentQuestionIndex] !== null) return;
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = selectedIndex;
        setAnswers(newAnswers);
        handleAiExplain();
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
                if (answers[i] === allQuestions[i].answer) {
                    score += 1;
                    correctAnswers++;
                } else {
                    score -= 0.25;
                    incorrectAnswers++;
                }
            }
        }
        
        onFinish(user, {
            score: parseFloat(score.toFixed(2)),
            correctAnswers,
            incorrectAnswers,
            unanswered: totalQuestions - (correctAnswers + incorrectAnswers),
        });
    };

    const selectedAnswerIndex = answers[currentQuestionIndex];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-screen-2xl mx-auto p-4 md:p-8">
            <Card className="lg:col-span-8 shadow-xl">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-primary">Question {currentQuestionIndex + 1}/{totalQuestions}</p>
                             <p className="text-xs text-muted-foreground mt-1">Correct: +1 | Incorrect: -0.25</p>
                        </div>
                    </div>
                    <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} className="mt-4" />
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-6">
                    <p className="text-xl font-semibold min-h-[5rem]">{currentQuestion.question}</p>
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
                    {(selectedAnswerIndex !== null || aiExplanation) && (
                        <div className="p-4 bg-muted/50 rounded-lg border animate-fade-in space-y-4">
                             <div>
                                <h4 className="font-bold text-primary flex items-center gap-2">
                                  {selectedAnswerIndex === currentQuestion.answer ? <CheckCircle className="text-green-500 h-5 w-5"/> : <XCircle className="text-red-500 h-5 w-5" />}
                                  Explanation
                                </h4>
                                <p className="text-muted-foreground mt-1">{currentQuestion.explanation}</p>
                            </div>
                            
                            {(isAiExplanationLoading || aiExplanation) && (
                                <div className="pt-4 border-t">
                                    <h4 className="font-bold text-primary flex items-center gap-2">
                                        <Sparkles className="h-5 w-5 text-yellow-500" />
                                        AI Explanation
                                    </h4>
                                    {isAiExplanationLoading && !aiExplanation && <div className="flex items-center gap-2 mt-1"><Loader2 className="h-4 w-4 animate-spin" /><p className="text-sm text-muted-foreground">Generating detailed explanation...</p></div>}
                                    {aiExplanation && (
                                        <p className="text-muted-foreground mt-1 whitespace-pre-wrap">{aiExplanation}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                    <div className="flex justify-between items-center pt-4 border-t">
                        <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                        <Button variant="outline" onClick={handleMarkForReview} className={markedForReview[currentQuestionIndex] ? 'navigator-marked' : ''}>
                           <Bookmark className={`mr-2 h-4 w-4 transition-colors ${markedForReview[currentQuestionIndex] ? 'fill-yellow-400 text-yellow-500' : ''}`} />
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
                    <CardTitle>Question Navigator</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-[calc(100%-4rem)]">
                    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 gap-2">
                        {allQuestions.map((_, index) => {
                            const isCurrent = index === currentQuestionIndex;
                            const answeredIndex = answers[index];
                            const isAnswered = answeredIndex !== null;
                            const isCorrect = isAnswered && answeredIndex === allQuestions[index].answer;
                            const isMarked = markedForReview[index];

                            let variant: "default" | "secondary" | "outline" = "outline";
                            let extraClasses = "";
                            if (isCurrent) {
                                variant = "default";
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
                                    className={`h-10 w-10 font-bold ${extraClasses}`}
                                    onClick={() => handleNavigateToQuestion(index)}
                                >
                                    {index + 1}
                                </Button>
                            );
                        })}
                    </div>
                    <Button size="lg" className="w-full mt-6" onClick={handleSubmitTest}>
                        Submit Test
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Quiz;
