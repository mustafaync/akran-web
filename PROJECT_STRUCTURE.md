# AKRAN Project Directory Structure

```
akran-web/
│
├── 📄 Configuration Files
│   ├── package.json              # npm dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── tailwind.config.ts        # Tailwind CSS setup
│   ├── postcss.config.js         # PostCSS configuration
│   ├── next.config.js            # Next.js configuration
│   ├── .eslintrc.json            # ESLint rules
│   └── .gitignore                # Git ignore patterns
│
├── 📁 src/
│   │
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── layout.tsx            # Root layout with LanguageProvider
│   │   ├── page.tsx              # Landing page (/)
│   │   ├── globals.css           # Global styles and animations
│   │   │
│   │   ├── 📁 blog/
│   │   │   └── page.tsx          # Blog page (/blog)
│   │   │
│   │   └── 📁 support/
│   │       └── page.tsx          # Support/Help center (/support)
│   │
│   ├── 📁 components/            # Reusable React components
│   │   ├── navbar.tsx            # Navigation bar (sticky, language switcher)
│   │   ├── hero.tsx              # Hero section (title, subtitle, social proof)
│   │   ├── features.tsx          # 11 features grid with icons
│   │   ├── how-it-works.tsx      # 3-step process section
│   │   ├── pricing.tsx           # 3-tier pricing plans
│   │   ├── trust.tsx             # Trust & testimonials section
│   │   ├── cta.tsx               # Call-to-action section
│   │   ├── newsletter.tsx        # Newsletter signup form
│   │   ├── footer.tsx            # Footer with links & social media
│   │   ├── logo.tsx              # AKRAN SVG logo component
│   │   ├── live-chat.tsx         # Live chat widget
│   │   └── cookie-consent.tsx    # Cookie consent banner
│   │
│   └── 📁 lib/
│       └── language-context.tsx  # i18n context (EN/TR translations)
│
├── 📁 public/                    # Static assets (images, logos, etc.)
│
├── 📁 .vscode/                   # VS Code settings
│   ├── settings.json
│   └── tasks.json
│
├── 📁 .next/                     # Next.js build output (auto-generated)
│
├── 📚 Documentation Files
│   ├── README.md                 # Project overview and setup
│   ├── BUILD_DOCUMENTATION.md    # Complete build documentation
│   ├── CUSTOMIZATION_GUIDE.md    # How to customize the site
│   ├── COMPONENTS_REFERENCE.md   # Component documentation
│   └── QUICK_START.md            # Quick start checklist
│
└── 🚀 Ready to Deploy!
```

---

## 📊 File Statistics

### Source Code Files
```
Total Components:     12
Total Pages:          3
Total Utilities:      1
Configuration Files:  7
Documentation Files:  5
```

### Component Breakdown
```
Layout/Navigation:    navbar.tsx, logo.tsx
Hero & Content:       hero.tsx, features.tsx, how-it-works.tsx
Business Sections:    pricing.tsx, trust.tsx
CTA & Engagement:     cta.tsx, newsletter.tsx, footer.tsx
Interactive:          live-chat.tsx, cookie-consent.tsx
Context/Utilities:    language-context.tsx
```

### Page Breakdown
```
Landing (/):          Main website with all sections
Blog (/blog):         Blog post listing page
Support (/support):   FAQ and contact support page
```

---

## 🎯 File Purposes

### Critical Files for Running
1. `package.json` - Must have for dependencies
2. `tsconfig.json` - TypeScript compilation
3. `tailwind.config.ts` - Styling configuration
4. `src/app/layout.tsx` - Root layout
5. `src/app/page.tsx` - Landing page

### Component Files (Can be customized)
- All files in `src/components/` are customizable
- All files in `src/app/` can be modified
- `src/lib/language-context.tsx` contains all text/translations

### Configuration Files (Usually don't need changes)
- `next.config.js`
- `postcss.config.js`
- `.eslintrc.json`

---

## 📝 File Sizes (Approximate)

