'use client'

import { useLanguage } from '@/lib/language-context'

export function Hero() {
  const { language, t } = useLanguage()

  return (
    <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title with Color Accent */}
        <h1 className="text-7xl sm:text-8xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
          {language === 'en' ? (
            <>
              <span className="text-lime-400">S</span>mart.{' '}
              <span className="text-lime-400">E</span>asy.{' '}
              <br />
              <span className="text-lime-400">A</span>ppointment.{' '}
              <span className="text-lime-400">N</span>ow.{' '}
              <br />
              In Your <span className="text-lime-400">N</span>etwork.
            </>
          ) : (
            <>
              <span className="text-lime-400">A</span>kıllı.{' '}
              <span className="text-lime-400">K</span>olay.{' '}
              <br />
              <span className="text-lime-400">R</span>andevu.{' '}
              <span className="text-lime-400">A</span>rtık.{' '}
              <br />
              <span className="text-lime-400">N</span>etwork'ünüzde.
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  )
}
