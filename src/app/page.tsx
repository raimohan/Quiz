import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, TestTube2, Calculator, DollarSign, MapPinned } from 'lucide-react';

const testCategories = [
  {
    title: 'General Knowledge (GK)',
    description: 'Test your knowledge on a wide range of topics.',
    href: '/quiz/gk',
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    disabled: false,
  },
  {
    title: 'General Science (GS)',
    description: 'Explore the world of physics, chemistry, and biology.',
    href: '#',
    icon: <TestTube2 className="h-12 w-12 text-primary" />,
    disabled: true,
  },
  {
    title: 'Mathematics',
    description: 'Challenge your problem-solving skills.',
    href: '#',
    icon: <Calculator className="h-12 w-12 text-primary" />,
    disabled: true,
  },
  {
    title: 'Currency Test',
    description: 'How well do you know world currencies?',
    href: '#',
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    disabled: true,
  },
  {
    title: 'Capital Test',
    description: 'Match the countries to their capitals.',
    href: '#',
    icon: <MapPinned className="h-12 w-12 text-primary" />,
    disabled: true,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-white p-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary">
          Agniveer Ascent
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Select a category to begin your knowledge challenge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {testCategories.map((category, index) => (
          <Card
            key={index}
            className="transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="items-center text-center">
              {category.icon}
              <CardTitle className="mt-4 text-2xl font-bold">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>{category.description}</CardDescription>
              <Link href={category.href} passHref>
                <Button className="mt-6 w-full" disabled={category.disabled}>
                  {category.disabled ? 'Coming Soon' : 'Start Test'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}