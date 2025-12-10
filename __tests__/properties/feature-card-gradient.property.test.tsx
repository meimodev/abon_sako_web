/**
 * **Feature: vibrant-redesign, Property 5: Feature Card Gradient Icon**
 * **Validates: Requirements 4.3**
 * 
 * For any FeatureCard component with a valid icon prop, the rendered icon 
 * container SHALL have a gradient background.
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { Fish, Heart, ShieldCheck, Package, Star, Zap } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

// Sample Lucide icons for testing
const sampleIcons: LucideIcon[] = [Fish, Heart, ShieldCheck, Package, Star, Zap]

// Valid accent colors for the component
const accentColors = ['primary', 'secondary', 'accent'] as const

describe('Property 5: Feature Card Gradient Icon', () => {
  // Arbitrary for generating valid FeatureCard props
  const featureCardPropsArb = fc.record({
    icon: fc.constantFrom(...sampleIcons),
    title: fc.string({ minLength: 1, maxLength: 100 }),
    description: fc.string({ minLength: 1, maxLength: 500 }),
    accentColor: fc.constantFrom(...accentColors),
  })

  it('should always render icon container with gradient background for any valid props', () => {
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

        // Find the icon container (parent of SVG)
        const svgElement = container.querySelector('svg')
        expect(svgElement).not.toBeNull()

        const iconContainer = svgElement?.parentElement
        expect(iconContainer).not.toBeNull()

        // Icon container should have gradient background class
        const className = iconContainer?.className || ''
        expect(className).toContain('bg-gradient-to-br')
      }),
      { numRuns: 100 }
    )
  })

  it('should apply correct gradient colors based on accentColor prop', () => {
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

        const svgElement = container.querySelector('svg')
        const iconContainer = svgElement?.parentElement
        const className = iconContainer?.className || ''

        // Verify gradient direction is present
        expect(className).toContain('bg-gradient-to-br')

        // Verify the correct color gradient is applied based on accentColor
        const expectedGradients: Record<string, string[]> = {
          primary: ['from-[#0B9BB6]', 'to-[#087A8F]'],
          secondary: ['from-[#2EC4B6]', 'to-[#1A9E93]'],
          accent: ['from-[#FFD166]', 'to-[#F5B800]'],
        }

        const expectedColors = expectedGradients[props.accentColor]
        expectedColors.forEach(colorClass => {
          expect(className).toContain(colorClass)
        })
      }),
      { numRuns: 100 }
    )
  })

  it('should render icon in white color for visibility against gradient background', () => {
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

        const svgElement = container.querySelector('svg')
        expect(svgElement).not.toBeNull()

        // Icon should have white text color for contrast
        const className = svgElement?.className.baseVal || ''
        expect(className).toContain('text-white')
      }),
      { numRuns: 100 }
    )
  })

  it('should default to primary gradient when accentColor is not specified', () => {
    fc.assert(
      fc.property(
        fc.record({
          icon: fc.constantFrom(...sampleIcons),
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 500 }),
        }),
        (props) => {
          const { container } = render(
            <FeatureCard
              icon={props.icon}
              title={props.title}
              description={props.description}
            />
          )

          const svgElement = container.querySelector('svg')
          const iconContainer = svgElement?.parentElement
          const className = iconContainer?.className || ''

          // Should default to primary gradient
          expect(className).toContain('from-[#0B9BB6]')
          expect(className).toContain('to-[#087A8F]')
        }
      ),
      { numRuns: 100 }
    )
  })
})
