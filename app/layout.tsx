import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'George Nekwaya | Fintech Founder & Data Strategist',
  description: 'Building Financial Identity for the Next Billion. Fintech Founder. Data Strategist. Global Citizen.',
  keywords: ['George Nekwaya', 'Buffr', 'Fintech', 'Namibia', 'Data Analytics', 'AI', 'MBA'],
  authors: [{ name: 'George Nekwaya' }],
  openGraph: {
    title: 'George Nekwaya | Fintech Founder & Data Strategist',
    description: 'Building Financial Identity for the Next Billion',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
