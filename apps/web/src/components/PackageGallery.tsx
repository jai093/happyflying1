'use client'

import {useState, useEffect, useCallback} from 'react'
import {Camera, ChevronLeft, ChevronRight, X, Maximize2, Sparkles} from 'lucide-react'
import type {SanityImageWithAlt} from '@happyflying/types'
import {SanityImage} from './SanityImage'

interface PackageGalleryProps {
  gallery?: SanityImageWithAlt[]
  packageTitle: string
}

export function PackageGallery({gallery, packageTitle}: PackageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const items = gallery || []

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % items.length : 0))
  }, [lightboxIndex, items.length])

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : 0))
  }, [lightboxIndex, items.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [lightboxIndex, nextPhoto, prevPhoto])

  if (!items || items.length === 0) {
    return null
  }

  // Display up to 5 items in the preview bento grid
  const maxPreview = 5
  const previewItems = items.slice(0, maxPreview)
  const remainingCount = items.length - maxPreview

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl sm:text-2xl">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Camera className="h-5 w-5" />
            </div>
            <h2>Package Photo Gallery</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Scenic views, activities, and destinations captured across {packageTitle}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/80 px-3.5 py-1 text-xs font-bold text-sky-800 border border-sky-200">
          <Sparkles className="h-3 w-3 text-sky-600" />
          <span>{items.length} {items.length === 1 ? 'Photo' : 'Photos'}</span>
        </span>
      </div>

      {/* Bento Photo Grid */}
      {items.length === 1 ? (
        <div
          onClick={() => openLightbox(0)}
          className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-950 shadow-md"
        >
          <SanityImage
            value={items[0]}
            width={1200}
            height={675}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={items[0]?.alt || `${packageTitle} Photo`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          {items[0]?.alt && (
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold truncate">
              {items[0].alt}
            </div>
          )}
          <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm group-hover:bg-black/60 transition-colors">
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>
      ) : items.length === 2 ? (
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-950 shadow-sm"
            >
              <SanityImage
                value={item}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item?.alt || `${packageTitle} photo ${idx + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              {item?.alt && (
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-semibold truncate">
                  {item.alt}
                </div>
              )}
              <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm group-hover:bg-black/60 transition-colors">
                <Maximize2 className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {/* Main Large Feature (left side, 2 cols, 2 rows) */}
          <div
            onClick={() => openLightbox(0)}
            className="group relative col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto sm:h-full min-h-[220px] sm:min-h-[280px] overflow-hidden rounded-2xl cursor-pointer bg-slate-950 shadow-sm"
          >
            <SanityImage
              value={items[0]}
              width={900}
              height={700}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={items[0]?.alt || `${packageTitle} main photo`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            {items[0]?.alt && (
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-bold truncate">
                {items[0].alt}
              </div>
            )}
            <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm group-hover:bg-black/70 transition-colors">
              <Maximize2 className="h-4 w-4" />
            </div>
          </div>

          {/* Secondary Grid Photos */}
          {previewItems.slice(1).map((item, idx) => {
            const actualIndex = idx + 1
            const isLastPreview = actualIndex === maxPreview - 1 && remainingCount > 0

            return (
              <div
                key={actualIndex}
                onClick={() => openLightbox(actualIndex)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-slate-950 shadow-sm"
              >
                <SanityImage
                  value={item}
                  width={500}
                  height={380}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={item?.alt || `${packageTitle} photo ${actualIndex + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {item?.alt && !isLastPreview && (
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11px] sm:text-xs font-semibold truncate">
                    {item.alt}
                  </div>
                )}

                {/* If there are more than 5 photos, overlay a '+X Photos' banner on the last slot */}
                {isLastPreview ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/75 backdrop-blur-[2px] text-white p-2 text-center transition-all group-hover:bg-slate-950/85">
                    <span className="text-xl sm:text-2xl font-black text-[#F3B604]">
                      +{remainingCount}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-0.5">
                      More Photos
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-3 w-3" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Button to view all photos in lightbox */}
      {items.length > 2 && (
        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/70 px-4 py-2 text-xs font-bold text-sky-800 hover:bg-sky-100 transition-colors"
          >
            <Camera className="h-3.5 w-3.5 text-sky-600" />
            <span>Open Full Gallery ({items.length} Photos)</span>
          </button>
        </div>
      )}

      {/* Full-Screen Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md animate-in fade-in duration-200 p-4 sm:p-6"
        >
          {/* Top Bar: Title, Counter & Close */}
          <div className="flex items-center justify-between text-white py-2 px-2 sm:px-4 z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F3B604]">
                {packageTitle}
              </span>
              <span className="text-xs text-slate-400">
                • Photo {lightboxIndex + 1} of {items.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close Gallery Lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Center: Image & Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-2 max-h-[75vh]">
            {/* Prev Arrow */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 sm:left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-all border border-white/10 hover:scale-105 active:scale-95"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Current Active Image */}
            <div className="relative max-h-full max-w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl">
              <SanityImage
                value={items[lightboxIndex]}
                width={1600}
                height={1000}
                priority
                className="max-h-[72vh] max-w-[90vw] object-contain rounded-2xl select-none"
                alt={items[lightboxIndex]?.alt || `${packageTitle} Photo ${lightboxIndex + 1}`}
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextPhoto}
              className="absolute right-2 sm:right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-all border border-white/10 hover:scale-105 active:scale-95"
              aria-label="Next Photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption & Thumbnails */}
          <div className="space-y-3 z-10 px-2 sm:px-4">
            {/* Photo Caption */}
            {items[lightboxIndex]?.alt && (
              <div className="text-center text-sm sm:text-base font-semibold text-white drop-shadow-md">
                {items[lightboxIndex].alt}
              </div>
            )}

            {/* Thumbnail Strip */}
            <div className="flex justify-center items-center gap-2 overflow-x-auto py-2 max-w-4xl mx-auto scrollbar-thin">
              {items.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden shrink-0 transition-all duration-200 border-2 ${
                    idx === lightboxIndex
                      ? 'border-[#F3B604] scale-105 shadow-md'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Jump to photo ${idx + 1}`}
                >
                  <SanityImage
                    value={thumb}
                    width={100}
                    height={80}
                    className="h-full w-full object-cover"
                    alt={thumb?.alt || `Thumbnail ${idx + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
