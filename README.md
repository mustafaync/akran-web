# AkranRandevu

İşletmeler için online randevu yönetim platformu **AKRAN**'ın tanıtım web sitesi. Berber, kuaför, diş kliniği, kafe ve danışmanlık firması gibi randevuyla çalışan işletmelere yönelik bir SaaS ürününün ön yüzü olarak tasarlandı.

> Bitirme projesi — Mustafa

## Özellikler

- **Ana sayfa:** Hero, özellikler, nasıl çalışır (3 adım), fiyatlandırma, güvenlik ve güven bölümü, CTA, bülten kaydı ve footer
- **Blog sayfası** (`/blog`)
- **Yardım ve destek merkezi** (`/support`): SSS ve iletişim sekmeleri
- **Türkçe / İngilizce dil desteği:** Navbar'daki TR / EN butonlarıyla anlık dil değişimi
- **Canlı destek penceresi:** Sağ altta açılan sohbet kutusu (demo amaçlı, gerçek bir sunucuya bağlı değil)
- **Çerez onayı:** Kullanıcının tercihi `localStorage`'da saklanır
- **Duyarlı tasarım:** Mobil, tablet ve masaüstünde düzgün görünür

## Kullanılan Teknolojiler

| Teknoloji | Kullanım amacı |
|---|---|
| [Next.js 14](https://nextjs.org/) (App Router) | Sayfa yapısı ve yönlendirme |
| React 18 | Arayüz bileşenleri |
| TypeScript | Tip güvenliği |
| Tailwind CSS | Stil ve duyarlı tasarım |
| ESLint | Kod kalitesi kontrolü |

## Kurulum ve Çalıştırma

Bilgisayarda [Node.js](https://nodejs.org/) (18 veya üzeri) kurulu olmalıdır.

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Ardından tarayıcıda `http://localhost:3000` adresini açın.

Üretim sürümü için:

```bash
npm run build
npm start
```

## Proje Yapısı

```
src/
├── app/
│   ├── layout.tsx            # Ana şablon, dil sağlayıcısı burada sarılır
│   ├── page.tsx              # Ana sayfa (bileşenleri sırayla dizer)
│   ├── globals.css           # Genel stiller
│   ├── blog/page.tsx         # Blog sayfası
│   └── support/page.tsx      # Yardım ve destek merkezi
├── components/
│   ├── navbar.tsx            # Üst menü, logo ve dil değiştirici
│   ├── hero.tsx              # Giriş bölümü (AKRAN akrostişli başlık)
│   ├── features.tsx          # Özellik kartları
│   ├── how-it-works.tsx      # 3 adımda nasıl çalışır
│   ├── pricing.tsx           # Fiyat planları
│   ├── trust.tsx             # KVKK/GDPR, güvenlik ve yorumlar
│   ├── cta.tsx               # Harekete geçirici bölüm
│   ├── newsletter.tsx        # Bülten kayıt formu
│   ├── footer.tsx            # Alt bilgi ve bağlantılar
│   ├── cookie-consent.tsx    # Çerez onay bandı
│   └── live-chat.tsx         # Canlı destek penceresi
└── lib/
    └── language-context.tsx  # TR/EN çevirileri ve dil durumu (React Context)
public/
└── images/logo1.png          # Logo
```

## Çoklu Dil Desteği Nasıl Çalışıyor?

Tüm metinler `src/lib/language-context.tsx` dosyasında `tr` ve `en` olarak iki nesnede tutulur. `LanguageProvider`, seçili dili React Context ile bütün sayfaya dağıtır. Bileşenler `useLanguage()` hook'u ile hem seçili dile hem de `t('hero.subtitle')` gibi çağrılarla çeviri fonksiyonuna erişir. Yeni bir metin eklemek için iki dildeki karşılığını bu dosyaya yazmak yeterlidir.

## Tasarım

- Beyaz zemin üzerinde yeşil/lime vurgu renkleri (Tailwind'de özel `akran` renk paleti tanımlı)
- Yumuşak köşeler (`rounded-xl`, `rounded-2xl`) ve sade, modern bir görünüm
- Hover efektleri ve hafif geçiş animasyonları

## Geliştirilebilecek Yönler

- Randevu alma ve işletme paneli için backend (ör. veritabanı + API)
- Canlı destek ve bülten formunun gerçek bir servise bağlanması
- Kullanıcı girişi ve hesap yönetimi

## Geliştirme Sürecine Dair Not

Bu projenin geliştirilmesinde kod yazımı ve dokümantasyon aşamalarında yapay zekâ destekli araçlardan yardım alınmıştır.
