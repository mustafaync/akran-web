import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'AKRAN - Smart Appointment Management',
  description: 'AKRAN is a modern SaaS platform that provides smart and easy appointment management for businesses.',
  keywords: 'appointments, booking, scheduling, SaaS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
