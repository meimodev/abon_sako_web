# Implementation Plan

## 1. Project Setup & Design System

- [x] 1.1 Initialize Next.js 14+ project with App Router and TypeScript
  - Configure `next.config.js` for image optimization
  - Set up Tailwind CSS with custom color palette
  - Configure Google Fonts (Poppins, Inter) using `next/font/google`
  - Install dependencies: `lucide-react`, `framer-motion`, `fast-check`
  - _Requirements: 11.1-11.7_

- [x] 1.2 Create design tokens and configuration
  - Create `lib/design-tokens.ts` with colors, typography, spacing
  - Update `tailwind.config.ts` with vibrant color palette
  - Update `app/globals.css` with CSS variables and base styles
  - _Requirements: 11.1-11.7_

- [x] 1.3 Create content data files
  - Create `content/site-content.ts` with all page text and metadata
  - Create `content/products.ts` with product variant data
  - Add making process steps content
  - _Requirements: 5.3, 9.1-9.3_

---

## 2. UI Components

- [x] 2.1 Create CTAButton component
  - Implement primary (gradient), secondary (border), accent (gold) variants
  - Apply rounded-xl styling and hover scale/shadow effects
  - Ensure minimum 48px tap target height
  - Support href prop for WhatsApp links
  - _Requirements: 12.1-12.5_

- [x] 2.2 Write property tests for CTAButton
  - **Property: Primary Button Gradient Styling** - Validates: 12.1
  - **Property: Secondary Button Border Styling** - Validates: 12.3
  - **Property: Button Text Formatting** - Validates: 12.4
  - **Property: Button Minimum Tap Target** - Validates: 12.5

- [x] 2.3 Create SectionTitle component
  - Apply Poppins font styling with letter-spacing
  - Support light/dark variants for different backgrounds
  - _Requirements: 11.6_

- [x] 2.4 Create FeatureCard component
  - Accept icon, title, and description props
  - Render icon with gradient background circle
  - Add hover effects with transitions
  - _Requirements: 3.3, 13.3_

- [x] 2.5 Write property test for FeatureCard
  - **Property: FeatureCard Component Completeness** - Validates: 3.3
  - **Property: Feature Card Gradient Icon** - Validates: 13.3

- [x] 2.6 Create ProductCard component
  - Accept ProductVariant props (name, description, imageSrc, imageAlt)
  - Apply white background, rounded corners, shadow styling
  - Implement hover lift with colored top border accent
  - _Requirements: 6.3-6.5, 13.1-13.2_

- [x] 2.7 Write property tests for ProductCard
  - **Property: ProductCard Component Completeness** - Validates: 6.3
  - **Property: Product Card Shadow Styling** - Validates: 13.1

- [x] 2.8 Create ProcessStepCard component
  - Accept stepNumber, title, description, optional image props
  - Apply primary color for step number
  - Apply white background, rounded corners, shadow styling
  - _Requirements: 5.4_

- [x] 2.9 Write property test for ProcessStepCard
  - **Property: ProcessStepCard Component Completeness** - Validates: 5.4

- [x] 2.10 Write property test for interactive transitions
  - **Property: Interactive Element Transitions** - Validates: 14.2

---

## 3. Layout Components

- [x] 3.1 Create Navbar component
  - Display "SAKO" logo with primary color
  - Render navigation links (Beranda, Keunggulan, Cerita Kami, Proses, Produk)
  - Include "Pesan Sekarang" CTA button linking to WhatsApp
  - Apply sticky positioning at top of viewport
  - _Requirements: 1.1-1.5_

- [x] 3.2 Implement smooth scroll navigation
  - Add click handlers for navigation links
  - Implement smooth scroll to section IDs
  - _Requirements: 1.4_

- [x] 3.3 Create Footer component
  - Display address "Teaching Factory SMKN 2 Tondano"
  - Render Instagram and Facebook social links
  - Include WhatsApp CTA button
  - Display copyright text
  - Apply charcoal background with light text
  - _Requirements: 8.1-8.5_

---

## 4. Section Components

- [x] 4.1 Create HeroSection component
  - Display full-width gradient background (primary to dark)
  - Display headline with white text and text-shadow (4rem desktop, 2.75rem mobile)
  - Display subheadline with product description
  - Render product image with decorative geometric overlay
  - Use accent (gold) CTA button
  - Implement split-screen (desktop) and stacked (mobile) layouts
  - _Requirements: 2.1-2.6_

- [x] 4.2 Write property test for image accessibility
  - **Property: Image Accessibility Compliance** - Validates: 2.4

- [x] 4.3 Create ValuePropositionGrid component
  - Display section title "Kenapa Memilih Abon Ikan SAKO?"
  - Render four FeatureCard components with gradient icons
  - Apply 2x2 grid (desktop) and single column (mobile) layout
  - _Requirements: 3.1-3.5_

- [x] 4.4 Create StoryFeatureBlock component
  - Display title "Kolaborasi Karya Anak Bangsa"
  - Display body text about SMKN 2 Tondano collaboration
  - Apply dark background with inverted text colors
  - Implement image-left/text-right (desktop) and stacked (mobile) layouts
  - _Requirements: 4.1-4.5_

