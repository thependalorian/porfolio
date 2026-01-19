import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';

// Setup Inter font with a CSS variable for Tailwind
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'George Nekwaya | Fintech, AI, Data, Strategy',
  description: 'Personal website of George Nekwaya - AI/ML developer and data strategist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-act-midnight-forest">
      <body className={`${inter.variable} font-sans`}>
        <div className="act-content-wrapper">
          <Navigation />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
