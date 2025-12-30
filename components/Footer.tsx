import Link from 'next/link'

const navigation = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#kontakt', label: 'Kontakt' },
]

const legalLinks = [
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/agb', label: 'AGB' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-6 font-semibold text-white font-serif">
              Kristina & Alexandra
            </h3>
            <p className="text-sm font-light leading-relaxed text-gray-400">
              Ihr Premium Beautysalon für zeitlose Schönheit im Herzen von Hannover.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-secondary">
              Navigation
            </h4>
            <nav className="space-y-3">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-light text-gray-400 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-secondary">
              Kontakt
            </h4>
            <address className="not-italic space-y-3 text-sm font-light text-gray-400">
              <p>
                Musterstraße 10<br />
                30159 Hannover
              </p>
              <p>
                <a href="tel:+49511123456" className="hover:text-white transition">
                  +49 (511) 123-456
                </a>
              </p>
              <p>
                <a href="mailto:info@harmonie-salon.de" className="hover:text-white transition">
                  info@harmonie-salon.de
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-secondary">
              Öffnungszeiten
            </h4>
            <div className="text-sm font-light text-gray-400">
              <p className="mb-2">Montag – Sonntag</p>
              <p>09:00 – 21:00 Uhr</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light text-gray-500">
          <p>© {new Date().getFullYear()} Beautysalon Harmonie. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
