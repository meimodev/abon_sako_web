/**
 * **Feature: vibrant-redesign, Property 1: Primary Button Gradient Styling**
 * **Feature: vibrant-redesign, Property 2: Secondary Button Border Styling**
 * **Feature: vibrant-redesign, Property 3: Button Text Formatting**
 * **Feature: vibrant-redesign, Property 7: Button Minimum Tap Target**
 * 
 * Property tests for CTAButton component styling per vibrant redesign requirements.
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import { CTAButton } from '../../components/ui/CTAButton'

describe('CTAButton Property Tests - Vibrant Redesign', () => {
  // Arbitrary for generating valid button text
  const buttonTextArb = fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0)
  const hrefArb = fc.webUrl()
  const sizeArb = fc.constantFrom('default', 'large') as fc.Arbitrary<'default' | 'large'>

  /**
   * **Feature: vibrant-redesign, Property 1: Primary Button Gradient Styling**
   * **Validates: Requirements 3.1**
   * 
   * For any CTAButton component with variant "primary", the rendered output 
   * SHALL contain gradient background classes and border-radius of 12px (rounded-xl).
   */
  describe('Property 1: Primary Button Gradient Styling', () => {
    it('should always have gradient background classes for primary variant', () => {
      fc.assert(
        fc.property(
          fc.record({
            href: hrefArb,
            children: buttonTextArb,
            size: sizeArb,
          }),
          (props) => {
            const { container } = render(
              <CTAButton href={props.href} variant="primary" size={props.size}>
                {props.children}
              </CTAButton>
            )
            
            const link = container.querySelector('a')
            expect(link).not.toBeNull()
            // Primary variant must have gradient background (using Tailwind classes)
            expect(link?.className).toContain('bg-gradient-to-r')
            expect(link?.className).toContain('from-primary')
            expect(link?.className).toContain('to-primary-dark')
            // Must have rounded-xl (12px border radius)
            expect(link?.className).toContain('rounded-xl')
          }
        ),
        { numRuns: 100 }
      )
    })
  })

  /**
   * **Feature: vibrant-redesign, Property 2: Secondary Button Border Styling**
   * **Validates: Requirements 3.3**
   * 
   * For any CTAButton component with variant "secondary", the rendered output 
   * SHALL contain a transparent background with a 2px solid border using the secondary color.
   */
  describe('Property 2: Secondary Button Border Styling', () => {
    it('should always have transparent background with 2px border for secondary variant', () => {
      fc.assert(
        fc.property(
          fc.record({
            href: hrefArb,
            children: buttonTextArb,
            size: sizeArb,
          }),
          (props) => {
            const { container } = render(
              <CTAButton href={props.href} variant="secondary" size={props.size}>
                {props.children}
              </CTAButton>
            )
            
            const link = container.querySelector('a')
            expect(link).not.toBeNull()
            // Secondary variant must have transparent background
            expect(link?.className).toContain('bg-transparent')
            // Must have 2px border
            expect(link?.className).toContain('border-2')
            // Border must use secondary color (Tailwind class)
            expect(link?.className).toContain('border-secondary')
          }
        ),
        { numRuns: 100 }
      )
    })
  })

  /**
   * **Feature: vibrant-redesign, Property 3: Button Text Formatting**
   * **Validates: Requirements 3.5**
   * 
   * For any CTAButton component regardless of variant, the rendered text 
   * SHALL be uppercase with letter-spacing (tracking) and font-weight 600.
   */
  describe('Property 3: Button Text Formatting', () => {
    const variantArb = fc.constantFrom('primary', 'secondary', 'accent') as fc.Arbitrary<'primary' | 'secondary' | 'accent'>

    it('should always have uppercase text with letter-spacing and font-weight 600', () => {
      fc.assert(
        fc.property(
          fc.record({
            href: hrefArb,
            variant: variantArb,
            children: buttonTextArb,
            size: sizeArb,
          }),
          (props) => {
            const { container } = render(
              <CTAButton href={props.href} variant={props.variant} size={props.size}>
                {props.children}
              </CTAButton>
            )
            
            const link = container.querySelector('a')
            expect(link).not.toBeNull()
            // Must have uppercase text
            expect(link?.className).toContain('uppercase')
            // Must have letter-spacing (tracking-wider = 0.05em)
            expect(link?.className).toContain('tracking-wider')
            // Must have font-weight 600 (font-semibold)
            expect(link?.className).toContain('font-semibold')
          }
        ),
        { numRuns: 100 }
      )
    })
  })

  /**
   * **Feature: vibrant-redesign, Property 7: Button Minimum Tap Target**
   * **Validates: Requirements 8.3**
   * 
   * For any CTAButton component, the rendered output SHALL have a minimum 
   * height of 48px for accessibility compliance.
   */
  describe('Property 7: Button Minimum Tap Target', () => {
    const variantArb = fc.constantFrom('primary', 'secondary', 'accent') as fc.Arbitrary<'primary' | 'secondary' | 'accent'>

    it('should always have minimum 48px height for tap target accessibility', () => {
      fc.assert(
        fc.property(
          fc.record({
            href: hrefArb,
            variant: variantArb,
            children: buttonTextArb,
            size: sizeArb,
          }),
          (props) => {
            const { container } = render(
              <CTAButton href={props.href} variant={props.variant} size={props.size}>
                {props.children}
              </CTAButton>
            )
            
            const link = container.querySelector('a')
            expect(link).not.toBeNull()
            // Must have minimum height of 48px
            expect(link?.className).toContain('min-h-[48px]')
          }
        ),
        { numRuns: 100 }
      )
    })
  })
})
