'use client'

import { useLanguage } from '@/lib/language-context'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  const { language, setLanguage } = useLanguage()

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Branding */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image 
              src="/images/logo1.png" 
              alt="AKRAN Logo" 
              width={40} 
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="flex items-center gap-0 font-black text-lg">
              <span className="text-black">Akran</span>
              <span className="text-lime-400">Randevu</span>
            </div>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#solutions" className="text-gray-700 hover:text-lime-500 transition font-medium">
              Çözümler
            </Link>
            <Link href="#security" className="text-gray-700 hover:text-lime-500 transition font-medium">
              Güvenlik
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-lime-500 transition font-medium">
              Fiyat
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-lime-500 transition font-medium">
              SSS
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-lg transition ${
                language === 'en'
                  ? 'bg-lime-400 text-black font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('tr')}
              className={`px-3 py-1 rounded-lg transition ${
                language === 'tr'
                  ? 'bg-lime-400 text-black font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              TR
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
