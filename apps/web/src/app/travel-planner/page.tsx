import type { Metadata } from 'next'
import { Bot } from 'lucide-react'
import { TravelPlannerEmbed } from '@/components/TravelPlannerEmbed'

export const metadata: Metadata = {
  title: 'TravelIntell AI Assistant | Smart Travel Itinerary Planner | HappyFlying',
  description:
    'Synthesize custom travel itineraries across 20+ domestic and international destinations in real-time. Choose your parameters to preview a day-by-day roadmap and connect directly with our Bangalore travel concierges.',
}

export default function TravelPlannerPage() {
  return (
    <>
      <link rel="preconnect" href="https://travelintell.vercel.app/" crossOrigin="" />
      <link rel="dns-prefetch" href="https://travelintell.vercel.app/" />

      <div className="py-6 sm:py-12 px-2 sm:px-6 max-w-7xl mx-auto w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="max-w-3xl px-2 sm:px-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3B604]/20 text-[#0A1320] text-xs font-bold uppercase tracking-wider mb-3">
            <Bot className="h-3.5 w-3.5 text-sky-600" /> TravelIntell AI Assistant
          </div>
          <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Smart Travel Itinerary Planner
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-slate-600 leading-relaxed">
            Synthesize custom travel itineraries across 20+ domestic and international destinations in real-time. Choose your parameters to preview a day-by-day roadmap and connect directly with our Bangalore travel concierges.
          </p>
        </div>

        {/* TravelIntell by HappyFlying – Responsive AI Planner Embed */}
        <div className="w-full max-w-[1400px] mx-auto">
          <TravelPlannerEmbed plannerUrl="https://travelintell.vercel.app/?embed=true&view=planner" />
        </div>
      </div>
    </>
  )
}
