'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image"
const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <nav className={`nav-main fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              {/* фиксируем высоту строки, чтобы ничего не прыгало */}
              <span className="flex items-center h-14 md:h-14">
                <Image
                  src="/brand/ka.png"
                  alt="KA"
                  width={260}
                  height={260}
                  priority
                  className="h-12 md:h-12 w-auto object-contain"
                />
              </span>
              <span className="text-2xl md:text-[26px] font-brand font-bold leading-none text-black font-brand-shadow">
                Kristina & Alexandra
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link-main">
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone (Desktop) */}
          <a
            href="tel:+491731758457"
            className="hidden md:block text-sm font-semibold tracking-wider text-secondary"
          >
            +49 (173) 175-8457
          </a>

          {/* Burger Menu Button (Mobile) */}
          <button
            className={`burger-menu md:hidden flex flex-col justify-around w-7 h-7 bg-transparent border-none cursor-pointer p-0 z-[100] ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl font-medium tracking-wide uppercase text-primary my-5 transition-colors hover:text-secondary"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:+491731758457"
          className="text-2xl font-medium tracking-wide uppercase text-secondary mt-10"
          onClick={closeMenu}
        >
          Anrufen
        </a>
      </div>
    </nav>
  )
}
