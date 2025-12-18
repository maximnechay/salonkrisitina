const testimonials = [
  {
    text: 'Ein außergewöhnliches Erlebnis. Die Atmosphäre ist elegant, das Team professionell und die Ergebnisse einfach perfekt. Mein absoluter Lieblingssalon.',
    author: 'Sarah Müller',
    source: 'Stammkundin seit 2021',
  },
  {
    text: 'Höchste Qualität in jedem Detail. Von der Beratung bis zur Ausführung – hier wird Handwerk auf höchstem Niveau zelebriert. Absolut empfehlenswert.',
    author: 'Dr. Anna Schmidt',
    source: 'Google Bewertung',
  },
  {
    text: 'Ich habe viele Salons ausprobiert, aber Harmonie ist in einer eigenen Liga. Die Meister verstehen ihr Handwerk und schaffen es jedes Mal, meine Erwartungen zu übertreffen.',
    author: 'Julia Weber',
    source: 'Facebook Bewertung',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <div className="deco-line mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">Kundenstimmen</h2>
          <p className="text-xl text-gray-600 font-light">
            Das Vertrauen unserer Kunden ist unser größter Erfolg.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="text-lg leading-relaxed italic text-primary mb-8 relative z-10">
                {testimonial.text}
              </p>
              <div className="text-sm font-semibold tracking-wide uppercase text-accent">
                {testimonial.author}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {testimonial.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
