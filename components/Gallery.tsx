"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type GalleryItem = {
  src: string
  alt: string
  label?: string
  tag?: "cut" | "color" | "styling" | "other" | "care"
}

const galleryItems: GalleryItem[] = [
  // Blond / Balayage / Highlights
  { src: "/images/gallery/real/balayage-vanilla-blonde.jpg", alt: "Balayage Vanilla Blonde in Gifhorn", label: "Balayage Vanilla Blonde", tag: "color" },
  { src: "/images/gallery/real/balayage-beige-blonde.jpg", alt: "Balayage Beige Blond mit weichen Übergängen in Gifhorn", label: "Balayage Beige Blond", tag: "color" },
  { src: "/images/gallery/real/balayage-ash-blonde.jpg", alt: "Balayage Aschblond mit kühlen Nuancen in Gifhorn", label: "Balayage Aschblond", tag: "color" },
  { src: "/images/gallery/real/balayage-honey-blonde.jpg", alt: "Balayage Honigblond mit natürlichem Glow in Gifhorn", label: "Balayage Honigblond", tag: "color" },
  { src: "/images/gallery/real/balayage-caramel-melt.jpg", alt: "Caramel Melt Balayage mit warmem Farbverlauf in Gifhorn", label: "Caramel Melt", tag: "color" },
  { src: "/images/gallery/real/balayage-icy-blonde.jpg", alt: "Icy Blonde Balayage mit sehr hellem Finish in Gifhorn", label: "Icy Blonde Balayage", tag: "color" },
  { src: "/images/gallery/real/babylights-natural-blonde.jpg", alt: "Babylights für natürliches Blond in Gifhorn", label: "Babylights Blond", tag: "color" },
  { src: "/images/gallery/real/foilyage-bright-blonde.jpg", alt: "Foilyage für strahlendes Blond in Gifhorn", label: "Foilyage Blond", tag: "color" },
  { src: "/images/gallery/real/highlights-face-framing.jpg", alt: "Face Framing Highlights für helle Konturen in Gifhorn", label: "Face Framing", tag: "color" },
  { src: "/images/gallery/real/money-piece-highlights.jpg", alt: "Money Piece Highlights vorne heller gesetzt in Gifhorn", label: "Money Piece", tag: "color" },
  { src: "/images/gallery/real/blonde-refresh-toning.jpg", alt: "Blondauffrischung und Glossing in Gifhorn", label: "Blond Refresh + Gloss", tag: "color" },

  // Brunette / Brown tones
  { src: "/images/gallery/real/bronde-balayage.jpg", alt: "Bronde Balayage zwischen Blond und Braun in Gifhorn", label: "Bronde Balayage", tag: "color" },
  { src: "/images/gallery/real/chocolate-brown-gloss.jpg", alt: "Schokobraun mit Glanzfinish in Gifhorn", label: "Chocolate Gloss", tag: "color" },
  { src: "/images/gallery/real/chestnut-brown.jpg", alt: "Kastanienbraun mit warmen Reflexen in Gifhorn", label: "Chestnut Brown", tag: "color" },
  { src: "/images/gallery/real/mocha-melt.jpg", alt: "Mocha Melt weicher Übergang in Gifhorn", label: "Mocha Melt", tag: "color" },
  { src: "/images/gallery/real/brunette-dimension.jpg", alt: "Brunette Dimension mit dezenten Highlights in Gifhorn", label: "Brunette Dimension", tag: "color" },

  // Pflege / Aufbau / Glanz
  { src: "/images/gallery/real/keratin-smooth-finish.jpg", alt: "Glattes Finish nach Pflegebehandlung in Gifhorn", label: "Smooth Finish", tag: "care" },
  { src: "/images/gallery/real/bond-repair-treatment.jpg", alt: "Bond Repair Behandlung für strapaziertes Haar in Gifhorn", label: "Bond Repair", tag: "care" },
  { src: "/images/gallery/real/glossing-shine.jpg", alt: "Glossing für extra Glanz und Ton in Gifhorn", label: "Glossing Shine", tag: "care" },

  // Styling / Waves
  { src: "/images/gallery/real/soft-hollywood-waves.jpg", alt: "Soft Hollywood Waves Styling in Gifhorn", label: "Soft Waves", tag: "styling" },
  { src: "/images/gallery/real/loose-curls-finish.jpg", alt: "Lockeres Styling mit großen Wellen in Gifhorn", label: "Loose Curls", tag: "styling" },
  { src: "/images/gallery/real/blowout-volume.jpg", alt: "Blowout mit Volumen und Finish in Gifhorn", label: "Blowout Volume", tag: "styling" },

  // Schnitte (noch ein paar)
  { src: "/images/gallery/real/long-layers-cut.jpg", alt: "Long Layers Schnitt für langes Haar in Gifhorn", label: "Long Layers", tag: "cut" },
  { src: "/images/gallery/real/bob-cut-sleek.jpg", alt: "Sleeker Bob Haarschnitt in Gifhorn", label: "Sleek Bob", tag: "cut" },
  { src: "/images/gallery/real/ends-trim-refresh.jpg", alt: "Spitzen schneiden und auffrischen in Gifhorn", label: "Spitzen Fresh Up", tag: "cut" },
]


