'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // На мобиле параллакс часто делает дерганье и не дает профита
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false
    if (reduce || isMobile) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY || 0
        if (videoRef.current) {
          videoRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0)`
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[640px] sm:min-h-[720px] overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="absolute h-full w-full object-cover will-change-transform"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 20% 55%, rgba(212, 175, 55, 0.14) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 25%, rgba(139, 115, 85, 0.10) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.10) 0%, transparent 55%)
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-secondary/45 to-transparent" />
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-secondary/45 to-transparent" />

      {/* pt-10 чтобы CTA не уезжал под высокий header на мобиле */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-10 sm:pt-0">
        <div
          className={`transform transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
            <span className="w-10 sm:w-12 h-px bg-secondary/60" />
            <span className="text-secondary text-[11px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase font-medium text-center">
              Meistersalon für Frauen in Gifhorn
            </span>
            <span className="w-10 sm:w-12 h-px bg-secondary/60" />
          </div>
        </div>

        <div className="overflow-hidden">
          <h1
            className={`text-center transform transition-all duration-1000 delay-450 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              }`}
          >
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[2px] md:tracking-[3px] uppercase leading-tight">
              Dein Salon für strahlendes Haar
            </span>
          </h1>
        </div>

        <p
          className={`text-white/75 text-[15px] sm:text-base md:text-xl font-light text-center max-w-[26rem] sm:max-w-2xl mt-6 sm:mt-7 leading-[1.65] transform transition-all duration-1000 delay-650 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Schnitt, Farbe und Pflege auf dich abgestimmt. Ruhige Atmosphäre, ehrliche Beratung und ein Ergebnis,
          das natürlich aussieht und lange hält.
        </p>

        <div
          className={`text-white/60 text-[10px] sm:text-[11px] md:text-sm tracking-[1.5px] md:tracking-[2px] uppercase text-center mt-5 sm:mt-6 transform transition-all duration-1000 delay-750 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          Individuelle Beratung • Meisterhandwerk • Damenfriseur Gifhorn
        </div>

        <div
          className={`mt-8 sm:mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 transform transition-all duration-1000 delay-850 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <a
            href="#kontakt"
            className="group relative w-full max-w-[22rem] sm:w-auto sm:max-w-none px-9 py-3.5 sm:px-10 sm:py-4 bg-secondary text-primary font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.28)] text-center"
            aria-label="Termin sichern"
          >
            <span className="relative z-10">Termin sichern</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>

          <a
            href="#leistungen"
            className="group flex items-center justify-center gap-3 text-white/80 hover:text-secondary text-sm tracking-widest uppercase transition-colors duration-300 sm:justify-start"
            aria-label="Leistungen ansehen"
          >
            <span>Leistungen ansehen</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* На мобиле скрываем */}
      <div
        className={`hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 transform transition-all duration-1000 delay-950 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
      >
        <span className="text-white/40 text-xs tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-secondary animate-scroll-line" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-28 sm:h-32 bg-gradient-to-t from-white to-transparent" />

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
