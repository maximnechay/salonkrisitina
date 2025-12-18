import Image from 'next/image'

const galleryItems = [
  { src: '/images/gallery/hair-styling.jpg', alt: 'Professionelles Hair Styling im Salon Harmonie', label: 'Hair Design' },
  { src: '/images/gallery/nail-art.jpg', alt: 'Luxuriöse Maniküre und Nail Art', label: 'Nail Art' },
  { src: '/images/gallery/makeup.jpg', alt: 'Professionelles Make-up', label: 'Make-up' },
  { src: '/images/gallery/styling.jpg', alt: 'Elegantes Haar-Styling', label: 'Styling' },
]

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="max-w-3xl">
          <div className="deco-line mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">Portfolio</h2>
          <p className="text-xl text-gray-600 font-light">
            Einblicke in unsere Arbeit – Jedes Projekt ein Unikat.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-light">
        {galleryItems.map((item) => (
          <div key={item.label} className="gallery-item relative pb-[100%] bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer overflow-hidden">
            {/* Placeholder - replace with actual images */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span className="text-sm font-light">{item.label}</span>
            </div>
            {/* When you have images, uncomment this:
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            */}
            <div className="gallery-overlay">
              <span className="text-secondary text-sm tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Folgen Sie uns für tägliche Inspiration</p>
        <a
          href="https://instagram.com/harmonie_salon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-secondary font-medium hover:underline"
        >
          @harmonie_salon auf Instagram
        </a>
      </div>
    </section>
  )
}
