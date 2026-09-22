'use client'

export function PartnerMarquee() {
  const partners = [
    {name: 'Emirates', code: 'E', bg: 'bg-[#C8102E]', isSerif: true},
    {name: 'Qatar Airways', code: 'QA', bg: 'bg-[#5C0D34]', isSerif: false},
    {name: 'Taj Hotels & Resorts', code: 'T', bg: 'bg-[#B78C2A]', isSerif: true},
    {name: 'Marriott Bonvoy', code: 'M', bg: 'bg-[#A6192E]', isSerif: true},
    {name: 'Hilton Worldwide', code: 'H', bg: 'bg-[#003E7E]', isSerif: false},
    {name: 'Air India', code: 'AI', bg: 'bg-[#DA291C]', isSerif: false},
    {name: 'The Oberoi Group', code: 'O', bg: 'bg-[#8B6F3D]', isSerif: true},
    {name: 'Makruzz Premium Cruise', code: 'MK', bg: 'bg-[#0072C6]', isSerif: false},
    {name: 'Nautika Luxury Catamaran', code: 'NK', bg: 'bg-[#008080]', isSerif: false},
    {name: 'Singapore Airlines', code: 'SQ', bg: 'bg-[#00205B]', isSerif: false},
    {name: 'ITC Hotels', code: 'ITC', bg: 'bg-[#800020]', isSerif: true},
    {name: 'Etihad Airways', code: 'EY', bg: 'bg-[#BD9B60]', isSerif: false},
  ]

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-sky-900/40 bg-white/5 py-6 shadow-inner">
      {/* Edge gradient masks for luxury fade-in/fade-out */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A1320] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A1320] to-transparent z-10" />

      {/* Marquee Track Container */}
      <div className="flex w-max animate-marquee">
        {/* Primary Track */}
        <div className="flex shrink-0 items-center gap-4 pr-4">
          {partners.map((p, idx) => (
            <div
              key={`track1-${idx}`}
              className="flex h-20 min-w-48 sm:min-w-56 items-center gap-3 rounded-2xl border border-sky-400/20 bg-white/10 px-4 backdrop-blur-md shrink-0 transition-transform hover:scale-105"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl text-white font-bold shadow-md shrink-0 ${p.bg}`}
              >
                <span className={p.isSerif ? 'font-serif text-2xl italic' : 'text-sm font-black'}>
                  {p.code}
                </span>
              </span>
              <div className="text-left">
                <span className="block font-bold text-white text-xs sm:text-sm">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-400">Verified Global Partner</span>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate Track for zero-jump loop */}
        <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden="true">
          {partners.map((p, idx) => (
            <div
              key={`track2-${idx}`}
              className="flex h-20 min-w-48 sm:min-w-56 items-center gap-3 rounded-2xl border border-sky-400/20 bg-white/10 px-4 backdrop-blur-md shrink-0 transition-transform hover:scale-105"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl text-white font-bold shadow-md shrink-0 ${p.bg}`}
              >
                <span className={p.isSerif ? 'font-serif text-2xl italic' : 'text-sm font-black'}>
                  {p.code}
                </span>
              </span>
              <div className="text-left">
                <span className="block font-bold text-white text-xs sm:text-sm">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-400">Verified Global Partner</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
