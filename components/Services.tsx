const services = [
  {
    number: '01',
    title: 'Schnitt & Styling',
    description:
      'Präzise Haarschnitte und typgerechtes Styling – klar, modern und alltagstauglich.',
  },
  {
    number: '02',
    title: 'Coloration',
    description:
      'Ansatzfarbe und Farbveredelung für ein harmonisches, gepflegtes Ergebnis.',
  },
  {
    number: '03',
    title: 'Strähnen',
    description:
      'Oberkopf oder ganzer Kopf – feine Highlights für mehr Dimension und Tiefe.',
  },
  {
    number: '04',
    title: 'Gloss & Root Shadow',
    description:
      'Farbglanz und weiche Übergänge – für ein sauberes Finish und natürliche Looks.',
  },
  {
    number: '05',
    title: 'Balayage',
    description:
      'Individuelle Freihand-Technik für natürliche Verläufe und einen hochwertigen, modernen Effekt.',
  },
  {
    number: '06',
    title: 'Brautstyling',
    description:
      'Haarstyling und Make-up für Standesamt oder Hochzeit – stilvoll, haltbar, fototauglich.',
  },
  {
    number: '07',
    title: 'Augenbrauen',
    description:
      'Zupfen und Färben – klare Form, saubere Linien, natürlicher Rahmen fürs Gesicht.',
  },
  {
    number: '08',
    title: 'Wimpern',
    description:
      'Wimpern färben für einen ausdrucksstarken Blick – dezent und gepflegt.',
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-24 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="max-w-3xl">
          <div className="deco-line mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Schnitt, Farbe und Styling auf Meister-Niveau – mit Fokus auf Qualität, Details und ein Ergebnis,
            das zu Ihnen passt.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-secondary/20">
        {services.map((service) => (
          <div key={service.number} className="service-card-luxury">
            {/* ✅ FIX: text-secondary-dark вместо text-secondary для лучшего контраста */}
            <div className="text-sm font-light tracking-widest text-secondary-dark mb-6">
              {service.number}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-primary font-serif">
              {service.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-600 font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}