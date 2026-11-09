'use client'

import { useLanguage } from '@/lib/language-context'
import { useState } from 'react'

export function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic
    setEmail('')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-akran-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-12 border border-akran-100 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t('newsletter.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('newsletter.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-akran-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-akran-500 to-akran-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-akran-500/50 transition"
            >
              {t('newsletter.button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
