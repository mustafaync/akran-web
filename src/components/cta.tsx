'use client'

import { useLanguage } from '@/lib/language-context'

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-akran-500 via-akran-600 to-akran-700 rounded-2xl p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t('cta.primary')}
            </h2>
            <p className="text-xl text-akran-100 mb-8">
              {t('cta.description')}
            </p>
            <button className="bg-white text-akran-600 px-8 py-3 rounded-xl font-semibold hover:bg-akran-50 transition shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
