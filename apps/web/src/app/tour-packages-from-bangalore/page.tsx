import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Plane,
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
  Luggage,
  CalendarCheck,
} from 'lucide-react'
import { getSiteSettings, getAllPackages, getAllDestinations } from '@/lib/sanity/fetch'
import { TravelAgencyJsonLd, FaqJsonLd } from '@/components/JsonLd'
import { PackageCard } from '@/components/PackageCard'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Tour Packages from Bangalore | Custom Holiday Trips from BLR — HappyFlying',
  description:
    'Handcrafted tour packages from Bangalore with direct flights from Kempegowda Airport (BLR). Luxury Andaman, Bali, Dubai, Kashmir & Kerala packages with 24/7 concierge.',
  keywords: [
    'tour packages from bangalore',
    'bangalore tour packages',
    'holiday packages from bangalore',
    'andaman tour packages from bangalore',
    'bali tour package from bangalore',
    'kashmir tour package from bangalore',
    'international tour packages from bangalore',
    'flight packages from bangalore',
    'best travel agency in bangalore',
    'koramangala travel agency',
  ],
  alternates: {
    canonical: 'https://www.happyflyingtravels.com/tour-packages-from-bangalore',
  },
  openGraph: {
    title: 'Tour Packages from Bangalore | Custom Holiday Trips from BLR',
    description:
      'Handcrafted domestic & international holiday packages departing from Bangalore (BLR). Luxury Andaman, Bali, Dubai & Kashmir tours with 24/7 concierge.',
    url: 'https://www.happyflyingtravels.com/tour-packages-from-bangalore',
    type: 'website',
  },
}

