import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Star,
  Compass,
  Plane,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { getSiteSettings, getAllPackages } from '@/lib/sanity/fetch'
import { TravelAgencyJsonLd, FaqJsonLd } from '@/components/JsonLd'
import { PackageCard } from '@/components/PackageCard'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Best Travel Agency in Koramangala, Bangalore | HappyFlying Tours & Travels',
  description:
    'Visit HappyFlying Tours & Travels in Koramangala 5th Block, Bangalore. Handcrafted Andaman, Bali, Dubai, Kashmir tour packages with 24/7 concierge assistance.',
  keywords: [
    'travel agency in koramangala',
    'tour operators in koramangala bangalore',
    'travel agents in koramangala',
    'best travel agency in bangalore',
    'koramangala travel agency 5th block',
    'happyflying koramangala',
    'luxury holiday packages bangalore',
    'andaman packages from bangalore',
  ],
  alternates: {
    canonical: 'https://www.happyflyingtravels.com/koramangala-travel-agency',
  },
  openGraph: {
    title: 'Best Travel Agency in Koramangala, Bangalore | HappyFlying Tours & Travels',
    description:
      'Visit HappyFlying Tours & Travels in Koramangala 5th Block, Bangalore. Premier luxury tour packages with 24/7 concierge.',
    url: 'https://www.happyflyingtravels.com/koramangala-travel-agency',
    type: 'website',
  },
}

