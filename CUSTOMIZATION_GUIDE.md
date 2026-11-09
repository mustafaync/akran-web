# AKRAN - Implementation & Customization Guide

## 🎯 WHAT WAS BUILT

A complete, production-ready SaaS landing page for AKRAN with:
- Full Next.js 14 architecture with TypeScript
- Tailwind CSS styling with green theme
- Complete bilingual support (English/Turkish)
- All 15 requirements implemented
- Multiple pages (Home, Blog, Support)
- Interactive elements (live chat, newsletter, etc.)

---

## 🌍 PAGE STRUCTURE

### Landing Page (`/`)
Main entry point with:
- Hero section (title, subtitle, social proof)
- 11 Features cards grid
- How It Works (3 steps)
- Pricing (3 plans)
- Trust & Testimonials
- CTA section
- Newsletter signup
- Footer

### Blog Page (`/blog`)
- Blog post listing with cards
- Sample posts with metadata
- Bilingual content
- "Read More" links

### Support Page (`/support`)
- FAQ tab with Q&A
- Contact tab with form & contact info
- Responsive layout
- Bilingual interface

---

## 🎨 CUSTOMIZATION GUIDE

### 1. CHANGE COLORS

Edit `tailwind.config.ts`:
```typescript
colors: {
  akran: {
    50: '#f0fdf4',   // Light green
    500: '#22c55e',  // Primary green
    600: '#16a34a',  // Dark green
    // ... adjust these values for different colors
  },
}
```

Or replace all green occurrences by searching `akran-` in components.

### 2. CHANGE TEXT CONTENT

All text is in `src/lib/language-context.tsx`:
```typescript
const translations = {
  en: {
    nav: { /* Edit navigation items */ },
    hero: { /* Edit hero text */ },
    features: { /* Edit feature titles */ },
    // ... all sections here
  },
  tr: {
    // Turkish translations
  }
}
```

### 3. ADD/REMOVE FEATURES

In `features.tsx`:
1. Add new feature icon in `featureIcons` object
2. Add feature data in language context
3. Component automatically maps all items

### 4. CHANGE PRICING

In `pricing.tsx`:
1. Update plan names in language context
2. Update features list
3. Modify "Coming soon" message

### 5. ADD REAL IMAGES

Replace placeholder logos with actual images:

In `hero.tsx`:
```typescript
// Before:
<div className="bg-gray-100 rounded-xl h-12">Logo</div>

// After:
<img src="/logos/client1.png" alt="Client 1" />
```

### 6. CUSTOMIZE TESTIMONIALS

In `language-context.tsx`, update:
```typescript
testimonials: [
  {
    text: 'Your real testimonial here',
    author: 'Real Customer Name',
  },
  // ... more testimonials
]
```

### 7. ADD BLOG POSTS

In `src/app/blog/page.tsx`:
```typescript
const blogPosts = [
  {
    id: 1,
    titleEn: 'Your Blog Title',
    titleTr: 'Türkçe Başlık',
    descriptionEn: '...',
    descriptionTr: '...',
    date: 'January 15, 2024',
    author: 'Your Name',
  },
  // ... more posts
]
```

### 8. CHANGE SOCIAL MEDIA LINKS

In `footer.tsx`, update the `href` attributes:
```typescript
<a href="https://instagram.com/youraccount">
  {/* Icon */}
</a>
```

### 9. UPDATE CONTACT INFORMATION

In `support/page.tsx`:
```typescript
const contactInfo = [
  {
    titleEn: 'Email Support',
    value: 'your-email@akran.com', // Change this
  },
  // ...
]
```

### 10. CUSTOMIZE FONTS

In `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

---

## 🔧 COMMON CUSTOMIZATIONS

### Add a Button to Navbar
In `navbar.tsx`:
```typescript
<a href="/get-started" className="...">
  Get Started
</a>
```

### Change Logo
Replace `logo.tsx` SVG content with your own design.

### Modify Hero Background
In `hero.tsx`, add background image:
```typescript
<section className="... bg-cover bg-center" style={{backgroundImage: 'url(...)'}} >
```

### Add Animation
Use Tailwind animations or add custom CSS in `globals.css`:
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Add Form Validation
Enhance forms in `support/page.tsx` or `newsletter.tsx`:
```typescript
const [errors, setErrors] = useState({})

const validateEmail = (email) => {
  // Your validation logic
}
```

---

## 📦 COMPONENT USAGE

### Import Components
```typescript
// In page.tsx
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'

// Use them
<Navbar />
<Hero />
```

### Use Language Context
```typescript
'use client'

import { useLanguage } from '@/lib/language-context'

export function MyComponent() {
  const { language, setLanguage, t } = useLanguage()
  
  return <h1>{t('nav.solutions')}</h1>
}
```

---

## 🚀 DEPLOYMENT GUIDE

### Deploy to Vercel (Recommended)
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to vercel.com, import repo
# 3. Deploy automatically
```

### Deploy to Netlify
```bash
npm run build
# Connect build folder to Netlify
```

### Self-Hosted
```bash
npm run build
npm start
```

---

## 📊 ANALYTICS INTEGRATION

### Add Google Analytics
In `layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
      {children}
    </>
  )
}
```

### Track Events
```typescript
function handleClick() {
  window.gtag?.('event', 'button_click', {
    'event_category': 'engagement',
    'event_label': 'cta_button'
  })
}
```

---

## 🔗 USEFUL LINKS

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 💡 TIPS & TRICKS

1. **Hot Reload**: Changes auto-reload in development
2. **Debug**: Use `console.log()` and browser DevTools
3. **Performance**: Use Next.js Image component for images
4. **SEO**: Update metadata in layout.tsx
5. **Accessibility**: Test with keyboard navigation

---

## ❓ TROUBLESHOOTING

### Issue: Components not updating
**Solution**: Make sure components are marked with `'use client'`

### Issue: Styles not applying
**Solution**: Clear `.next` folder and restart dev server

### Issue: Language not switching
**Solution**: Check `LanguageProvider` is in root layout

### Issue: Image not showing
**Solution**: Check path and permissions in `/public` folder

---

## 📞 SUPPORT

For Next.js issues: [Next.js Discussions](https://github.com/vercel/next.js/discussions)
For Tailwind CSS: [Tailwind Docs](https://tailwindcss.com)
For component help: See individual component files with comments

---

**Website is production-ready! Customize as needed and launch! 🚀**