export default async function TourPackagesFromBangalorePage() {
  const [settings, packages, destinations] = await Promise.all([
    getSiteSettings(),
    getAllPackages(),
    getAllDestinations(),
  ])

  const phone = settings.phone || '+91 9900113691'
  const cleanPhone = phone.replace(/\s+/g, '')
  const whatsapp = settings.whatsapp || '919900113691'

  const popularRoutes = [
    {
      title: 'Andaman & Nicobar Islands',
      tag: 'Most Popular from BLR',
      flightInfo: 'Direct Non-Stop Flights from BLR to Port Blair (IXZ) ~2h 35m',
      highlights: 'Pre-booked Catamaran cruises, Radhanagar Beach, luxury beachfront resorts & scuba diving.',
      link: '/packages/andaman-trip',
    },
    {
      title: 'Bali, Indonesia',
      tag: 'Trending International',
      flightInfo: 'Convenient connections via Singapore / Kuala Lumpur from BLR T2',
      highlights: 'Private pool villas in Seminyak, Ubud rainforest swings, Nusa Penida island tours & sunset dinners.',
      link: '/destinations/bali',
    },
    {
      title: 'Dubai & Abu Dhabi',
      tag: 'Direct International Flight',
      flightInfo: 'Direct Emirates / IndiGo flights from BLR T2 ~4h 15m',
      highlights: 'Burj Khalifa At The Top, desert safari with BBQ, luxury yacht cruises & Palm Jumeirah stays.',
      link: '/destinations/dubai',
    },
    {
      title: 'Kashmir Paradise',
      tag: 'Honeymoon Favorite',
      flightInfo: 'Flights from BLR to Srinagar (SXR) with brief connection',
      highlights: 'Dal Lake luxury houseboats, Gulmarg Gondola Phase 1 & 2 tickets, Pahalgam Betaab Valley tours.',
      link: '/packages',
    },
    {
      title: 'Kerala Backwaters & Hills',
      tag: 'Quick Escape from BLR',
      flightInfo: 'Direct 1-hour flights from BLR to Kochi (COK) or Trivandrum (TRV)',
      highlights: 'Private Alleppey houseboats with chef, Munnar tea plantation stays & Kovalam ayurvedic retreats.',
      link: '/packages',
    },
    {
      title: 'Thailand & Phuket',
      tag: 'Quick Island Getaway',
      flightInfo: 'Direct flights from BLR to Bangkok (BKK/DMK) and Phuket (HKT)',
      highlights: 'Phi Phi island speedboats, Bangkok rooftop fine dining, Phuket beach clubs & seamless visa-on-arrival.',
      link: '/destinations',
    },
  ]

  const faqs = [
    {
      question: 'Which direct holiday flights are available from Bangalore (BLR)?',
      answer:
        'Bangalore Kempegowda International Airport (BLR) offers direct non-stop flights to Port Blair (Andaman), Dubai, Bangkok, Singapore, Male (Maldives), Kochi, Goa, and Srinagar (seasonal). HappyFlying books optimized flight timings with checked luggage included.',
    },
    {
      question: 'Can I customize travel dates and hotel categories for my Bangalore tour package?',
      answer:
        'Yes, 100% of our packages from Bangalore are bespoke. You can choose your preferred airlines, flight departure timings, 4-star or 5-star verified hotels, private vehicle types, and meal plans.',
    },
    {
      question: 'Can I visit your office in Bangalore to consult an expert before booking?',
      answer:
        'Yes! We welcome walk-in travelers at our flagship Bangalore office: No. 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala, Bengaluru. We are open Monday to Saturday from 9:00 AM to 8:00 PM.',
    },
    {
      question: 'Do your international packages from Bangalore include visa assistance?',
      answer:
        'Yes, we provide end-to-end visa assistance for all international departures from Bangalore, including Dubai e-visas, Thailand fast-track processing, Bali e-VOA, and Schengen visa documentation support.',
    },
    {
      question: 'How do you coordinate transfers from Kempegowda International Airport (BLR)?',
      answer:
        'Our packages include detailed BLR terminal guidance (Terminal 1 for domestic, Terminal 2 for international), web check-in assistance, and guaranteed private pickup at your destination airport the moment you land.',
    },
    {
      question: 'What is HappyFlying’s cancellation and rescheduling policy?',
      answer:
        'We offer transparent, flexible booking terms. Flights are issued under airline flexible fare rules wherever available, and ground arrangements can be rescheduled with minimal or zero penalty subject to hotel partner policies.',
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-24">
      {/* Structured Data */}
      <TravelAgencyJsonLd
        name="HappyFlying Tours & Travels — Bangalore Holiday Packages"
        url="https://www.happyflyingtravels.com/tour-packages-from-bangalore"
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
          <Link href="/packages" className="hover:text-slate-900 transition-colors">
            Packages
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-900">Tour Packages from Bangalore</span>
        </nav>
      </div>

      {/* 2. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1320] via-slate-900 to-slate-950 text-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-300 shadow-sm">
            <Plane className="h-4 w-4" />
            <span>Departures from Kempegowda International Airport (BLR)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Tour Packages from{' '}
            <span className="bg-gradient-to-r from-amber-300 via-[#F3B604] to-sky-400 bg-clip-text text-transparent">
              Bangalore
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Handcrafted holiday trips departing from Bangalore. Experience seamless non-stop flights from BLR, pre-booked luxury hotels, private island cruises, and 24/7 concierge assistance curated by Koramangala’s top travel experts.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center text-amber-400 font-bold">★★★★★</span>
            <span className="font-bold text-white">4.9 / 5 Rating</span>
            <span className="text-slate-400">• 150+ Verified Google Reviews</span>
            <span className="text-slate-400">• 10,000+ Happy Travelers</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F3B604] px-8 py-3.5 text-sm font-bold text-slate-950 shadow-xl hover:bg-amber-400 transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>Call +91 99001 13691</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20HappyFlying%2C%20I%20am%20looking%20for%20tour%20packages%20from%20Bangalore`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-all shadow-md"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/travel-planner"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-6 py-3.5 text-sm font-semibold text-sky-200 hover:bg-sky-500/20 transition-all"
            >
              <Sparkles className="h-4 w-4 text-sky-400" />
              <span>Try AI Planner</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. POPULAR FLIGHT ROUTES FROM BANGALORE */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Flight Routes & Trips</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Top Holiday Getaways from Bangalore (BLR)
          </h2>
          <p className="text-sm text-slate-600">
            Carefully timed flights departing Kempegowda Airport with zero wasted layover hours and guaranteed on-ground coordination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {route.tag}
                  </span>
                  <Plane className="h-4 w-4 text-sky-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{route.title}</h3>
                <div className="flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Clock className="h-3.5 w-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>{route.flightInfo}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{route.highlights}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={route.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900"
                >
                  <span>Explore Itinerary</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20HappyFlying%2C%20please%20send%20quote%20for%20${encodeURIComponent(route.title)}%20from%20Bangalore`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Get BLR Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CURATED PACKAGES */}
      {packages.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Handcrafted Itineraries</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Featured Holiday Packages from Bangalore
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  All packages can be customized with flight tickets departing Kempegowda International Airport (BLR).
                </p>
              </div>
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900"
              >
                <span>View All 20+ Packages</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.slice(0, 6).map((pkg) => (
                <PackageCard key={pkg._id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. WHY BANGALORE TRAVELERS CHOOSE HAPPYFLYING */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">The HappyFlying Difference</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Bangalore Travelers Trust Us
          </h2>
          <p className="text-sm text-slate-600">
            Born and headquartered in Koramangala, we understand how Bangaloreans love to travel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-500/10 text-amber-600">
              <Plane className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Optimized BLR Flights</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We select flight timings that maximize your vacation days and avoid punishing layover traps or late-night arrivals.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/10 text-sky-600">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Physical Koramangala Desk</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike nameless online portals, you can meet our trip designers in person at our 80 Feet Road office in Koramangala.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">100% Verified Stays</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every hotel and resort is personally vetted. No photo tricks or unkempt rooms; only certified 4-star and 5-star properties.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-purple-500/10 text-purple-600">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">24/7 Dedicated Concierge</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct WhatsApp line to your dedicated trip manager from the moment you leave Bangalore until you land back home.
            </p>
          </div>
        </div>
      </section>

      {/* 6. KEMPEGOWDA AIRPORT (BLR) DEPARTURE GUIDE */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3">
            <Luggage className="h-6 w-6 text-[#F3B604]" />
            <h3 className="text-xl sm:text-2xl font-bold">Bangalore Airport (BLR) Departure Information</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
            <div className="space-y-2 border-l-2 border-amber-400 pl-4">
              <h4 className="font-bold text-white text-sm">Domestic Terminal 1 (T1)</h4>
              <p>
                Operates domestic departures for Andaman (Port Blair), Kashmir (Srinagar), Kerala, Goa, and Himachal. IndiGo, Akasa, and Air India Express operate from T1.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-sky-400 pl-4">
              <h4 className="font-bold text-white text-sm">International Terminal 2 (T2)</h4>
              <p>
                Award-winning ‘Garden Terminal’ for Bali, Dubai, Thailand, Europe, and Maldives. Emirates, Singapore Airlines, Qatar Airways, and Air India operate from T2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions — Bangalore Packages
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

      {/* 8. BOTTOM CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-[#F3B604] to-amber-600 p-8 sm:p-12 text-slate-950 text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Plan Your Next Vacation from Bangalore?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-medium text-slate-900">
            Speak directly with our senior travel concierges in Koramangala. We will craft a personalized itinerary with flight options, luxury stays, and transparent pricing in under 2 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-slate-900 transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>Call +91 99001 13691</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20HappyFlying%2C%20I%20am%20ready%20to%20plan%20my%20trip%20from%20Bangalore`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-all"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/koramangala-travel-agency"
              className="inline-flex items-center gap-2 rounded-full border border-slate-950/20 bg-black/5 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-black/10 transition-all"
            >
              <MapPin className="h-4 w-4" />
              <span>Visit Koramangala Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

