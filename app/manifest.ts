import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'SuperCX - AI-Powered Customer Experience Platform',
        short_name: 'SuperCX',
        description: 'Drive revenue growth with data-backed engagement. Enterprise-grade AI chatbots, CRM integrations, and marketing automation workflows.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0d1117',
        theme_color: '#2563EB',
        orientation: 'portrait-primary',
        scope: '/',
        lang: 'en-US',
        categories: ['business', 'productivity', 'utilities'],
        icons: [
            {
                src: '/favicon.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/favicon.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
        screenshots: [
            {
                src: '/og-image.png',
                sizes: '1200x630',
                type: 'image/png',
            },
        ],
        shortcuts: [
            {
                name: 'Products',
                short_name: 'Products',
                description: 'Explore our AI products',
                url: '/products',
            },
            {
                name: 'Contact Sales',
                short_name: 'Contact',
                description: 'Get in touch with our team',
                url: '/contact',
            },
        ],
        related_applications: [],
        prefer_related_applications: false,
    };
}
