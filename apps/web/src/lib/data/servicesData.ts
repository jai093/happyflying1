export interface ServiceItem {
  id: string
  title: string
  slug: string
  image?: string
  shortDescription: string
  features: string[]
  icon?: string
}

export const CORE_FEATURED_SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Bespoke Holiday Packages',
    slug: 'bespoke-holidays',
    shortDescription:
      'Custom tailored domestic and international itineraries designed around your preferences, budget, and travel pace.',
    icon: 'globe',
    features: [
      '100% Customized Day-by-Day Itineraries',
      'Handpicked 4-Star & 5-Star Accommodations with Meal Plans',
      'Private Dedicated AC Vehicles with Verified Drivers',
      '24/7 On-Ground Concierge Assistance throughout your trip',
    ],
  },
  {
    id: 's2',
    title: 'VIP Concierge Services',
    slug: 'vip-concierge-services',
    shortDescription:
      'Seamless domestic & international airline bookings alongside premium catamaran cruise reservations (Makruzz & Nautika).',
    icon: 'plane',
    features: [
      'Competitive Group & Family Airfares',
      'Instant Makruzz / Nautika Catamaran Cruise Seat Holds',
      'Flexible Rescheduling Support & Easy Cancellations',
      'Airport Meet & Greet Assistance in Major Hubs',
    ],
  },
]

export const SPECIALIZED_SERVICES: ServiceItem[] = [
  {
    id: 'spec-international',
    title: 'International Tours',
    slug: 'international-tours',
    image: '/services/international_tours.jpeg',
    shortDescription:
      'Bespoke global holiday packages across 42+ countries with full concierge support.',
    features: [
      'Custom International Itineraries Across 42+ Countries',
      'Flight, Luxury Hotel & Private Airport Transfer Coordination',
      'Fast-Track Tourist Visa Assistance & Comprehensive Travel Insurance',
      'English-Speaking Local Guides & 24/7 WhatsApp Concierge',
    ],
  },
  {
    id: 'spec-domestic',
    title: 'Domestic Tours (India)',
    slug: 'domestic-tours',
    image: '/services/domestic-tours-india.jpeg',
    shortDescription:
      'Curated Indian holiday packages spanning South, North, North-East, and Heritage circuits.',
    features: [
      'Curated Andaman, Kashmir, Kerala, Rajasthan & Himachal Circuits',
      'Verified 4-Star & 5-Star Heritage Stays with Tailored Meal Plans',
      'Dedicated AC Private Cabs with Courteous Verified Drivers',
      'Specialized Sightseeing, Cultural Trails & Skip-the-Line Monument Entries',
    ],
  },
  {
    id: 'spec-visa',
    title: 'Visa Assistance',
    slug: 'visa-assistance',
    image: '/services/visa-assistance.jpeg',
    shortDescription:
      'Complete documentation, appointment scheduling, and fast-track tourist visa tracking.',
    features: [
      'Comprehensive Document Verification & Form Application Assistance',
      'VFS & Embassy Appointment Scheduling with Slot Alerts',
      'Fast-Track Tourist, Business, Transit & Family Visa Tracking',
      'Embassy Interview Preparation & Financial Documentation Guidance',
    ],
  },
  {
    id: 'spec-flights',
    title: 'Flight Booking',
    slug: 'flight-booking',
    image: '/services/flight-booking.jpeg',
    shortDescription:
      'Competitive airline fares for domestic, international, first-class, and flexible itineraries.',
    features: [
      'Competitive Domestic & International Airfares Across Major Airlines',
      'Flexible Date Changes, Rescheduling & Prompt Cancellation Handling',
      'Group & Corporate Ticket Blocks with Extra Baggage Allowances',
      'Complimentary Seat Selection & Meal Preference Coordination',
    ],
  },
  {
    id: 'spec-hotels',
    title: 'Hotel & Resort Reservations',
    slug: 'hotel-resort-reservations',
    image: '/services/hotel-resort-reservations.jpeg',
    shortDescription:
      'Handpicked 4-star & 5-star luxury resorts, heritage palaces, and private pool villas.',
    features: [
      'Exclusive Contracted Rates at Top 4-Star & 5-Star Luxury Chains',
      'Beachfront Resorts, Heritage Havelis & Secluded Pool Villas',
      'Complimentary Room Upgrades, Breakfast & Special Welcome Inclusions',
      'Guaranteed Smooth Check-In & Personalized Concierge Requests',
    ],
  },
  {
    id: 'spec-mice',
    title: 'Corporate Travel & MICE',
    slug: 'corporate-travel-mice',
    image: '/services/corporate-travel-mice.jpeg',
    shortDescription:
      'Executive corporate retreats, incentive travel, and conference event logistics.',
    features: [
      'Tailored Corporate Retreats, Leadership Summits & Team Offsites',
      'Conference Venues, AV Equipment, Stage Setup & Gala Dinner Production',
      'Dedicated Event Project Manager On-Site Throughout the Tour',
      'Full GST Invoicing, Transparent Accounting & Flexible Corporate Billing',
    ],
  },
  {
    id: 'spec-honeymoon',
    title: 'Honeymoon Packages',
    slug: 'honeymoon-packages',
    image: '/services/honeymoon-packages.jpeg',
    shortDescription:
      'Romantic private pacing, luxury villa stays, and candlelit experiences.',
    features: [
      'Private Beachfront & Overwater Villas with Panoramic Ocean Views',
      'Intimate Candlelight Beach Dinners & Rejuvenating Couples Spa Treatments',
      'Private Sunset Yacht Cruises & Island-Hopping Excursions',
      'Complimentary Honeymoon Perks: Floral Bed Decoration, Cake & Wine',
    ],
  },
  {
    id: 'spec-pilgrimage',
    title: 'Pilgrimage & Spiritual Tours',
    slug: 'pilgrimage-spiritual-tours',
    image: '/services/pilgrimage-spiritual-tours.jpeg',
    shortDescription:
      'Dedicated Char Dham, Kedarnath, Kashi, Tirupati, and Ramayana heritage trails.',
    features: [
      'Char Dham, Kedarnath Helicopter Packages & VIP Darshan Coordination',
      'Comfortable Senior-Citizen-Friendly Stays with Pure Vegetarian Meals',
      'Experienced Mountain Drivers & Knowledgeable Local Temple Guides',
      'Medical Assistance, Acclimatization Support & Daily Health Checks',
    ],
  },
]

export const ALL_SERVICES_CATALOG: ServiceItem[] = [
  ...CORE_FEATURED_SERVICES,
  ...SPECIALIZED_SERVICES,
]
