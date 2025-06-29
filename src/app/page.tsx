import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, FlaskConical, Calculator, Banknote, Landmark, PlusCircle } from 'lucide-react';

const testCategories = [
  {
    title: 'General Knowledge',
    description: 'A wide range of topics to test your worldly wisdom.',
    href: '/quiz/gk',
    icon: BookOpen,
    disabled: false,
  },
  {
    title: 'General Science',
    description: 'Dive into physics, chemistry, and biology.',
    href: '#',
    icon: FlaskConical,
    disabled: true,
  },
  {
    title: 'Mathematics',
    description: 'Sharpen your mind with numerical challenges.',
    href: '#',
    icon: Calculator,
    disabled: true,
  },
  {
    title: 'Currency Test',
    description: "How well do you know the world's currencies?",
    href: '/quiz/currency',
    icon: Banknote,
    disabled: false,
  },
  {
    title: 'Capital Test',
    description: 'Match countries to their capital cities.',
    href: '/quiz/capital',
    icon: Landmark,
    disabled: false,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} href={category.disabled ? '#' : category.href} passHref className={category.disabled ? 'pointer-events-none' : ''}>
                <Card
                  className={`group relative flex flex-col h-full overflow-hidden rounded-2xl border bg-card hover:border-primary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 animate-fade-in-up ${category.disabled ? 'opacity-50' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 flex flex-col flex-grow text-center items-center">
                    <div className="mb-6 bg-primary/10 text-primary p-4 rounded-full">
                       <Icon className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-card-foreground">{category.title}</h2>
                    <p className="text-muted-foreground mt-2 mb-6 flex-grow">{category.description}</p>
                    
                    <div className="flex justify-center items-center mt-auto pt-6 border-t border-border/50 w-full">
                      <span className="font-semibold text-primary">
                        {category.disabled ? 'Coming Soon' : 'Start Challenge'}
                      </span>
                      {!category.disabled && (
                        <ArrowRight className="ml-2 h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
           {/* Placeholder card */}
           <div className="hidden lg:flex flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-card/50 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
             <div className="text-center p-8">
                <PlusCircle className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                <p className="font-semibold text-muted-foreground">More Tests</p>
                <p className="text-sm text-muted-foreground">Coming Soon!</p>
             </div>
           </div>
        </div>
      </div>
    </main>
  );
}
