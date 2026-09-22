'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import type { SiteSettings } from '@happyflying/types'

interface HeaderProps {
  settings: SiteSettings
}

export function Header({ settings }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Primary navigation matching the attached img1 design
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '/packages' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  // Extended links for mobile drawer
  const allNavLinks = [
    ...navLinks,
    { label: 'Travel Planner', href: '/travel-planner' },
    { label: 'Blog', href: '/blog' },
  ]

  const phone = settings.phone || '+91 9900113691'

  // Header background styling: on home page, transparent over video without shadow on-scroll animation
  const headerClass = isHome
    ? 'absolute top-0 inset-x-0 z-50 w-full pt-4 sm:pt-6 pb-2 bg-transparent border-transparent shadow-none'
    : 'sticky top-0 z-50 w-full transition-all duration-300 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'

  return (
    <header className={headerClass}>
      <div className="max-w-[1460px] mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-6 w-full">
          {/* Brand Logo Capsule (Left) */}
          <Link
            href="/"
            className="flex items-center group transition-transform hover:scale-102 shrink-0"
            aria-label="HappyFlying Tours & Travels LLP"
          >
            <div className="relative h-12 sm:h-16 flex items-center justify-center rounded-full bg-white px-3 sm:px-5 shadow-md border border-amber-200/50">
              <img
                src="/happyflyinglogo.png"
                alt="HappyFlying Tours & Travels LLP"
                className="h-[45px] sm:h-[54px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Unified Desktop Navigation Capsule (Center / Right) */}
          <div className="hidden lg:flex flex-1 items-center justify-between rounded-full bg-white px-2.5 sm:px-3 h-14 sm:h-16 shadow-md border border-amber-200/50">
            <nav className="flex items-center gap-1 sm:gap-1.5">
              {navLinks.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold transition-all duration-200 ${isActive
                      ? 'bg-[#F3B604] text-slate-950 shadow-xs'
                      : 'text-slate-800 hover:text-slate-950 hover:bg-slate-50 font-semibold'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Call NOW Button inside the unified navbar capsule */}
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center rounded-full px-7 sm:px-8 py-2.5 sm:py-3 text-sm font-bold shadow-xs transition-all duration-200 bg-[#F3B604] hover:bg-amber-400 text-slate-950 hover:scale-105 shrink-0"
              aria-label={`Call ${phone}`}
            >
              <span>Call NOW</span>
            </a>
          </div>

          {/* Mobile Actions Capsule */}
          <div className="flex lg:hidden items-center gap-1.5 rounded-full bg-white p-1 shadow-md border border-amber-200/50 h-12 shrink-0">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold bg-[#F3B604] text-slate-950 shadow-xs active:scale-95 transition-transform"
              aria-label="Call HappyFlying"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 flex items-center justify-center rounded-full text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-3xl bg-white shadow-xl border border-slate-200 animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-1">
              {allNavLinks.map((item) => {
                const isActive =
                  item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between ${isActive ? 'bg-[#F3B604] text-slate-950' : 'text-slate-800 hover:bg-slate-100'
                      }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="text-xs">●</span>}
                  </Link>
                )
              })}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#F3B604] py-3 text-sm font-bold text-slate-950 shadow-xs hover:bg-amber-400 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

