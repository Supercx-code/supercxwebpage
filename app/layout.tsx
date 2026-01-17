import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-plus-jakarta',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://supercx.co'),
    title: {
        default: 'SuperCX | AI-Powered Customer Experience & Revenue Growth Platform',
        template: '%s | SuperCX',
    },
    description: 'Drive revenue growth with data-backed engagement. SuperCX powers smarter, faster growth with enterprise-grade chatbots, CRM integrations, and marketing automation workflows.',
    keywords: ['AI', 'CRM', 'customer experience', 'chatbots', 'marketing automation', 'B2B', 'enterprise software', 'data-driven engagement', 'voice AI', 'helpdesk', 'customer support'],
    authors: [{ name: 'SuperCX', url: 'https://supercx.co' }],
    creator: 'SuperCX',
    publisher: 'SuperCX',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://supercx.co/',
        siteName: 'SuperCX',
        title: 'SuperCX | AI-Powered Customer Experience & Revenue Growth Platform',
        description: 'Drive revenue growth with data-backed engagement. Enterprise-grade chatbots, CRM integrations, and marketing automation workflows.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SuperCX - AI-Powered Customer Experience Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SuperCX | AI-Powered Customer Experience Platform',
        description: 'Drive revenue growth with data-backed engagement. Enterprise-grade chatbots, CRM integrations, and marketing automation workflows.',
        images: ['/og-image.png'],
        creator: '@supercx',
    },
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
        ],
        apple: '/logo.png',
    },
    manifest: '/manifest.webmanifest',
    alternates: {
        canonical: 'https://supercx.co',
    },
    category: 'technology',
};

// JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SuperCX',
    url: 'https://supercx.co',
    logo: 'https://supercx.co/logo.png',
    description: 'AI-Powered Customer Experience & Revenue Growth Platform',
    sameAs: [
        'https://twitter.com/supercx',
        'https://linkedin.com/company/supercx',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-80-4123-4567',
        contactType: 'sales',
        email: 'hello@supercx.co',
        availableLanguage: ['English', 'Hindi'],
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressCountry: 'IN',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={plusJakarta.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <meta name="theme-color" content="#2563EB" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <body className="bg-background text-gray-200 font-sans antialiased overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}

