const stats = [
  { number: '12+', label: 'Jahre Erfahrung' },
  { number: '2', label: 'Meister-Stylisten' },
  { number: '2.5K+', label: 'Zufriedene Kunden' },
  { number: '5.0', label: 'Bewertung' },
]

export default function Stats() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-light text-secondary font-serif mb-3">
                {stat.number}
              </div>
              <div className="text-xs tracking-widest uppercase opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
