import type {Metadata} from 'next'
import {Bot} from 'lucide-react'

export const metadata: Metadata = {
  title: 'TravelIntell AI Assistant | Smart Travel Itinerary Planner | HappyFlying',
  description:
    'Synthesize custom travel itineraries across 20+ domestic and international destinations in real-time. Choose your parameters to preview a day-by-day roadmap and connect directly with our Bangalore travel concierges.',
}

export default function TravelPlannerPage() {
  return (
    <>
      <link rel="preconnect" href="https://happy-flying.vercel.app" crossOrigin="" />
      <link rel="dns-prefetch" href="https://happy-flying.vercel.app" />

      <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3B604]/20 text-[#0A1320] text-xs font-bold uppercase tracking-wider mb-3">
            <Bot className="h-3.5 w-3.5 text-sky-600" /> TravelIntell AI Assistant
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Smart Travel Itinerary Planner
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Synthesize custom travel itineraries across 20+ domestic and international destinations in real-time. Choose your parameters to preview a day-by-day roadmap and connect directly with our Bangalore travel concierges.
          </p>
        </div>

        {/* TravelIntell by HappyFlying – AI Planner Instant Embed */}
        <div
          style={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        >
          <iframe
            src="https://happy-flying.vercel.app/?embed=true&view=planner"
            title="TravelIntell AI Planner by HappyFlying"
            loading="eager"
            // @ts-expect-error modern browsers support fetchpriority on iframe
            fetchpriority="high"
            style={{
              width: '100%',
              height: '1000px',
              border: 'none',
              display: 'block',
              minHeight: '900px',
            }}
            allow="clipboard-write"
          />
        </div>
      </div>
    </>
  )
}
