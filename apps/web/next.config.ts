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
        source: '/bangalore-travel-agency',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/travel-agency-bangalore',
        destination: '/about',
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
    ];
  },
};

export default nextConfig;
