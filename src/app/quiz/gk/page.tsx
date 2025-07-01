
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { BookText } from 'lucide-react';
import QuizRules from '@/components/quiz/QuizRules';
import { useState, useEffect } from 'react';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

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
    description: 'A diverse set of 50 questions covering topics from awards and honours to international organizations.',
    href: '/quiz/gk/test?set=6',
    questionCount: 50,
  },
  {
    title: 'General Knowledge - Test 7',
    description: 'A comprehensive set of 25 questions covering Indian history, geography, polity, defence, and more.',
    href: '/quiz/gk/test?set=7',
    questionCount: 25,
  },
];

export default function GkTestSelectionPage() {
  const [selectedTest, setSelectedTest] = useState<{title: string, href: string} | null>(null);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStartTest = () => {
    if (selectedTest) {
      router.push(selectedTest.href);
    }
  };

  if (!isClient) {
    return <LoadingAnimation />;
  }

  if (selectedTest) {
    return (
      <QuizRules 
        quizTitle={selectedTest.title}
        onStartTest={handleStartTest}
      />
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-4 sm:p-8">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="fade-in-stagger">
            <h1 className="font-heading uppercase text-4xl sm:text-5xl md:text-6xl mb-3 text-foreground tracking-wider">
              General Knowledge Tests
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a test from the options below to begin your challenge.
            </p>
          </div>
        </header>

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {gkTests.map((test, index) => (
            <div 
              key={test.title} 
              className="challenge-card text-center p-8 flex flex-col opacity-0 animate-[hero-fade-in-up_0.8s_cubic-bezier(0.25,0.8,0.25,1)_forwards]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 mx-auto">
                <div className="card-icon">
                  <BookText className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-heading uppercase tracking-wider text-xl mb-2 text-card-foreground">{test.title}</h3>
              <p className="text-muted-foreground font-semibold mb-2">{test.questionCount} Questions</p>
              <p className="text-muted-foreground mb-6 flex-grow">{test.description}</p>
              
              <button 
                onClick={() => setSelectedTest({ title: test.title, href: test.href })}
                className="mt-auto solid-button font-bold py-3 px-6 rounded-lg text-base"
              >
                Start Test &rarr;
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/" passHref>
            <Button variant="outline" size="lg">
              &larr; Back to All Challenges
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
