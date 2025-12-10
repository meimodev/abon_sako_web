/**
 * **Feature: making-process-analytics, Property 2: CTA Click Event Tracking**
 * **Feature: making-process-analytics, Property 3: Section View Event Tracking**
 * **Validates: Requirements 5.1, 5.2, 5.3**
 * 
 * Property 2: For any CTA button click, the analytics system SHALL send an event
 * containing action 'cta_click', category 'engagement', the button label, and destination URL.
 * 
 * Property 3: For any major section that becomes visible, the analytics system SHALL send
 * an event containing action 'section_view', category 'engagement', and the section name.
 */

import * as fc from 'fast-check'

// Track captured events
let capturedEvents: Array<{ action: string; params: Record<string, unknown> }> = []

// Analytics module functions - will be loaded dynamically
let trackCTAClick: (label: string, destination: string) => void
let trackSectionView: (sectionName: string) => void
let trackEvent: (event: { action: string; category: string; label: string; value?: number }) => void

beforeAll(async () => {
  // Set environment variable before module loads
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'G-TEST123'
  
  // Mock window.gtag
  Object.defineProperty(global, 'window', {
    value: {
      gtag: (command: string, action: string, params: Record<string, unknown>) => {
        if (command === 'event') {
          capturedEvents.push({ action, params })
        }
      },
    },
    writable: true,
    configurable: true,
  })
  
  // Reset modules to ensure fresh import with env var set
  jest.resetModules()
  
  // Dynamically import the module after mocks are set up
  const analytics = await import('../../lib/analytics')
  trackCTAClick = analytics.trackCTAClick
  trackSectionView = analytics.trackSectionView
  trackEvent = analytics.trackEvent
})

afterAll(() => {
  delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
})

describe('Property 2: CTA Click Event Tracking', () => {
  beforeEach(() => {
    capturedEvents = []
  })

  // Arbitrary for generating valid CTA click parameters
  const ctaClickArb = fc.record({
    label: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
    destination: fc.oneof(
      fc.webUrl(),
      fc.constant('https://wa.me/6281234567890'),
      fc.constant('#section-id')
    ),
  })

  it('should always produce cta_click event with correct action for any label and destination', () => {
    fc.assert(
      fc.property(ctaClickArb, ({ label, destination }) => {
        capturedEvents = []
        trackCTAClick(label, destination)
        
        // Should have at least one event with action 'cta_click'
        const ctaEvent = capturedEvents.find(e => e.action === 'cta_click')
        expect(ctaEvent).toBeDefined()
        expect(ctaEvent?.action).toBe('cta_click')
      }),
      { numRuns: 100 }
    )
  })

  it('should always include engagement category for any CTA click', () => {
    fc.assert(
      fc.property(ctaClickArb, ({ label, destination }) => {
        capturedEvents = []
        trackCTAClick(label, destination)
        
        const ctaEvent = capturedEvents.find(e => e.action === 'cta_click')
        expect(ctaEvent?.params.event_category).toBe('engagement')
      }),
      { numRuns: 100 }
    )
  })

  it('should always include the button label in the event for any CTA click', () => {
    fc.assert(
      fc.property(ctaClickArb, ({ label, destination }) => {
        capturedEvents = []
        trackCTAClick(label, destination)
        
        const ctaEvent = capturedEvents.find(e => e.action === 'cta_click')
        expect(ctaEvent?.params.event_label).toBe(label)
      }),
      { numRuns: 100 }
    )
  })

  it('should trigger generate_lead event for WhatsApp destinations', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
        (label) => {
          capturedEvents = []
          const whatsappUrl = 'https://wa.me/6281234567890'
          trackCTAClick(label, whatsappUrl)
          
          // Should have generate_lead event for WhatsApp URLs
          const leadEvent = capturedEvents.find(e => e.action === 'generate_lead')
          expect(leadEvent).toBeDefined()
          expect(leadEvent?.params.event_category).toBe('conversion')
        }
      ),
      { numRuns: 100 }
    )
  })
})

describe('Property 3: Section View Event Tracking', () => {
  beforeEach(() => {
    capturedEvents = []
  })

  // Arbitrary for generating valid section names
  const sectionNameArb = fc.oneof(
    fc.constant('hero'),
    fc.constant('keunggulan'),
    fc.constant('cerita'),
    fc.constant('proses'),
    fc.constant('produk'),
    fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0)
  )

  it('should always produce section_view event with correct action for any section name', () => {
    fc.assert(
      fc.property(sectionNameArb, (sectionName) => {
        capturedEvents = []
        trackSectionView(sectionName)
        
        const sectionEvent = capturedEvents.find(e => e.action === 'section_view')
        expect(sectionEvent).toBeDefined()
        expect(sectionEvent?.action).toBe('section_view')
      }),
      { numRuns: 100 }
    )
  })

  it('should always include engagement category for any section view', () => {
    fc.assert(
      fc.property(sectionNameArb, (sectionName) => {
        capturedEvents = []
        trackSectionView(sectionName)
        
        const sectionEvent = capturedEvents.find(e => e.action === 'section_view')
        expect(sectionEvent?.params.event_category).toBe('engagement')
      }),
      { numRuns: 100 }
    )
  })

  it('should always include the section name as label for any section view', () => {
    fc.assert(
      fc.property(sectionNameArb, (sectionName) => {
        capturedEvents = []
        trackSectionView(sectionName)
        
        const sectionEvent = capturedEvents.find(e => e.action === 'section_view')
        expect(sectionEvent?.params.event_label).toBe(sectionName)
      }),
      { numRuns: 100 }
    )
  })
})

describe('Base trackEvent function', () => {
  beforeEach(() => {
    capturedEvents = []
  })

  // Arbitrary for generating valid analytics events
  const analyticsEventArb = fc.record({
    action: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
    category: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
    label: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
    value: fc.option(fc.integer({ min: 0, max: 1000 }), { nil: undefined }),
  })

  it('should preserve all event parameters for any valid event', () => {
    fc.assert(
      fc.property(analyticsEventArb, (event) => {
        capturedEvents = []
        trackEvent(event)
        
        expect(capturedEvents.length).toBe(1)
        expect(capturedEvents[0].action).toBe(event.action)
        expect(capturedEvents[0].params.event_category).toBe(event.category)
        expect(capturedEvents[0].params.event_label).toBe(event.label)
      }),
      { numRuns: 100 }
    )
  })
})
