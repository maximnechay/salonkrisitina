import Link from "next/link"
import Image from "next/image"

const navigation = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#preise", label: "Preise" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
]

const legalLinks = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/agb", label: "AGB" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6 flex flex-col items-start">
              <Image
                src="/brand/ka.png"
                alt="KA"
                width={220}
                height={220}
                className="h-12 w-auto object-contain mb-3"
                priority
              />

              <h3 className="text-2xl font-semibold text-white font-serif leading-none whitespace-nowrap">
                Kristina & Alexandra
              </h3>
            </div>

            <p className="text-sm font-light leading-relaxed text-gray-400">
              Ihr Premium Beautysalon für zeitlose Schönheit im Herzen von Gifhorn.
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
                Limbergstraße 53
                <br />
                38518 Gifhorn
              </p>

              <p>
                <span className="text-gray-300">Kristina: </span>
                <a href="tel:+4917641290158" className="hover:text-white transition">
                  +49 176 412 901 58
                </a>
              </p>

              <p>
                <span className="text-gray-300">Alexandra: </span>
                <a href="tel:+491731758457" className="hover:text-white transition">
                  +49 173 175 8457
                </a>
              </p>

              <p>
                <a href="mailto:john_lidia@gmx.de" className="hover:text-white transition">
                  john_lidia@gmx.de
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
          <p>© {new Date().getFullYear()} Kristina & Alexandra. Alle Rechte vorbehalten.</p>

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