import { siteContent } from '@/content/site-content'
import { ScrollReveal } from '@/components/ui'

export function CulturalBanner() {
  const { culturalBanner } = siteContent

  return (
    <section 
      className="relative py-20 md:py-24 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${culturalBanner.imageSrc})` }}
      aria-label={culturalBanner.imageAlt}
    >
      {/* Vibrant gradient overlay using primary palette */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-dark/70" />
      
      <div className="relative max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed drop-shadow-lg tracking-tight">
            {culturalBanner.text}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
