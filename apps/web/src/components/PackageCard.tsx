import Link from 'next/link'
import {Calendar, MapPin, Star, ArrowRight, Sparkles} from 'lucide-react'
import type {TravelPackage} from '@happyflying/types'
import {SanityImage} from './SanityImage'
import {getCuratedImageForSlug} from '@/lib/data/destinationImages'

interface PackageCardProps {
  pkg: TravelPackage
}

export function PackageCard({pkg}: PackageCardProps) {
  const packageSlug = typeof pkg.slug === 'string' ? pkg.slug : pkg.slug?.current || ''
  const destinationName = pkg.destination?.name || 'Tropical Island'
  const duration = pkg.duration || '5D / 4N'
  const rating = pkg.rating || 4.8
  const reviewCount = pkg.reviewCount || 24
  const displayPrice = pkg.pricing?.displayPrice || 'Call Us'

  // Curated high-resolution fallback image
  const fallbackImageSrc = getCuratedImageForSlug(packageSlug, pkg.title)

  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] sm:rounded-[26px] border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sky-300/80">
      {/* Sleek proportional image frame */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
        {pkg.hero?.asset ? (
          <SanityImage
            value={pkg.hero}
            width={720}
            height={420}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={pkg.hero.alt || pkg.title}
          />
        ) : (
          <img
            src={fallbackImageSrc}
            alt={pkg.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
          {pkg.packageType && (
            <span className="rounded-full bg-[#F3B604] px-2.5 py-0.5 text-[10px] font-extrabold text-[#0A1320] shadow-xs">
              {pkg.packageType}
            </span>
          )}
          {pkg.featured && (
            <span className="rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs flex items-center gap-1">
              <Sparkles className="h-2.5 w-2.5" /> Featured
            </span>
          )}
        </div>

        {/* Rating Floating Badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 text-[11px] font-bold text-amber-400 border border-white/10">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span>{rating}</span>
          <span className="text-slate-400 text-[9px]">({reviewCount})</span>
        </div>

        {/* Destination & Duration Bottom Overlay */}
        <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white text-[11px] font-semibold">
          <span className="flex items-center gap-1 drop-shadow-sm truncate max-w-[60%]">
            <MapPin className="h-3 w-3 text-[#F3B604] shrink-0" />
            <span className="truncate">{destinationName}</span>
          </span>
          <span className="flex items-center gap-1 rounded-full bg-slate-900/60 backdrop-blur-xs px-2 py-0.5 border border-white/20 text-[10px]">
            <Calendar className="h-2.5 w-2.5 text-white" />
            {duration}
          </span>
        </div>
      </div>

      {/* Compact Card Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1 leading-snug">
          <Link href={`/packages/${packageSlug}`} title={pkg.title}>
            {pkg.title}
          </Link>
        </h3>

        {pkg.summary && (
          <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {pkg.summary}
          </p>
        )}

        {/* Compact Highlights Tags */}
        {pkg.categories && pkg.categories.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {pkg.categories.slice(0, 2).map((cat, i) => (
              <span
                key={i}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Compact Footer: Price & CTA */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-400">
              Starting From
            </span>
            <span className="text-sm sm:text-base font-black text-slate-900">
              {displayPrice}
            </span>
          </div>

          <Link
            href={`/packages/${packageSlug}`}
            className="inline-flex items-center gap-1 rounded-xl bg-[#0A1320] px-3.5 py-1.5 text-xs font-bold text-[#F3B604] shadow-xs hover:bg-slate-800 transition-all hover:scale-105"
          >
            <span>View Details</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  )
}