export default async function KoramangalaTravelAgencyPage() {
  const [settings, packages] = await Promise.all([
    getSiteSettings(),
    getAllPackages(),
  ])

  const phone = settings.phone || '+91 9900113691'
  const cleanPhone = phone.replace(/\s+/g, '')
  const whatsapp = settings.whatsapp || '919900113691'

  const faqs = [
    {
      question: 'Where is HappyFlying Tours & Travels located in Koramangala?',
      answer:
        'Our headquarters is located at No. 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560034, conveniently situated near the 80 Feet Road commercial corridor.',
    },
    {
      question: 'Can I visit your Koramangala office in person for itinerary planning?',
      answer:
        'Yes, walk-ins and appointment-based consultations are welcome from Monday to Saturday, 9:00 AM to 8:00 PM. Our travel concierges sit down with you to tailor custom itineraries, review hotel options, and arrange flights.',
    },
    {
      question: 'Do you arrange flight tickets from Kempegowda International Airport (BLR)?',
      answer:
        'Yes, we provide end-to-end flight booking support from Bangalore (BLR) to domestic hubs like Port Blair, Srinagar, and Kochi, as well as international destinations like Bali, Dubai, Singapore, and Europe.',
    },
    {
      question: 'Which tour packages are most popular among Bangalore travelers?',
      answer:
        'Our most requested packages include the 5D/4N Andaman Island Getaway (with private catamaran cruise), Kashmir Paradise (Srinagar, Gulmarg & Pahalgam), Bali Luxury Villas, and Dubai Desert & Marina holidays.',
    },
    {
      question: 'How do I get in touch with a Koramangala travel specialist?',
      answer:
        'You can call our desk directly at +91 9900113691, send a WhatsApp message to +91 9900113691, or submit an inquiry through our website for instant assistance.',
    },
  ]

  const featuredPackages = packages.slice(0, 3)

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-24">
      <TravelAgencyJsonLd
        name="HappyFlying Tours & Travels — Koramangala Bangalore"
        url="https://www.happyflyingtravels.com/koramangala-travel-agency"
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
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            Bangalore
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-900">Koramangala Travel Agency</span>
        </nav>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1320] via-slate-900 to-slate-950 text-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-300 shadow-sm">
            <MapPin className="h-4 w-4 text-[#F3B604]" />
            <span>Koramangala 5th Block • Bangalore Headquarters</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best Travel Agency in <br />
            <span className="bg-gradient-to-r from-amber-300 via-[#F3B604] to-sky-400 bg-clip-text text-transparent">
              Koramangala, Bangalore
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Headquartered on 80 Feet Road, KHB Colony, 5th Block, Koramangala. HappyFlying crafts bespoke domestic and international luxury holidays, honeymoon retreats, flight tickets from BLR, and 24/7 concierge assistance.
          </p>

          {/* Social Proof Rating */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center text-amber-400 font-bold">★★★★★</span>
            <span className="font-bold text-white">4.9 / 5</span>
            <span className="text-slate-400">• 150+ Verified Google Reviews</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F3B604] px-8 py-3.5 text-sm font-bold text-slate-950 shadow-xl hover:bg-amber-400 transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>Call +91 99001 13691</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi HappyFlying! I am looking for travel planning assistance in Koramangala.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all hover:scale-105"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>Inquire on WhatsApp</span>
            </a>
            <a
              href="https://maps.google.com/?q=HappyFlying+Tours+%26+Travels+Koramangala+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-6 py-3.5 text-sm font-semibold text-sky-200 hover:bg-sky-500/20 transition-all"
            >
              <MapPin className="h-4 w-4 text-sky-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. OFFICE HIGHLIGHTS & LOCAL TRUST CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <MapPin className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Koramangala Office Address</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560034.
            </p>
            <span className="inline-block text-xs font-semibold text-amber-700">
              Landmark: 80 Feet Road, KHB Colony
            </span>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
              <Clock className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Working Hours</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Monday – Saturday: <strong>9:00 AM – 8:00 PM</strong><br />
              Sunday: By prior appointment & emergency support.
            </p>
            <span className="inline-block text-xs font-semibold text-sky-700">
              24/7 WhatsApp Concierge Active
            </span>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Verified & Certified</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Registered LLP tour operator with verified 4-star and 5-star hotel partnerships, licensed catamaran cruises, and insured local transfers.
            </p>
            <span className="inline-block text-xs font-semibold text-emerald-700">
              100% Transparent Invoicing
            </span>
          </div>
        </div>
      </section>

      {/* 4. WHY KORAMANGALA TRAVELERS CHOOSE HAPPYFLYING */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Tailored For Bangalore Residents
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Travelers in Koramangala & Greater Bangalore Choose Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you live in Koramangala, Indiranagar, HSR Layout, or Bellandur, planning your dream vacation shouldn't mean dealing with impersonal call centers. At HappyFlying, you have access to dedicated travel concierges right in your neighborhood.
            </p>

            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Direct Flights from BLR:</strong> Handpicked flight timings from Kempegowda International Airport with minimal layovers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>In-Person & Virtual Consultations:</strong> Sit down with our itinerary architects on 80 Feet Road or finalize your plans on WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Private Local Transfers:</strong> Guaranteed private AC vehicles at your destination with vetted drivers—no crowded tour buses.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>24/7 On-Ground Support:</strong> A personal point-of-contact reachable throughout your entire trip.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/travel-planner"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
              >
                <span>Try AI Planner for Instant Itinerary</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Services Available at Our Koramangala Desk
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="text-sm font-bold text-slate-900">Honeymoon Packages</h4>
                <p className="text-xs text-slate-600">Bespoke romantic escapes to Andaman, Bali, Maldives, and Kashmir with candlelit beach dinners.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="text-sm font-bold text-slate-900">Family & Group Holidays</h4>
                <p className="text-xs text-slate-600">Multi-generational vacation planning with kid-friendly stays, private villas, and guided sightseeing.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="text-sm font-bold text-slate-900">International Flight Desk</h4>
                <p className="text-xs text-slate-600">Group flight deals, seat holds, and hassle-free date changes departing from Bangalore (BLR).</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="text-sm font-bold text-slate-900">Visa & Forex Guidance</h4>
                <p className="text-xs text-slate-600">End-to-end documentation assistance for Dubai, Singapore, Schengen, and Thailand tourist visas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR PACKAGES */}
      {featuredPackages.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Departures from Bangalore</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Top Holiday Packages for Bangalore Travelers
                </h2>
              </div>
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900"
              >
                <span>View All Tour Packages</span>
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

      {/* 6. LOCAL FAQS */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">FAQ</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions — Koramangala Office
          </h2>
          <p className="text-sm text-slate-600">
            Common questions from travelers visiting our 5th Block Koramangala travel desk.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-2"
            >
              <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                <span className="text-amber-500 font-extrabold">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#0A1320] to-slate-900 text-white p-8 sm:p-12 text-center space-y-6 shadow-xl border border-amber-300/20">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Plan Your Next Vacation from Bangalore?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Visit our Koramangala office on 80 Feet Road, call us directly, or drop us a WhatsApp message to speak with a holiday advisor today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${cleanPhone}`}
              className="rounded-full bg-[#F3B604] px-8 py-3 text-sm font-bold text-slate-950 shadow-md hover:bg-amber-400 transition-all hover:scale-105"
            >
              Call +91 99001 13691
            </a>
            <Link
              href="/tour-packages-from-bangalore"
              className="rounded-full border border-sky-400/40 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-200 hover:bg-sky-500/20 transition-all"
            >
              Tour Packages from Bangalore
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
