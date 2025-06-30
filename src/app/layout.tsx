import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Staatliches } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const staatliches = Staatliches({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-staatliches',
  weight: '400',
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
      <body className={`${inter.variable} ${staatliches.variable} font-sans text-slate-800 antialiased`}>
        <Script
          id="adsbygoogle-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8903229174184358"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
