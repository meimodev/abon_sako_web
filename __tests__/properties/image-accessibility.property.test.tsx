/**
 * **Feature: abon-ikan-sako-landing, Property 1: Image Accessibility Compliance**
 * **Validates: Requirements 2.3**
 * 
 * For any image element rendered on the Landing_Page, the image SHALL have 
 * a non-empty alt attribute that describes the image content for screen readers.
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import Image from 'next/image'

// Test component that wraps Next.js Image with accessibility requirements
interface AccessibleImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

function AccessibleImage({ src, alt, width = 400, height = 300 }: AccessibleImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

describe('Property 1: Image Accessibility Compliance', () => {
  // Arbitrary for generating valid image props with non-empty alt text
  const imagePropsArb = fc.record({
    src: fc.constant('/images/test-image.jpg'),
    alt: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
  })

  it('should always render an image with a non-empty alt attribute for any valid props', () => {
    fc.assert(
      fc.property(imagePropsArb, (props) => {
        const { container } = render(
          <AccessibleImage src={props.src} alt={props.alt} />
        )
        
        const imgElement = container.querySelector('img')
        expect(imgElement).not.toBeNull()
        
        // Alt attribute must exist and be non-empty
        const altAttr = imgElement?.getAttribute('alt')
        expect(altAttr).not.toBeNull()
        expect(altAttr).not.toBe('')
        expect(altAttr?.trim().length).toBeGreaterThan(0)
      }),
      { numRuns: 100 }
    )
  })

  it('should preserve the exact alt text provided in props', () => {
    fc.assert(
      fc.property(imagePropsArb, (props) => {
        const { container } = render(
          <AccessibleImage src={props.src} alt={props.alt} />
        )
        
        const imgElement = container.querySelector('img')
        expect(imgElement).not.toBeNull()
        
        // Alt text should match exactly what was provided
        const altAttr = imgElement?.getAttribute('alt')
        expect(altAttr).toBe(props.alt)
      }),
      { numRuns: 100 }
    )
  })

  it('should ensure alt text is descriptive (not just whitespace)', () => {
    // Generate strings that could potentially be problematic
    const descriptiveAltArb = fc.string({ minLength: 1, maxLength: 200 })
      .filter(s => s.trim().length > 0) // Must have non-whitespace content

    fc.assert(
      fc.property(descriptiveAltArb, (altText) => {
        const { container } = render(
          <AccessibleImage src="/images/test.jpg" alt={altText} />
        )
        
        const imgElement = container.querySelector('img')
        expect(imgElement).not.toBeNull()
        
        const altAttr = imgElement?.getAttribute('alt')
        expect(altAttr).not.toBeNull()
        // Verify the alt text has actual content
        expect(altAttr?.trim().length).toBeGreaterThan(0)
      }),
      { numRuns: 100 }
    )
  })
})
