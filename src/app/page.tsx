
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, FlaskConical, Calculator, Banknote, Landmark, PlusCircle } from 'lucide-react';

const testCategories = [
  {
    title: 'General Knowledge',
    description: 'Test your wisdom across a wide range of topics.',
    href: '/quiz/gk',
    icon: BookOpen,
    disabled: false,
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
  {
    title: 'General Science',
    description: 'Dive into the fascinating world of science.',
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
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-100 to-white dark:from-primary/10 dark:via-background dark:to-background">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Agniveer Ascent</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
                The ultimate knowledge challenge. Sharpen your mind, test your skills, and embrace the journey to mastery.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#quiz-section">
                  <Button size="lg" className="font-semibold">
                    Explore Challenges
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section id="quiz-section" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Choose Your Arena</h2>
              <p className="mt-4 text-muted-foreground">Select a category to begin your test.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={index}
                    className={`flex flex-col h-full rounded-2xl border bg-card transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 ${category.disabled ? 'bg-muted/50 dark:bg-gray-900/80 opacity-60' : ''}`}
                  >
                    <CardHeader className="flex-row items-center gap-4 pb-4">
                      <div className={`p-3 rounded-lg ${category.disabled ? 'bg-gray-400/20 text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
                         <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-card-foreground">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{category.description}</p>
                    </CardContent>
                    <CardFooter>
                      {category.disabled ? (
                        <Button disabled className="w-full font-semibold">
                          Coming Soon
                        </Button>
                      ) : (
                        <Link href={category.href} passHref className="w-full">
                          <Button className="w-full font-semibold group">
                            Start Challenge
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
              {/* Placeholder Card */}
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-card/50 p-8 text-center">
                 <PlusCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                 <h3 className="text-2xl font-bold text-card-foreground">More Tests</h3>
                 <p className="text-muted-foreground mt-2">New challenges are on the way!</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t bg-background">
        <div className="container px-4 md:px-6 text-center text-muted-foreground">
          <p>Copyright &copy; 2025 @raianukrishna</p>
        </div>
      </footer>
    </div>
  );
}
