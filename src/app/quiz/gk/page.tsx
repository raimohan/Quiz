"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText, ArrowRight } from 'lucide-react';
import QuizRules from '@/components/quiz/QuizRules';
import { useState } from 'react';

const gkTests = [
  {
    title: 'General Knowledge - Test 1',
    description: 'A balanced set of 50 questions covering various topics including history, geography, and general awareness.',
    href: '/quiz/gk/test?set=1',
    questionCount: 50,
  },
  {
    title: 'General Knowledge - Test 2',
    description: 'A challenging mix of 50 questions to test your knowledge on Indian polity, economy, and culture.',
    href: '/quiz/gk/test?set=2',
    questionCount: 50,
  },
  {
    title: 'General Knowledge - Test 3',
    description: 'Another set of 50 questions focusing on defence, current affairs, and significant historical events.',
    href: '/quiz/gk/test?set=3',
    questionCount: 50,
  },
  {
    title: 'General Knowledge - Test 4',
    description: 'A curated set of 50 questions covering a wide spectrum of topics to test your overall knowledge.',
    href: '/quiz/gk/test?set=4',
    questionCount: 50,
  },
   {
    title: 'General Knowledge - Test 5',
    description: 'Test your knowledge on Indian economy, polity, and miscellaneous general knowledge with these 50 questions.',
    href: '/quiz/gk/test?set=5',
    questionCount: 50,
  },
   {
    title: 'General Knowledge - Test 6',
    description: 'A diverse set of 25 questions covering topics from awards and honours to international organizations.',
    href: '/quiz/gk/test?set=6',
    questionCount: 25,
  },
];

export default function GkTestSelectionPage() {
  const [selectedTest, setSelectedTest] = useState<{title: string, href: string} | null>(null);
  const router = useRouter();

  const handleStartTest = () => {
    if (selectedTest) {
      router.push(selectedTest.href);
    }
  };

  return (
    <>
      {selectedTest ? (
        <QuizRules 
          quizTitle={selectedTest.title}
          onStartTest={handleStartTest}
        />
      ) : (
        <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-slate-50 to-blue-100 p-4 sm:p-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-3 text-slate-900">
              General Knowledge Tests
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose a test from the options below to begin your challenge.
            </p>
          </div>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {gkTests.map((test, index) => (
              <Card key={test.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-lg p-3">
                      <BookText className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold tracking-tight">{test.title}</CardTitle>
                      <CardDescription className="mt-1 text-base">{test.questionCount} Questions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{test.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-semibold text-base" size="lg" onClick={() => setSelectedTest({ title: test.title, href: test.href })}>
                    Start Test <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Link href="/" passHref>
              <Button variant="outline">
                &larr; Back to All Challenges
              </Button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
}
