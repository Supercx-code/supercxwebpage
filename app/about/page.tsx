import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Us | AI-First Customer Experience Company',
    description: 'SuperCX is transforming customer experience with AI. Founded in 2020, we serve 100+ enterprise clients with Voice AI, CRM implementation, and helpdesk automation. Learn our mission, values, and team.',
    keywords: [
        'about SuperCX',
        'AI CX company',
        'customer experience startup',
        'Bangalore AI company',
        'India SaaS company',
        'CX platform founder',
        'AI voice technology company',
        'enterprise CX solutions',
    ],
    alternates: {
        canonical: 'https://supercx.co/about',
    },
    openGraph: {
        title: 'About SuperCX | AI-First CX Company',
        description: 'Transforming customer experience with AI. 100+ enterprise clients, 50+ team members.',
        url: 'https://supercx.co/about',
        siteName: 'SuperCX',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'About SuperCX',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About SuperCX | AI-First CX Company',
        description: 'Transforming customer experience with AI.',
        images: ['/og-image.png'],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
