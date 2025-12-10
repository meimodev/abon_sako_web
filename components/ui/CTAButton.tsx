'use client'

import Link from 'next/link'
import { trackCTAClick } from '@/lib/analytics'

export interface CTAButtonProps {
  href: string
  variant: 'primary' | 'secondary' | 'accent'
  children: React.ReactNode
  className?: string
  size?: 'default' | 'large'
}

/**
 * CTAButton Component
 * 
 * Requirements:
 * - 3.1: Primary variant has gradient background with rounded corners (12px)
 * - 3.2: Hover scales to 1.05x with colored shadow
 * - 3.3: Secondary variant has transparent bg with 2px solid border
 * - 3.4: Secondary hover fills background and changes text to white
 * - 3.5: Uppercase text with letter-spacing 0.05em and font-weight 600
 * - 8.3: Minimum 48px tap target height
 */
export function CTAButton({ 
  href, 
  variant, 
  children, 
  className = '', 
  size = 'default' 
}: CTAButtonProps) {
  const baseStyles = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-xl',
    'font-semibold',
    'uppercase',
    'tracking-wider',
    'transition-all',
    'duration-200',
    'min-h-[48px]',
  ].join(' ')
  
  const sizeStyles = {
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
  }

  const variantStyles = {
    primary: [
      'bg-gradient-to-r',
      'from-primary',
      'to-primary-dark',
      'text-white',
      'hover:scale-105',
      'hover:shadow-lg',
      'hover:shadow-primary/30',
    ].join(' '),
    secondary: [
      'bg-transparent',
      'border-2',
      'border-secondary',
      'text-secondary',
      'hover:bg-secondary',
      'hover:text-white',
    ].join(' '),
    accent: [
      'bg-gradient-to-r',
      'from-accent',
      'to-accent-dark',
      'text-dark',
      'hover:scale-105',
      'hover:shadow-lg',
      'hover:shadow-accent/30',
    ].join(' '),
  }

  const getButtonText = (): string => {
    if (typeof children === 'string') {
      return children
    }
    return 'CTA Button'
  }

  const handleClick = () => {
    trackCTAClick(getButtonText(), href)
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
