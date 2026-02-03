import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leaping Landscaping LLC | Professional Landscaping in Toronto',
  description: 'Professional landscaping services in Toronto, ON. Garden design, hardscaping, and maintenance. 5-star rated.',
  keywords: 'landscaping, garden design, hardscaping, maintenance, Toronto',
  authors: [{ name: 'Leaping Landscaping LLC' }],
  openGraph: {
    title: 'Leaping Landscaping LLC',
    description: 'Professional landscaping services in Toronto',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
