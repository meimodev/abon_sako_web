import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import {
  HeroSection,
  ValuePropositionGrid,
  StoryFeatureBlock,
  MakingProcessSection,
  ProductVariants,
  CompetitionsSection,
  CulturalBanner,
} from '@/components/sections'

/**
 * Section Divider Component
 * Creates a subtle diagonal divider between sections
 * Requirement 6.3: Include subtle diagonal or wave divider element
 */
function SectionDivider({ 
  fromColor = 'bg-background', 
  toColor = 'bg-dark',
  flip = false 
}: { 
  fromColor?: string
  toColor?: string
  flip?: boolean 
}) {
  // Map toColor class to fill class
  const getFillClass = (color: string) => {
    switch (color) {
      case 'bg-dark': return 'fill-dark'
      case 'bg-background-alt': return 'fill-background-alt'
      case 'bg-background': return 'fill-background'
      default: return 'fill-background'
    }
  }

  return (
    <div 
      className={`relative h-16 md:h-24 ${fromColor} overflow-hidden`}
      aria-hidden="true"
    >
      <svg
        className={`absolute w-full h-full ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1200,120 L1200,120 L0,120 Z"
          className={getFillClass(toColor)}
        />
      </svg>
    </div>
  )
}

/**
 * Section Wrapper Component
 * Provides consistent padding and background for sections
 * Requirement 6.4: 80px desktop, 48px mobile padding
 */
function SectionWrapper({ 
  children, 
  background = 'light',
  id,
  className = ''
}: { 
  children: React.ReactNode
  background?: 'light' | 'light-alt' | 'dark'
  id?: string
  className?: string
}) {
  const bgClass = {
    'light': 'bg-background',
    'light-alt': 'bg-background-alt',
    'dark': 'bg-dark'
  }[background]

  return (
    <section 
      id={id}
      className={`py-section-mobile md:py-section-desktop px-4 md:px-8 ${bgClass} ${className}`}
    >
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section - Gradient background (primary to dark) */}
        {/* Requirement 5.1: Full-width gradient background */}
        {/* Requirement 6.4: 80px desktop, 48px mobile padding (handled in component) */}
        <HeroSection />


        {/* Value Proposition Grid - Light background */}
        {/* Requirement 6.1: Light (off-white) background */}
        {/* Requirement 6.4: Section padding - 80px desktop, 48px mobile */}
        <ValuePropositionGrid />

        {/* Divider: Value Props (light) to Story (dark) */}
        <SectionDivider fromColor="bg-background" toColor="bg-dark" />

        {/* Our Story Feature Block - Dark background */}
        {/* Requirement 6.1: Dark (charcoal) background */}
        {/* Requirement 6.2: Inverted text colors for readability */}
        <StoryFeatureBlock />


        {/* Making Process Section - Light alternate background */}
        {/* Requirement 6.4: Section padding - 80px desktop, 48px mobile */}
        <MakingProcessSection />

        {/* Divider: Making Process (light alt) to Products (light) */}
        <SectionDivider fromColor="bg-background-alt" toColor="bg-background" />

        {/* Product Variants - Light background */}
        {/* Requirement 6.1: Light (off-white) background */}
        {/* Requirement 6.4: Section padding - 80px desktop, 48px mobile */}
        <ProductVariants />

        {/* Competitions Section - Light background (same as Products, no divider needed) */}
        {/* Requirement 6.4: Section padding - 80px desktop, 48px mobile */}
        <SectionWrapper background="light">
          <CompetitionsSection />
        </SectionWrapper>

        {/* Divider: Competitions (light) to Cultural Banner (dark) */}
        <SectionDivider fromColor="bg-background" toColor="bg-dark" />

        {/* Cultural Banner - Image background with gradient overlay */}
        <CulturalBanner />
      </main>
      <Footer />
    </>
  )
}
