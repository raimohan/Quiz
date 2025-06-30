import Link from 'next/link';

const testCategories = [
  {
    title: 'General Knowledge',
    description: 'A wide range of topics to test your worldly wisdom.',
    href: '/quiz/gk',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    disabled: false,
  },
  {
    title: 'Currency Test',
    description: "How well do you know the world's currencies?",
    href: '/quiz/currency',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    disabled: false,
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
            <Link href="#challenges" className="text-slate-600 hover:text-blue-600 font-semibold">Challenges</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 font-semibold">About</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 font-semibold">Leaderboard</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section>
        <div className="hero-content container mx-auto px-4 pt-24 pb-28 text-center fade-in-stagger">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl mb-4 text-slate-900">
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

      {/* Challenges */}
      <div id="challenges">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <header className="text-center mb-16">
            <h2 className="uppercase text-4xl text-slate-900 tracking-wider font-sans font-bold">Choose Your Challenge</h2>
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
                  <h3 className="uppercase tracking-wider text-2xl mb-2 text-slate-900 font-sans font-bold">{category.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{category.description}</p>
                  {category.disabled ? (
                    <span className="mt-auto w-full bg-slate-300 text-slate-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed text-base">Coming Soon</span>
                  ) : (
                    <Link href={category.href} className="mt-auto solid-button font-bold py-3 px-6 rounded-lg text-base">
                      Start Challenge →
                    </Link>
                  )}
                </div>
              );
            })}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 font-heading">Agniveer Ascent</h3>
              <p className="text-slate-400">The ultimate platform to test and prove your knowledge.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#challenges" className="text-slate-400 hover:text-white transition-colors">Challenges</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">🌐</Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">📘</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-500">
            &copy; 2025 Agniveer Ascent. All Rights Reserved. By @raianukrishna
          </div>
        </div>
      </footer>
    </div>
  );
}
