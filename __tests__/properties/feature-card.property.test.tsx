/**
 * **Feature: abon-ikan-sako-landing, Property 2: FeatureCard Component Completeness**
 * **Validates: Requirements 3.3**
 * 
 * For any FeatureCard component rendered with valid props, the output SHALL 
 * contain an icon element, a title text element, and a description text element.
 */

import { render, screen } from '@testing-library/react'
import * as fc from 'fast-check'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { Fish, Heart, ShieldCheck, Package, Star, Zap } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

// Sample Lucide icons for testing
const sampleIcons: LucideIcon[] = [Fish, Heart, ShieldCheck, Package, Star, Zap]

describe('Property 2: FeatureCard Component Completeness', () => {
  // Arbitrary for generating valid FeatureCard props
  const featureCardPropsArb = fc.record({
    icon: fc.constantFrom(...sampleIcons),
    title: fc.string({ minLength: 1, maxLength: 100 }),
    description: fc.string({ minLength: 1, maxLength: 500 }),
  })

  it('should always render an icon element for any valid props', () => {
    fc.assert(
      fc.property(featureCardPropsArb, (props) => {
        const { container } = render(
          <FeatureCard icon={props.icon} title={props.title} description={props.description} />
        )
        
        // Icon should be rendered as an SVG element
        const svgElement = container.querySelector('svg')
        expect(svgElement).not.toBeNull()
      }),
      { numRuns: 100 }
    )
  })

  it('should always render the title text for any valid props', () => {
    fc.assert(
      fc.property(featureCardPropsArb, (props) => {
        const { container } = render(
          <FeatureCard icon={props.icon} title={props.title} description={props.description} />
        )
        
        // Title should be rendered in an h3 element
        const titleElement = container.querySelector('h3')
        expect(titleElement).not.toBeNull()
        expect(titleElement?.textContent).toBe(props.title)
      }),
      { numRuns: 100 }
    )
  })

  it('should always render the description text for any valid props', () => {
    fc.assert(
      fc.property(featureCardPropsArb, (props) => {
        const { container } = render(
          <FeatureCard icon={props.icon} title={props.title} description={props.description} />
        )
        
        // Description should be rendered in a p element
        const descriptionElement = container.querySelector('p')
        expect(descriptionElement).not.toBeNull()
        expect(descriptionElement?.textContent).toBe(props.description)
      }),
      { numRuns: 100 }
    )
  })

  it('should contain all three required elements (icon, title, description) for any valid props', () => {
    fc.assert(
      fc.property(featureCardPropsArb, (props) => {
        const { container } = render(
          <FeatureCard icon={props.icon} title={props.title} description={props.description} />
        )
        
        // All three elements must be present
        const svgElement = container.querySelector('svg')
        const titleElement = container.querySelector('h3')
        const descriptionElement = container.querySelector('p')
        
        expect(svgElement).not.toBeNull()
        expect(titleElement).not.toBeNull()
        expect(descriptionElement).not.toBeNull()
        
        // Verify content matches props
        expect(titleElement?.textContent).toBe(props.title)
        expect(descriptionElement?.textContent).toBe(props.description)
      }),
      { numRuns: 100 }
    )
  })
})
