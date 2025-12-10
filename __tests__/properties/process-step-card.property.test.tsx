/**
 * **Feature: making-process-analytics, Property 1: ProcessStepCard Component Completeness**
 * **Validates: Requirements 1.4**
 * 
 * For any ProcessStepCard component rendered with valid props (stepNumber, title, description),
 * the output SHALL contain a visible step number element, a title text element, and a description text element.
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import { ProcessStepCard } from '../../components/ui/ProcessStepCard'

describe('Property 1: ProcessStepCard Component Completeness', () => {
  // Arbitrary for generating valid ProcessStepCard props
  const processStepCardPropsArb = fc.record({
    stepNumber: fc.integer({ min: 1, max: 99 }),
    title: fc.string({ minLength: 1, maxLength: 100 }),
    description: fc.string({ minLength: 1, maxLength: 500 }),
  })

  it('should always render the step number for any valid props', () => {
    fc.assert(
      fc.property(processStepCardPropsArb, (props) => {
        const { container } = render(
          <ProcessStepCard 
            stepNumber={props.stepNumber} 
            title={props.title} 
            description={props.description} 
          />
        )
        
        // Step number should be rendered in a div with aria-label
        const stepNumberElement = container.querySelector('[aria-label^="Step"]')
        expect(stepNumberElement).not.toBeNull()
        expect(stepNumberElement?.textContent).toBe(String(props.stepNumber))
      }),
      { numRuns: 100 }
    )
  })

  it('should always render the title text for any valid props', () => {
    fc.assert(
      fc.property(processStepCardPropsArb, (props) => {
        const { container } = render(
          <ProcessStepCard 
            stepNumber={props.stepNumber} 
            title={props.title} 
            description={props.description} 
          />
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
      fc.property(processStepCardPropsArb, (props) => {
        const { container } = render(
          <ProcessStepCard 
            stepNumber={props.stepNumber} 
            title={props.title} 
            description={props.description} 
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

  it('should contain all three required elements (step number, title, description) for any valid props', () => {
    fc.assert(
      fc.property(processStepCardPropsArb, (props) => {
        const { container } = render(
          <ProcessStepCard 
            stepNumber={props.stepNumber} 
            title={props.title} 
            description={props.description} 
          />
        )
        
        // All three elements must be present
        const stepNumberElement = container.querySelector('[aria-label^="Step"]')
        const titleElement = container.querySelector('h3')
        const descriptionElement = container.querySelector('p')
        
        expect(stepNumberElement).not.toBeNull()
        expect(titleElement).not.toBeNull()
        expect(descriptionElement).not.toBeNull()
        
        // Verify content matches props
        expect(stepNumberElement?.textContent).toBe(String(props.stepNumber))
        expect(titleElement?.textContent).toBe(props.title)
        expect(descriptionElement?.textContent).toBe(props.description)
      }),
      { numRuns: 100 }
    )
  })
})
