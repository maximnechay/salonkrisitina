import type { Metadata } from "next"
import "./globals.css"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { CookieProvider, CookieBanner } from "@/components/CookieConsent"

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
  description: `${BRAND} in ${CITY} – Haarschnitte, Colorationen, Balayage, Highlights, Styling. Meisterqualität, individuelle Beratung, saubere Ergebnisse. Jetzt Termin vereinbaren.`,
  keywords: [
    // Lokale SEO Keywords
    `Friseur ${CITY}`,
    `Damenfriseur ${CITY}`,
    `Friseurmeisterin ${CITY}`,
    `Friseursalon ${CITY}`,
    `Haarsalon ${CITY}`,
    `Friseur in der Nähe`,
    // Service Keywords
    "Haarschnitt",
    "Damenhaarschnitt",
    "Farbe",
    "Coloration",
    "Balayage",
    "Strähnen",
    "Highlights",
    "Glossing",
    "Root Shadow",
    "Styling",
    "Föhnen",
    "Brautstyling",
    "Hochzeitsfrisur",
    "Augenbrauen zupfen",
    "Wimpern färben",
    // Regionale Keywords
    `Friseur Niedersachsen`,
    `Friseur 38518`,
  ],
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

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
        alt: `${BRAND} – Friseurmeisterinnen in ${CITY}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Friseurmeisterinnen in ${CITY}`,
    description: `Damenfriseur in ${CITY}: Haarschnitt, Farbe, Balayage, Styling.`,
    images: ["/images/og-image.png"],
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-DE": SITE_URL,
    },
  },

  // После регистрации в Google Search Console добавь код верификации:
  // verification: {
  //   google: "your-google-verification-code",
  // },

  category: "beauty",
}

// Расширенная Schema.org
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${SITE_URL}/#salon`,
  name: BRAND,
  image: `${SITE_URL}/images/og-image.png`,
  description: `${BRAND} in ${CITY} – Friseurmeisterinnen für Haarschnitt, Farbe, Balayage und Styling. Meisterqualität und individuelle Beratung.`,
  url: SITE_URL,
  telephone: "+49 176 412 901 58",
  email: "john_lidia@gmx.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Limbergstraße 53",
    addressLocality: CITY,
    addressRegion: "Niedersachsen",
    postalCode: "38518",
    addressCountry: "DE",
  },
  // Гео-координаты (уточни на https://www.latlong.net/)
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.469275,
    longitude: 10.547609,
  },
  // Часы работы (настрой под реальные!)
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  paymentAccepted: ["Cash", "EC-Karte"],
  currenciesAccepted: "EUR",
  // Услуги
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Friseurdienstleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Haarschnitt Damen",
          description: "Präzise Haarschnitte und typgerechtes Styling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Coloration",
          description: "Ansatzfarbe und Farbveredelung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Balayage",
          description: "Individuelle Freihand-Technik für natürliche Verläufe",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strähnen & Highlights",
          description: "Feine Highlights für mehr Dimension und Tiefe",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brautstyling",
          description: "Haarstyling und Make-up für Hochzeiten",
        },
      },
    ],
  },
  sameAs: ["https://instagram.com/kristinaalexandra25"],
  founder: [
    {
      "@type": "Person",
      name: "Kristina Herold",
      jobTitle: "Friseurmeisterin",
    },
    {
      "@type": "Person",
      name: "Alexandra Saltürk",
      jobTitle: "Friseurmeisterin",
    },
  ],
}

// LocalBusiness для Google
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: BRAND,
  image: `${SITE_URL}/images/og-image.png`,
  telephone: "+49 176 412 901 58",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Limbergstraße 53",
    addressLocality: CITY,
    addressRegion: "Niedersachsen",
    postalCode: "38518",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.469275,
    longitude: 10.547609,
  },
  url: SITE_URL,
  priceRange: "€€",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${brandSerif.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="K&A" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#1a1a1a" />

        {/* Geo Tags для локального SEO */}
        <meta name="geo.region" content="DE-NI" />
        <meta name="geo.placename" content={CITY} />
        <meta name="geo.position" content="52.469275;10.547609" />
        <meta name="ICBM" content="52.469275, 10.547609" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased font-sans">
        <CookieProvider>
          {children}
          <CookieBanner />
        </CookieProvider>
      </body>
    </html>
  )
}