'use client'

import Image from 'next/image'

export interface ProcessStepCardProps {
  stepNumber: number
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

export function ProcessStepCard({ 
  stepNumber, 
  title, 
  description, 
  imageSrc, 
  imageAlt 
}: ProcessStepCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden group">
      {imageSrc && imageAlt && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      )}
      <div className="p-6">
        <div 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-lg mb-4"
          aria-label={`Step ${stepNumber}`}
        >
          {stepNumber}
        </div>
        <h3 className="font-heading text-lg font-semibold text-dark mb-2">
          {title}
        </h3>
        <p className="text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
