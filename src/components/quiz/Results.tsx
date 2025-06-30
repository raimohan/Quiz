
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, XCircle, HelpCircle, Repeat } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Confetti from 'react-confetti';

interface ResultsProps {
  results: {
    score: number;
    correctAnswers: number;
    incorrectAnswers: number;
    unanswered: number;
  };
  totalQuestions: number;
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

const Results: React.FC<ResultsProps> = ({ results, totalQuestions }) => {
  const [isClient, setIsClient] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setShowConfetti(false), 8000); // Confetti for 8 seconds
    return () => clearTimeout(timer);
  }, []);
  
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
      {isClient && showConfetti && percentage >= 50 && <Confetti recycle={false} numberOfPieces={400} />}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-4">
        <Card className="w-full max-w-4xl shadow-2xl animate-fade-in-up border-0 overflow-hidden">
          <CardHeader className="text-center bg-slate-900 text-white p-8">
            <div className="mx-auto bg-yellow-400 text-slate-900 rounded-full p-4 w-fit mb-4 shadow-lg transform transition-transform hover:scale-110">
              <Award className="h-10 w-10" />
            </div>
            <CardTitle className="text-4xl font-extrabold tracking-wider font-heading">Test Complete!</CardTitle>
            <CardDescription className="text-lg text-slate-300 mt-2">Here's your performance summary. i love you 😅❤️</CardDescription>
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
      </main>
    </>
  );
};

export default Results;
