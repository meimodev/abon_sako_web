'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CTAButton } from '@/components/ui'
import { siteContent } from '@/content/site-content'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { navbar } = siteContent

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm transition-shadow duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Primary color with hover effect */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="font-heading text-2xl font-bold text-primary transition-colors duration-200 hover:text-primary-dark"
          >
            {navbar.logo}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold uppercase tracking-wide text-text-dark transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <CTAButton href={navbar.ctaHref} variant="primary">
              {navbar.ctaText}
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-background-alt md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-primary/10 bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-text-dark transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <CTAButton href={navbar.ctaHref} variant="primary" className="w-full text-center">
                {navbar.ctaText}
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
