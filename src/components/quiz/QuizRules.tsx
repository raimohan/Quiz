
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ListChecks, Target, AlertTriangle, Clock, Flag, Palette, CheckCircle, BookOpen } from 'lucide-react';

interface QuizRulesProps {
  quizPath: string;
  quizTitle: string;
}

const rules = [
    {
        icon: Clock,
        title: "Time Limit per Question",
        description: "Each question has a 60-second timer. If the timer runs out, you will be automatically moved to the next question without your current question being answered.",
    },
    {
        icon: Target,
        title: "Scoring System",
        description: "You get +1 point for each correct answer and a penalty of -0.25 points for each incorrect answer. There is no penalty for unanswered questions.",
    },
    {
        icon: Palette,
        title: "Question Palette Guide",
        description: "Green: Correct, Red: Incorrect, Yellow: Marked for Review, Gray: Unanswered. Click any number to jump to that question.",
    },
    {
        icon: Flag,
        title: "Mark for Review",
        description: "Use the 'Mark for Review' button for questions you are unsure about. They will be highlighted in yellow for easy access later.",
    },
    {
        icon: CheckCircle,
        title: "Review and Submit",
        description: "You can navigate between questions and change answers any time before the final submission. Once submitted, the test is final.",
    },
    {
        icon: AlertTriangle,
        title: "Honesty Policy",
        description: "Please attempt the quiz fairly. Do not use external aids or seek help from others during the test.",
    },
];

const QuizRules: React.FC<QuizRulesProps> = ({ quizPath, quizTitle }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const router = useRouter();

  const handleStartTest = () => {
    if (isAccepted) {
      router.push(quizPath);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-blue-100 p-4">
      <Card className="w-full max-w-3xl shadow-2xl animate-fade-in-up border-0">
        <CardHeader className="text-center p-8">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4 shadow-lg">
             <BookOpen className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-extrabold tracking-tight">{quizTitle} - Instructions</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Please read the instructions carefully before you begin the test.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 md:px-12 py-8 bg-slate-50/50">
          <div className="space-y-8">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{rule.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-6 p-8 bg-white rounded-b-lg">
          <div className="flex items-center space-x-3">
            <Checkbox id="terms" checked={isAccepted} onCheckedChange={(checked) => setIsAccepted(!!checked)} className="h-5 w-5"/>
            <Label htmlFor="terms" className="text-base text-muted-foreground cursor-pointer">
              I have read and understood all the instructions.
            </Label>
          </div>
          <Button
            size="lg"
            className="w-full max-w-sm font-bold text-lg"
            disabled={!isAccepted}
            onClick={handleStartTest}
          >
            Start The Challenge
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default QuizRules;
