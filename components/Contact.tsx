import BookingForm from './BookingForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    content: (
      <address className="not-italic text-lg font-light text-gray-700">
        Musterstraße 10<br />
        30159 Hannover
      </address>
    ),
  },
  {
    icon: Phone,
    label: 'Telefon',
    content: (
      <a href="tel:+49511123456" className="text-lg font-light text-gray-700 hover:text-secondary transition">
        +49 (511) 123-456
      </a>
    ),
  },
  {
    icon: Mail,
    label: 'E-Mail',
    content: (
      <a href="mailto:info@harmonie-salon.de" className="text-lg font-light text-gray-700 hover:text-secondary transition">
        info@harmonie-salon.de
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
                  <div className="text-sm uppercase tracking-wider mb-3 text-secondary flex items-center gap-2">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.1234567890123!2d9.730000000000000!3d52.375900000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzMzLjIiTiA5wrA0Myc1NS4yIkU!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort von Beautysalon Harmonie in Hannover"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Musterstraße+10,30159+Hannover"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
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