const FILTERS = [
  { key: "all", label: "Alle" },
  { key: "cut", label: "Schnitt" },
  { key: "color", label: "Farbe" },
  { key: "styling", label: "Styling" },
  { key: "care", label: "Care" },
] as const

export default function GalleryMasonry() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]["key"]>("all")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (activeFilter === "all") return galleryItems
    return galleryItems.filter((i) => i.tag === activeFilter)
  }, [activeFilter])

  const current = openIndex === null ? null : filtered[openIndex]

  const close = () => setOpenIndex(null)
  const prev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
  const next = () => setOpenIndex((i) => (i === null ? i : (i + 1) % filtered.length))

  useEffect(() => {
    if (openIndex === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [openIndex, filtered.length])

  return (
    <section id="galerie" className="py-24 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="max-w-3xl">
          <div className="deco-line mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">Portfolio</h2>
          <p className="text-xl text-gray-600 font-light">
            Einblicke in unsere Arbeit – echte Ergebnisse, sauber umgesetzt.
          </p>
        </div>

        {/* filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = f.key === activeFilter
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={[
                  "px-4 py-2 text-sm border rounded-none transition",
                  active ? "border-secondary text-secondary" : "border-gray-200 text-gray-700 hover:border-gray-300",
                ].join(" ")}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* masonry */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="columns-2 lg:columns-4 gap-2 [column-fill:_balance]">
          {filtered.map((item, idx) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="group mb-2 w-full break-inside-avoid overflow-hidden bg-gray-100"
              aria-label={`Foto öffnen: ${item.alt}`}
            >
              <div className="relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                {item.label && (
                  <div className="absolute left-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs tracking-widest uppercase">{item.label}</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Folgen Sie uns für tägliche Inspiration</p>
          <a
            href="https://instagram.com/kristinaalexandra25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-secondary font-medium hover:underline"
          >
            @kristinaalexandra25 auf Instagram
          </a>
        </div>
      </div>

      {/* lightbox */}
      {current && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 w-11 h-11 inline-flex items-center justify-center border border-white/20 hover:border-white/40 transition"
            aria-label="Schließen"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {filtered.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center border border-white/20 hover:border-white/40 transition"
                aria-label="Vorheriges"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center border border-white/20 hover:border-white/40 transition"
                aria-label="Nächstes"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          <div className="max-w-5xl w-full">
            <div className="relative w-full bg-black">
              <Image
                src={current.src}
                alt={current.alt}
                width={1800}
                height={2400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div className="mt-3 text-white/80 text-sm flex items-center justify-between gap-4">
              <span className="truncate">{current.alt}</span>
              {current.label && <span className="text-white/70 uppercase tracking-widest text-xs">{current.label}</span>}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
