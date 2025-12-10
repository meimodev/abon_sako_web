// Google Analytics 4 utility functions
// Requirements: 5.1, 5.2, 5.3, 5.4, 6.1

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

// GA4 Measurement ID from environment variable (Requirement 6.1)
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Analytics event interface
export interface AnalyticsEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

/**
 * Base function to track events to GA4
 * Requirement 5.3: Include relevant parameters for detailed analysis
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
}

/**
 * Track CTA button clicks
 * Requirement 5.1: Track CTA clicks with button label and destination URL
 * Requirement 5.4: Track WhatsApp clicks as generate_lead conversion events
 */
export function trackCTAClick(label: string, destination: string): void {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label,
    value: 1,
  });

  // Handle WhatsApp clicks as generate_lead conversion events (Requirement 5.4)
  if (destination.includes('wa.me')) {
    if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: label,
      });
    }
  }
}

/**
 * Track section views when user scrolls to a section
 * Requirement 5.2: Track section visibility with section name
 */
export function trackSectionView(sectionName: string): void {
  trackEvent({
    action: 'section_view',
    category: 'engagement',
    label: sectionName,
  });
}
