export default function Parallax() {
  return (
    <section className="parallax-section flex items-center justify-center">
      <div className="text-center px-6">
        <div className="deco-line mx-auto mb-8 bg-secondary" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 font-light font-serif">
          Erleben Sie Luxus<br />und Professionalität
        </h2>
        <a 
          href="#kontakt" 
          className="btn-luxury mt-8 inline-block"
          style={{ color: 'var(--secondary)', borderColor: 'var(--secondary)' }}
        >
          Jetzt Termin buchen
        </a>
      </div>
    </section>
  )
}
