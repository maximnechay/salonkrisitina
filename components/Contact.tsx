'use client'

import BookingForm from './BookingForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useCookieConsent } from './CookieConsent'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    content: (
      <address className="not-italic text-lg font-light text-gray-700">
        Limbergstraße 53<br />
        38518 Gifhorn
      </address>
    ),
  },
  {
    icon: Phone,
    label: 'Telefon',
    content: (
      <div className="space-y-2">
        <a
          href="tel:+4917641290158"
          className="block text-lg font-light text-gray-700 hover:text-secondary transition"
        >
          <span className="font-medium">Kristina:</span> +49 176 412 901 58
        </a>
        <a
          href="tel:+491731758457"
          className="block text-lg font-light text-gray-700 hover:text-secondary transition"
        >
          <span className="font-medium">Alexandra:</span> +49 173 175 8457
        </a>
      </div>
    ),
  },
  {
    icon: Mail,
    label: 'E-Mail',
    content: (
      <a
        href="mailto:john_lidia@gmx.de"
        className="text-lg font-light text-gray-700 hover:text-secondary transition"
      >
        john_lidia@gmx.de
      </a>
    ),
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    content: (
      <div className="text-lg font-light text-gray-700">
        Montag – Sonntag<br />
        09:00 – 21:00 Uhr
      </div>
    ),
  },
]

function GoogleMap() {
  const { consent, openSettings } = useCookieConsent()

  // Если согласие ещё не загружено — показываем заглушку
  if (consent === null) {
    return (
      <div className="bg-gray-100 h-[450px] rounded-lg flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Laden...</div>
      </div>
    )
  }

  // Если нет согласия на карты — показываем placeholder
  if (!consent.maps) {
    return (
      <div className="bg-gray-100 h-[450px] rounded-lg flex flex-col items-center justify-center text-center px-6">
        <MapPin className="w-12 h-12 text-gray-400 mb-4" />
        <h4 className="text-lg font-medium text-gray-700 mb-2">
          Google Maps blockiert
        </h4>
        <p className="text-gray-600 text-sm mb-6 max-w-md">
          Um die interaktive Karte zu sehen, müssen Sie der Nutzung von
          Google Maps in den Cookie-Einstellungen zustimmen.
        </p>
        <button
          onClick={openSettings}
          className="px-6 py-2.5 bg-secondary text-primary text-sm font-medium rounded-lg hover:bg-secondary/90 transition"
        >
          Cookie-Einstellungen öffnen
        </button>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Limbergstra%C3%9Fe+53,38518+Gifhorn"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm text-secondary-dark underline hover:no-underline"
        >
          Alternativ: Route in Google Maps öffnen →
        </a>
      </div>
    )
  }

  // Согласие есть — показываем карту
  return (
    <iframe
      src="https://www.google.com/maps?q=Limbergstra%C3%9Fe%2053%2C%2038518%20Gifhorn&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Standort von Kristina & Alexandra Mastersalon in Gifhorn"
      className="rounded-lg"
    />
  )
}

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Contact Info */}
          <div>
            <div className="deco-line mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 font-serif">Kontakt</h2>

            <div className="space-y-10">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <div className="text-sm uppercase tracking-wider mb-3 text-secondary-dark flex items-center gap-2">
                    <info.icon className="w-4 h-4" />
                    {info.label}
                  </div>
                  {info.content}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm />
        </div>

        {/* Google Maps */}
        <div className="mt-20">
          <div className="deco-line mb-8" />
          <h3 className="text-3xl mb-8 font-semibold font-serif">So finden Sie uns</h3>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <GoogleMap />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Limbergstra%C3%9Fe+53,38518+Gifhorn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-secondary-dark underline hover:no-underline"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Route in Google Maps öffnen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}