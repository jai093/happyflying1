import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Plane,
  Globe,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { getAllServices, getSiteSettings } from '@/lib/sanity/fetch'
import { CORE_FEATURED_SERVICES, SPECIALIZED_SERVICES } from '@/lib/data/servicesData'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Travel Services — HappyFlying Tours & Travels',
  description:
    'Comprehensive travel services: bespoke holiday packages, airline bookings, luxury cruise reservations, and specialized travel solutions.',
}

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([
    getAllServices(),
    getSiteSettings(),
  ])

  // Flagship services: Bespoke Holiday Packages & VIP Concierge Services
  const primaryServices = CORE_FEATURED_SERVICES

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full space-y-16">
      {/* 1. Page Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Globe className="h-3.5 w-3.5" /> What We Offer
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Comprehensive Travel & Concierge Services
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          From personalized luxury vacations to seamless flight and catamaran ticketing, discover how HappyFlying crafts stress-free journeys around you.
        </p>
      </div>

      {/* 2. Core Featured Services (Bespoke Holidays & Flights/Cruises) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F3B604]">
          <Sparkles className="h-4 w-4" />
          <span>Flagship Concierge Offerings</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {primaryServices.map((service) => (
            <div
              key={service.id}
              className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white shadow">
                  <Plane className="h-6 w-6 text-[#F3B604]" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  <Link href={`/services/${service.slug}`} className="hover:text-sky-600 transition-colors">
                    {service.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#0A1320] px-5 py-3 text-xs font-bold text-[#F3B604] hover:bg-slate-800 transition-colors"
                >
                  <span>Learn More & Enquire</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Specialized Services Grid (Matching Attached img1) */}
      <div className="space-y-8 pt-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="h-3.5 w-3.5 text-amber-600" /> Specialized Offerings
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Services We Provide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Tailored travel solutions covering international getaways, visa processing, pilgrimage circuits, and corporate offsites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALIZED_SERVICES.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-slate-200 flex items-center justify-center text-slate-400">
                    <Globe className="h-8 w-8" />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    <Link href={`/services/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 group-hover:text-sky-800 transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
