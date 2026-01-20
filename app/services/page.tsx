import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { Card } from '@/components/ui/Card';
import { Database, Headphones, Share2, Bot, LineChart, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'CX Implementation Services | CRM, Helpdesk & Integration Experts',
    description: 'Expert implementation services for Salesforce, Leadsquared, Freshdesk, Zendesk, and more. End-to-end CRM deployment, helpdesk setup, and API integrations with 100+ successful projects.',
    keywords: [
        'CRM implementation services',
        'Salesforce implementation',
        'Leadsquared implementation',
        'Freshdesk setup',
        'Zendesk implementation',
        'helpdesk integration',
        'CRM consulting',
        'marketing automation setup',
        'API integration services',
        'enterprise CRM deployment',
    ],
    alternates: {
        canonical: 'https://supercx.co/services',
    },
    openGraph: {
        title: 'CX Implementation Services | SuperCX',
        description: 'Expert CRM, helpdesk, and integration services. Salesforce, Freshdesk, Zendesk partners.',
        url: 'https://supercx.co/services',
        siteName: 'SuperCX',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SuperCX Services - CRM & Helpdesk Implementation',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CX Implementation Services | SuperCX',
        description: 'Expert CRM, helpdesk, and integration services.',
        images: ['/og-image.png'],
    },
};

const services = [
    {
        title: 'CRM Implementation',
        description: 'End-to-end deployment of Salesforce, Leadsquared, SAP, and other major CRM platforms. Custom workflows, data migration, and user training included.',
        icon: <Database className="w-8 h-8" />,
        href: '/services/crm-implementation',
        glowColor: 'coral' as const,
        features: ['Salesforce', 'Leadsquared', 'SAP CRM', 'HubSpot'],
    },
    {
        title: 'Helpdesk Setup',
        description: 'Complete helpdesk implementation with Freshdesk, Zendesk, or Kapture CX. Multi-channel support setup, automation rules, and knowledge base creation.',
        icon: <Headphones className="w-8 h-8" />,
        href: '/services/helpdesk-setup',
        glowColor: 'pink' as const,
        features: ['Freshdesk', 'Zendesk', 'Kapture CX', 'Freshservice'],
    },
    {
        title: 'Integration Services',
        description: 'Connect your entire tech stack. API integrations, data synchronization, and custom middleware development for seamless operations.',
        icon: <Share2 className="w-8 h-8" />,
        href: '/services/integration-services',
        glowColor: 'blue' as const,
        features: ['API Development', 'Data Sync', 'Middleware', 'iPaaS'],
    },
    {
        title: 'AI Chatbot Implementation',
        description: 'Deploy intelligent conversational AI across your channels. WhatsApp, web chat, and voice bots with NLU and CRM integration.',
        icon: <Bot className="w-8 h-8" />,
        href: '/services/crm-implementation',
        glowColor: 'cyan' as const,
        features: ['WhatsApp Bot', 'Web Chat', 'Voice Bot', 'NLU Training'],
    },
    {
        title: 'Marketing Automation',
        description: 'End-to-end marketing automation setup. Email campaigns, lead scoring, journey builders, and analytics dashboards.',
        icon: <Settings className="w-8 h-8" />,
        href: '/services/crm-implementation',
        glowColor: 'blue' as const,
        features: ['Email Campaigns', 'Lead Scoring', 'Journey Builder', 'Analytics'],
    },
    {
        title: 'BPM Consulting',
        description: 'Process optimization and business process management. Identify bottlenecks, streamline workflows, and implement automation.',
        icon: <LineChart className="w-8 h-8" />,
        href: '/services/crm-implementation',
        glowColor: 'cyan' as const,
        features: ['Process Mapping', 'Workflow Design', 'Automation', 'Training'],
    },
];

const approach = [
    { step: '01', title: 'Discovery', description: 'Deep dive into your current systems, pain points, and goals.' },
    { step: '02', title: 'Design', description: 'Custom solution architecture tailored to your business needs.' },
    { step: '03', title: 'Implement', description: 'Phased rollout with extensive testing and quality assurance.' },
    { step: '04', title: 'Optimize', description: 'Continuous improvement based on real-world performance data.' },
];

// JSON-LD Structured Data for Services
const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SuperCX Implementation Services',
    description: 'Professional CRM, helpdesk, and integration implementation services.',
    numberOfItems: 6,
    itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            url: `https://supercx.co${service.href}`,
            provider: {
                '@type': 'Organization',
                name: 'SuperCX',
                url: 'https://supercx.co',
            },
            areaServed: {
                '@type': 'Country',
                name: 'India',
            },
        },
    })),
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
            name: 'Services',
            item: 'https://supercx.co/services',
        },
    ],
};

// How-To Schema for our implementation approach
const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'SuperCX Implementation Approach',
    description: 'Our proven 4-step methodology for successful CRM and helpdesk implementation.',
    step: approach.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.description,
    })),
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
            />

            <Navbar />

            <PageHero
                badge="Our Expertise"
                title="End-to-End CX Services"
                subtitle="From strategy to implementation to optimization. Our expert team delivers results that transform your customer experience."
                gradient="purple"
            />

            {/* Services Grid */}
            <section className="py-24" aria-labelledby="services-heading">
                <div className="container mx-auto px-6">
                    <h2 id="services-heading" className="sr-only">Our Implementation Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.title} glowColor={service.glowColor} className="p-8">
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-primary" aria-hidden="true">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{service.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6" aria-label={`Technologies for ${service.title}`}>
                                    {service.features.map((feature) => (
                                        <span key={feature} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <Link href={service.href} aria-label={`Learn more about ${service.title}`}>
                                    <Button variant="ghost" className="p-0 h-auto">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 border-t border-white/5" aria-labelledby="approach-heading">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 id="approach-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">A proven methodology that ensures successful implementation every time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {approach.map((item, index) => (
                            <div key={item.step} className="relative">
                                {index < approach.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" aria-hidden="true" />
                                )}
                                <div className="text-5xl font-bold text-primary/20 mb-4" aria-hidden="true">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 border-t border-white/5" aria-labelledby="why-heading">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose SuperCX Services?</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                With 100+ implementations across industries, we bring deep expertise and proven methodologies
                                to every project. Our team includes certified experts in all major CRM and helpdesk platforms.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    '100+ successful implementations',
                                    'Certified Salesforce, Freshdesk, Zendesk partners',
                                    'Dedicated project managers',
                                    '24/7 post-implementation support',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <LinkButton href="/contact" variant="primary" size="lg">
                                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                            </LinkButton>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '100+', label: 'Implementations' },
                                { value: '50+', label: 'Enterprise Clients' },
                                { value: '99%', label: 'Client Satisfaction' },
                                { value: '24/7', label: 'Support Available' },
                            ].map((stat) => (
                                <div key={stat.label} className="p-6 bg-[#161b22] border border-white/10 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24" aria-labelledby="services-cta-heading">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 id="services-cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your CX?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let&apos;s discuss your requirements and create a custom implementation roadmap.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <LinkButton href="/contact" variant="primary" size="lg">Get Free Assessment</LinkButton>
                            <LinkButton href="/case-studies" variant="outline" size="lg">View Case Studies</LinkButton>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
