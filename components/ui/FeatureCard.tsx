import { LucideIcon } from 'lucide-react'

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: 'primary' | 'secondary' | 'accent'
}

export function FeatureCard({ icon: Icon, title, description, accentColor = 'primary' }: FeatureCardProps) {
  // Gradient backgrounds for icon container per Requirements 4.3
  const gradientStyles = {
    primary: 'bg-gradient-to-br from-[#0B9BB6] to-[#087A8F]',
    secondary: 'bg-gradient-to-br from-[#2EC4B6] to-[#1A9E93]',
    accent: 'bg-gradient-to-br from-[#FFD166] to-[#F5B800]',
  }

  return (
    <div className="flex flex-col items-center text-center p-6 gap-4 rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      {/* Icon with gradient background circle - Requirements 4.3 */}
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${gradientStyles[accentColor]} shadow-md`}>
        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
      </div>
      {/* Title with updated typography - Requirements 4.4 */}
      <h3 className="font-heading text-lg font-semibold text-[#1A1A2E]">
        {title}
      </h3>
      {/* Description with proper spacing */}
      <p className="text-[#64748B] leading-relaxed text-base">
        {description}
      </p>
    </div>
  )
}
