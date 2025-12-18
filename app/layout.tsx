import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bsalon.vercel.app'),
  title: {
    default: 'Beautysalon Harmonie | Professionelle Schönheitspflege in Hannover',
    template: '%s | Beautysalon Harmonie',
  },
  description: 'Beautysalon Harmonie in Hannover - Friseur, Maniküre, Pediküre, Kosmetik, Massagen. ✓ Professionelle Meister ✓ Premium Produkte ✓ Faire Preise. Jetzt Termin vereinbaren!',
  keywords: ['Beautysalon Hannover', 'Friseur Hannover', 'Maniküre', 'Pediküre', 'Kosmetik', 'Massage', 'Wimpernverlängerung', 'Augenbrauen', 'Schönheitssalon'],
  authors: [{ name: 'Beautysalon Harmonie' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://bsalon.vercel.app',
    siteName: 'Beautysalon Harmonie',
    title: 'Beautysalon Harmonie | Professionelle Schönheitspflege in Hannover',
    description: 'Ihr Premium Beautysalon in Hannover. Friseur, Maniküre, Kosmetik und mehr. Buchen Sie jetzt online!',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautysalon Harmonie Hannover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beautysalon Harmonie | Professionelle Schönheitspflege in Hannover',
    description: 'Ihr Premium Beautysalon in Hannover. Friseur, Maniküre, Kosmetik und mehr.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://bsalon.vercel.app',
  },
}

// Schema.org structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Beautysalon Harmonie',
  image: 'https://bsalon.vercel.app/images/salon.jpg',
  description: 'Premium Beautysalon in Hannover mit professionellen Dienstleistungen',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Musterstraße 10',
    addressLocality: 'Hannover',
    addressRegion: 'Niedersachsen',
    postalCode: '30159',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.3759,
    longitude: 9.732,
  },
  url: 'https://bsalon.vercel.app',
  telephone: '+49-511-123456',
  email: 'info@harmonie-salon.de',
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
