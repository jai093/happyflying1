'use client'

import React, {useEffect, useRef, useState} from 'react'
import {RefreshCw} from 'lucide-react'

interface TravelPlannerEmbedProps {
  plannerUrl?: string
}

export function TravelPlannerEmbed({
  plannerUrl = 'https://happy-flying.vercel.app/?embed=true&view=planner',
}: TravelPlannerEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)

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
  const baseMobileWidth = 480
  const isMobile = containerWidth > 0 && containerWidth < baseMobileWidth
  const scale = isMobile ? containerWidth / baseMobileWidth : 1

  // Height adjustment to ensure full vertical scrollability
  const baseHeight = 1050
  const scaledHeight = isMobile ? Math.round(baseHeight / scale) : baseHeight

  return (
    <div
      ref={containerRef}
      className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl overflow-hidden"
      style={{
        height: `${baseHeight}px`,
        minHeight: '850px',
      }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50/95 backdrop-blur-xs gap-3">
          <RefreshCw className="h-8 w-8 text-[#F3B604] animate-spin" />
          <span className="text-xs sm:text-sm font-bold text-slate-700">
            Loading TravelIntell AI Planner...
          </span>
        </div>
      )}

      {/* Responsive Scaled Viewport for Mobile & Full Fluid Width for Desktop */}
      <div
        className="w-full h-full overflow-hidden"
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
            ...(isMobile
              ? {
                  width: `${baseMobileWidth}px`,
                  height: `${scaledHeight}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: '0 0',
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
  )
}
