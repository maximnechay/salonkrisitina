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
    subtitle: 'inkl. Aufhellen, Root Shadow, Glossing, Pflege, Schnitt & Styling',
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
    <section id="preise" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <div className="deco-line mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">Preisliste</h2>
          <p className="text-xl text-gray-600 font-light">
            Transparente Preise für erstklassige Dienstleistungen. Alle Preise verstehen sich als Startpreise
            und können je nach Aufwand variieren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {priceCategories.map((category) => (
            <div key={category.title} className="price-table">
              <div className="price-header">
                <h3 className="text-2xl font-semibold mb-2 font-serif">{category.title}</h3>
                <p className="text-sm text-gray-600 font-light">{category.subtitle}</p>
              </div>
              <div>
                {category.items.map((item) => (
                  <div key={item.name} className="price-item">
                    <span className="text-base font-normal text-primary">{item.name}</span>
                    <span className="text-base font-semibold text-secondary font-serif">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
