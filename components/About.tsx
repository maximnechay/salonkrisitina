import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

function PersonCard({
  name,
  role,
  bio,
  instagramUrl,
  email,
  phone,
}: {
  name: string
  role: string
  bio: string
  instagramUrl?: string
  email?: string
  phone?: string
}) {
  return (
    <div className="p-6 border border-gray-100 rounded-none h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-serif leading-snug">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{role}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} auf Instagram`}
              className="inline-flex items-center justify-center w-9 h-9 border border-gray-200 hover:border-secondary transition"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-700" />
            </a>
          )}

          {(email || phone) && (
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center w-9 h-9 border border-gray-200 hover:border-secondary transition"
              aria-label={`Kontakt zu ${name}`}
              title="Kontakt"
            >
              {email ? (
                <Mail className="w-4 h-4 text-gray-700" />
              ) : (
                <Phone className="w-4 h-4 text-gray-700" />
              )}
            </Link>
          )}
        </div>
      </div>

      {/* одинаковая длина текста */}
      <p className="text-gray-600 font-light leading-relaxed mt-4 line-clamp-7">
        {bio}
      </p>

      {/* телефон/контакт всегда внизу */}
      {(email || phone) && (
        <div className="mt-auto pt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
          {email && (
            <a href={`mailto:${email}`} className="hover:text-secondary transition">
              {email}
            </a>
          )}
          {phone && (
            <a href={`tel:${phone}`} className="hover:text-secondary transition">
              {phone}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="deco-line mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-serif">
              Friseursalon für Frauen
            </h2>

            <p className="text-lg mb-10 text-gray-600 font-light leading-relaxed">
              Von Frauen, für Frauen. Ein Ort für präzise Schnitte, gepflegte Farbe und Looks,
              die nicht nur im Salon gut aussehen, sondern auch im Alltag funktionieren.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 items-stretch">
              <PersonCard
                name="Kristina Herold"
                role="Friseurmeisterin und Inhaberin"
                bio="Meisterhafte Friseurkunst mit Blick fürs Detail. Kristina steht für saubere Linien,
                harmonische Proportionen und ein Ergebnis, das zu Gesicht, Haarstruktur und Stil passt."
                instagramUrl="https://instagram.com/herold.kristina"
                phone="+4917641290158"
              />

              <PersonCard
                name="Alexandra Saltürk"
                role="Friseurmeisterin und Inhaberin"
                bio="Leidenschaft für moderne Looks und präzise Ausarbeitung. Alexandra legt Wert auf
                individuelle Beratung und ein Finish, das lange schön bleibt."
                instagramUrl="https://instagram.com/alexandra.saltuerk"
                phone="+491731758457"
              />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <Image
                src="/images/about.png"
                alt="Kristina & Alexandra Mastersalon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-secondary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
