
"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { Question } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Star, CheckCircle, XCircle, ChevronLeft, Flag, Languages } from 'lucide-react';
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

interface QuizProps {
  questions: Question[];
  onFinish: (results: {
    score: number;
    correctAnswers: number;
    incorrectAnswers: number;
    unanswered: number;
  }) => void;
}

const LegendItem = ({ colorClass, label }: { colorClass: string, label: string }) => (
    <div className="flex items-center gap-2">
      <div className={`h-3.5 w-3.5 rounded-full ${colorClass}`} />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
);

const Quiz: React.FC<QuizProps> = ({ questions, onFinish }) => {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    const [markedForReview, setMarkedForReview] = useState<boolean[]>(Array(questions.length).fill(false));
    const { language, toggleLanguage } = useQuizLanguage();

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
        const correctCount = answers.reduce((count, ans, i) => count + (ans !== null && ans === questions[i].answer ? 1 : 0), 0);
        const incorrectCount = answeredCount - correctCount;
        const markedCount = markedForReview.filter(m => m).length;
        const unansweredCount = totalQuestions - answeredCount;
        return { answeredCount, correctCount, incorrectCount, markedCount, unansweredCount };
    }, [answers, markedForReview, questions]);

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
                
                {/* Main Quiz Content */}
                <div className="lg:col-span-2">
                    <Card className="shadow-lg border-0">
                        <CardHeader className="border-b bg-slate-50/50 rounded-t-lg">
                           <div className="flex justify-between items-center">
                               <div className="flex items-center gap-4">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => router.back()}>
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <div>
                                        <CardTitle className="text-xl font-bold">Agniveer Ascent Quiz</CardTitle>
                                        <CardDescription>Question {currentQuestionIndex + 1} of {totalQuestions}</CardDescription>
                                    </div>
                                </div>
                               <div className="flex items-center gap-4">
                                   <Button variant="outline" size="sm" onClick={toggleLanguage}>
                                        <Languages className="mr-2 h-4 w-4" />
                                        {language === 'en' ? 'हिन्दी' : 'English'}
                                   </Button>
                                    <div className="text-sm font-medium text-muted-foreground hidden sm:block">
                                        <span className="font-semibold text-green-600">+1</span> Correct | <span className="font-semibold text-red-600">-0.25</span> Incorrect
                                    </div>
                               </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 space-y-8">
                            <div key={currentQuestionIndex}>
                                <p className="text-xl md:text-2xl font-bold leading-tight text-slate-800">{currentQuestion.question[language]}</p>
                                <div className="mt-6 space-y-4">
                                    {currentQuestion.options[language].map((option, i) => {
                                        const isSelected = selectedAnswerIndex === i;
                                        const isCorrect = currentQuestion.answer === i;
                                        
                                        let buttonClass = 'hover:bg-accent/80';
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
                                                className={`justify-start h-auto p-4 text-base text-left whitespace-normal leading-snug border-2 w-full ${buttonClass}`}
                                            >
                                                <span className="mr-4 font-bold text-primary">{String.fromCharCode(65 + i)}.</span>
                                                <span className="flex-1">{option}</span>
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>

                            {selectedAnswerIndex !== null && (
                                <div className="p-5 bg-muted/30 rounded-lg border-l-4 border-l-primary space-y-4">
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                                        {selectedAnswerIndex === currentQuestion.answer ? <CheckCircle className="text-green-500 h-6 w-6"/> : <XCircle className="text-red-500 h-6 w-6" />}
                                        {language === 'en' ? 'Explanation' : 'स्पष्टीकरण'}
                                        </h4>
                                        <p className="text-muted-foreground mt-2 text-base">{currentQuestion.explanation[language]}</p>
                                    </div>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                     <div className="flex justify-between items-center mt-6">
                        <Button variant="outline" size="lg" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                            <ArrowLeft className="mr-2 h-5 w-5" /> {language === 'en' ? 'Previous' : 'पिछला'}
                        </Button>
                        <Button variant="outline" size="lg" onClick={handleMarkForReview} className={markedForReview[currentQuestionIndex] ? 'ring-2 ring-yellow-400' : ''}>
                           <Star className={`mr-2 h-5 w-5 transition-colors ${markedForReview[currentQuestionIndex] ? 'fill-yellow-400 text-yellow-500' : ''}`} />
                            {markedForReview[currentQuestionIndex] ? (language === 'en' ? 'Unmark' : 'अनमार्क करें') : (language === 'en' ? 'Mark for Review' : 'समीक्षा के लिए चिह्नित करें')}
                        </Button>
                        <Button size="lg" onClick={handleNextQuestion} disabled={currentQuestionIndex === totalQuestions - 1}>
                           {language === 'en' ? 'Next' : 'अगला'} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="shadow-lg border-0 sticky top-6">
                        <CardHeader>
                            <CardTitle className="text-center font-bold">Quiz Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                           <div>
                                <Progress value={(stats.answeredCount / totalQuestions) * 100} className="h-3" />
                                <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                                    <div className="p-2 rounded-md bg-green-100">
                                        <p className="text-xl font-bold text-green-600">{stats.correctCount}</p>
                                        <p className="text-xs font-medium text-muted-foreground">Correct</p>
                                    </div>
                                    <div className="p-2 rounded-md bg-red-100">
                                        <p className="text-xl font-bold text-red-600">{stats.incorrectCount}</p>
                                        <p className="text-xs font-medium text-muted-foreground">Incorrect</p>
                                    </div>
                                    <div className="p-2 rounded-md bg-yellow-100">
                                        <p className="text-xl font-bold text-yellow-500">{stats.markedCount}</p>
                                        <p className="text-xs font-medium text-muted-foreground">Marked</p>
                                    </div>
                                    <div className="p-2 rounded-md bg-muted/60">
                                        <p className="text-xl font-bold">{stats.unansweredCount}</p>
                                        <p className="text-xs font-medium text-muted-foreground">Unanswered</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t pt-6">
                                <CardTitle className="text-center mb-4 font-bold text-lg">Question Palette</CardTitle>
                                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-5 gap-2">
                                    {questions.map((_, index) => {
                                        const isCurrent = index === currentQuestionIndex;
                                        const isAnswered = answers[index] !== null;
                                        const isCorrect = isAnswered && answers[index] === questions[index].answer;
                                        const isMarked = markedForReview[index];

                                        let buttonClass;
                                        if (isMarked) {
                                            buttonClass = 'navigator-marked';
                                        } else if (isAnswered) {
                                            buttonClass = isCorrect ? 'navigator-correct' : 'navigator-incorrect';
                                        } else {
                                            buttonClass = 'navigator-unanswered';
                                        }
                                        
                                        return (
                                            <Button
                                                key={index}
                                                variant="outline"
                                                size="icon"
                                                className={`h-10 w-10 font-bold transition-all duration-200 ${buttonClass} ${isCurrent ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                                                onClick={() => handleNavigateToQuestion(index)}
                                            >
                                                {index + 1}
                                            </Button>
                                        );
                                    })}
                                </div>
                                <div className="mt-6 space-y-3">
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                        <LegendItem colorClass="bg-green-500" label="Correct" />
                                        <LegendItem colorClass="bg-red-500" label="Incorrect" />
                                        <LegendItem colorClass="bg-yellow-400" label="Marked" />
                                        <LegendItem colorClass="bg-muted" label="Unanswered" />
                                    </div>
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
            </div>
        </div>
    );
};

export default Quiz;
