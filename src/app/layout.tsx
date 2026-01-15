import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Reknock - Make Every Door Worth More',
  description: 'Turn missed opportunities into more sales with automated SMS follow-up built for door-to-door reps.',
  keywords: ['door-to-door sales', 'SMS automation', 'lead follow-up', 'sales CRM', 'text message marketing'],
  authors: [{ name: 'Reknock' }],
  openGraph: {
    title: 'Reknock - Make Every Door Worth More',
    description: 'Turn missed opportunities into more sales with automated SMS follow-up built for door-to-door reps.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Reknock',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reknock - Make Every Door Worth More',
    description: 'Turn missed opportunities into more sales with automated SMS follow-up built for door-to-door reps.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
