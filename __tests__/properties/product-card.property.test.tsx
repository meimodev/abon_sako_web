/**
 * **Feature: abon-ikan-sako-landing, Property 3: ProductCard Component Completeness**
 * **Validates: Requirements 5.3**
 * 
 * For any ProductCard component rendered with valid ProductVariant data, 
 * the output SHALL contain an image element, the variant name, and the variant description.
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import { ProductCard } from '../../components/ui/ProductCard'

describe('Property 3: ProductCard Component Completeness', () => {
  // Arbitrary for generating valid ProductCard props
  const productCardPropsArb = fc.record({
    name: fc.string({ minLength: 1, maxLength: 50 }),
    description: fc.string({ minLength: 1, maxLength: 200 }),
    imageSrc: fc.constant('/images/test-product.jpg'), // Use a constant valid image path
    imageAlt: fc.string({ minLength: 1, maxLength: 100 }),
  })

  it('should always render an image element for any valid props', () => {
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
        
        // Image should be rendered (Next.js Image renders as img)
        const imgElement = container.querySelector('img')
        expect(imgElement).not.toBeNull()
      }),
      { numRuns: 100 }
    )
  })

  it('should always render the product name for any valid props', () => {
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
        
        // Name should be rendered in an h3 element
        const nameElement = container.querySelector('h3')
        expect(nameElement).not.toBeNull()
        expect(nameElement?.textContent).toBe(props.name)
      }),
      { numRuns: 100 }
    )
  })

  it('should always render the product description for any valid props', () => {
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
        
        // Description should be rendered in a p element
        const descriptionElement = container.querySelector('p')
        expect(descriptionElement).not.toBeNull()
        expect(descriptionElement?.textContent).toBe(props.description)
      }),
      { numRuns: 100 }
    )
  })

  it('should contain all three required elements (image, name, description) for any valid props', () => {
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
        
        // All three elements must be present
        const imgElement = container.querySelector('img')
        const nameElement = container.querySelector('h3')
        const descriptionElement = container.querySelector('p')
        
        expect(imgElement).not.toBeNull()
        expect(nameElement).not.toBeNull()
        expect(descriptionElement).not.toBeNull()
        
        // Verify content matches props
        expect(nameElement?.textContent).toBe(props.name)
        expect(descriptionElement?.textContent).toBe(props.description)
      }),
      { numRuns: 100 }
    )
  })

  it('should apply correct styling classes (white bg, rounded-xl, shadow-card)', () => {
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
        
        // Root element should have the required styling classes per design tokens
        const rootElement = container.firstChild as HTMLElement
        expect(rootElement).not.toBeNull()
        expect(rootElement?.className).toContain('bg-white')
        expect(rootElement?.className).toContain('rounded-xl')
        expect(rootElement?.className).toContain('shadow-card')
      }),
      { numRuns: 100 }
    )
  })
})
