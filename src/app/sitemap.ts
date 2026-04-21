import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kromiq.in';
  
  const routes = [
    '',
    '/insights',
    '/services/ai-automation',
    '/services/brand-identity',
    '/services/digital-strategy',
    '/services/ppc',
    '/services/seo',
    '/services/web-dev',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
