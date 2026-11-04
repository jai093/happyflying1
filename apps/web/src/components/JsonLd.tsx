export function TravelAgencyJsonLd({
  type = ['TravelAgency', 'LocalBusiness'],
  name = 'HappyFlying Tours & Travels',
  url = 'https://www.happyflyingtravels.com/',
  telephone = '+919900113691',
  email = 'operations@happyflyingtravels.com',
  address = 'No. 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala',
  areaServed = 'Bengaluru',
}: {
  type?: string | string[]
  name?: string
  url?: string
  telephone?: string
  email?: string
  address?: string
  areaServed?: string | Array<string | object>
}) {
  const cleanUrl = (url || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.happyflyingtravels.com')
    .trim()
    .replace(/\/+$/, '')
  const fullSiteUrl = `${cleanUrl}/`
  const businessName = name ? name.replace(/\s+LLP$/i, '').trim() : 'HappyFlying Tours & Travels'
  const formattedPhone = (telephone || '+919900113691').replace(/\s+/g, '')

  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: businessName,
    legalName: 'HappyFlying Tours & Travels LLP',
    url: fullSiteUrl,
    telephone: formattedPhone,
    email: email || 'operations@happyflyingtravels.com',
    logo: `${cleanUrl}/happyflyinglogo.png`,
    image: `${cleanUrl}/happyflyinglogo.png`,
    description:
      'Premier luxury travel agency and tour operator in Bangalore located in Koramangala. Specializing in bespoke Andaman, Bali, Dubai, Kashmir, and worldwide holidays from Bangalore.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 145, 3rd Floor, 80 Feet Road, KHB Colony, 5th Block, Koramangala',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560034',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9352,
      longitude: 77.6245,
    },
    hasMap: 'https://maps.google.com/?q=HappyFlying+Tours+%26+Travels+Koramangala+Bangalore',
    areaServed,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR, USD, EUR, AED',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  )
}

export function SiteNavigationJsonLd({
  baseUrl = 'https://www.happyflyingtravels.com',
}: {
  baseUrl?: string
}) {
  const cleanUrl = (baseUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.happyflyingtravels.com')
    .trim()
    .replace(/\/+$/, '')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Try AI Planner',
        description: 'Synthesize custom travel itineraries across 20+ destinations in real-time with our smart AI assistant.',
        url: `${cleanUrl}/travel-planner`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Bespoke Holiday Packages',
        description: 'Handcrafted domestic and international luxury holiday tour packages from Bangalore.',
        url: `${cleanUrl}/packages`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Destinations',
        description: 'Explore premier holiday destinations from Andaman & Nicobar to Bali, Dubai, and Kashmir.',
        url: `${cleanUrl}/destinations`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'About Us',
        description: 'Bangalore’s top-rated luxury travel agency headquartered in Koramangala with 10+ years experience.',
        url: `${cleanUrl}/about`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Services',
        description: 'Bespoke tour planning, verified hotel stays, flight ticketing, and 24/7 concierge assistance.',
        url: `${cleanUrl}/services`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Contact Us',
        description: 'Get in touch with our travel advisors in Koramangala via phone, WhatsApp, or booking enquiry.',
        url: `${cleanUrl}/contact`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  )
}

export function ProductOfferJsonLd({
  title,
  description,
  price = 24999,
  currency = 'INR',
  url,
  image,
  rating = 4.8,
  reviewCount = 24,
}: {
  title: string
  description?: string
  price?: number
  currency?: string
  url?: string
  image?: string
  rating?: number
  reviewCount?: number
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description: description || title,
    image: image ? [image] : undefined,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviewCount,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  )
}

export function FaqJsonLd({faqs}: {faqs: {question: string; answer: string}[]}) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  )
}
