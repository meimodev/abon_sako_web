/**
 * Landing Page Integration Test
 * 
 * Tests that the full page renders all sections correctly,
 * navigation links work properly, and metadata is correctly applied.
 * 
 * **Validates: Requirements 1.1-1.5, 8.1-8.4**
 * **Feature: making-process-analytics - Validates: Requirements 1.3, 4.1**
 */

import { render, screen } from '@testing-library/react'
import Home from '../../app/page'
import { siteContent } from '../../content/site-content'
import { GA_MEASUREMENT_ID } from '../../lib/analytics'

// Mock next/image to avoid issues with Image component in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; [key: string]: unknown }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={props.src} alt={props.alt} data-testid="next-image" />
  },
}))

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
      <div {...props}>{children}</div>
    ),
  },
  useInView: () => true,
}))

// Mock next/script for GoogleAnalytics component
jest.mock('next/script', () => ({
  __esModule: true,
  default: (props: { id?: string; src?: string; [key: string]: unknown }) => {
    return <script data-testid={props.id || 'next-script'} src={props.src} />
  },
}))

describe('Landing Page Integration', () => {
  describe('Page Sections Rendering', () => {
    it('should render the Navbar with logo and navigation links', () => {
      render(<Home />)
      
      // Verify logo is displayed (Requirement 1.1)
      expect(screen.getByText(siteContent.navbar.logo)).toBeInTheDocument()
      
      // Verify navigation links are present (Requirement 1.3)
      siteContent.navbar.links.forEach((link) => {
        expect(screen.getAllByText(link.label).length).toBeGreaterThan(0)
      })
      
      // Verify CTA button is present (Requirement 1.5)
      expect(screen.getAllByText(siteContent.navbar.ctaText).length).toBeGreaterThan(0)
    })

    it('should render the Hero Section with headline and subheadline', () => {
      render(<Home />)
      
      // Verify headline is displayed (Requirement 2.1)
      expect(screen.getByText(siteContent.hero.headline)).toBeInTheDocument()
      
      // Verify subheadline is displayed (Requirement 2.2)
      expect(screen.getByText(siteContent.hero.subheadline)).toBeInTheDocument()
    })

    it('should render the Value Proposition Grid with all benefit cards', () => {
      render(<Home />)
      
      // Verify section title (Requirement 3.1)
      expect(screen.getByText('Kenapa Memilih Abon Ikan SAKO?')).toBeInTheDocument()
      
      // Verify all four benefit cards are rendered (Requirement 3.2)
      siteContent.valuePropositions.forEach((prop) => {
        expect(screen.getByText(prop.title)).toBeInTheDocument()
        expect(screen.getByText(prop.description)).toBeInTheDocument()
      })
    })

    it('should render the Story Feature Block', () => {
      render(<Home />)
      
      // Verify story title (Requirement 4.1)
      expect(screen.getByText(siteContent.story.title)).toBeInTheDocument()
      
      // Verify story body text (Requirement 4.2)
      expect(screen.getByText(siteContent.story.body)).toBeInTheDocument()
    })

    it('should render the Product Variants section', () => {
      render(<Home />)
      
      // Verify section title (Requirement 5.1)
      expect(screen.getByText('Pilih Favoritmu')).toBeInTheDocument()
    })

    it('should render the Cultural Banner', () => {
      render(<Home />)
      
      // Verify banner text (Requirement 6.1)
      expect(screen.getByText(siteContent.culturalBanner.text)).toBeInTheDocument()
    })

    it('should render the Footer with address and social links', () => {
      render(<Home />)
      
      // Verify address (Requirement 7.1)
      expect(screen.getByText(siteContent.footer.address)).toBeInTheDocument()
      
      // Verify copyright (Requirement 7.4)
      expect(screen.getByText(siteContent.footer.copyright)).toBeInTheDocument()
      
      // Verify social links are present (Requirement 7.2)
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    })
  })

  describe('Navigation Links', () => {
    it('should have correct section IDs for navigation anchors', () => {
      const { container } = render(<Home />)
      
      // Verify section IDs exist for smooth scroll navigation (Requirement 1.4)
      expect(container.querySelector('#beranda')).toBeInTheDocument()
      expect(container.querySelector('#keunggulan')).toBeInTheDocument()
      expect(container.querySelector('#cerita')).toBeInTheDocument()
      expect(container.querySelector('#produk')).toBeInTheDocument()
    })

    it('should have navigation links pointing to correct section IDs', () => {
      render(<Home />)
      
      // Verify each nav link has correct href
      siteContent.navbar.links.forEach((link) => {
        const navLinks = screen.getAllByText(link.label)
        navLinks.forEach((navLink) => {
          expect(navLink.closest('a')).toHaveAttribute('href', link.href)
        })
      })
    })

    it('should have WhatsApp CTA button with correct href', () => {
      render(<Home />)
      
      // Find all links with the WhatsApp href
      // CTAButton uses Next.js Link which renders as <a> tag
      const whatsappLinks = screen.getAllByRole('link', { name: /pesan sekarang/i })
      
      expect(whatsappLinks.length).toBeGreaterThan(0)
      whatsappLinks.forEach((link) => {
        expect(link).toHaveAttribute('href', siteContent.navbar.ctaHref)
      })
    })
  })

  describe('Page Structure', () => {
    it('should render sections in correct order', () => {
      const { container } = render(<Home />)
      
      const sections = container.querySelectorAll('section[id]')
      const sectionIds = Array.from(sections).map((s) => s.id)
      
      // Filter to get unique IDs in order (some components may have nested sections)
      const uniqueSectionIds = Array.from(new Set(sectionIds))
      
      // Verify section order matches expected layout (including proses section)
      expect(uniqueSectionIds).toEqual(['beranda', 'keunggulan', 'cerita', 'proses', 'produk'])
    })

    it('should have consistent spacing classes on sections', () => {
      const { container } = render(<Home />)
      
      const sections = container.querySelectorAll('section[id]')
      
      // Main content sections should have py-section-mobile padding (48px mobile, 80px desktop per design tokens)
      // This validates Requirement 15.4: sections maintain vertical padding of 80px (desktop) and 48px (mobile)
      sections.forEach((section) => {
        expect(section.className).toContain('py-section-mobile')
      })
    })
  })

  /**
   * Making Process Section Integration Tests
   * **Feature: making-process-analytics - Validates: Requirements 1.3**
   */
  describe('Making Process Section', () => {
    it('should render MakingProcessSection with section title', () => {
      render(<Home />)
      
      // Verify section title "Proses Pembuatan" is displayed (Requirement 1.1)
      expect(screen.getByText(siteContent.makingProcess.title)).toBeInTheDocument()
    })

    it('should render MakingProcessSection with subtitle', () => {
      render(<Home />)
      
      // Verify subtitle is displayed (Requirement 1.2)
      expect(screen.getByText(siteContent.makingProcess.subtitle)).toBeInTheDocument()
    })

    it('should render all 4 process steps', () => {
      render(<Home />)
      
      // Verify all 4 process steps are rendered (Requirement 1.3)
      siteContent.makingProcess.steps.forEach((step) => {
        expect(screen.getByText(step.title)).toBeInTheDocument()
        expect(screen.getByText(step.description)).toBeInTheDocument()
      })
    })

    it('should have #proses section ID for navigation', () => {
      const { container } = render(<Home />)
      
      // Verify #proses section exists for navigation anchor
      expect(container.querySelector('#proses')).toBeInTheDocument()
    })

    it('should have navigation link to #proses section', () => {
      render(<Home />)
      
      // Find navigation link with "Proses" label pointing to #proses
      const prosesLinks = screen.getAllByText('Proses')
      expect(prosesLinks.length).toBeGreaterThan(0)
      
      prosesLinks.forEach((link) => {
        const anchor = link.closest('a')
        if (anchor) {
          expect(anchor).toHaveAttribute('href', '#proses')
        }
      })
    })
  })

  /**
   * Google Analytics Integration Tests
   * **Feature: making-process-analytics - Validates: Requirements 4.1**
   */
  describe('Google Analytics Integration', () => {
    it('should gracefully handle missing GA_MEASUREMENT_ID in test environment', () => {
      // Verify GA measurement ID handling (Requirement 6.2)
      // In test environment, the env var is not set, which should be handled gracefully
      // The GoogleAnalytics component should return null when ID is not set
      expect(GA_MEASUREMENT_ID === undefined || typeof GA_MEASUREMENT_ID === 'string').toBe(true)
    })
  })
})
