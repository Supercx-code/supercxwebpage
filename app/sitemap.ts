import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://supercx.co';
    const currentDate = new Date().toISOString();

    // Static pages
    const staticPages = [
        '',
        '/products',
        '/products/voice-ai',
        '/products/superdesk',
        '/products/supervoice',
        '/services',
        '/services/crm-implementation',
        '/services/helpdesk-setup',
        '/services/integration-services',
        '/solutions',
        '/solutions/industry',
        '/solutions/role',
        '/resources',
        '/blog',
        '/case-studies',
        '/api-docs',
        '/about',
        '/careers',
        '/contact',
        '/privacy',
        '/terms',
    ];

    return staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
    }));
}
