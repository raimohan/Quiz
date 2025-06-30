import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans text-slate-800 antialiased">
        {/* Google AdSense Script */}
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
