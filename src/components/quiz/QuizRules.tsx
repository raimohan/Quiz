
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ShieldCheck, Target, Clock, AlertTriangle, BookOpen } from 'lucide-react';

interface QuizRulesProps {
  quizPath: string;
  quizTitle: string;
}

const QuizRules: React.FC<QuizRulesProps> = ({ quizPath, quizTitle }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const router = useRouter();

  const handleStartTest = () => {
    if (isAccepted) {
      router.push(quizPath);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-white p-4">
      <Card className="w-full max-w-2xl shadow-2xl animate-fade-in-up">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
             <BookOpen className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-extrabold">{quizTitle} - Quiz Rules</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Read the instructions carefully before you begin.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 px-8">
          <ul className="space-y-4 text-left text-muted-foreground">
            <li className="flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <span className="font-semibold text-foreground">Total Questions:</span> This quiz consists of multiple-choice questions.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Target className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <span className="font-semibold text-foreground">Scoring:</span> You will get <span className="text-green-600 font-bold">+1 point</span> for each correct answer.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <span className="font-semibold text-foreground">Negative Marking:</span> <span className="text-red-600 font-bold">-0.25 points</span> will be deducted for each incorrect answer. There is no penalty for unanswered questions.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
               <div>
                <span className="font-semibold text-foreground">No Time Limit:</span> Take your time to answer each question thoughtfully. There is no overall timer for the quiz.
              </div>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col gap-6 p-8">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={isAccepted} onCheckedChange={(checked) => setIsAccepted(!!checked)} />
            <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
              I have read and understood all the instructions.
            </Label>
          </div>
          <Button
            size="lg"
            className="w-full font-bold text-lg"
            disabled={!isAccepted}
            onClick={handleStartTest}
          >
            Start Test
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default QuizRules;
