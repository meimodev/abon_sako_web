import Image from 'next/image'
import { siteContent } from '@/content/site-content'
import { SectionTitle, ScrollReveal } from '@/components/ui'

export function StoryFeatureBlock() {
  const { story } = siteContent

  return (
    <section id="cerita" className="py-section-mobile md:py-section-desktop px-4 md:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          {/* Image - Left on desktop, top on mobile */}
          <ScrollReveal className="flex-1 mb-8 md:mb-0" trackSection="cerita">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-4 ring-secondary/30">
              <Image
                src={story.imageSrc}
                alt={story.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Text Content - Right on desktop, bottom on mobile */}
          <ScrollReveal className="flex-1" delay={0.2}>
            <SectionTitle className="mb-6 text-white">
              {story.title}
            </SectionTitle>
            <p className="text-gray-300 text-lg leading-relaxed">
              {story.body}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
