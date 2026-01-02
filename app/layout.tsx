import type { Metadata } from "next"
import "./globals.css"
import { Inter, Cormorant_Garamond } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const brandSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-brand",
})

const SITE_URL = "https://mastersalon.vercel.app" // поменяй на свой домен
const BRAND = "Kristina & Alexandra MASTERSALON"
const CITY = "Gifhorn"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} | Friseurmeisterinnen in ${CITY}`,
    template: `%s | ${BRAND}`,
  },
  description: `${BRAND} in ${CITY} – Damenfriseur, Haarschnitte, Colorationen, Balayage, Highlights, Styling. Meisterqualität, individuelle Beratung, saubere Ergebnisse. Jetzt Termin vereinbaren.`,
  keywords: [
    `Friseur ${CITY}`,
    `Damenfriseur ${CITY}`,
    `Friseurmeisterin ${CITY}`,
    "Haarschnitt",
    "Farbe",
    "Balayage",
    "Strähnen",
    "Highlights",
    "Glossing",
    "Styling",
    "Föhnen",
  ],
  authors: [{ name: BRAND }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: BRAND,
    title: `${BRAND} | Friseurmeisterinnen in ${CITY}`,
    description: `${BRAND} in ${CITY} – Haarschnitte, Farbe, Balayage, Styling. Jetzt Termin buchen.`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND} ${CITY}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Friseurmeisterinnen in ${CITY}`,
    description: `Damenfriseur in ${CITY}: Haarschnitt, Farbe, Balayage, Styling.`,
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: SITE_URL },
}

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: BRAND,
  image: `${SITE_URL}/images/og-image.jpg`,
  description: `${BRAND} in ${CITY} – Friseurmeisterinnen für Haarschnitt, Farbe, Balayage und Styling.`,
  url: SITE_URL,
  telephone: "+49-XXX-XXXXXXX", // TODO
  email: "info@mastersalon.de", // TODO
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "STRAßE 1", // TODO
    addressLocality: CITY,
    addressRegion: "Niedersachsen",
    postalCode: "38518", // TODO (поставь свой)
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.48, // TODO
    longitude: 10.55, // TODO
  },
  areaServed: {
    "@type": "City",
    name: CITY,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://instagram.com/kristinaalexandra25", // если другой - поменяй
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${brandSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
