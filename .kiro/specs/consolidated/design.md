# Design Document - Abon Ikan SAKO Landing Page

## Overview

This design document outlines the technical architecture and implementation approach for the Abon Ikan SAKO landing page. The application is a single-page marketing website built with Next.js 14+ (App Router), featuring server-side rendering for SEO optimization, responsive mobile-first design, and smooth animations using Framer Motion.

The landing page promotes a shredded fish product from Minahasa, targeting families, health-conscious individuals, and tourists. The design emphasizes authenticity, hygiene, and modern appetizing presentation through a vibrant visual system featuring deep coral, electric teal, and accent gold colors.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      app/layout.tsx                         │
│              (Root Layout + GoogleAnalytics)                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      app/page.tsx                           │
│                   (Section Composition)                     │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   Sections    │    │      UI       │    │    Layout     │
│  Components   │    │  Components   │    │  Components   │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Design System Layer                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   design-   │  │  tailwind.  │  │    globals.css      │  │
│  │  tokens.ts  │  │  config.ts  │  │  (CSS Variables)    │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 14+ (App Router) | SSR, routing, metadata |
| Styling | Tailwind CSS 3.4 | Utility-first CSS |
| Icons | Lucide React | Consistent iconography |
| Fonts | next/font/google | Optimized font loading (Poppins, Inter) |
| Animation | Framer Motion | Scroll reveal effects |
| Language | TypeScript (strict mode) | Type safety |
| Analytics | Google Analytics 4 | User behavior tracking |
| Testing | Jest + React Testing Library + fast-check | Unit, integration, property-based testing |

### Rendering Strategy

- **Server-Side Rendering (SSR)**: All page content is server-rendered for optimal SEO
- **Static Content**: Product data and site content stored in TypeScript constants
- **Client Components**: Only interactive elements (smooth scroll, animations, analytics) use client-side hydration

---

## Component Hierarchy

```
app/
├── layout.tsx              # Root layout with fonts, metadata, GoogleAnalytics
├── page.tsx                # Main landing page composition
└── globals.css             # Tailwind imports and custom styles

components/
├── analytics/
│   └── GoogleAnalytics.tsx # GA4 script loader
├── layout/
│   ├── Navbar.tsx          # Sticky navigation header
│   └── Footer.tsx          # Site footer with contact info
├── sections/
│   ├── HeroSection.tsx         # Hero with gradient background and CTA
│   ├── ValuePropositionGrid.tsx # Benefits grid with feature cards
│   ├── StoryFeatureBlock.tsx   # Our story section (dark theme)
│   ├── MakingProcessSection.tsx # Production process steps
│   ├── ProductVariants.tsx     # Product cards section
│   ├── CulturalBanner.tsx      # Full-width cultural banner
│   └── index.ts                # Barrel export
└── ui/
    ├── CTAButton.tsx       # Call-to-action button (primary/secondary/accent)
    ├── ProductCard.tsx     # Product variant card with hover effects
    ├── FeatureCard.tsx     # Value proposition card with gradient icon
    ├── ProcessStepCard.tsx # Making process step card
    ├── SectionTitle.tsx    # Consistent section headings
    └── index.ts            # Barrel export

lib/
├── analytics.ts            # GA4 tracking functions
├── design-tokens.ts        # Color and typography constants
└── useTrackSectionView.ts  # Section visibility tracking hook
```

---

## Component Interfaces

```typescript
// CTAButton - Gradient and scale effects
interface CTAButtonProps {
  href: string
  variant: 'primary' | 'secondary' | 'accent'
  children: React.ReactNode
  className?: string
  size?: 'default' | 'large'
}

// ProductCard - Enhanced with hover border accent
interface ProductCardProps {
  name: string
  description: string
  imageSrc: string
  imageAlt: string
}

// FeatureCard - Gradient icon backgrounds
interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: 'primary' | 'secondary' | 'accent'
}

// ProcessStepCard - Making process steps
interface ProcessStepCardProps {
  stepNumber: number
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

// SectionTitle - Consistent section headings
interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark'
}

// GoogleAnalytics
interface GoogleAnalyticsProps {
  measurementId: string
}
```

---

## Data Models

```typescript
// Navigation Link
interface NavLink {
  label: string
  href: string
}

// Product Variant
interface ProductVariant {
  id: string
  name: string
  description: string
  imageSrc: string
  imageAlt: string
}

// Value Proposition Item
interface ValueProposition {
  id: string
  icon: string
  title: string
  description: string
}

// Process Step
interface ProcessStep {
  id: string
  stepNumber: number
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

// Analytics Event
interface AnalyticsEvent {
  action: string
  category: string
  label: string
  value?: number
}
```

