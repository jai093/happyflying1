import {notFound} from 'next/navigation'
import Link from 'next/link'
import type {Metadata} from 'next'
import {
  ChevronLeft,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles,
  Plane,
} from 'lucide-react'
import {client} from '@/sanity/client'
import {SERVICE_SLUGS_QUERY} from '@/lib/sanity/queries'
import {getServiceBySlug, getSiteSettings} from '@/lib/sanity/fetch'
import {ALL_SERVICES_CATALOG} from '@/lib/data/servicesData'
import {CustomPortableText} from '@/components/CustomPortableText'
import {EnquiryForm} from '@/components/EnquiryForm'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0

interface ServicePageProps {
  params: Promise<{slug: string}>
}

export async function generateStaticParams() {
  try {
    const slugs = await client
      .withConfig({useCdn: false})
      .fetch<{slug: string}[]>(SERVICE_SLUGS_QUERY)
    
    const set = new Set<string>()
    if (Array.isArray(slugs)) {
      slugs.forEach((s) => {
        if (s?.slug) set.add(s.slug)
      })
    }
    ALL_SERVICES_CATALOG.forEach((s) => {
      set.add(s.slug)
    })
    return Array.from(set).map((slug) => ({slug}))
  } catch {
    return ALL_SERVICES_CATALOG.map((s) => ({slug: s.slug}))
  }
}

export async function generateMetadata({params}: ServicePageProps): Promise<Metadata> {
  const {slug} = await params
  const service = await getServiceBySlug(slug)
  const fallback = ALL_SERVICES_CATALOG.find((s) => s.slug === slug)
  const target = service || fallback

  if (!target) {
    return {title: 'Service — HappyFlying'}
  }

  return {
    title: `${target.title} — HappyFlying Services`,
    description: target.shortDescription || `Explore ${target.title} by HappyFlying Tours & Travels`,
  }
}

export default async function ServiceDetailPage({params}: ServicePageProps) {
  const {slug} = await params
  const [service, settings] = await Promise.all([
    getServiceBySlug(slug),
    getSiteSettings(),
  ])

  const fallback = ALL_SERVICES_CATALOG.find((s) => s.slug === slug)
  const data = service || (fallback ? {
    _id: fallback.id,
    _type: 'service' as const,
    title: fallback.title,
    slug: {current: fallback.slug},
    shortDescription: fallback.shortDescription,
    features: fallback.features,
    image: fallback.image,
  } : null)

  if (!data) {
    return notFound()
  }

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full space-y-10">
      <div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-100 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>All Services</span>
        </Link>
      </div>

      {'image' in data && data.image && (
        <div className="aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden rounded-[32px] bg-slate-100 shadow-md border border-slate-200/80">
          <img
            src={data.image as string}
            alt={data.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
          <Plane className="h-3.5 w-3.5 text-sky-600" /> Professional Concierge Service
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {data.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {data.shortDescription}
        </p>
      </div>

      {/* Features Checklist */}
      {data.features && data.features.length > 0 && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">What's Included & Highlights</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description Content */}
      {'description' in data && Boolean(data.description) && (
        <div className="prose prose-zinc max-w-none">
          <CustomPortableText value={data.description as any} />
        </div>
      )}

      {/* Embedded Enquiry Form */}
      <div className="rounded-[36px] border border-sky-900/30 bg-[#0A1320] text-white p-8 sm:p-12 shadow-2xl space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F3B604]">
            Enquire About This Service
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Request a Custom Quote or Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us your travel requirements and our Bangalore team will get back to you with custom options.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl">
          <EnquiryForm defaultPackage={data.title} settings={settings} />
        </div>
      </div>
    </div>
  )
}
