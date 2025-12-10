'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useEffect, useState, ReactNode, Children, isValidElement, cloneElement, ReactElement } from 'react'
import { trackSectionView } from '@/lib/analytics'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  /** Optional section name for analytics tracking (Requirement 5.2) */
  trackSection?: string
  /** Enable staggered animation for child elements (Requirement 7.3) */
  stagger?: boolean
  /** Delay between each staggered child in seconds (default: 0.1s per Requirement 7.3) */
  staggerDelay?: number
}

/**
 * Fade-up animation variants using CSS transforms for performance (Requirement 7.4)
 * Duration: 0.5s as per Requirement 7.1
 */
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    // Using transform for GPU acceleration (Requirement 7.4)
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

/**
 * Container variants for staggered children animations (Requirement 7.3)
 */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Default stagger delay per Requirement 7.3
    },
  },
}

/**
 * Child variants for staggered animations
 */
const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // 0.5s duration per Requirement 7.1
      ease: 'easeOut',
    },
  },
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5, // 0.5s per Requirement 7.1
  once = true,
  trackSection,
  stagger = false,
  staggerDelay = 0.1, // 0.1s per Requirement 7.3
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })
  const [hasTracked, setHasTracked] = useState(false)

  // Track section view when it becomes visible (Requirement 5.2)
  useEffect(() => {
    if (isInView && trackSection && !hasTracked) {
      trackSectionView(trackSection)
      setHasTracked(true)
    }
  }, [isInView, trackSection, hasTracked])

  // Staggered animation mode for hero elements (Requirement 7.3)
  if (stagger) {
    const customStaggerContainer: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={customStaggerContainer}
        className={className}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return (
              <motion.div variants={staggerChild}>
                {child}
              </motion.div>
            )
          }
          return child
        })}
      </motion.div>
    )
  }

  // Standard fade-up animation (Requirement 7.1)
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{
        duration, // 0.5s per Requirement 7.1
        delay,
        ease: 'easeOut',
      }}
      className={className}
      // CSS transforms are used via Framer Motion's y property (Requirement 7.4)
    >
      {children}
    </motion.div>
  )
}
