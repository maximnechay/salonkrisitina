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

    if (reduce) return

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
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute w-full h-full object-cover will-change-transform"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(139, 115, 85, 0.1) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
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

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-secondary/60" />
            <span className="text-secondary text-xs tracking-[4px] uppercase font-medium">
              Premium Beauty
            </span>
            <span className="w-12 h-px bg-secondary/60" />
          </div>
        </div>

        <div className="overflow-hidden">
          <h1 className={`text-center transform transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
            <span className="block text-white/90 text-lg md:text-xl font-light tracking-[6px] uppercase mb-4">
              Beautysalon in Garbsen
            </span>
            <span className="block text-white text-6xl md:text-8xl lg:text-9xl font-serif font-semibold tracking-tight leading-[0.9]">
              Kristina & Alexandra Mastersalon
            </span>
          </h1>
        </div>

        <p className={`text-white/70 text-lg md:text-xl font-light text-center max-w-xl mt-8 leading-relaxed transform transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Friseursalon für Frauen.
          <span className="text-secondary"> Von Frauen, für Frauen.</span>
        </p>

        <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 transform transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#kontakt"
            className="group relative px-10 py-4 bg-secondary text-primary font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            <span className="relative z-10">Termin buchen</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>

          <a
            href="#leistungen"
            className="group flex items-center gap-3 text-white/80 hover:text-secondary text-sm tracking-widest uppercase transition-colors duration-300"
          >
            <span>Entdecken</span>
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

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="text-white/40 text-xs tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-secondary animate-scroll-line" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

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
