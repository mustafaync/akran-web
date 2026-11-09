'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Pricing } from '@/components/pricing'
import { Trust } from '@/components/trust'
import { CTA } from '@/components/cta'
import { Newsletter } from '@/components/newsletter'
import { Footer } from '@/components/footer'
import { CookieConsent } from '@/components/cookie-consent'
import { LiveChat } from '@/components/live-chat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Trust />
      <CTA />
      <Newsletter />
      <Footer />
      <CookieConsent />
      <LiveChat />
    </main>
  )
}
