'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { useState } from 'react'

export default function Support() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('faq')

  const faqItems = [
    {
      questionEn: 'How do I get started?',
      questionTr: 'Nasıl başlayabilirim?',
      answerEn: 'Simply sign up for an account, configure your business settings, and you\'re ready to start accepting appointments.',
      answerTr: 'Sadece bir hesap oluşturun, işletme ayarlarınızı yapılandırın ve randevu almaya başlamaya hazırsınız.',
    },
    {
      questionEn: 'What payment methods do you accept?',
      questionTr: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answerEn: 'We accept all major credit cards, bank transfers, and digital wallets. Payment processing is secure and PCI compliant.',
      answerTr: 'Tüm ana kredi kartlarını, banka transferlerini ve dijital cüzdanları kabul ederiz. Ödeme işleme güvenli ve PCI uyumludur.',
    },
    {
      questionEn: 'Can I integrate with other tools?',
      questionTr: 'Diğer araçlarla entegre edebilir miyim?',
      answerEn: 'Yes! AKRAN supports integrations with popular CRM, calendar, and communication tools via API.',
      answerTr: 'Evet! AKRAN, popüler CRM, takvim ve iletişim araçlarıyla API aracılığıyla entegrasyonu destekler.',
    },
    {
      questionEn: 'Is my data secure?',
      questionTr: 'Verilerim güvenli mi?',
      answerEn: 'Absolutely. We use enterprise-grade SSL encryption, regular security audits, and comply with KVKK and GDPR regulations.',
      answerTr: 'Elbette. Kurumsal düzeyde SSL şifrelemesi, düzenli güvenlik denetimleri kullanıyor ve KVKK ve GDPR uyumlu oluyoruz.',
    },
  ]

  const contactInfo = [
    {
      titleEn: 'Email Support',
      titleTr: 'E-posta Desteği',
      value: 'support@akran.com',
    },
    {
      titleEn: 'Live Chat',
      titleTr: 'Canlı Sohbet',
      value: 'Available 24/7',
    },
    {
      titleEn: 'Phone',
      titleTr: 'Telefon',
      value: '+90 (212) 555-0000',
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Help & Support' : 'Yardım & Destek'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en'
              ? 'We\'re here to help you succeed'
              : 'Başarılı olmanıza yardımcı olmak için buradayız'}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex gap-4 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === 'faq'
                  ? 'border-akran-600 text-akran-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {language === 'en' ? 'FAQ' : 'S.S.S'}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === 'contact'
                  ? 'border-akran-600 text-akran-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {language === 'en' ? 'Contact' : 'İletişim'}
            </button>
          </div>

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'en' ? item.questionEn : item.questionTr}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' ? item.answerEn : item.answerTr}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'en' ? info.titleEn : info.titleTr}
                    </h4>
                    <p className="text-akran-600 font-semibold">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Name' : 'Ad'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-akran-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Email' : 'E-posta'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-akran-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Message' : 'Mesaj'}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-akran-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-akran-500 to-akran-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-akran-500/50 transition"
                >
                  {language === 'en' ? 'Send Message' : 'Mesaj Gönder'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
