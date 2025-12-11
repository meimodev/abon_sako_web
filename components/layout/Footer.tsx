import { Instagram, Facebook } from 'lucide-react'
import { CTAButton } from '@/components/ui'
import { siteContent } from '@/content/site-content'

export function Footer() {
  const { footer, navbar } = siteContent

  return (
    <footer className="bg-dark py-16 text-text-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Address */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-text-light">
              {footer.locationLabel}
            </h3>
            <a href={footer.addressLink} target="_blank" rel="noopener noreferrer"
              className=" text-gray-400 transition-all duration-200 hover:bg-primary hover:text-white"
            >{footer.address}</a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-text-light">
              {footer.socialLabel}
            </h3>
            <div className="flex gap-4">
              <a
                href={footer.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-alt text-gray-400 transition-all duration-200 hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={footer.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-alt text-gray-400 transition-all duration-200 hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-text-light">
              {footer.ctaLabel}
            </h3>
            <CTAButton href={navbar.ctaHref} variant="accent">
              {footer.ctaButtonText}
            </CTAButton>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            {new Date().getFullYear()} {footer.copyright}
            <span className="hidden sm:inline"> • </span>
            <span className="mt-4 block sm:mt-0 sm:inline sm:pl-2">
              <a
                href={footer.author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-gray-300 transition-transform duration-300 hover:-translate-y-0.5"
              >
                {/* Moving Outer Glow (Shadow) */}
                <span className="animate-shine absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/75 to-transparent blur-md" />

                {/* Button Body (Clipped) */}
                <span className="absolute inset-0 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-primary group-hover:ring-primary/50">
                  {/* Hover Gradient Overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Internal Shimmer */}
                  <span className="animate-shine absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
                </span>

                {/* Text Content */}
                <span className="relative z-10 flex items-center gap-1 group-hover:text-white">
                  {footer.author.label}
                </span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
