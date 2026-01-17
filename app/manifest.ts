import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'SuperCX - AI-Powered Customer Experience Platform',
        short_name: 'SuperCX',
        description: 'Drive revenue growth with data-backed engagement. Enterprise-grade chatbots, CRM integrations, and marketing automation workflows.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#2563EB',
        orientation: 'portrait',
        icons: [
            {
                src: '/favicon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
