'use client'

import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">AKRAN</h3>
            <p className="text-gray-400">
              Smart appointment management for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  {t('footer.kvkk')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-akran-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221h-4.108c0 .633 0 1.49 0 1.49h4.108v3.65h-4.108v8.539h-3.79v-8.539H7.29v-3.65h3.706s.046-1.487.046-1.49h-4.108c0-2.046 1.065-3.22 3.22-3.22h4.047v3.62z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-akran-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-akran-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 9.221c.003.106.003.214.003.322v.32c0 3.284-2.497 7.071-7.06 7.071-1.404 0-2.71-.408-3.813-1.114.194.023.392.035.592.035 1.163 0 2.233-.397 3.083-1.061-1.086-.02-2.003-.738-2.32-1.723.152.028.309.043.469.043.226 0 .447-.03.659-.086-1.135-.23-1.989-1.232-1.989-2.437v-.031c.333.186.717.298 1.13.312-.667-.447-1.105-1.209-1.105-2.072 0-.456.122-.883.336-1.252 1.223 1.502 3.051 2.49 5.11 2.595-.042-.181-.064-.369-.064-.561 0-1.36 1.103-2.463 2.463-2.463.709 0 1.35.299 1.799.776.561-.11 1.088-.313 1.562-.594-.184.576-.575 1.059-1.084 1.366.498-.059.973-.192 1.414-.388-.33.497-.745.935-1.223 1.286z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-akran-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm3.5-9.5h-2v3.5H11v-3.5H8.5v-2H11v-2h2.5v2h2v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 AKRAN. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
