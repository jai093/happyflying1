import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Enforce www Canonical URL consistency (redirect non-www to www)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'happyflyingtravels.com',
          },
        ],
        destination: 'https://www.happyflyingtravels.com/:path*',
        permanent: true,
      },
      // Redirect legacy domain happyflying.com & www.happyflying.com to www.happyflyingtravels.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'happyflying.com',
          },
        ],
        destination: 'https://www.happyflyingtravels.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.happyflying.com',
          },
        ],
        destination: 'https://www.happyflyingtravels.com/:path*',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contactus',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/aboutus',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/our-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services-offered',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/travel-agency-bangalore',
        destination: '/bangalore-travel-agency',
        permanent: true,
      },
      {
        source: '/travel-agency-koramangala',
        destination: '/koramangala-travel-agency',
        permanent: true,
      },
      {
        source: '/bangalore-tour-packages',
        destination: '/tour-packages-from-bangalore',
        permanent: true,
      },
      {
        source: '/tour-packages',
        destination: '/packages',
        permanent: true,
      },
      {
        source: '/holiday-packages',
        destination: '/packages',
        permanent: true,
      },
      {
        source: '/vacation-packages',
        destination: '/packages',
        permanent: true,
      },
      {
        source: '/destination',
        destination: '/destinations',
        permanent: true,
      },
      {
        source: '/all-destinations',
        destination: '/destinations',
        permanent: true,
      },
      {
        source: '/all-packages',
        destination: '/packages',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/ai-travel-plan',
        destination: '/travel-planner',
        permanent: true,
      },
      {
        source: '/ai-travel-planner',
        destination: '/travel-planner',
        permanent: true,
      },
      {
        source: '/ai-planner',
        destination: '/travel-planner',
        permanent: true,
      },
      {
        source: '/travelplan',
        destination: '/travel-planner',
        permanent: true,
      },
      {
        source: '/try-ai-planner',
        destination: '/travel-planner',
        permanent: true,
      },
      {
        source: '/try-ai',
        destination: '/travel-planner',
        permanent: true,
      },
      {
        source: '/ai',
        destination: '/travel-planner',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
