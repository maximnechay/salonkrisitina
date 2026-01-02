const testimonials = [
  {
    text: 'Ich bin super zufrieden mit meinem neuen Haarschnitt – und die Farbe gefällt mir noch mehr! Man kommt jedes Mal mit einem Lächeln raus und freut sich schon auf den nächsten Termin. Absolute Empfehlung!🥰',
    author: 'Linda Hornung',
    source: 'Stammkundin seit 2021',
  },
  {
    text: 'Alexandra ist sehr herzlich und aufmerksam. Sie hört gut zu, berät mit viel Geduld und sorgt dafür, dass man sich im Salon sofort wohlfühlt. Mit meinem Haarschnitt bin ich sehr zufrieden – gerne wieder!',
    author: 'Kardelen Dükme',
    source: 'Google Bewertung',
  },
  {
    text: 'Bin sehr begeistert und mehr als zufrieden, Salon ist sehr stilvoll und modern eingerichtet, wurde immer von der lieben Kristina super beraten und bedient. Man entspannt sich und vertraut ihr zu 100 %. Das Ergebnis ist immer einfach mega.',
    author: 'Tanja G.',
    source: 'Google Bewertung',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <div className="deco-line mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">
            Kundenstimmen
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Das Vertrauen unserer Kunden ist unser größter Erfolg.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="testimonial-card flex flex-col h-full"
            >
              <div className="testimonial-quote">"</div>

              <p className="text-lg leading-relaxed italic text-primary mb-8 relative z-10">
                {t.text}
              </p>

              {/* Всегда внизу карточки */}
              <div className="mt-auto">
                <div className="text-sm font-semibold tracking-wide uppercase text-accent">
                  {t.author}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {t.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
