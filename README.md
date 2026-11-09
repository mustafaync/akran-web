# AKRAN - Smart Appointment Management SaaS

A modern, production-ready SaaS website for AKRAN built with Next.js and Tailwind CSS.

## Overview

AKRAN is a smart, easy appointment management platform for businesses including barbers, salons, dental clinics, cafes, and consulting firms. This is a premium, Apple-inspired SaaS landing page with full bilingual support (English/Turkish).

## Features

- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Bilingual Support** - English and Turkish language switcher
- ✅ **Modern Components** - Reusable React components
- ✅ **Premium Design** - Apple-style minimal aesthetic with green theme
- ✅ **Full Pages**:
  - Landing page with hero, features, pricing, and trust sections
  - Blog page with sample posts
  - Help & Support center with FAQ and contact form
- ✅ **Interactive Elements**:
  - Live chat widget
  - Cookie consent banner
  - Newsletter signup
  - Language switcher in navbar
- ✅ **SEO Optimized** - Metadata, proper HTML structure

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: System fonts (Inter-like)

## Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with language provider
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── blog/
│   │   └── page.tsx        # Blog listing
│   └── support/
│       └── page.tsx        # Support & Help center
├── components/
│   ├── navbar.tsx          # Navigation with language switcher
│   ├── hero.tsx            # Hero section
│   ├── features.tsx        # Features grid
│   ├── how-it-works.tsx    # 3-step process
│   ├── pricing.tsx         # Pricing plans
│   ├── trust.tsx           # Trust & security section
│   ├── cta.tsx             # Call-to-action
│   ├── newsletter.tsx      # Newsletter signup
│   ├── footer.tsx          # Footer with links & social
│   ├── logo.tsx            # AKRAN logo SVG component
│   ├── cookie-consent.tsx  # Cookie banner
│   └── live-chat.tsx       # Live chat widget
└── lib/
    └── language-context.tsx # i18n context with translations
```

## Design Specifications

- **Colors**: White background with green primary color (#22c55e, #16a34a)
- **Border Radius**: Soft corners (rounded-xl, rounded-2xl)
- **Typography**: Clean, modern system fonts
- **Animations**: Subtle hover effects and transitions
- **Tone**: Startup, premium, trustworthy

## Content Management

All content is managed through the `language-context.tsx` file with full Turkish and English translations including:
- Navigation items
- Section titles and descriptions
- Feature descriptions
- Pricing plan names
- Trust section content
- Newsletter signup

## Key Components

### Logo (`logo.tsx`)
SVG-based AR monogram with checkmark emerging from R, implemented as a reusable React component.

### Navbar (`navbar.tsx`)
Sticky navbar with:
- Logo and brand name
- Menu items with smooth links
- Language switcher (EN/TR)
- Blur backdrop effect

### Hero (`hero.tsx`)
Minimal, centered hero section with:
- Large AKRAN title
- Subtitle
- 5-star rating with review count
- User count
- Logo wall

### Features (`features.tsx`)
11 features displayed as cards with:
- Icons
- Titles
- Descriptions
- Hover effects

### Pricing (`pricing.tsx`)
3-tier pricing structure with:
- Monthly/Yearly toggle
- Feature lists per plan
- "Coming Soon" pricing message
- Highlighted middle plan

### Trust (`trust.tsx`)
Trust-building section with:
- KVKK/GDPR compliance badge
- SSL & security information
- Customer testimonials
- Logo wall

### Additional Features
- **Live Chat**: Functional chat widget in bottom-left
- **Newsletter**: Email signup with form submission
- **Cookie Consent**: Smart cookie banner with localStorage
- **Footer**: Links, legal info, and social media icons

## Analytics Ready

The structure supports easy integration with:
- Google Analytics (GA4)
- Meta Pixel
- Custom event tracking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2024 AKRAN
