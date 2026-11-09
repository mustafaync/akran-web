'use client'

import { useLanguage } from '@/lib/language-context'
import { useState } from 'react'

export function Pricing() {
  const { t } = useLanguage()
  const [isYearly] = useState(false)
  const plans = t('pricing.plans')

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Toggle - Display only, no functionality needed */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button className="text-gray-600 font-medium">
              Monthly
            </button>
            <div className="relative inline-flex items-center bg-gray-200 rounded-full p-1 w-16">
              <div className="w-7 h-7 bg-white rounded-full shadow-md" />
            </div>
            <button className="text-gray-600 font-medium">
              {t('pricing.toggle')}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan: any, index: number) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border transition duration-300 ${
                index === 1
                  ? 'border-akran-500 shadow-2xl ring-2 ring-akran-100 md:scale-105'
                  : 'border-gray-200 hover:border-akran-300'
              } ${index === 1 ? 'bg-gradient-to-br from-akran-50 to-white' : 'bg-white'}`}
            >
              {/* Badge for middle plan */}
              {index === 1 && (
                <div className="mb-4 inline-block bg-akran-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t('pricing.plans')[1].name === 'Professional' ? 'Popular' : 'Popüler'}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Price Section */}
              <div className="mb-6 py-4 border-y border-gray-200">
                <p className="text-gray-600 text-center text-lg font-medium">
                  {t('pricing.description')}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-akran-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition duration-300 ${
                  index === 1
                    ? 'bg-gradient-to-r from-akran-500 to-akran-600 text-white hover:shadow-lg hover:shadow-akran-500/50'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
