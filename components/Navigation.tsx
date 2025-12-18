'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
          <div className="flex items-center space-x-3">
            <div className="deco-line" />
            <Link href="/" className="text-2xl font-semibold tracking-tight font-serif">
              Kristina & Alexandra
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
            href="tel:+49511123456"
            className="hidden md:block text-sm font-semibold tracking-wider text-secondary"
          >
            +49 (511) 123-456
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
          href="tel:+49511123456"
          className="text-2xl font-medium tracking-wide uppercase text-secondary mt-10"
          onClick={closeMenu}
        >
          Anrufen
        </a>
      </div>
    </nav>
  )
}
