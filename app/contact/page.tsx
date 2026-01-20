import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Get in Touch with SuperCX',
    description: 'Contact SuperCX for demos, sales inquiries, or support. Email hello@supercx.co or call +91 80 4123 4567. Offices in Bangalore and Mumbai, India.',
    keywords: [
        'contact SuperCX',
        'SuperCX demo',
        'CRM consultation',
        'customer experience consultation',
        'SuperCX sales',
        'SuperCX support',
        'Bangalore AI company',
        'India CX platform',
    ],
    alternates: {
        canonical: 'https://supercx.co/contact',
    },
    openGraph: {
        title: 'Contact SuperCX | Get a Demo',
        description: 'Get in touch for demos, sales, or support. We respond within 24 hours.',
        url: 'https://supercx.co/contact',
        siteName: 'SuperCX',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Contact SuperCX',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact SuperCX | Get a Demo',
        description: 'Get in touch for demos, sales, or support.',
        images: ['/og-image.png'],
    },
};

export { default } from './ContactClient';
