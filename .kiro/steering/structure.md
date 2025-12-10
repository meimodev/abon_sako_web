# Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Landing page (single page app)
│   └── globals.css         # Global styles and Tailwind imports
│
├── components/
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── sections/           # Page sections (Hero, ProductVariants, etc.)
│   │   └── index.ts        # Barrel export for sections
│   └── ui/                 # Reusable UI primitives (CTAButton, FeatureCard, etc.)
│       └── index.ts        # Barrel export for UI components
│
├── content/                # Content data (separated from components)
│   ├── site-content.ts     # All site copy, nav links, metadata
│   └── products.ts         # Product variant data
│
├── lib/                    # Utilities and shared code
│   └── design-tokens.ts    # Color and typography constants
│
├── public/images/          # Static images
│
└── __tests__/
    ├── integration/        # Integration tests
    └── properties/         # Property-based tests (fast-check)
```

## Conventions

### Components
- Use named exports with matching filenames
- Export types alongside components (e.g., `CTAButtonProps`)
- Use barrel files (`index.ts`) for clean imports
- Mark client components with `'use client'` directive when needed

### Content Management
- All user-facing text lives in `content/` directory
- Components import content from centralized files
- Use TypeScript interfaces for content shapes

### Styling
- Tailwind utility classes inline
- Custom colors defined in `tailwind.config.ts` (primary, secondary, story-bg)
- Design tokens in `lib/design-tokens.ts` for programmatic access
