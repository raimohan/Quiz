
"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, XCircle, HelpCircle, Repeat } from 'lucide-react';

interface ResultsProps {
  results: {
    score: number;
    correctAnswers: number;
    incorrectAnswers: number;
    unanswered: number;
  };
  totalQuestions: number;
}

const Results: React.FC<ResultsProps> = ({ results, totalQuestions }) => {
  const percentage = totalQuestions > 0 ? ((results.correctAnswers / totalQuestions) * 100).toFixed(2) : 0;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-white p-4">
      <Card className="w-full max-w-2xl text-center shadow-2xl animate-fade-in-up">
        <CardHeader>
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4">
            <Award className="h-10 w-10" />
          </div>
          <CardTitle className="text-4xl font-extrabold">Test Complete!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">Here's your performance summary.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/10 p-6 rounded-lg">
              <p className="text-lg text-muted-foreground">Final Score</p>
              <p className="text-5xl font-bold text-primary">{results.score}</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <p className="text-lg text-muted-foreground">Percentage</p>
              <p className="text-5xl font-bold text-primary">{percentage}%</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
             <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-500 shrink-0" />
                <div>
                    <p className="text-2xl font-bold">{results.correctAnswers}</p>
                    <p className="text-sm text-muted-foreground">Correct</p>
                </div>
             </div>
             <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <XCircle className="h-8 w-8 text-red-500 shrink-0" />
                <div>
                    <p className="text-2xl font-bold">{results.incorrectAnswers}</p>
                    <p className="text-sm text-muted-foreground">Incorrect</p>
                </div>
             </div>
             <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <HelpCircle className="h-8 w-8 text-yellow-500 shrink-0" />
                <div>
                    <p className="text-2xl font-bold">{results.unanswered}</p>
                    <p className="text-sm text-muted-foreground">Unanswered</p>
                </div>
             </div>
          </div>
        </CardContent>
        <CardFooter className="p-8">
            <Link href="/" passHref className="w-full">
              <Button size="lg" className="w-full font-bold text-lg">
                <Repeat className="mr-2 h-5 w-5" /> Back to Home
              </Button>
            </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Results;
