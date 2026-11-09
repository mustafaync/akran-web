'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function Blog() {
  const { language } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      titleEn: '10 Ways to Reduce No-Shows',
      titleTr: 'Randevuları Boş Geçişini Azaltmanın 10 Yolu',
      descriptionEn: 'Learn proven strategies to reduce appointment no-shows and improve your business efficiency.',
      descriptionTr: 'Randevu boş geçişlerini azaltmak ve işletme verimliliğini iyileştirmek için kanıtlanmış stratejileri öğrenin.',
      date: 'January 10, 2024',
      author: 'AKRAN Team',
    },
    {
      id: 2,
      titleEn: 'The Future of Appointment Scheduling',
      titleTr: 'Randevu Planlamanın Geleceği',
      descriptionEn: 'Discover how AI and automation are transforming the appointment scheduling industry.',
      descriptionTr: 'AI ve otomasyonun randevu planlama endüstrisini nasıl dönüştürdüğünü keşfedin.',
      date: 'January 5, 2024',
      author: 'AKRAN Team',
    },
    {
      id: 3,
      titleEn: 'Customer Success Story: Hair Salon Growth',
      titleTr: 'Müşteri Başarı Hikayesi: Kuaför Salonu Büyümesi',
      descriptionEn: 'See how a local hair salon increased their bookings by 40% using AKRAN.',
      descriptionTr: 'Yerel bir kuaför salonunun AKRAN kullanarak rezervasyonlarını %40 oranında nasıl artırdığını görün.',
      date: 'December 28, 2023',
      author: 'AKRAN Team',
    },
  ]

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Tips, insights, and stories from the AKRAN community'
              : 'AKRAN topluluğundan ipuçları, bilgiler ve hikayeler'}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-akran-300 hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {language === 'en' ? post.titleEn : post.titleTr}
                </h2>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? post.descriptionEn : post.descriptionTr}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-akran-600 font-semibold hover:text-akran-700 transition"
                >
                  {language === 'en' ? 'Read More →' : 'Devamını Oku →'}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
