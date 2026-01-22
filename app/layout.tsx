import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-plus-jakarta',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://supercx.co'),
    title: {
        default: 'SuperCX | AI-Powered Customer Experience & Revenue Growth Platform',
        template: '%s | SuperCX',
    },
    description: 'Drive revenue growth with data-backed engagement. SuperCX powers smarter, faster growth with enterprise-grade chatbots, CRM integrations, and marketing automation workflows.',
    keywords: [
        'SuperCX',
        'AI customer experience',
        'CRM automation',
        'voice AI',
        'chatbots',
        'marketing automation',
        'B2B SaaS',
        'enterprise software',
        'helpdesk automation',
        'customer support platform',
        'Salesforce implementation',
        'Freshdesk integration',
    ],
    authors: [{ name: 'SuperCX', url: 'https://supercx.co' }],
    creator: 'SuperCX',
    publisher: 'SuperCX',
    applicationName: 'SuperCX',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
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
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SuperCX | AI-Powered Customer Experience Platform',
        description: 'Drive revenue growth with data-backed engagement. Enterprise-grade chatbots, CRM integrations, and marketing automation workflows.',
        images: ['/og-image.png'],
        creator: '@supercx',
        site: '@supercx',
    },
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
            { url: '/favicon.png', type: 'image/png', sizes: '16x16' },
        ],
        apple: [
            { url: '/logo.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'mask-icon', url: '/logo.png', color: '#2563EB' },
        ],
    },
    manifest: '/manifest.webmanifest',
    alternates: {
        canonical: 'https://supercx.co',
        languages: {
            'en-US': 'https://supercx.co',
        },
    },
    category: 'technology',
    verification: {
        google: 'pFk5x53VBs24bHeaZF8dZ3EZw_je0v5Gsl2DFt7R-tU',
        // yandex: 'yandex-verification-code',
        // yahoo: 'yahoo-verification-code',
    },
    other: {
        'msapplication-TileColor': '#2563EB',
        'msapplication-config': '/browserconfig.xml',
    },
};

// JSON-LD Structured Data - WebSite (Primary for Google Site Names)
const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://supercx.co/#website',
    name: 'SuperCX',
    alternateName: 'SuperCX',
    url: 'https://supercx.co',
    description: 'AI-Powered Customer Experience & Revenue Growth Platform',
    publisher: {
        '@id': 'https://supercx.co/#organization',
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://supercx.co/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
};

// JSON-LD Structured Data - Organization
const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://supercx.co/#organization',
    name: 'SuperCX',
    url: 'https://supercx.co',
    logo: {
        '@type': 'ImageObject',
        '@id': 'https://supercx.co/#logo',
        url: 'https://supercx.co/logo.png',
        contentUrl: 'https://supercx.co/logo.png',
        width: 512,
        height: 512,
        caption: 'SuperCX Logo',
    },
    image: {
        '@id': 'https://supercx.co/#logo',
    },
    description: 'AI-Powered Customer Experience & Revenue Growth Platform. Powering businesses with human-like AI Voice Agents, CRM implementation, and expert CX services.',
    foundingDate: '2020',
    slogan: 'Drive Revenue Growth with Data-Backed Customer Engagement',
    sameAs: [
        'https://www.instagram.com/supercxco/',
        'https://linkedin.com/company/supercx',
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+91 89700 81700',
            contactType: 'sales',
            email: 'Lohith@supercx.co',
            availableLanguage: ['English', 'Hindi'],
            areaServed: ['IN', 'US', 'GB', 'AE'],
            contactOption: 'TollFree',
        },
        {
            '@type': 'ContactPoint',
            telephone: '+91 89700 81700',
            contactType: 'customer support',
            email: 'Lohith@supercx.co',
            availableLanguage: ['English', 'Hindi'],
            hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
        },
    ],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'HSR Layout',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560102',
        addressCountry: 'IN',
    },
    areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    knowsAbout: [
        'Customer Experience',
        'AI Voice Agents',
        'CRM Implementation',
        'Marketing Automation',
        'Helpdesk Software',
        'Salesforce',
        'Freshdesk',
        'Zendesk',
    ],
};

// JSON-LD Structured Data - SoftwareApplication (for the platform)
const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SuperCX Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-Powered Customer Experience Platform with Voice AI, Helpdesk Automation, and CRM Integration.',
    url: 'https://supercx.co',
    author: {
        '@id': 'https://supercx.co/#organization',
    },
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '150',
        bestRating: '5',
        worstRating: '1',
    },
    featureList: [
        'AI Voice Agents',
        'Automated Helpdesk',
        'CRM Integration',
        'Marketing Automation',
        'Multilingual Support',
        'Real-time Analytics',
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
            <head>
                {/* Preconnect to external resources */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* DNS Prefetch for performance */}
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
                />

                {/* Theme and PWA meta tags */}
                <meta name="theme-color" content="#2563EB" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#1e3a5f" media="(prefers-color-scheme: dark)" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="SuperCX" />
                <meta name="mobile-web-app-capable" content="yes" />

            </head>
            <body className="bg-background text-gray-200 font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