---

## Design Tokens

```typescript
// lib/design-tokens.ts
export const colors = {
  // Primary palette
  primary: '#E63946',        // Deep Coral Red
  primaryDark: '#C62828',    // Darker coral for gradients
  
  // Secondary palette  
  secondary: '#2EC4B6',      // Electric Teal
  secondaryDark: '#1A9E93',  // Darker teal for hover
  
  // Accent
  accent: '#FFD166',         // Vibrant Gold
  accentDark: '#F5B800',     // Darker gold for hover
  
  // Backgrounds
  background: '#FFFCF9',     // Warm Off-White
  backgroundAlt: '#FFF5F5',  // Subtle warm tint
  dark: '#1A1A2E',           // Rich Charcoal
  darkAlt: '#16162A',        // Darker variant
  
  // Text
  textDark: '#1A1A2E',       // Primary text on light
  textLight: '#FFFFFF',      // Primary text on dark
  textMuted: '#64748B',      // Secondary text
}

export const typography = {
  fontHeading: 'Poppins',    // Bold sans-serif for headings
  fontBody: 'Inter',         // Clean sans-serif for body
  h1Desktop: '4rem',         // 64px
  h1Mobile: '2.75rem',       // 44px
  h2: '2.5rem',              // 40px
  h3: '1.5rem',              // 24px
  body: '1.125rem',          // 18px
  small: '0.875rem',         // 14px
}

export const spacing = {
  sectionDesktop: '80px',
  sectionMobile: '48px',
  cardPadding: '24px',
  cardGap: '16px',
}
```

---

## Analytics Configuration

```typescript
// Environment variable
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

// lib/analytics.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const trackCTAClick = (label: string, destination: string) => {
  // Track CTA click event
  // Track WhatsApp clicks as 'generate_lead' conversion
}

export const trackSectionView = (sectionName: string) => {
  // Track section visibility event
}
```

---

## Correctness Properties

Properties verified through property-based testing with fast-check:

| # | Property | Validates |
|---|----------|-----------|
| 1 | Image Accessibility Compliance | All images have non-empty alt attributes |
| 2 | FeatureCard Component Completeness | Output contains icon, title, description |
| 3 | ProductCard Component Completeness | Output contains image, name, description |
| 4 | CTAButton Styling Consistency | Buttons have rounded styling and correct colors |
| 5 | ProcessStepCard Completeness | Output contains step number, title, description |
| 6 | CTA Click Event Tracking | Events contain action, category, label, destination |
| 7 | Section View Event Tracking | Events contain action, category, section name |
| 8 | Primary Button Gradient Styling | Primary buttons have gradient background |
| 9 | Secondary Button Border Styling | Secondary buttons have 2px solid border |
| 10 | Button Text Formatting | Uppercase text with letter-spacing |
| 11 | Product Card Shadow Styling | Cards have shadow styling classes |
| 12 | Feature Card Gradient Icon | Icon containers have gradient background |
| 13 | Interactive Element Transitions | Interactive elements have 200ms transitions |
| 14 | Button Minimum Tap Target | Buttons have minimum 48px height |

---

## Error Handling

### Analytics Errors
- Skip GA4 initialization when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is not set
- Use try-catch in gtag calls to prevent runtime errors
- Continue page functionality when analytics is blocked

### Component Errors
- Display fallback message if content data is empty
- Use Next.js Image placeholder for graceful image loading
- TypeScript strict mode ensures required props are provided

### Navigation Errors
- Handle invalid section IDs in smooth scroll
- Validate WhatsApp URL format before rendering

---

## Testing Strategy

### Test Structure

```
__tests__/
├── integration/
│   └── landing-page.test.tsx
└── properties/
    ├── analytics-events.property.test.ts
    ├── cta-button.property.test.tsx
    ├── feature-card.property.test.tsx
    ├── feature-card-gradient.property.test.tsx
    ├── image-accessibility.property.test.tsx
    ├── interactive-transitions.property.test.tsx
    ├── process-step-card.property.test.tsx
    ├── product-card.property.test.tsx
    └── product-card-shadow.property.test.tsx
```

### Testing Approach

- **Unit Tests**: Verify component rendering and content integration
- **Property-Based Tests**: Verify universal properties across all inputs (minimum 100 iterations)
- **Integration Tests**: Verify full page renders all sections correctly

### Test Annotations

Each property-based test includes a comment referencing the correctness property:

```typescript
// **Feature: consolidated, Property 1: Image Accessibility Compliance**
// **Validates: Requirements 2.4**
```
