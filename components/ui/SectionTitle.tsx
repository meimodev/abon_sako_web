export interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  /** Light variant for dark backgrounds, dark variant for light backgrounds */
  variant?: 'dark' | 'light'
}

export function SectionTitle({ children, className = '', variant = 'dark' }: SectionTitleProps) {
  const variantStyles = {
    dark: 'text-primary',
    light: 'text-white',
  }

  return (
    <h2 
      className={`font-heading text-h2 font-bold tracking-tight ${variantStyles[variant]} ${className}`}
    >
      {children}
    </h2>
  )
}
