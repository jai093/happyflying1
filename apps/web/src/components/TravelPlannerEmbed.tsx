'use client'

import React, {useEffect, useRef, useState} from 'react'
import {Sparkles, Maximize2, Smartphone, ExternalLink, RefreshCw} from 'lucide-react'

interface TravelPlannerEmbedProps {
  plannerUrl?: string
}

export function TravelPlannerEmbed({
  plannerUrl = 'https://happy-flying.vercel.app/?embed=true&view=planner',
}: TravelPlannerEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [viewMode, setViewMode] = useState<'fit' | 'scroll'>('fit')

  // Measure container width responsively
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()

    const resizeObserver = new ResizeObserver(() => {
      updateWidth()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    window.addEventListener('resize', updateWidth)
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  // Virtual layout breakpoint for mobile devices
  // At 480px natural width, TravelIntell form, theme pills, flowchart & buttons fit with zero clipping
  const baseMobileWidth = 475
  const isMobile = containerWidth > 0 && containerWidth < baseMobileWidth
  const scale = isMobile && viewMode === 'fit' ? containerWidth / baseMobileWidth : 1

  // Height adjustment to ensure full vertical scrollability
  const baseHeight = 1100
  const scaledHeight = isMobile && viewMode === 'fit' ? Math.round(baseHeight / scale) : baseHeight

  return (
    <div className="w-full space-y-3">
      {/* Mobile Quick Action & View Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl bg-slate-900 text-white p-3 sm:p-4 shadow-md border border-slate-800">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F3B604] text-slate-950 font-bold">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
              HappyFlying AI Assistant
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-400">
              {isMobile ? 'Mobile Optimized Touch View' : 'Interactive Itinerary & Flowchart'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile view toggle: Fit vs Touch Scroll */}
          {isMobile && (
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'fit' ? 'scroll' : 'fit')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-[11px] font-semibold text-slate-200 border border-slate-700 transition-colors"
              title={viewMode === 'fit' ? 'Switch to touch scrollable zoom' : 'Fit completely on screen'}
            >
              <Smartphone className="h-3.5 w-3.5 text-[#F3B604]" />
              <span>{viewMode === 'fit' ? 'Fit Screen' : 'Pan Zoom'}</span>
            </button>
          )}

          {/* Fullscreen Direct Launch Button */}
          <a
            href="https://happy-flying.vercel.app/?view=planner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#F3B604] hover:bg-amber-400 px-3 py-1.5 text-[11px] sm:text-xs font-bold text-slate-950 shadow-sm transition-all hover:scale-105"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span>Open Fullscreen</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* Main Responsive Iframe Container */}
      <div
        ref={containerRef}
        className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl overflow-hidden transition-all"
        style={{
          height: isMobile && viewMode === 'fit' ? `${baseHeight}px` : `${baseHeight}px`,
          minHeight: '850px',
        }}
      >
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50/95 backdrop-blur-xs gap-3">
            <RefreshCw className="h-8 w-8 text-[#F3B604] animate-spin" />
            <span className="text-xs sm:text-sm font-bold text-slate-700">
              Connecting to TravelIntell AI Planner...
            </span>
          </div>
        )}

        {/* Scrollable Container for 'scroll' mode or Scaled Viewport for 'fit' mode */}
        <div
          className={`w-full h-full ${
            viewMode === 'scroll' && isMobile ? 'overflow-x-auto overflow-y-hidden' : 'overflow-hidden'
          }`}
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <iframe
            src={plannerUrl}
            title="TravelIntell AI Planner by HappyFlying"
            loading="eager"
            onLoad={() => setIsLoaded(true)}
            // @ts-expect-error modern browsers support fetchpriority on iframe
            fetchpriority="high"
            allow="clipboard-write"
            style={{
              border: 'none',
              display: 'block',
              ...(isMobile && viewMode === 'fit'
                ? {
                    width: `${baseMobileWidth}px`,
                    height: `${scaledHeight}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: '0 0',
                  }
                : isMobile && viewMode === 'scroll'
                ? {
                    width: `${baseMobileWidth}px`,
                    height: '100%',
                    minHeight: `${baseHeight}px`,
                  }
                : {
                    width: '100%',
                    height: '100%',
                    minHeight: `${baseHeight}px`,
                  }),
            }}
          />
        </div>
      </div>
    </div>
  )
}
