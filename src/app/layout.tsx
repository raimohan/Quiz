
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Oswald } from 'next/font/google';
import { QuizLanguageProvider } from '@/context/QuizLanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
});


export const metadata: Metadata = {
  title: 'Agniveer Ascent',
  description: 'The Agniveer Knowledge Challenge',
  other: {
    'google-adsense-account': 'ca-pub-8903229174184358',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} font-sans text-slate-800 antialiased`}>
        <Script
          id="adsbygoogle-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8903229174184358"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <QuizLanguageProvider>
          {children}
        </QuizLanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
