/**
 * **Feature: vibrant-redesign, Property 6: Interactive Element Transitions**
 * **Validates: Requirements 7.2**
 * 
 * For any interactive component (buttons, cards), the rendered output 
 * SHALL include transition classes with duration of 200ms (0.2 seconds).
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { ProductCard } from '../../components/ui/ProductCard'
import { Fish, Heart, ShieldCheck, Package, Star, Zap } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

// Mock next/image to avoid issues with Image component in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; [key: string]: unknown }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={props.src} alt={props.alt} data-testid="next-image" />
  },
}))

// Sample Lucide icons for testing
const sampleIcons: LucideIcon[] = [Fish, Heart, ShieldCheck, Package, Star, Zap]

describe('Property 6: Interactive Element Transitions', () => {
  /**
   * FeatureCard transition test
   * All feature cards must have transition classes for hover effects
   */
  describe('FeatureCard transitions', () => {
    const accentColorArb = fc.constantFrom('primary', 'secondary', 'accent') as fc.Arbitrary<'primary' | 'secondary' | 'accent'>
    const featureCardPropsArb = fc.record({
      icon: fc.constantFrom(...sampleIcons),
      title: fc.string({ minLength: 1, maxLength: 100 }),
      description: fc.string({ minLength: 1, maxLength: 500 }),
      accentColor: accentColorArb,
    })

    it('should always have transition classes with 200ms duration', () => {
      fc.assert(
        fc.property(featureCardPropsArb, (props) => {
          const { container } = render(
            <FeatureCard 
              icon={props.icon} 
              title={props.title} 
              description={props.description}
              accentColor={props.accentColor}
            />
          )
          
          // Root card element should have transition classes
          const rootElement = container.firstChild as HTMLElement
          expect(rootElement).not.toBeNull()
          // Must have transition-all for all property changes
          expect(rootElement?.className).toContain('transition-all')
          // Must have duration-200 (0.2 seconds = 200ms)
          expect(rootElement?.className).toContain('duration-200')
        }),
        { numRuns: 100 }
      )
    })
  })

  /**
   * ProductCard transition test
   * All product cards must have transition classes for hover effects
   */
  describe('ProductCard transitions', () => {
    const productCardPropsArb = fc.record({
      name: fc.string({ minLength: 1, maxLength: 50 }),
      description: fc.string({ minLength: 1, maxLength: 200 }),
      imageSrc: fc.constant('/images/test-product.jpg'),
      imageAlt: fc.string({ minLength: 1, maxLength: 100 }),
    })

    it('should always have transition classes with 200ms duration', () => {
      fc.assert(
        fc.property(productCardPropsArb, (props) => {
          const { container } = render(
            <ProductCard 
              name={props.name} 
              description={props.description} 
              imageSrc={props.imageSrc} 
              imageAlt={props.imageAlt} 
            />
          )
          
          // Root card element should have transition classes
          const rootElement = container.firstChild as HTMLElement
          expect(rootElement).not.toBeNull()
          // Must have transition-all for all property changes
          expect(rootElement?.className).toContain('transition-all')
          // Must have duration-200 (0.2 seconds = 200ms)
          expect(rootElement?.className).toContain('duration-200')
        }),
        { numRuns: 100 }
      )
    })
  })
})
