
"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, CheckCircle, XCircle, HelpCircle, Repeat, BarChart3, Star, Eye } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Bar, XAxis, YAxis, CartesianGrid, Legend, BarChart as RechartsBarChart } from 'recharts';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';
import Confetti from 'react-confetti';
import LoadingAnimation from '@/components/ui/LoadingAnimation';
import type { Question } from '@/lib/questions';
import { cn } from '@/lib/utils';

interface ResultData {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  questions: Question[];
  answers: (number | null)[];
  marked: boolean[];
}

interface ResultsProps {
  results: ResultData;
}

const StatCard = ({ icon, label, value, className }: { icon: React.ReactNode, label: string, value: number, className?: string }) => (
    <div className={`flex items-center gap-4 p-4 rounded-lg bg-muted/50 ${className}`}>
        <div className="flex-shrink-0">{icon}</div>
        <div>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
        </div>
    </div>
);

const QuestionReview = ({ questions, answers, marked }: { questions: Question[], answers: (number | null)[], marked: boolean[] }) => {
    const { language } = { language: 'en' }; // Simplified for now

    const allQuestions = useMemo(() => questions.map((q, i) => ({
        ...q,
        userAnswer: answers[i],
        isMarked: marked[i],
        originalIndex: i,
        isCorrect: answers[i] === q.answer,
    })), [questions, answers, marked]);

    const correctQuestions = allQuestions.filter(q => q.isCorrect);
    const incorrectQuestions = allQuestions.filter(q => q.userAnswer !== null && !q.isCorrect);
    const unansweredQuestions = allQuestions.filter(q => q.userAnswer === null);
    const markedQuestions = allQuestions.filter(q => q.isMarked);

    const renderQuestionList = (qs: typeof allQuestions) => (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {qs.length > 0 ? qs.map((q) => (
                <AccordionItem value={`q-${q.originalIndex}`} key={q.originalIndex} className="bg-white rounded-lg border">
                    <AccordionTrigger className="p-4 text-left hover:no-underline">
                        <span className="font-semibold mr-2">{q.originalIndex + 1}.</span> {q.question[language]}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 border-t">
                        <div className="space-y-2 mb-4">
                            {q.options[language].map((option, i) => {
                                const isCorrectAnswer = i === q.answer;
                                const isUserChoice = i === q.userAnswer;
                                return (
                                    <div key={i} className={cn(
                                        "flex items-center gap-3 p-2 rounded-md border",
                                        isUserChoice && !isCorrectAnswer && "bg-red-100 border-red-300",
                                        isCorrectAnswer && "bg-green-100 border-green-300"
                                    )}>
                                        {isCorrectAnswer ? <CheckCircle className="h-5 w-5 text-green-600" /> : isUserChoice ? <XCircle className="h-5 w-5 text-red-600" /> : <div className="h-5 w-5" />}
                                        <span className="flex-1">{option}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                           <h4 className="font-bold text-slate-800">Explanation</h4>
                           <p className="text-slate-600 mt-1">{q.explanation[language]}</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            )) : <p className="text-muted-foreground text-center py-8">No questions in this category.</p>}
        </Accordion>
    );

    return (
        <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                <TabsTrigger value="all">All ({allQuestions.length})</TabsTrigger>
                <TabsTrigger value="correct">Correct ({correctQuestions.length})</TabsTrigger>
                <TabsTrigger value="incorrect">Incorrect ({incorrectQuestions.length})</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered ({unansweredQuestions.length})</TabsTrigger>
                <TabsTrigger value="marked">Marked ({markedQuestions.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="all">{renderQuestionList(allQuestions)}</TabsContent>
            <TabsContent value="correct">{renderQuestionList(correctQuestions)}</TabsContent>
            <TabsContent value="incorrect">{renderQuestionList(incorrectQuestions)}</TabsContent>
            <TabsContent value="unanswered">{renderQuestionList(unansweredQuestions)}</TabsContent>
            <TabsContent value="marked">{renderQuestionList(markedQuestions)}</TabsContent>
        </Tabs>
    );
};

const Results: React.FC<ResultsProps> = ({ results }) => {
  const [isClient, setIsClient] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setShowConfetti(false), 8000); // Confetti for 8 seconds
    return () => clearTimeout(timer);
  }, []);

  const totalQuestions = results.questions.length;

  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/&/g, 'and');

  const categoryData = useMemo(() => {
    const counts: { [key: string]: number } = {};
    results.questions.forEach(q => {
      counts[q.category] = (counts[q.category] || 0) + 1;
    });
    return Object.keys(counts).map(name => ({ name, count: counts[name], slug: slugify(name) }));
  }, [results.questions]);

  const chartColors = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];
  
  const categoryChartConfig = useMemo(() => {
      const config: ChartConfig = {};
      categoryData.forEach((category, index) => {
          config[category.slug] = {
              label: category.name,
              color: `hsl(var(--${chartColors[index % chartColors.length]}))`,
          };
      });
      return config;
  }, [categoryData]);


  if (!isClient) {
    return <LoadingAnimation />;
  }

  const percentage = totalQuestions > 0 ? Math.max(0, (results.correctAnswers / totalQuestions) * 100) : 0;
  
  const pieData = [
    { name: 'Correct', value: results.correctAnswers },
    { name: 'Incorrect', value: results.incorrectAnswers },
    { name: 'Unanswered', value: results.unanswered },
  ];

  const COLORS = ['#16a34a', '#dc2626', '#64748b'];

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <>
      {showConfetti && percentage >= 50 && <Confetti recycle={false} numberOfPieces={400} />}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-4">
        <div className="w-full max-w-4xl space-y-8 animate-fade-in-up">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="text-center bg-slate-900 text-white p-8">
              <div className="mx-auto bg-yellow-400 text-slate-900 rounded-full p-4 w-fit mb-4 shadow-lg transform transition-transform hover:scale-110">
                <Award className="h-10 w-10" />
              </div>
              <CardTitle className="text-4xl font-extrabold tracking-wider font-heading">Test Complete!</CardTitle>
              <CardDescription className="text-lg text-slate-300 mt-2">Here's your performance summary.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle className="text-slate-200" strokeWidth="12" stroke="currentColor" fill="transparent" r={radius} cx="96" cy="96" />
                      <circle
                        className="text-primary"
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="96"
                        cy="96"
                        style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
                      />
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-slate-800">{percentage.toFixed(1)}%</span>
                        <span className="text-lg text-muted-foreground">Score: {results.score}</span>
                    </div>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={110}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="focus:outline-none" />
                        ))}
                      </Pie>
                      <Tooltip
                          contentStyle={{
                              background: "rgba(255, 255, 255, 0.9)",
                              backdropFilter: "blur(5px)",
                              border: "1px solid #e2e8f0",
                              borderRadius: "0.5rem"
                          }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6 border-t">
                <StatCard
                  icon={<CheckCircle className="h-8 w-8 text-green-500" />}
                  label="Correct"
                  value={results.correctAnswers}
                  className="hover:bg-green-50"
                />
                <StatCard
                  icon={<XCircle className="h-8 w-8 text-red-500" />}
                  label="Incorrect"
                  value={results.incorrectAnswers}
                  className="hover:bg-red-50"
                />
                <StatCard
                  icon={<HelpCircle className="h-8 w-8 text-slate-500" />}
                  label="Unanswered"
                  value={results.unanswered}
                  className="hover:bg-slate-100"
                />
              </div>
            </CardContent>
            <CardFooter className="p-8 bg-slate-50/70">
              <Link href="/" passHref className="w-full">
                <Button size="lg" className="w-full font-bold text-lg">
                  <Repeat className="mr-2 h-5 w-5" /> Back to Home
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="shadow-2xl border-0 overflow-hidden">
             <CardHeader>
                <div className="flex items-center gap-3">
                    <BarChart3 className="h-7 w-7 text-primary" />
                    <CardTitle className="text-2xl font-bold">Category-wise Analysis</CardTitle>
                </div>
                <CardDescription>Here's a breakdown of the questions by topic.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={categoryChartConfig} className="h-80 w-full">
                    <RechartsBarChart data={categoryData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" dataKey="count" allowDecimals={false} />
                        <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                        <Tooltip
                            cursor={{fill: 'rgba(239, 246, 255, 0.5)'}}
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(5px)",
                                border: "1px solid #e2e8f0",
                                borderRadius: "0.5rem"
                            }}
                        />
                        <Legend />
                        <Bar dataKey="count" name="No. of Questions" radius={[0, 4, 4, 0]} barSize={20}>
                          {categoryData.map((entry) => (
                            <Cell key={`cell-${entry.name}`} fill={categoryChartConfig[entry.slug]?.color} />
                          ))}
                        </Bar>
                    </RechartsBarChart>
                </ChartContainer>
            </CardContent>
          </Card>

          <Card className="shadow-2xl border-0 overflow-hidden">
             <CardHeader>
                <div className="flex items-center gap-3">
                    <Eye className="h-7 w-7 text-primary" />
                    <CardTitle className="text-2xl font-bold">Review Your Answers</CardTitle>
                </div>
                <CardDescription>Check your performance question by question.</CardDescription>
            </CardHeader>
            <CardContent className="bg-slate-50/70 p-4 md:p-6">
                <QuestionReview questions={results.questions} answers={results.answers} marked={results.marked} />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Results;
