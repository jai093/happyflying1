import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'
import {SanityLive} from '@/sanity/lib/live'
import {VisualEditing} from 'next-sanity/visual-editing'
import {draftMode} from 'next/headers'
import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {FloatingContact} from '@/components/FloatingContact'
import {TravelAgencyJsonLd} from '@/components/JsonLd'
import {getSiteSettings} from '@/lib/sanity/fetch'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  const defaultSeo = settings.defaultSeo

  return {
    title: {
      default:
        defaultSeo?.metaTitle ||
        'HappyFlying Tours & Travels | Best Travel Agency in Bangalore | Luxury Tours & Holiday Packages',
      template: '%s — HappyFlying Tours & Travels',
    },
    description:
      defaultSeo?.metaDescription ||
      'HappyFlying Tours & Travels is Bangalore’s top-rated travel agency in Koramangala. Handcrafted Andaman, Bali, Dubai, Kashmir & luxury international tour packages from Bangalore with 24/7 concierge assistance.',
    keywords: defaultSeo?.keywords || [
      'travel agency in bangalore',
      'best tour operators in bangalore',
      'travel agency near me',
      'koramangala travel agency',
      'travel agents in koramangala bangalore',
      'best travel agency in bangalore for international trips',
      'tour operators in bangalore for domestic and international tours',
      'andaman tour packages from bangalore',
      'bali tour packages from bangalore',
      'dubai holiday packages from bangalore',
      'kashmir tour packages from bangalore',
      'honeymoon packages from bangalore',
      'luxury travel agency bangalore',
      'custom holiday planners bangalore',
      'happyflying tours and travels',
      'happy flying travel agency bangalore',
      'family tour packages from bangalore',
      'international flight tickets bangalore',
      'visa assistance services bangalore',
      'corporate group tour packages bangalore',
      'top 10 travel agencies in bangalore',
    ],
    alternates: {
      canonical: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.happyflyingtravels.com').replace(/\/$/, ''),
    },
    other: {
      'geo.region': 'IN-KA',
      'geo.placename': 'Bangalore, Koramangala',
      'geo.position': '12.9352;77.6245',
      ICBM: '12.9352, 77.6245',
    },
    metadataBase: new URL(
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.happyflyingtravels.com').replace(/\/$/, '')
    ),
    openGraph: {
      title: defaultSeo?.metaTitle || 'HappyFlying Tours & Travels | Best Travel Agency in Bangalore',
      description:
        defaultSeo?.metaDescription ||
        'Bangalore’s trusted luxury travel agency in Koramangala. Andaman, Bali, Dubai, and bespoke worldwide tours.',
      url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.happyflyingtravels.com').replace(/\/$/, ''),
      siteName: 'HappyFlying Tours & Travels',
      images: [
        {
          url: defaultSeo?.openGraphImage?.asset?.url || 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isDraftMode = (await draftMode()).isEnabled
  const settings = await getSiteSettings()

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#F3B604] selection:text-slate-900 overflow-x-hidden w-full max-w-full"
        suppressHydrationWarning
      >
        <TravelAgencyJsonLd
          name={settings.companyName}
          telephone={settings.phone}
          email={settings.email}
          address={settings.address}
        />
        <Header settings={settings} />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer settings={settings} />
        <FloatingContact settings={settings} />
        <SanityLive onReconnect={false} />
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  )
}
