# AKRAN Components Reference

## 📚 Complete Component Documentation

### Navigation & Layout

#### `navbar.tsx`
**Purpose**: Sticky navigation bar with logo, menu, and language switcher

**Props**: None (uses context)

**Features**:
- Fixed positioning with backdrop blur
- Language switcher (EN/TR)
- Menu items with smooth links
- Responsive on mobile

**Imports Required**:
```typescript
import { useLanguage } from '@/lib/language-context'
import { AkranLogo } from './logo'
```

**Customization**:
- Add menu items by adding links
- Change sticky behavior: remove `fixed top-0`
- Adjust colors: replace `akran-` classes

---

#### `logo.tsx`
**Purpose**: SVG-based AKRAN logo (AR monogram with checkmark)

**Returns**: SVG component

**Props**:
```typescript
{
  className?: string // Default: 'w-8 h-8'
}
```

**Usage**:
```typescript
<AkranLogo className="w-12 h-12" />
```

**Customization**:
- Modify SVG paths for different design
- Adjust colors: `#16a34a` (green) or `#000` (outline)
- Scale with `className` prop

---

### Hero & Content Sections

#### `hero.tsx`
**Purpose**: Landing page hero section with title, subtitle, social proof

**Props**: None

**Features**:
- 5-star rating display
- User count badge
- Logo wall (5 placeholders)
- Centered, minimal layout

**Customization**:
- Change text in `language-context.tsx`
- Replace logo placeholders with real images
- Adjust padding: `pt-32 pb-20`

---

#### `features.tsx`
**Purpose**: 11-feature grid with icons and descriptions

**Props**: None

**Features**:
- Icon + title + description cards
- Hover effects with scale
- Responsive grid (1 col mobile, 3 col desktop)
- Icons auto-mapped from feature data

**Feature Icons Included**:
- booking (calendar)
- calendar (chart)
- conflict (checkmark)
- reminders (bell)
- payments (credit card)
- staff (people)
- branches (folder)
- mobile (smartphone)
- admin (settings)
- reporting (analytics)
- api (link)

**Customization**:
- Add new feature icon in `featureIcons` object
- Add feature to translations
- Change grid columns: modify `grid md:grid-cols-2 lg:grid-cols-3`

---

#### `how-it-works.tsx`
**Purpose**: 3-step process section

**Props**: None

**Features**:
- Numbered steps with badges
- Visual connector lines (desktop)
- Step icons
- Responsive layout

**Customization**:
- Modify steps in language context (max 3)
- Change step icons in `stepIcons` array
- Adjust colors of badges: `from-akran-400 to-akran-600`

---

### Business Sections

#### `pricing.tsx`
**Purpose**: 3-tier pricing plans display

**Props**: None

**Features**:
- 3 pricing plans (Starter, Professional, Enterprise)
- Monthly/Yearly toggle (display only)
- Feature lists with checkmarks
- Highlighted middle plan
- "Coming Soon" pricing message

**Customization**:
- Update plans in language context
- Change plan names
- Modify features list
- Adjust highlight styling: `md:scale-105`

---

#### `trust.tsx`
**Purpose**: Trust building section with security, testimonials, logos

**Props**: None

**Features**:
- KVKK/GDPR compliance badge
- SSL & security explanation
- 3 customer testimonials
- Logo wall (5 placeholders)
- Star ratings on testimonials

**Customization**:
- Update testimonials in language context
- Add real logos to logo wall
- Change security descriptions
- Adjust grid layout

---

### Call-to-Action & Engagement

#### `cta.tsx`
**Purpose**: Primary call-to-action section

**Props**: None

**Features**:
- Gradient background
- Blur effect decorations
- White CTA button
- Responsive design

**Customization**:
- Change text in language context
- Modify button action: `onClick` handler
- Adjust gradient: `from-akran-500 via-akran-600 to-akran-700`

---

#### `newsletter.tsx`
**Purpose**: Email newsletter signup

**Props**: None

**Features**:
- Email input with validation
- Subscribe button
- Form submission handling
- State management for email

**Customization**:
- Add email service integration (Mailchimp, SendGrid)
- Change placeholder text in language context
- Modify button action in `handleSubmit`
- Add success message

