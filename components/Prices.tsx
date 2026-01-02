const priceCategories = [
  {
    title: 'Schnitt & Styling',
    subtitle: 'Damen',
    items: [
      { name: 'Waschen / Schneiden / Styling (S)', price: '58€' },
      { name: 'Waschen / Schneiden / Styling (M)', price: '65€' },
      { name: 'Waschen / Schneiden / Styling (L)', price: '74€' },
      { name: 'Styling (S)', price: '40€' },
      { name: 'Styling (M)', price: '50€' },
      { name: 'Styling (L)', price: '60€' },
    ],
  },
  {
    title: 'Strähnen',
    subtitle: 'Highlights',
    items: [
      { name: 'Strähnen Oberkopf (S)', price: '65€' },
      { name: 'Strähnen Oberkopf (M)', price: '70€' },
      { name: 'Strähnen Oberkopf (L)', price: '80€' },
      { name: 'Strähnen ganzer Kopf (S)', price: '80€' },
      { name: 'Strähnen ganzer Kopf (M)', price: '110€' },
      { name: 'Strähnen ganzer Kopf (L)', price: '130€' },
    ],
  },
  {
    title: 'Farbe',
    subtitle: 'Ansatz & Veredelung',
    items: [
      { name: 'Ansatzfarbe (S)', price: '48€' },
      { name: 'Ansatzfarbe (M)', price: '58€' },
      { name: 'Ansatzfarbe (L)', price: '68€' },
      { name: 'Gloss / Rootshadow (S)', price: '30€' },
      { name: 'Gloss / Rootshadow (M)', price: '60€' },
      { name: 'Gloss / Rootshadow (L)', price: '80€' },
    ],
  },
  {
    title: 'Augen',
    subtitle: 'Augenbrauen & Wimpern',
    items: [
      { name: 'Augenbrauen zupfen', price: '9€' },
      { name: 'Augenbrauen färben', price: '12,50€' },
      { name: 'Wimpern färben', price: '12,50€' },
    ],
  },
  {
    title: 'Balayage',
    subtitle: 'inkl. Aufhellen, Glossing, Schnitt & Styling',
    items: [
      { name: 'Balayage (S)', price: 'ab 360€' },
      { name: 'Balayage (M)', price: 'ab 390€' },
      { name: 'Balayage (L)', price: 'ab 450€' },
    ],
  },
  {
    title: 'Brautstyling',
    subtitle: 'Pakete & Gästestyling',
    items: [
      { name: 'White (inkl. Probe)', price: '500€' },
      { name: 'Beige: Make Up (inkl. Probe)', price: '320€' },
      { name: 'Beige: Haarstyling (inkl. Probe)', price: '360€' },
      { name: 'Ivory (ohne Probe)', price: '400€' },
      { name: 'Gästestyling: Make Up', price: '80€' },
      { name: 'Gästestyling: Haarstyling', price: '90€' },
    ],
  },
]

export default function Prices() {
  return (
    <section id="preise" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-10">
          <div className="deco-line mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-serif">Preisliste</h2>
          <p className="text-base text-gray-600 font-light">
            Transparente Preise für erstklassige Dienstleistungen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {priceCategories.map((cat) => (
            <div
              key={cat.title}
              className="border border-secondary/15 bg-white rounded overflow-hidden"
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-secondary/15 bg-light">
                <h3 className="text-base font-semibold text-primary font-serif">
                  {cat.title}
                </h3>
                {/* ✅ FIX: text-gray-600 вместо text-gray-500 для лучшего контраста */}
                <p className="text-xs text-gray-600 font-light">{cat.subtitle}</p>
              </div>

              {/* Items */}
              <ul className="divide-y divide-secondary/10">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between px-4 py-2.5 text-sm"
                  >
                    <span className="text-gray-700 font-light pr-2">{item.name}</span>
                    {/* ✅ FIX: text-secondary-dark для лучшего контраста цен */}
                    <span className="text-sm font-semibold text-secondary-dark font-serif whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}