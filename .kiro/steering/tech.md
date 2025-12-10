# Tech Stack

## Framework & Core
- Next.js 14 (App Router) - SSR and SEO optimization
- React 18
- TypeScript (strict mode)

## Styling
- Tailwind CSS 3.4 - Utility-first styling
- Custom design tokens in `lib/design-tokens.ts`
- Mobile-first responsive design

## UI Libraries
- Framer Motion - Scroll reveal animations
- Lucide React - Icon library

## Fonts (via next/font/google)
- Playfair Display (serif) - Headings, heritage feel
- Inter (sans-serif) - Body text, modern readability

## Testing
- Jest + jest-environment-jsdom
- React Testing Library
- fast-check - Property-based testing

## Common Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Linting
npm run lint

# Run tests
npm test
```

## Path Aliases
- `@/*` maps to project root (e.g., `@/components/ui`)

## Image Optimization
- Next.js Image component with AVIF/WebP formats
- Configured device sizes for responsive images
