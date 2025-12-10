import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: {
          DEFAULT: '#0B9BB6',
          dark: '#087A8F',
        },
        // Secondary palette
        secondary: {
          DEFAULT: '#2EC4B6',
          dark: '#1A9E93',
        },
        // Accent
        accent: {
          DEFAULT: '#FFD166',
          dark: '#F5B800',
        },
        // Backgrounds
        background: {
          DEFAULT: '#FFFCF9',
          alt: '#FFF5F5',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          alt: '#16162A',
        },
        // Text colors
        'text-dark': '#1A1A2E',
        'text-light': '#FFFFFF',
        'text-muted': '#64748B',
        muted: '#64748B',
        // Legacy compatibility
        'story-bg': '#FFF5F5',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        // Legacy support
        serif: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-mobile': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        'section-desktop': '80px',
        'section-mobile': '48px',
        'card-padding': '24px',
        'card-gap': '16px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0B9BB6 0%, #087A8F 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #2EC4B6 0%, #1A9E93 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFD166 0%, #F5B800 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0B9BB6 0%, #1A1A2E 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 14px rgba(11, 155, 182, 0.4)',
      },
      borderRadius: {
        'button': '12px',
      },
      transitionDuration: {
        'hover': '200ms',
      },
      fill: {
        'background': '#FFFCF9',
        'background-alt': '#FFF5F5',
        'dark': '#1A1A2E',
        'dark-alt': '#16162A',
        'primary': '#0B9BB6',
        'secondary': '#2EC4B6',
      },
    },
  },
  plugins: [],
}

export default config
