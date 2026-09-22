'use client'

import React, {useRef, useState, useCallback} from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'

interface MobileCardCarouselProps {
  children: React.ReactNode
  desktopGridClassName?: string
}

export function MobileCardCarousel({
  children,
  desktopGridClassName = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
}: MobileCardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const items = React.Children.toArray(children)
  const count = items.length

  const handleScroll = useCallback(() => {
    if (!scrollRef.current || count === 0) return
    const container = scrollRef.current
    const cards = container.children
    if (cards.length > 0) {
      const firstCard = cards[0] as HTMLElement
      const cardWidth = firstCard.offsetWidth + 16 // width + gap
      const index = Math.round(container.scrollLeft / cardWidth)
      setActiveIndex(Math.max(0, Math.min(index, count - 1)))
    }
  }, [count])

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current || count === 0) return
    const targetIndex = Math.max(0, Math.min(index, count - 1))
    const container = scrollRef.current
    const cards = container.children
    if (cards.length > targetIndex) {
      const targetCard = cards[targetIndex] as HTMLElement
      const scrollLeft = targetCard.offsetLeft - 16 // offset container padding
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth',
      })
    }
    setActiveIndex(targetIndex)
  }

  const scrollPrev = () => {
    scrollToIndex(activeIndex - 1)
  }

  const scrollNext = () => {
    scrollToIndex(activeIndex + 1)
  }

  return (
    <div className="w-full">
      {/* Desktop & Tablet View (md and up): Clean responsive grid */}
      <div className={`hidden md:grid ${desktopGridClassName}`}>
        {children}
      </div>

      {/* Mobile Horizontal Snap-Scroll View (< md): Side-to-side touch carousel */}
      <div className="md:hidden w-full overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-1 scroll-smooth [&::-webkit-scrollbar]:hidden w-full"
          style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
        >
          {items.map((child, idx) => (
            <div
              key={idx}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center"
            >
              {child}
            </div>
          ))}
        </div>

        {/* Carousel Controls matching attached image */}
        {count > 1 && (
          <div className="flex items-center justify-center gap-5 pt-3 pb-1">
            {/* Circular Left Arrow Button */}
            <button
              type="button"
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-slate-200/80 text-slate-800 transition-all ${
                activeIndex === 0
                  ? 'opacity-35 cursor-not-allowed'
                  : 'hover:bg-slate-50 active:scale-95 shadow-sm hover:shadow'
              }`}
              aria-label="Previous card"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            </button>

            {/* Pill & Dot Indicators */}
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? 'w-8 h-2.5 bg-[#C5A869]'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Circular Right Arrow Button */}
            <button
              type="button"
              onClick={scrollNext}
              disabled={activeIndex === count - 1}
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-slate-200/80 text-slate-800 transition-all ${
                activeIndex === count - 1
                  ? 'opacity-35 cursor-not-allowed'
                  : 'hover:bg-slate-50 active:scale-95 shadow-sm hover:shadow'
              }`}
              aria-label="Next card"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

