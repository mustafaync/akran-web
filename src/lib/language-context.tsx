'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type Language = 'en' | 'tr'

const translations = {
  en: {
    // Navigation
    nav: {
      solutions: 'Solutions',
      security: 'Security',
      pricing: 'Pricing',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contact',
    },
    // Hero
    hero: {
      title: 'Smart. Easy. Appointment. Now. In Your Network.',
      subtitle: 'Your business\'s digital heart beats with AKRAN. End conflicts, take efficiency to the cloud.',
      users: 'Trusted by 10,000+ businesses',
    },
    // Features
    features: {
      title: 'Powerful Features',
      subtitle: 'Everything you need to manage appointments effortlessly',
      items: {
        booking: {
          title: 'Online Appointment Booking',
          description: 'Allow clients to book appointments anytime, anywhere',
        },
        calendar: {
          title: 'Smart Calendar',
          description: 'Intelligent scheduling that optimizes your time',
        },
        conflict: {
          title: 'Conflict Prevention',
          description: 'Automatic detection and prevention of double bookings',
        },
        reminders: {
          title: 'SMS & Email Reminders',
          description: 'Automated notifications to reduce no-shows',
        },
        payments: {
          title: 'Online Payments',
          description: 'Secure payment processing built-in',
        },
        staff: {
          title: 'Multi-Staff Support',
          description: 'Manage multiple employees and their schedules',
        },
        branches: {
          title: 'Multi-Branch Support',
          description: 'Control multiple locations from one dashboard',
        },
        mobile: {
          title: 'Mobile Responsive',
          description: 'Fully optimized for all devices',
        },
        admin: {
          title: 'Admin Panel',
          description: 'Complete control over your business settings',
        },
        reporting: {
          title: 'Reporting & Analytics',
          description: 'Detailed insights into your business metrics',
        },
        api: {
          title: 'API & Integrations',
          description: 'Connect with your favorite tools and platforms',
        },
      },
    },
    // How it works
    howitworks: {
      title: 'How It Works',
      subtitle: 'Get started in 3 simple steps',
      steps: [
        {
          title: 'Sign Up',
          description: 'Create your account and set up your business profile in minutes',
        },
        {
          title: 'Customize Settings',
          description: 'Configure your services, staff, and availability',
        },
        {
          title: 'Start Booking',
          description: 'Begin accepting appointments from your customers',
        },
      ],
    },
    // Pricing
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that works best for you',
      toggle: 'Yearly',
      description: 'Our pricing is currently being updated. Coming soon.',
      plans: [
        {
          name: 'Starter',
          features: [
            'Up to 1 staff member',
            'Basic appointment management',
            'Email reminders',
            'Mobile app access',
          ],
        },
        {
          name: 'Professional',
          features: [
            'Up to 5 staff members',
            'Advanced scheduling',
            'SMS & Email reminders',
            'Online payments',
            'Analytics dashboard',
          ],
        },
        {
          name: 'Enterprise',
          features: [
            'Unlimited staff members',
            'Multi-branch management',
            'Custom integrations',
            'Priority support',
            'Advanced reporting',
          ],
        },
      ],
    },
    // Trust
    trust: {
      title: 'Trusted by Industry Leaders',
      subtitle: 'Your data is secure with enterprise-grade security',
      compliance: 'KVKK & GDPR Compliant',
      security: 'SSL & Cloud Security',
      testimonials: [
        {
          text: 'AKRAN transformed how we manage appointments. Highly recommended!',
          author: 'Barber Studio Owner',
        },
        {
          text: 'The easiest solution for our dental clinic. Patients love it!',
          author: 'Dental Clinic Manager',
        },
        {
          text: 'Professional, reliable, and affordable. Best decision we made.',
          author: 'Hair Salon Director',
        },
      ],
    },
    // CTA
    cta: {
      primary: 'Start Your Free Trial Today',
      secondary: 'See it in action',
      description: 'Join thousands of businesses already using AKRAN',
    },
    // Newsletter
    newsletter: {
      title: 'Stay Updated',
      subtitle: 'Get the latest news and updates delivered to your inbox',
      placeholder: 'Enter your email',
      button: 'Subscribe',
    },
    // Footer
    footer: {
      about: 'About Us',
      contact: 'Contact',
      kvkk: 'KVKK / Privacy',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved',
    },
  },
  tr: {
    // Navigation
    nav: {
      solutions: 'Çözümler',
      security: 'Güvenlik',
      pricing: 'Fiyatlandırma',
      faq: 'S.S.S',
      blog: 'Blog',
      contact: 'İletişim',
    },
    // Hero
    hero: {
      title: 'Akıllı. Kolay. Randevu. Artık. Network\'ünüzde.',
      subtitle: 'İşletmenizin dijital kalbi AKRAN ile atar. Çakışmaları bitirin, verimliliği bulutların üzerine taşıyın.',
      users: '10.000+ işletme tarafından güvenilir',
    },
    // Features
    features: {
      title: 'Güçlü Özellikler',
      subtitle: 'Randevuları zahmetsizce yönetmek için ihtiyacınız olan her şey',
      items: {
        booking: {
          title: 'Çevrimiçi Randevu Rezervasyonu',
          description: 'Müşterilerin her zaman ve her yerden randevu almalarına izin verin',
        },
        calendar: {
          title: 'Akıllı Takvim',
          description: 'Saatinizi optimize eden akıllı planlama',
        },
        conflict: {
          title: 'Çakışma Önleme',
          description: 'Otomatik çift rezervasyon algılama ve önleme',
        },
        reminders: {
          title: 'SMS ve E-posta Hatırlatmaları',
          description: 'Otomatik bildirimler ile boş geçişleri azaltın',
        },
        payments: {
          title: 'Çevrimiçi Ödemeler',
          description: 'Yerleşik güvenli ödeme işleme',
        },
        staff: {
          title: 'Çok Personelli Destek',
          description: 'Birden fazla çalışanı ve takvimlerini yönetin',
        },
        branches: {
          title: 'Çok Şubeli Destek',
          description: 'Tek panelden birden fazla lokasyonu kontrol edin',
        },
        mobile: {
          title: 'Mobil Uyumlu',
          description: 'Tüm cihazlar için tam olarak optimize edilmiş',
        },
        admin: {
          title: 'Yönetici Paneli',
          description: 'İşletme ayarlarınız üzerinde tam kontrol',
        },
        reporting: {
          title: 'Raporlama ve Analitikler',
          description: 'İşletme metriklerinize ayrıntılı öngörüler',
        },
        api: {
          title: 'API ve Entegrasyonlar',
          description: 'Favori araçlarınız ve platformlarınızla bağlanın',
        },
      },
    },
    // How it works
    howitworks: {
      title: 'Nasıl Çalışır',
      subtitle: '3 basit adımda başlayın',
      steps: [
        {
          title: 'Kaydolun',
          description: 'Hesabınızı oluşturun ve işletme profilinizi dakikalar içinde ayarlayın',
        },
        {
          title: 'Ayarları Özelleştirin',
          description: 'Hizmetlerinizi, personelini ve uygunluğunuzu yapılandırın',
        },
        {
          title: 'Randevu Almaya Başlayın',
          description: 'Müşterilerinizden randevu almaya başlayın',
        },
      ],
    },
    // Pricing
    pricing: {
      title: 'Basit, Şeffaf Fiyatlandırma',
      subtitle: 'Sizin için uygun olan planı seçin',
      toggle: 'Yıllık',
      description: 'Fiyatlandırmamız şu anda güncellenmektedir. Yakında geliyor.',
      plans: [
        {
          name: 'Başlangıç',
          features: [
            '1 personele kadar',
            'Temel randevu yönetimi',
            'E-posta hatırlatmaları',
            'Mobil uygulama erişimi',
          ],
        },
        {
          name: 'Profesyonel',
          features: [
            '5 personele kadar',
            'Gelişmiş planlama',
            'SMS ve E-posta hatırlatmaları',
            'Çevrimiçi ödemeler',
            'Analitik paneli',
          ],
        },
        {
          name: 'Kurumsal',
          features: [
            'Sınırsız personel',
            'Çok şubeli yönetim',
            'Özel entegrasyonlar',
            'Öncelikli destek',
            'Gelişmiş raporlama',
          ],
        },
      ],
    },
    // Trust
    trust: {
      title: 'Sektör Liderleri Tarafından Güvenilir',
      subtitle: 'Verileriniz kurumsal düzeyde güvenlik ile güvenledir',
      compliance: 'KVKK & GDPR Uyumlu',
      security: 'SSL & Bulut Güvenliği',
      testimonials: [
        {
          text: 'AKRAN randevu yönetim şeklimizi değiştirdi. Kesinlikle tavsiye ederim!',
          author: 'Berber Salonu Sahibi',
        },
        {
          text: 'Diş kliniğimiz için en kolay çözüm. Hastalar bunu seviyor!',
          author: 'Diş Kliniği Müdürü',
        },
        {
          text: 'Profesyonel, güvenilir ve uygun fiyatlı. En iyi kararlarımızdan biri.',
          author: 'Kuaför Salonu Direktörü',
        },
      ],
    },
    // CTA
    cta: {
      primary: 'Bugün Ücretsiz Deneme Başlatın',
      secondary: 'Aksiyonda görün',
      description: 'AKRAN kullanan binlerce işletmeye katılın',
    },
    // Newsletter
    newsletter: {
      title: 'Güncel Kalın',
      subtitle: 'En son haber ve güncellemeleri e-postanıza alın',
      placeholder: 'E-posta adresinizi girin',
      button: 'Abone Ol',
    },
    // Footer
    footer: {
      about: 'Hakkımızda',
      contact: 'İletişim',
      kvkk: 'KVKK / Gizlilik',
      privacy: 'Gizlilik Politikası',
      terms: 'Hizmet Şartları',
      rights: 'Tüm hakları saklıdır',
    },
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
