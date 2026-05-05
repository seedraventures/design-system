import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEEDRA Design System',
  description: 'Brand identity and component system for SEEDRA Ventures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'SEEDRA Design System',
  description: 'Brand identity and component system for SEEDRA Ventures',
  icons: {
    icon: '/favicon.png',
  },
}
