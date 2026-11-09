'use client'

import { useLanguage } from '@/lib/language-context'

export function Trust() {
  const { t } = useLanguage()
  const testimonials = t('trust.testimonials')

  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-akran-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('trust.subtitle')}
          </p>
        </div>

        {/* Security Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* KVKK / GDPR */}
          <div className="bg-white rounded-2xl p-8 border border-akran-100 hover:border-akran-300 transition">
            <div className="text-akran-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('trust.compliance')}
            </h3>
            <p className="text-gray-600">
              We are fully compliant with KVKK and GDPR regulations to protect your data and ensure privacy.
            </p>
          </div>

          {/* SSL & Security */}
          <div className="bg-white rounded-2xl p-8 border border-akran-100 hover:border-akran-300 transition">
            <div className="text-akran-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('trust.security')}
            </h3>
            <p className="text-gray-600">
              Enterprise-grade SSL encryption and cloud-based security infrastructure for maximum protection.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-akran-100">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-600 font-semibold">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Wall */}
        <div className="bg-white rounded-2xl p-12 border border-akran-100">
          <h4 className="text-center text-gray-600 font-semibold mb-8">
            Trusted by leading companies
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 opacity-50">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-lg h-16 flex items-center justify-center"
              >
                <span className="text-gray-400 text-sm">Logo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
