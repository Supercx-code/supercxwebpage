import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://supercx.co';
    const currentDate = new Date().toISOString();

    // Define pages with specific SEO priorities and change frequencies
    const pages: {
        route: string;
        priority: number;
        changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    }[] = [
            // Homepage - highest priority
            { route: '', priority: 1.0, changeFrequency: 'daily' },

            // Core product pages - high priority
            { route: '/products', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/products/voice-ai', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/products/superdesk', priority: 0.85, changeFrequency: 'weekly' },
            { route: '/products/supervoice', priority: 0.85, changeFrequency: 'weekly' },

            // Services - high priority for lead gen
            { route: '/services', priority: 0.9, changeFrequency: 'weekly' },
            { route: '/services/crm-implementation', priority: 0.85, changeFrequency: 'weekly' },
            { route: '/services/helpdesk-setup', priority: 0.85, changeFrequency: 'weekly' },
            { route: '/services/integration-services', priority: 0.85, changeFrequency: 'weekly' },

            // Solutions - medium-high priority
            { route: '/solutions', priority: 0.85, changeFrequency: 'weekly' },
            { route: '/solutions/industry', priority: 0.8, changeFrequency: 'weekly' },
            { route: '/solutions/role', priority: 0.8, changeFrequency: 'weekly' },

            // Content pages - medium priority, updated frequently
            { route: '/blog', priority: 0.8, changeFrequency: 'daily' },
            { route: '/case-studies', priority: 0.75, changeFrequency: 'weekly' },
            { route: '/resources', priority: 0.7, changeFrequency: 'weekly' },

            // Company pages - medium priority
            { route: '/about', priority: 0.7, changeFrequency: 'monthly' },
            { route: '/careers', priority: 0.7, changeFrequency: 'weekly' },
            { route: '/contact', priority: 0.8, changeFrequency: 'monthly' },

            // Technical/Legal pages - lower priority
            { route: '/api-docs', priority: 0.6, changeFrequency: 'monthly' },
            { route: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
            { route: '/terms', priority: 0.3, changeFrequency: 'yearly' },
        ];

    return pages.map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
