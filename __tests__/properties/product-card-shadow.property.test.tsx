/**
 * **Feature: vibrant-redesign, Property 4: Product Card Shadow Styling**
 * **Validates: Requirements 4.1**
 * 
 * For any ProductCard component with valid props, the rendered output SHALL 
 * contain shadow styling classes (0 4px 20px rgba(0,0,0,0.08)).
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import { ProductCard } from '../../components/ui/ProductCard'

describe('Property 4: Product Card Shadow Styling', () => {
  // Arbitrary for generating valid ProductCard props
  const productCardPropsArb = fc.record({
    name: fc.string({ minLength: 1, maxLength: 50 }),
    description: fc.string({ minLength: 1, maxLength: 200 }),
    imageSrc: fc.constant('/images/test-product.jpg'),
    imageAlt: fc.string({ minLength: 1, maxLength: 100 }),
  })

  it('should always render with shadow styling for any valid props', () => {
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
        
        // Root element should have shadow styling
        const rootElement = container.firstChild as HTMLElement
        expect(rootElement).not.toBeNull()
        
        // Check for shadow class (using arbitrary value syntax)
        const className = rootElement?.className || ''
        expect(className).toContain('shadow-')
      }),
      { numRuns: 100 }
    )
  })

  it('should have the specific shadow value as per requirements (shadow-card from design tokens)', () => {
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
        
        const rootElement = container.firstChild as HTMLElement
        const className = rootElement?.className || ''
        
        // Check for the shadow-card class from design tokens (0 4px 20px rgba(0,0,0,0.08))
        expect(className).toContain('shadow-card')
      }),
      { numRuns: 100 }
    )
  })

  it('should have hover shadow enhancement class', () => {
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
        
        const rootElement = container.firstChild as HTMLElement
        const className = rootElement?.className || ''
        
        // Check for hover shadow enhancement
        expect(className).toContain('hover:shadow-')
      }),
      { numRuns: 100 }
    )
  })
})