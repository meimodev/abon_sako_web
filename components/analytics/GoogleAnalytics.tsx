'use client'

import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'

export interface GoogleAnalyticsProps {
  measurementId?: string
}

/**
 * Google Analytics 4 component
 * Requirements: 4.1, 4.2, 4.3, 4.4, 6.2, 6.3, 6.4
 * 
 * - Uses Next.js Script component with "afterInteractive" strategy (Req 4.2)
 * - Loads gtag.js from googletagmanager.com (Req 6.4)
 * - Initializes gtag with measurement ID and consent settings (Req 4.3)
 * - Skips initialization gracefully when env var is not set (Req 6.2)
 * - Does not impact Core Web Vitals or page load performance (Req 6.3)
 */
export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const gaId = measurementId || GA_MEASUREMENT_ID

  // Skip initialization gracefully when measurement ID is not set (Requirement 6.2)
  if (!gaId) {
    return null
  }

  return (
    <>
      {/* Load gtag.js from Google (Requirement 6.4) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      {/* Initialize gtag with consent settings (Requirements 4.1, 4.3, 4.4) */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configure consent settings for GDPR compliance (Requirement 4.3)
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'denied'
            });
            
            // Initialize GA4 with measurement ID (Requirement 4.1)
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href
            });
          `,
        }}
      />
    </>
  )
}
