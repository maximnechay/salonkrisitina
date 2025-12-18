import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text */}
          <div>
            <div className="deco-line mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-serif">
              Friseursalon für Frauen
            </h2>
            <p className="text-lg mb-10 text-gray-600 font-light leading-relaxed">
              Von Frauen, für Frauen.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 rounded-none">
                <h3 className="text-xl font-serif mb-2">Kristina Herold</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Friseurmeisterin und Inhaberin
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Friseurmeisterin und Inhaberin des Friseurstudios Kristina & Alexandra Mastersalon.
                  Ich freue mich darauf, euch in unserem Salon begrüßen zu dürfen.
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-none">
                <h3 className="text-xl font-serif mb-2">Alexandra Saltürk</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Friseurmeisterin und Inhaberin
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Friseurmeisterin und Inhaberin des Friseurstudios Kristina & Alexandra Mastersalon.
                  Ich freue mich darauf, euch in unserem Salon begrüßen zu dürfen.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              {/* Когда будут их фото, вставишь так:
              <Image
                src="/images/about.jpg"
                alt="Kristina & Alexandra Mastersalon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-lg font-light">Salon Foto</span>
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-secondary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
