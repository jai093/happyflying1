import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  Star,
  Plane,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
} from 'lucide-react'
import { getSiteSettings, getAllPackages, getAllDestinations } from '@/lib/sanity/fetch'
import { TravelAgencyJsonLd, FaqJsonLd } from '@/components/JsonLd'
import { PackageCard } from '@/components/PackageCard'
import { DestinationCard } from '@/components/DestinationCard'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Best Travel Agency in Bangalore | Luxury Tours & Holiday Packages — HappyFlying',
  description:
    'Looking for the best travel agency in Bangalore? HappyFlying crafts luxury holiday packages, international flights from BLR & custom tours with 24/7 concierge.',
  keywords: [
    'best travel agency in bangalore',
    'travel agency in bangalore',
    'top tour operators in bangalore',
    'travel agents in bangalore for international trips',
    'tour packages from bangalore',
    'luxury travel agency bangalore',
    'koramangala travel agency',
    'happyflying travel agency bangalore',
  ],
  alternates: {
    canonical: 'https://www.happyflyingtravels.com/bangalore-travel-agency',
  },
  openGraph: {
    title: 'Best Travel Agency in Bangalore | HappyFlying Tours & Travels',
    description:
      'Premier luxury travel agency in Bangalore. Handcrafted Andaman, Bali, Dubai & international packages departing from BLR with 24/7 concierge.',
    url: 'https://www.happyflyingtravels.com/bangalore-travel-agency',
    type: 'website',
  },
}

export default async function BangaloreTravelAgencyPage() {
  const [settings, packages, destinations] = await Promise.all([
    getSiteSettings(),
    getAllPackages(),
    getAllDestinations(),
  ])

  const phone = settings.phone || '+91 9900113691'
  const cleanPhone = phone.replace(/\s+/g, '')
  const whatsapp = settings.whatsapp || '919900113691'

  const neighborhoods = [
    { name: 'Koramangala (Headquarters)', tag: 'Flagship Office on 80 Feet Road' },
    { name: 'Indiranagar & Domlur', tag: 'Doorstep & Virtual Consultations' },
    { name: 'HSR Layout & Bellandur', tag: 'Fast Booking & Tech Professional Specials' },
    { name: 'Whitefield & Marathahalli', tag: 'Corporate & Family Getaways' },
    { name: 'Jayanagar & JP Nagar', tag: 'South Bangalore Resident Support' },
    { name: 'Malleshwaram & Rajajinagar', tag: 'North/Central Bangalore Pickups' },
  ]

  const faqs = [
    {
      question: 'Why is HappyFlying considered one of the best travel agencies in Bangalore?',
      answer:
        'With 10+ years of travel craftsmanship, an office in Koramangala, 100% verified 4-star/5-star hotel stays, pre-booked premium catamaran cruise tickets, and dedicated 24/7 on-ground concierges, HappyFlying delivers stress-free, personalized holidays.',
    },
    {
      question: 'Do you arrange flight tickets departing from Kempegowda International Airport (BLR)?',
      answer:
        'Yes, our packages seamlessly integrate domestic and international flights departing from Bangalore (BLR) with prime timings, checked baggage inclusions, and group booking privileges.',
    },
    {
      question: 'Can I visit your Bangalore office to plan my vacation?',
      answer:
        'Absolutely. Our flagship office is situated at No. 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala, Bengaluru. We welcome walk-in travelers from Monday to Saturday.',
    },
    {
      question: 'What types of travel packages do you specialize in?',
      answer:
        'We specialize in luxury island getaways (Andaman & Nicobar Islands, Bali, Maldives), romantic honeymoon retreats (Kashmir, Kerala, Dubai), European discovery tours, and corporate MICE retreats.',
    },
  ]

  const featuredPackages = packages.slice(0, 3)
  const featuredDestinations = destinations.slice(0, 3)

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-24">
      <TravelAgencyJsonLd
        name="HappyFlying Tours & Travels — Bangalore"
        url="https://www.happyflyingtravels.com/bangalore-travel-agency"
        telephone={phone}
        email={settings.email}
        address="No. 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560034"
      />
      <FaqJsonLd faqs={faqs} />

      {/* 1. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-900">Bangalore Travel Agency</span>
        </nav>
      </div>

      {/* 2. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1320] via-slate-900 to-slate-950 text-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-300 shadow-sm">
            <Compass className="h-4 w-4" />
            <span>Bangalore’s Premier Tour Operator</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Top-Rated Travel Agency in <br />
            <span className="bg-gradient-to-r from-amber-300 via-[#F3B604] to-sky-400 bg-clip-text text-transparent">
              Bangalore, Karnataka
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Headquartered in Koramangala with 10+ years of travel excellence. Handcrafted holiday itineraries, flight bookings from BLR, and personal concierge assistance trusted by 10,000+ happy travelers across Bengaluru.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center text-amber-400 font-bold">★★★★★</span>
            <span className="font-bold text-white">4.9 / 5</span>
            <span className="text-slate-400">• 150+ Verified Google Reviews</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F3B604] px-8 py-3.5 text-sm font-bold text-slate-950 shadow-xl hover:bg-amber-400 transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>Call +91 99001 13691</span>
            </a>
            <Link
              href="/koramangala-travel-agency"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              <MapPin className="h-4 w-4 text-[#F3B604]" />
              <span>Visit Koramangala Office</span>
            </Link>
            <Link
              href="/tour-packages-from-bangalore"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-6 py-3.5 text-sm font-semibold text-sky-200 hover:bg-sky-500/20 transition-all"
            >
              <Plane className="h-4 w-4 text-sky-400" />
              <span>BLR Tour Packages</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. NEIGHBORHOODS SERVED IN BANGALORE */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Citywide Service</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serving Travelers Across Bangalore
          </h2>
          <p className="text-sm text-slate-600">
            From our Koramangala travel desk, we coordinate holidays for residents across all key Bangalore hubs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {neighborhoods.map((n, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-1 hover:border-amber-300 transition-colors">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0" />
                <span>{n.name}</span>
              </h3>
              <p className="text-xs text-slate-500 pl-6">{n.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PACKAGES */}
      {featuredPackages.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Trending Tours</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Popular Holiday Packages from Bangalore
                </h2>
              </div>
              <Link
                href="/tour-packages-from-bangalore"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900"
              >
                <span>View All BLR Departures</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPackages.map((pkg) => (
                <PackageCard key={pkg._id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQS */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Bangalore Travel Agency FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-1.5">
              <h3 className="text-base font-bold text-slate-900">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
