import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { Card } from '@/components/ui/Card';
import { Mic, Headphones, Phone, ArrowRight, Zap, Globe, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Products | Voice AI, Helpdesk & CRM Integration',
    description: 'Explore SuperCX AI products: Voice AI for human-like phone conversations, SuperDesk for automated helpdesk support, and SuperVoice for seamless CRM telephony integration. Start free today.',
    keywords: [
        'AI voice agents',
        'voice AI platform',
        'automated helpdesk',
        'CRM telephony',
        'AI customer service',
        'multilingual voice bot',
        'call center automation',
        'AI phone system',
        'helpdesk software',
        'CRM integration platform',
    ],
    alternates: {
        canonical: 'https://supercx.co/products',
    },
    openGraph: {
        title: 'SuperCX Products | AI-Powered CX Tools',
        description: 'Voice AI, automated helpdesk, and CRM telephony solutions. Build your perfect customer experience stack.',
        url: 'https://supercx.co/products',
        siteName: 'SuperCX',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SuperCX Products - AI Voice, Helpdesk & CRM',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SuperCX Products | AI-Powered CX Tools',
        description: 'Voice AI, automated helpdesk, and CRM telephony solutions.',
        images: ['/og-image.png'],
    },
};

const products = [
    {
        title: 'Voice AI',
        description: 'Human-like AI voice agents that handle thousands of concurrent calls. Multilingual support with <300ms latency for natural conversations.',
        icon: <Mic className="w-8 h-8" />,
        href: '/products/voice-ai',
        glowColor: 'blue' as const,
        badge: 'New Core Product',
        features: ['Multilingual (Hindi, Tamil, Telugu)', '<300ms Latency', 'Concurrent Call Handling'],
    },
    {
        title: 'SuperDesk',
        description: 'Automated helpdesk platform that scales with your team. Smart routing, auto-responses, and self-service portals for efficient support.',
        icon: <Headphones className="w-8 h-8" />,
        href: '/products/superdesk',
        glowColor: 'pink' as const,
        features: ['Smart Ticket Routing', 'Auto-Response', 'Self-Service Portal'],
    },
    {
        title: 'SuperVoice',
        description: 'CRM telephony integration for seamless sales and support calls. Click-to-call, call recording, and real-time analytics.',
        icon: <Phone className="w-8 h-8" />,
        href: '/products/supervoice',
        glowColor: 'coral' as const,
        features: ['Click-to-Call', 'Call Recording', 'CRM Sync'],
    },
];

const highlights = [
    { icon: <Zap className="w-6 h-6" />, title: 'Lightning Fast', description: 'Sub-300ms response times' },
    { icon: <Globe className="w-6 h-6" />, title: 'Multilingual', description: '10+ languages supported' },
    { icon: <Shield className="w-6 h-6" />, title: 'Enterprise Security', description: 'SOC2 & GDPR compliant' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Availability', description: 'Always-on AI support' },
];

// JSON-LD Structured Data for Products
const productsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SuperCX Products',
    description: 'AI-powered customer experience products including Voice AI, Helpdesk Automation, and CRM Telephony.',
    numberOfItems: 3,
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'SoftwareApplication',
                name: 'SuperCX Voice AI',
                description: 'Human-like AI voice agents with multilingual support and <300ms latency.',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: 'https://supercx.co/products/voice-ai',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    ratingCount: '89',
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'SoftwareApplication',
                name: 'SuperDesk',
                description: 'Automated helpdesk platform with smart routing and self-service portals.',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: 'https://supercx.co/products/superdesk',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 3,
            item: {
                '@type': 'SoftwareApplication',
                name: 'SuperVoice',
                description: 'CRM telephony integration with click-to-call and real-time analytics.',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: 'https://supercx.co/products/supervoice',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                },
            },
        },
    ],
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://supercx.co',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: 'https://supercx.co/products',
        },
    ],
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <Navbar />

            <PageHero
                badge="Our Products"
                title="Build Your Perfect CX Stack"
                subtitle="Powerful tools designed to work together or stand alone. From AI voice agents to automated helpdesks, we've got you covered."
                gradient="blue"
            />

            {/* Products Grid */}
            <section className="py-24" aria-labelledby="products-heading">
                <div className="container mx-auto px-6">
                    <h2 id="products-heading" className="sr-only">Our Product Suite</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.title} glowColor={product.glowColor} className="p-8 relative group">
                                {product.badge && (
                                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                                        {product.badge}
                                    </span>
                                )}

                                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-primary" aria-hidden="true">
                                    {product.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

                                <ul className="space-y-2 mb-8" aria-label={`${product.title} features`}>
                                    {product.features.map((feature) => (
                                        <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href={product.href} aria-label={`Learn more about ${product.title}`}>
                                    <Button variant="ghost" className="group-hover:text-primary">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-24 border-t border-white/5" aria-labelledby="highlights-heading">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 id="highlights-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose SuperCX Products</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Enterprise-grade solutions built for scale, security, and performance.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {highlights.map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="inline-flex p-4 rounded-full bg-white/5 border border-white/10 text-primary mb-4" aria-hidden="true">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24" aria-labelledby="cta-heading">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your CX?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a personalized demo and see how SuperCX products can supercharge your customer experience.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <LinkButton href="/contact" variant="primary" size="lg">Schedule Demo</LinkButton>
                            <LinkButton href="/contact" variant="outline" size="lg">Contact Sales</LinkButton>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
