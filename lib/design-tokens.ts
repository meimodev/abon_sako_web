export const colors = {
  // Primary palette
  primary: '#E63946',        // Deep Coral Red
  primaryDark: '#C62828',    // Darker coral for gradients
  
  // Secondary palette  
  secondary: '#2EC4B6',      // Electric Teal
  secondaryDark: '#1A9E93',  // Darker teal for hover
  
  // Accent
  accent: '#FFD166',         // Vibrant Gold
  accentDark: '#F5B800',     // Darker gold for hover
  
  // Backgrounds
  background: '#FFFCF9',     // Warm Off-White
  backgroundAlt: '#FFF5F5',  // Subtle warm tint
  dark: '#1A1A2E',           // Rich Charcoal
  darkAlt: '#16162A',        // Darker variant
  
  // Text
  textDark: '#1A1A2E',       // Primary text on light
  textLight: '#FFFFFF',      // Primary text on dark
  textMuted: '#64748B',      // Secondary text
  
  // Legacy compatibility
  storyBg: '#FFF5F5',        // Updated to match new palette
} as const

export const typography = {
  fontHeading: 'Poppins',
  fontBody: 'Inter',
  h1Desktop: '4rem',         // 64px
  h1Mobile: '2.75rem',       // 44px
  h2: '2.5rem',              // 40px
  h3: '1.5rem',              // 24px
  body: '1.125rem',          // 18px
  small: '0.875rem',         // 14px
} as const

export const spacing = {
  sectionDesktop: '80px',
  sectionMobile: '48px',
  cardPadding: '24px',
  cardGap: '16px',
} as const
