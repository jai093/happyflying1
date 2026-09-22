import Link from 'next/link'
import {MapPin, Clock, ArrowRight} from 'lucide-react'
import type {Destination} from '@happyflying/types'
import {SanityImage} from './SanityImage'
import {getCuratedImageForSlug} from '@/lib/data/destinationImages'

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({destination}: DestinationCardProps) {
  const slug =
    typeof destination.slug === 'string'
      ? destination.slug
      : destination.slug?.current || ''

  const fallbackImageSrc = getCuratedImageForSlug(slug, destination.name)

  return (
    <article className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-slate-200/80 bg-slate-900 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Sleek proportional image frame */}
      <div className="relative h-60 sm:h-64 w-full overflow-hidden">
        {destination.heroImage?.asset ? (
          <SanityImage
            value={destination.heroImage}
            width={800}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-95"
            alt={destination.heroImage.alt || destination.name}
          />
        ) : (
          <img
            src={fallbackImageSrc}
            alt={destination.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-95"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Compact overlay content */}
      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#F3B604]">
            <MapPin className="h-3 w-3" />
            <span>{destination.region || destination.country || 'Paradise'}</span>
          </div>

          {destination.idealDuration && (
            <div className="flex items-center gap-1 text-[11px] text-slate-300 bg-slate-900/60 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/10">
              <Clock className="h-3 w-3 text-sky-400" />
              <span>{destination.idealDuration}</span>
            </div>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#F3B604] transition-colors leading-snug">
          <Link href={`/destinations/${slug}`}>
            {destination.name}
          </Link>
        </h3>

        {destination.shortDescription && (
          <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {destination.shortDescription}
          </p>
        )}

        <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between">
          <Link
            href={`/destinations/${slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#F3B604] transition-colors"
          >
            <span>Explore Tours</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  )
}

