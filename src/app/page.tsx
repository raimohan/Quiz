import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, TestTube2, Calculator, DollarSign, MapPinned, ArrowRight } from 'lucide-react';

const testCategories = [
  {
    title: 'General Knowledge',
    description: 'A wide range of topics to test your worldly wisdom.',
    href: '/quiz/gk',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    disabled: false,
  },
  {
    title: 'General Science',
    description: 'Dive into physics, chemistry, and biology.',
    href: '#',
    icon: <TestTube2 className="h-8 w-8 text-primary" />,
    disabled: true,
  },
  {
    title: 'Mathematics',
    description: 'Sharpen your mind with numerical challenges.',
    href: '#',
    icon: <Calculator className="h-8 w-8 text-primary" />,
    disabled: true,
  },
  {
    title: 'Currency Test',
    description: 'How well do you know the world\'s currencies?',
    href: '#',
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    disabled: true,
  },
  {
    title: 'Capital Test',
    description: 'Match countries to their capital cities.',
    href: '#',
    icon: <MapPinned className="h-8 w-8 text-primary" />,
    disabled: true,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-background p-4 sm:p-8 md:p-12">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      <div className="text-center mb-16 mt-8 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-foreground">
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Agniveer Ascent</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Your journey to mastery begins here. Select a challenge and prove your knowledge.
        </p>
      </div>

      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testCategories.map((category, index) => (
            <Link key={index} href={category.disabled ? '#' : category.href} passHref className={category.disabled ? 'pointer-events-none' : ''}>
              <Card
                className={`group relative flex flex-col h-full overflow-hidden rounded-xl border bg-card hover:border-primary/50 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 animate-fade-in-up ${category.disabled ? 'opacity-50' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">{category.title}</h2>
                  <p className="text-muted-foreground mt-2 mb-6 flex-grow">{category.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                    <span className="font-semibold text-primary">
                      {category.disabled ? 'Coming Soon' : 'Start Challenge'}
                    </span>
                    {!category.disabled && (
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
           {/* Adding a placeholder card to make the layout more balanced for 5 items on larger screens */}
           <Card className="hidden lg:flex flex-col items-center justify-center rounded-xl border-2 border-dashed bg-card/50 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
             <div className="text-center p-6">
                <p className="font-semibold text-muted-foreground">More Tests</p>
                <p className="text-sm text-muted-foreground">Coming Soon!</p>
             </div>
           </Card>
        </div>
      </div>
    </main>
  );
}
