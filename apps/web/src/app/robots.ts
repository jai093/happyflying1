import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.happyflyingtravels.com'
  let rawBaseUrl = envUrl.trim().replace(/\/$/, '')
  if (rawBaseUrl.includes('happyflyingtravels.com') && !rawBaseUrl.includes('www.')) {
    rawBaseUrl = rawBaseUrl.replace('happyflyingtravels.com', 'www.happyflyingtravels.com')
  }
  const baseUrl = rawBaseUrl.startsWith('http') ? rawBaseUrl : `https://${rawBaseUrl}`

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
