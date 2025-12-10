'use client'

import { siteContent } from '@/content/site-content'
import { ProcessStepCard, SectionTitle, ScrollReveal } from '@/components/ui'

export function MakingProcessSection() {
  const { title, subtitle, steps } = siteContent.makingProcess

  return (
    <section id="proses" className="py-section-mobile md:py-section-desktop px-4 md:px-8 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal trackSection="proses">
          <SectionTitle className="text-center mb-4">
            {title}
          </SectionTitle>
          <p className="text-muted text-center text-lg mb-12">
            {subtitle}
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.slice(0, 2).map((step, index) => (
            <ScrollReveal key={step.id} delay={index * 0.1}>
              <ProcessStepCard
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc}
                imageAlt={step.imageAlt}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
