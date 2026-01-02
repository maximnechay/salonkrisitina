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

const SITE_URL = "https://kristinaalexandramastersalon.vercel.app"
const BRAND = "Kristina & Alexandra Mastersalon"
const CITY = "Gifhorn"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} | Friseurmeisterinnen in ${CITY}`,
    template: `%s | ${BRAND}`,
  },
  description:
    `${BRAND} in ${CITY} – Haarschnitte, Colorationen, Balayage, Highlights, Styling. Meisterqualität, individuelle Beratung, saubere Ergebnisse. Jetzt Termin vereinbaren.`,
  keywords: [
    `Friseur ${CITY}`,
    `Damenfriseur ${CITY}`,
    `Friseurmeisterin ${CITY}`,
    "Haarschnitt",
    "Farbe",
    "Coloration",
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
    description: `${BRAND} in ${CITY} – Haarschnitte, Farbe, Balayage, Styling. Jetzt Termin anfragen.`,
    images: [
      {
        url: "/images/og-image.png",
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
    images: ["/images/og-image.png"],
  },

  alternates: { canonical: SITE_URL },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: BRAND,
  image: `${SITE_URL}/images/og-image.png`,
  description: `${BRAND} in ${CITY} – Friseurmeisterinnen für Haarschnitt, Farbe, Balayage und Styling.`,
  url: SITE_URL,
  telephone: ["+49 176 412 901 58", "+49 173 175 8457"],
  email: "john_lidia@gmx.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Limbergstraße 53",
    addressLocality: CITY,
    addressRegion: "Niedersachsen",
    postalCode: "38518",
    addressCountry: "DE",
  },
  sameAs: [
    "https://instagram.com/kristinaalexandra25",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${brandSerif.variable}`}>
      <head>
        {/* favicons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="K&A" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