```
language-context.tsx    ~3KB    (i18n with full translations)
navbar.tsx              ~2KB    (navigation component)
hero.tsx                ~1.5KB  (hero section)
features.tsx            ~3KB    (features grid)
how-it-works.tsx        ~2.5KB  (3-step process)
pricing.tsx             ~2.5KB  (pricing section)
trust.tsx               ~3KB    (trust & testimonials)
cta.tsx                 ~1.5KB  (call-to-action)
newsletter.tsx          ~1.5KB  (newsletter signup)
footer.tsx              ~3KB    (footer section)
logo.tsx                ~1KB    (SVG logo)
live-chat.tsx           ~2.5KB  (live chat widget)
cookie-consent.tsx      ~1.5KB  (cookie banner)
page.tsx (home)         ~1KB    (landing page)
page.tsx (blog)         ~2KB    (blog listing)
page.tsx (support)      ~3.5KB  (support page)
layout.tsx              ~0.5KB  (root layout)
globals.css             ~1KB    (global styles)
```

---

## 🔀 Import Paths

### Using Path Aliases
```typescript
// ✅ Correct (using @/)
import { AkranLogo } from '@/components/logo'
import { useLanguage } from '@/lib/language-context'

// ❌ Avoid (using relative paths)
import { AkranLogo } from '../components/logo'
```

### Available Path Aliases
- `@/app/*` - App files
- `@/components/*` - Components
- `@/lib/*` - Utilities and contexts

---

## 🔄 File Relationships

```
layout.tsx
  └── Wraps with LanguageProvider
      └── language-context.tsx
          ├── navbar.tsx
          ├── hero.tsx
          ├── features.tsx
          ├── how-it-works.tsx
          ├── pricing.tsx
          ├── trust.tsx
          ├── cta.tsx
          ├── newsletter.tsx
          ├── footer.tsx
          ├── live-chat.tsx
          └── cookie-consent.tsx

blog/page.tsx
  └── Uses useLanguage hook
      └── language-context.tsx

support/page.tsx
  └── Uses useLanguage hook
      └── language-context.tsx
```

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Development Dependencies
```json
{
  "@types/node": "^20.0.0",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0",
  "tailwindcss": "^3.4.0",
  "typescript": "^5.0.0",
  "eslint": "^8.0.0",
  "eslint-config-next": "^14.0.0"
}
```

---

## 🎨 Style Files

### CSS Files
- `src/app/globals.css` - Global styles, animations, scrollbar styling

### Tailwind Configuration
- `tailwind.config.ts` - Color palette, fonts, custom utilities

### PostCSS
- `postcss.config.js` - Tailwind and Autoprefixer integration

---

## 🔧 Build System

### Development Build
```bash
npm run dev
# Runs: next dev
# Output: Development server on port 3000
```

### Production Build
```bash
npm run build
# Creates optimized build in .next/
```

### Production Serve
```bash
npm start
# Runs: next start
# Serves production build
```

### Linting
```bash
npm run lint
# Runs ESLint checks
```

---

## 📂 When to Add Files

### Add Components
→ Create in `src/components/ComponentName.tsx`

### Add Pages
→ Create in `src/app/route/page.tsx`

### Add Utilities
→ Create in `src/lib/utility.ts`

### Add Images/Assets
→ Place in `public/` folder

### Add Styles
→ Use Tailwind classes or add to `globals.css`

### Add API Routes
→ Create in `src/app/api/route.ts`

---

## ✨ Key Features by File

### Bilingual Support
`src/lib/language-context.tsx` - Full EN/TR translations

### Responsive Design
`tailwind.config.ts` + `globals.css` - Mobile-first

### Navigation
`src/components/navbar.tsx` - Sticky header with switcher

### Brand Identity
`src/components/logo.tsx` - Custom SVG logo

### Interactivity
- `src/components/live-chat.tsx` - Chat widget
- `src/components/newsletter.tsx` - Email signup
- `src/components/cookie-consent.tsx` - Cookie banner

### Content Management
- `src/lib/language-context.tsx` - All text content
- Individual pages for Blog and Support

---

## 🚀 Deployment Files

### Vercel
- No special config needed
- `next.config.js` handles defaults

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`

### Docker
- Node.js 18+ required
- Run: `npm install && npm run build && npm start`

---

## 📊 Code Quality

All files include:
- ✅ TypeScript types
- ✅ ESLint compliance
- ✅ Component documentation
- ✅ Clean formatting
- ✅ Accessibility features

---

**Project structure is clean, organized, and production-ready! 🎯**
