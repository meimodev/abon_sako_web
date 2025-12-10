'use client'

import { useEffect, useRef, useState } from 'react'
import { trackSectionView } from '@/lib/analytics'

/**
 * Custom hook to track section visibility using Intersection Observer
 * Requirement 5.2: Track when major sections become visible
 * 
 * @param sectionName - The name of the section to track (e.g., 'hero', 'keunggulan', 'cerita', 'proses', 'produk')
 * @param options - Optional IntersectionObserver options
 * @returns ref to attach to the section element
 */
export function useTrackSectionView(
  sectionName: string,
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<HTMLElement>(null)
  const [hasTracked, setHasTracked] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || hasTracked) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            trackSectionView(sectionName)
            setHasTracked(true)
            // Disconnect after tracking once
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [sectionName, hasTracked, options])

  return ref
}