**Example Integration** (Mailchimp):
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Call Mailchimp API
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
  setEmail('')
}
```

---

### Footer & Bottom Sections

#### `footer.tsx`
**Purpose**: Footer with links, social, copyright

**Props**: None

**Features**:
- Company info
- Quick links
- Legal links
- Social media icons (4 platforms)
- Dark theme styling

**Social Links**:
- Instagram
- X (Twitter)
- TikTok
- YouTube

**Customization**:
- Update social links: change `href` attributes
- Add/remove footer sections
- Change link labels
- Update copyright year

---

### Interactive Features

#### `live-chat.tsx`
**Purpose**: Floating live chat widget

**Props**: None

**Features**:
- Toggle button (bottom-left)
- Chat window with messages
- Message input
- Bot responses
- Responsive

**State Managed**:
- `showChat`: Toggle chat visibility
- `messages`: Message history
- `input`: Current message text

**Customization**:
- Connect to actual chat service (Firebase, Twilio)
- Change bot responses in `handleSend`
- Adjust position: change `bottom-4 left-4`
- Modify appearance: colors, size, positioning

**Integration Example** (Firebase):
```typescript
const handleSend = async () => {
  await sendMessageToFirebase(input)
  // Get AI response
  const response = await getAIResponse(input)
  setMessages([...messages, { type: 'bot', text: response }])
}
```

---

#### `cookie-consent.tsx`
**Purpose**: Cookie consent banner with localStorage

**Props**: None

**Features**:
- Smart display (only if not previously accepted)
- Accept/Decline buttons
- localStorage persistence
- Fixed positioning

**State Managed**:
- `show`: Display banner
- Reads from localStorage on mount

**Customization**:
- Change cookie message
- Add link to privacy policy
- Modify button actions
- Change positioning: `bottom-4 right-4`

**Connect to Analytics**:
```typescript
const handleAccept = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  // Initialize analytics
  window.gtag?.('consent', 'update', {
    'analytics_storage': 'granted'
  })
  setShow(false)
}
```

---

## 🎯 Page Components

#### `app/page.tsx` (Landing Page)
**Composition**:
```
Navbar
Hero
Features
HowItWorks
Pricing
Trust
CTA
Newsletter
Footer
CookieConsent
LiveChat
```

---

#### `app/blog/page.tsx` (Blog)
**Features**:
- Blog post listing
- Sample posts with metadata
- Read More links
- Bilingual content

**Customization**:
- Add posts to `blogPosts` array
- Create individual post pages (`[id]/page.tsx`)
- Add featured image to posts
- Implement pagination

---

#### `app/support/page.tsx` (Support)
**Features**:
- Tab switching (FAQ/Contact)
- FAQ Q&A pairs
- Contact form
- Contact information cards
- Bilingual interface

**Customization**:
- Update FAQ items
- Modify contact information
- Connect contact form to email service
- Add more tabs

---

## 🔐 Context & Utilities

#### `lib/language-context.tsx`
**Purpose**: Internationalization (i18n) context with translations

**Exports**:
- `LanguageProvider`: React context provider
- `useLanguage`: Hook to use language context

**Usage**:
```typescript
const { language, setLanguage, t } = useLanguage()

// Set language
setLanguage('tr')

// Translate text
const navText = t('nav.solutions')
```

**Translation Structure**:
```typescript
translations = {
  en: {
    nav: { /* English items */ },
    // ... all sections
  },
  tr: {
    nav: { /* Turkish items */ },
    // ... all sections
  }
}
```

**Customization**:
- Add new language: add to translations object
- Update translations: edit EN/TR sections
- Add new keys: follow existing pattern

---

## 🎨 Styling Reference

### Tailwind Classes Used

**Colors**:
- `bg-white` / `text-gray-900`
- `bg-akran-50` through `bg-akran-900`
- `text-akran-600` for links/accents

**Spacing**:
- `px-4 sm:px-6 lg:px-8` (responsive padding)
- `py-20` / `pb-20` / `pt-32` (vertical padding)
- `gap-4` / `gap-8` / `gap-12` (flex/grid gaps)

**Borders & Radius**:
- `rounded-lg` / `rounded-xl` / `rounded-2xl`
- `border border-gray-200` / `border-akran-100`

**Responsive**:
- `md:grid-cols-2` / `md:grid-cols-3`
- `sm:px-6` / `lg:px-8`
- `hidden md:flex` (responsive visibility)

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (`md:`)
- **Desktop**: > 1024px (`lg:`)

---

## 🚀 Performance Tips

1. **Images**: Use Next.js Image component
2. **Fonts**: System fonts (no external requests)
3. **Scripts**: Use `next/script` with strategy
4. **Optimization**: Already optimized with CSS
5. **Bundle**: Components are tree-shakeable

---

## ✅ Testing Components

```typescript
// Test translation system
const { t } = useLanguage()
expect(t('nav.solutions')).toBeDefined()

// Test responsive
// Check at 375px, 768px, 1024px

// Test interaction
fireEvent.click(languageSwitcher)
// Check language changed

// Test form
fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
fireEvent.click(submitButton)
```

---

**All components are production-ready and fully customizable! 🚀**