- [x] 4.5 Create MakingProcessSection component
  - Display section title "Proses Pembuatan"
  - Display subtitle describing production process
  - Render 4 ProcessStepCard components from content data
  - Apply horizontal grid (desktop) and vertical stack (mobile) layouts
  - Add section ID "proses" for navigation
  - Add scroll reveal animation
  - _Requirements: 5.1-5.7_

- [x] 4.6 Create ProductVariants component
  - Display section title "Pilih Favoritmu"
  - Render ProductCard for Original and Pedas variants
  - Apply responsive grid layout
  - _Requirements: 6.1-6.2_

- [x] 4.7 Create CulturalBanner component
  - Display banner text "Oleh-Oleh Wajib dari Minahasa..."
  - Apply full-width background image
  - Apply vibrant overlay and ensure text contrast
  - _Requirements: 7.1-7.3_

---

## 5. Analytics Integration

- [x] 5.1 Create analytics utility functions
  - Create `lib/analytics.ts`
  - Export GA_MEASUREMENT_ID from environment variable
  - Implement trackCTAClick function with label and destination
  - Implement trackSectionView function with section name
  - Handle WhatsApp clicks as generate_lead conversion events
  - Add TypeScript types for gtag on window object
  - _Requirements: 10.4-10.6_

- [x] 5.2 Write property tests for analytics events
  - **Property: CTA Click Event Tracking** - Validates: 10.4
  - **Property: Section View Event Tracking** - Validates: 10.5

- [x] 5.3 Create GoogleAnalytics component
  - Create `components/analytics/GoogleAnalytics.tsx`
  - Use Next.js Script component with "afterInteractive" strategy
  - Load gtag.js from googletagmanager.com
  - Initialize gtag with measurement ID
  - Skip initialization gracefully when env var is not set
  - _Requirements: 10.1-10.3_

- [x] 5.4 Integrate GoogleAnalytics into layout
  - Add GoogleAnalytics component to app/layout.tsx
  - _Requirements: 10.1_

- [x] 5.5 Add CTA click tracking to CTAButton component
  - Import trackCTAClick from analytics utility
  - Add onClick handler to track button clicks
  - _Requirements: 10.4, 10.6_

- [x] 5.6 Add section view tracking
  - Create useTrackSectionView hook with Intersection Observer
  - Track when major sections become visible
  - _Requirements: 10.5_

---

## 6. Page Assembly & SEO

- [x] 6.1 Create root layout with fonts and global styles
  - Configure Poppins and Inter fonts
  - Import Tailwind CSS globals
  - Set up metadata template
  - Add GoogleAnalytics component
  - _Requirements: 11.6, 11.7_

- [x] 6.2 Create main landing page
  - Compose all section components in correct order:
    1. Navbar
    2. HeroSection
    3. ValuePropositionGrid
    4. StoryFeatureBlock
    5. MakingProcessSection
    6. ProductVariants
    7. CompetitionsSection (bonus feature)
    8. CulturalBanner
    9. Footer
  - Add section IDs for navigation anchors
  - Add section dividers between sections
  - Apply alternating light/dark backgrounds
  - Apply consistent spacing (py-section-desktop 80px, py-section-mobile 48px)
  - _Requirements: 15.1-15.4_

- [x] 6.3 Configure SEO metadata
  - Set page title "Abon Ikan SAKO | Cita Rasa Otentik Laut Minahasa"
  - Set meta description
  - Add keywords metadata
  - _Requirements: 9.1-9.4_

---

## 7. Animations & Polish

- [x] 7.1 Implement scroll reveal animations
  - Add Framer Motion scroll-triggered animations to sections
  - Apply fade-up effect over 0.5 seconds
  - Stagger hero elements by 0.1 seconds
  - Use CSS transforms for performance
  - _Requirements: 14.1-14.4_

---

## 8. Environment Configuration

- [x] 8.1 Add environment variable template
  - Create `.env.example` with NEXT_PUBLIC_GA_MEASUREMENT_ID placeholder
  - _Requirements: 10.1, 10.3_

---

## 9. Testing

- [x] 9.1 Write integration tests
  - Test full page renders all sections
  - Verify navigation links work correctly
  - Test MakingProcessSection renders with all 4 steps
  - Verify GoogleAnalytics component is present
  - Test metadata is correctly applied
  - _Requirements: 1.1-1.5, 5.3, 9.1-9.4, 10.1_

---

## 10. Final Verification

- [x] 10.1 Fix failing integration test
  - Update `__tests__/integration/landing-page.test.tsx` to use correct spacing class assertion
  - The test expects `py-12` but implementation uses `py-section-mobile` (48px) per design tokens
  - _Requirements: 15.4_

- [x] 10.2 Ensure all tests pass
  - Run `npm test` and verify all tests pass
  - Fix any remaining failing tests
  - _Requirements: All_

- [x] 10.3 Verify responsive design
  - Test on mobile viewport (< 768px)
  - Test on desktop viewport (>= 1024px)
  - Verify all layouts adapt correctly
  - _Requirements: 15.1-15.4_

- [x] 10.4 Verify analytics tracking
  - Test with GA4 measurement ID configured
  - Verify CTA clicks are tracked
  - Verify section views are tracked
  - _Requirements: 10.4-10.6_
