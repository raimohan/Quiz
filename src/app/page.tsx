'use client';

import Link from 'next/link';

const testCategories = [
  {
    title: 'General Knowledge',
    description: 'A wide range of topics to test your worldly wisdom.',
    href: '/quiz/gk',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
      </svg>
    ),
    disabled: false,
  },
  {
    title: 'Currency Test',
    description: "How well do you know the world's currencies?",
    href: '/quiz/currency',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    disabled: false,
  },
  {
    title: 'Capital Test',
    description: 'Match countries to their capital cities.',
    href: '/quiz/capital',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    disabled: false,
  },
  {
    title: 'General Science',
    description: 'Dive into physics, chemistry, and biology.',
    href: '#',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    disabled: true,
  },
  {
    title: 'Mathematics',
    description: 'Sharpen your mind with numerical challenges.',
    href: '#',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    disabled: true,
  },
];

export default function Home() {
  return (
    <div className="text-slate-800 antialiased hero-section">
      {/* Header */}
      <header className="sticky-header">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-heading uppercase tracking-wider text-2xl text-slate-800">Agniveer Ascent</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#challenges" className="text-slate-600 hover:text-blue-600 transition-colors font-semibold">Challenges</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-semibold">About</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-semibold">Leaderboard</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="hero-content container mx-auto px-4 py-12 text-center fade-in-stagger">
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-4 text-slate-900 font-akira">
            Master Your Knowledge
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Your journey to mastery begins here. Select a challenge below and prove your knowledge.
          </p>
          <Link href="#challenges" className="solid-button font-bold py-4 px-8 rounded-lg text-lg inline-block">
            Explore Challenges
          </Link>
        </div>
      </section>

      {/* Challenge Cards Section */}
      <div id="challenges" className="container mx-auto px-4 py-16 sm:py-24">
        <header className="text-center mb-16">
          <h2 className="font-heading uppercase text-4xl text-slate-900 tracking-wider">
            Choose Your Challenge
          </h2>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className={`challenge-card text-center p-8 flex flex-col ${category.disabled ? 'disabled' : ''}`}>
                <div className="flex-shrink-0 mx-auto">
                  <div className="card-icon">
                    <Icon />
                  </div>
                </div>
                <h3 className="font-heading uppercase tracking-wider text-2xl mb-2 text-slate-900">{category.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{category.description}</p>
                {category.disabled ? (
                  <span className="mt-auto w-full bg-slate-300 text-slate-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed text-base">Coming Soon</span>
                ) : (
                  <Link href={category.href} className="mt-auto solid-button font-bold py-3 px-6 rounded-lg text-base">
                    Start Challenge &rarr;
                  </Link>
                )}
              </div>
            );
          })}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12 text-center text-slate-400">
          <p>&copy; 2025 Agniveer Ascent. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
