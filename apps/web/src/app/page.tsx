import Link from 'next/link'
import {
  Sparkles,
  Plane,
  Compass,
  ArrowRight,
  ShieldCheck,
  Crown,
  Users,
  MapPin,
  Calendar,
  MessageSquare,
  Phone,
  CheckCircle2,
} from 'lucide-react'
import {
  getSiteSettings,
  getFeaturedPackages,
  getAllPackages,
  getAllDestinations,
  getTestimonials,
} from '@/lib/sanity/fetch'
import {PackageCard} from '@/components/PackageCard'
import {DestinationCard} from '@/components/DestinationCard'
import {PartnerMarquee} from '@/components/PartnerMarquee'
import {TestimonialSlider} from '@/components/TestimonialSlider'
import {MobileCardCarousel} from '@/components/MobileCardCarousel'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
  const [settings, liveFeatured, allPackages, liveDestinations, testimonials] = await Promise.all([
    getSiteSettings(),
    getFeaturedPackages(),
    getAllPackages(),
    getAllDestinations(),
    getTestimonials(),
  ])

  const featuredPackages =
    liveFeatured.length > 0
      ? liveFeatured
      : allPackages.length > 0
      ? allPackages.slice(0, 6)
      : []

  const destinations =
    liveDestinations.length > 0
      ? liveDestinations.slice(0, 6)
      : []

  const whatsappNumber = settings.whatsapp ? settings.whatsapp.replace(/[^0-9]/g, '') : '919900113691'
  const phone = settings.phone || '+91 9900113691'

  return (
    <div className="flex flex-col">
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white px-4 sm:px-6 py-20 sm:py-32 w-full max-w-full">
        {/* Background Video & Ambient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover scale-105"
          >
            <source
              src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            <source src="/happyflyinghome (1).mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/40" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-5 sm:space-y-8 w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-900/50 backdrop-blur-md px-3.5 py-1 text-xs sm:text-sm font-semibold text-white shadow-sm max-w-full">
            <span className="text-white text-[10px] shrink-0">▶</span>
            <span className="truncate">{settings.companyName || 'HappyFlying Tours & Travels LLP'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight break-words">
            Explore the World<span className="text-white/80 font-light ml-0.5 animate-pulse">|</span> <br />
            Beyond Limits
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-sm px-2">
            {settings.tagline ||
              'Wings to wonder, Indian heritage trails & bespoke international holidays crafted around you.'}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F3B604] px-7 py-3 text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-400"
            >
              <span>Explore Packages</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/15 backdrop-blur-md px-7 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-white/25"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick Assurance Badges */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300 font-medium px-2">
            <span className="flex items-center gap-1.5 shrink-0">
              <CheckCircle2 className="h-4 w-4 text-[#F3B604] shrink-0" /> 100% Certified Agency
            </span>
            <span className="flex items-center gap-1.5 shrink-0">
              <CheckCircle2 className="h-4 w-4 text-[#F3B604] shrink-0" /> Verified 4-Star & 5-Star Stays
            </span>
            <span className="flex items-center gap-1.5 shrink-0">
              <CheckCircle2 className="h-4 w-4 text-[#F3B604] shrink-0" /> 24/7 On-Ground Concierge
            </span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED TOUR PACKAGES SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
              <Sparkles className="h-3.5 w-3.5" /> Handcrafted Holiday Packages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Island & Heritage Getaways
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              From the exotic turquoise beaches of Andaman to luxury retreats, explore our highest-rated vacation packages.
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors"
          >
            <span>View All Packages</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {featuredPackages.length > 0 ? (
          <MobileCardCarousel desktopGridClassName="md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg._id} pkg={pkg} />
            ))}
          </MobileCardCarousel>
        ) : (
          <MobileCardCarousel desktopGridClassName="md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fallback Andaman Card if dataset not seeded yet */}
            <PackageCard
              pkg={{
                _id: 'pkg-andaman-trip',
                _type: 'travelPackage',
                title: 'Andaman Trip — Exotic 5D/4N Island Getaway',
                slug: {current: 'andaman-trip'},
                duration: '4 N / 5 D',
                rating: 4.8,
                reviewCount: 48,
                packageType: 'Domestic Tour',
                featured: true,
                categories: ['Heritage & Nature', 'Beach & Backwaters', 'Honeymoon & Luxury'],
                summary:
                  'PRIVATE CAB + Makruzz Cruise + 4-Star Resort + Elephant Beach Snorkeling + Cellular Jail Light & Sound Show.',
                destination: {
                  _id: 'dest-andaman',
                  _type: 'destination',
                  name: 'Andaman & Nicobar',
                  slug: {current: 'andaman'},
                },
                pricing: {
                  _id: 'p1',
                  _type: 'pricing',
                  finalPrice: 24999,
                  displayPrice: 'Call Us / Custom Quote',
                  title: 'Standard',
                },
              }}
            />
          </MobileCardCarousel>
        )}
      </section>

      {/* 3. AI TRAVEL PLANNER TEASER SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-[#0A1320] text-white overflow-hidden w-full">
        <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] border border-sky-500/30 bg-white/5 p-5 sm:p-10 lg:p-14 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#F3B604]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-300">
                <Compass className="h-3.5 w-3.5" /> Smart Travel Concierge
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                HappyFlying <br />
                <span className="bg-gradient-to-r from-sky-400 via-[#F3B604] to-emerald-300 bg-clip-text text-transparent">
                  TravelIntell AI Assistant
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Generate custom multi-day island itineraries, discover flight connections, and receive personalized holiday advice tailored to your budget and travel preferences.
              </p>
              <div className="pt-2">
                <Link
                  href="/travel-planner"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F3B604] px-8 py-3.5 text-sm font-bold text-slate-950 shadow hover:bg-amber-400 transition-all hover:scale-105"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Launch AI Travel Planner</span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-400/30 bg-slate-900/80 p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-amber-500" />
                <div className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">travelintell.assistant.ai</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-slate-800/80 p-3.5 text-slate-200">
                  <span className="text-[#F3B604] font-bold">You:</span> Plan a 5-day honeymoon in Andaman with private cruises and beach dinners.
                </div>
                <div className="rounded-2xl bg-sky-950/60 p-3.5 text-sky-100 border border-sky-800/40">
                  <span className="text-sky-400 font-bold">TravelIntell:</span> Perfect! I recommend 2 nights in Port Blair + 1 night Havelock (Radhanagar Sunset) + 1 night Neil Island. Includes Makruzz Catamaran cruise & private AC vehicle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESTINATION DISCOVERY */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
            Curated Destinations
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Discover Your Next Dream Destination
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Handpicked islands and cultural regions curated with local insights and luxury hospitality.
          </p>
        </div>

        <MobileCardCarousel desktopGridClassName="md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.length > 0 ? (
            destinations.map((dest) => (
              <DestinationCard key={dest._id} destination={dest} />
            ))
          ) : (
            <DestinationCard
              destination={{
                _id: 'dest-andaman',
                _type: 'destination',
                name: 'Andaman & Nicobar Islands',
                slug: {current: 'andaman'},
                region: 'Bay of Bengal',
                country: 'India',
                shortDescription: 'Turquoise ocean waters, powder white sand beaches, and deep coral reef biodiversity.',
                idealDuration: '5 - 7 Days',
              }}
            />
          )}
        </MobileCardCarousel>
      </section>

      {/* 5. TRUSTED GLOBAL PARTNERS & AIRLINES */}
      <section className="py-16 px-4 sm:px-6 bg-[#0A1320] text-white overflow-hidden w-full">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Trusted Global Airline & Hospitality Network
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              Partners That Elevate Every Journey
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Connecting top-tier airlines, luxury resort groups, and on-ground logistics for seamless holidays.
            </p>
          </div>

          <PartnerMarquee />
        </div>
      </section>

      {/* 6. WHY CHOOSE HAPPYFLYING */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Why Choose HappyFlying
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Trusted Bangalore Travel Partner for Domestic & Global Holidays
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Headquartered in Koramangala, Bangalore, HappyFlying brings 10+ years of travel craftsmanship, 100% verified hotels, pre-booked catamaran cruises, and 24/7 on-ground assistance to every trip.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900"
              >
                <span>Read our full story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">100% Certified Agency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered travel LLP providing complete travel safety, transparent invoicing, and zero hidden charges.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Handcrafted Packages</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailor-made itineraries with private dedicated AC vehicles and prime-slot Makruzz / Nautika cruise tickets.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Verified Local Guides</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                On-ground executives at airports, ferry jetties, and attraction gates for seamless coordination.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">24/7 Concierge Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated personal tour coordinator reachable anytime via WhatsApp or phone throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRAVELER TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-100/60 overflow-hidden w-full">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
                Traveler Stories
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Loved by Families & Honeymooners
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Real feedback from travelers who explored the world with HappyFlying Tours & Travels.
              </p>
            </div>

            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* 7.5 LOCAL SEO & BANGALORE TRAVEL HUB */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-slate-100 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Bangalore's Premier Travel Specialists
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Best Travel Agency in Bangalore for Domestic & International Tours
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              HappyFlying Tours & Travels LLP is headquartered in <strong>Koramangala, Bangalore</strong>, catering to travelers across Indiranagar, HSR Layout, Whitefield, Jayanagar, and Greater Bangalore. We curate verified luxury vacation packages with direct and connecting departures from Kempegowda International Airport (BLR).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Koramangala Head Office</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located on 80 Feet Road, 5th Block, Koramangala. Meet our destination specialists for one-on-one custom trip planning.
              </p>
              <Link href="/contact" className="inline-block text-xs font-bold text-sky-700 hover:text-sky-900">
                Get Office Directions →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Plane className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Bangalore Departures</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Handcrafted flight packages departing BLR to Port Blair (Andaman), Bali (Denpasar), Dubai, Singapore, and Europe.
              </p>
              <Link href="/packages" className="inline-block text-xs font-bold text-sky-700 hover:text-sky-900">
                Explore Tour Packages →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Certified Local Tour Operator</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                10+ years of verified travel expertise, trusted airline partnerships, guaranteed cruise bookings, and 24/7 on-tour safety.
              </p>
              <Link href="/about" className="inline-block text-xs font-bold text-sky-700 hover:text-sky-900">
                About HappyFlying →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-100/70 p-6 border border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Trending Holiday Packages from Bangalore:</h4>
              <p className="text-xs text-slate-600">
                Andaman Tour Packages from Bangalore • Bali Honeymoon Packages • Dubai Luxury Tours • Kashmir Paradise Trails • Europe Multi-Country Packages
              </p>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              <span>View All Packages</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FINAL LUXURY CTA SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-950 text-white overflow-hidden w-full">
        <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-sky-900 via-[#0A1320] to-slate-900 border border-sky-500/30 p-6 sm:p-10 lg:p-14 text-center space-y-6 shadow-2xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3B604]/20 text-[#F3B604] text-xs font-bold uppercase tracking-wider">
            Ready for takeoff?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Craft Your Dream Holiday Today
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Speak directly with our destination concierges in Bangalore for customized dates, luxury cruise upgrades, and instant group discounts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi HappyFlying! I would like to enquire about holiday packages.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Inquire on WhatsApp</span>
            </a>
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#F3B604] px-8 py-4 text-sm font-bold text-slate-950 shadow-lg hover:bg-amber-400 transition-transform"
            >
              <Phone className="h-4 w-4 fill-current" />
              <span>Call Advisor ({phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
