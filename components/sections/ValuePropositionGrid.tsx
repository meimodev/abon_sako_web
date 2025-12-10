import { Fish, Heart, ShieldCheck, Package, LucideIcon } from 'lucide-react'
import { siteContent } from '@/content/site-content'
import { SectionTitle, FeatureCard, ScrollReveal } from '@/components/ui'

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Fish,
  Heart,
  ShieldCheck,
  Package,
}

export function ValuePropositionGrid() {
  const { valuePropositionsSection } = siteContent

  return (
    <section id="keunggulan" className="py-section-mobile md:py-section-desktop px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal trackSection="keunggulan">
          <SectionTitle className="text-center mb-12">
            {valuePropositionsSection.title}
          </SectionTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {valuePropositionsSection.items.map((item, index) => {
            const IconComponent = iconMap[item.icon]
            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <FeatureCard
                  icon={IconComponent}
                  title={item.title}
                  description={item.description}
                />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
