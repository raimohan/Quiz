import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Anton, Lato } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});


export const metadata: Metadata = {
  title: 'Agniveer Ascent',
  description: 'The Agniveer Knowledge Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.variable} ${lato.variable} font-sans text-slate-800 antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
