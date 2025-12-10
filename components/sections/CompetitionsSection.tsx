'use client'

import Image from 'next/image'
import { Trophy } from 'lucide-react'
import { siteContent } from '@/content/site-content'
import { SectionTitle, ScrollReveal } from '@/components/ui'

/**
 * Competitions Section
 * Displays competition achievements with cards
 * Requirement 6.4: 80px desktop, 48px mobile padding
 */
export function CompetitionsSection() {
  const { competitions } = siteContent

  return (
    <div id="kompetisi" className="max-w-7xl mx-auto">
      <ScrollReveal className="text-center mb-12" trackSection="kompetisi">
        <SectionTitle className="mb-4">{competitions.title}</SectionTitle>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          {competitions.subtitle}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {competitions.items.map((competition, index) => (
          <ScrollReveal
            key={competition.id}
            delay={index * 0.15}
            className="group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-hover">
              {/* Competition Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={competition.imageSrc}
                  alt={competition.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-hover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-card-padding">
                
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  {competition.name}
                </h3>
                <p className="text-muted text-sm">
                  {competition.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
