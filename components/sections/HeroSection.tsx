import Image from 'next/image'
import { siteContent } from '@/content/site-content'
import { CTAButton, ScrollReveal, BackgroundDoodles } from '@/components/ui'

/**
 * Hero Section with staggered animations
 * - Fade-up animation duration: 0.5s (Requirement 7.1)
 * - Stagger delay between elements: 0.1s (Requirement 7.3)
 * - CSS transforms used for performance (Requirement 7.4)
 */
export function HeroSection() {
  const { hero, navbar } = siteContent

  return (
    <section
      id="beranda"
      className="relative py-section-mobile md:py-section-desktop px-4 md:px-8 bg-gradient-hero overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      {/* Animated Background Doodles */}
      <BackgroundDoodles />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          {/* Text Content - Left on desktop, top on mobile */}
          {/* Staggered animation: headline, subheadline, CTA each animate 0.1s apart (Requirement 7.3) */}
          <ScrollReveal
            className="flex-1 mb-8 md:mb-0"
            trackSection="hero"
            stagger={true}
            staggerDelay={0.1}
          >
            <h1
              className="font-heading text-h1-mobile md:text-h1-desktop font-bold text-white leading-tight mb-6"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
            >
              {hero.headline}
            </h1>
            <p className="text-white/90 text-body leading-relaxed mb-8">
              {hero.subheadline}
            </p>
            <CTAButton href={navbar.ctaHref} variant="accent">
              {navbar.ctaText}
            </CTAButton>
          </ScrollReveal>

          {/* Image - Right on desktop, bottom on mobile */}
          {/* Delayed by 0.3s to appear after text content stagger completes */}
          <ScrollReveal className="flex-1" delay={0.3}>
            {/* Decorative geometric frame */}
            <div className="relative">
              {/* Geometric shape overlay - rotated square behind image */}
              <div
                className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-3xl transform rotate-3"
                aria-hidden="true"
              />
              {/* Secondary geometric accent */}
              <div
                className="absolute -inset-2 bg-white/10 rounded-2xl transform -rotate-2"
                aria-hidden="true"
              />
              {/* Image container */}
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={hero.imageSrc}
                  alt={hero.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 700px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
