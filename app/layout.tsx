import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/content/site-content'
import { GoogleAnalytics } from '@/components/analytics'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: [...siteContent.metadata.keywords],
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body leading-relaxed bg-background text-text-dark">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
