import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ShoppingCart, Building2, Heart, Landmark, Users, Megaphone, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'CX Solutions by Industry & Role | E-commerce, SaaS, Healthcare, BFSI',
    description: 'Tailored customer experience solutions for E-commerce, SaaS, Healthcare, and BFSI industries. Purpose-built tools for Sales, Support, and Marketing teams.',
    keywords: [
        'ecommerce CX solutions',
        'SaaS customer experience',
        'healthcare CX platform',
        'BFSI customer support',
        'sales automation tools',
        'support ticket automation',
        'marketing automation platform',
        'industry-specific CRM',
        'WhatsApp commerce',
        'lead nurturing automation',
    ],
    alternates: {
        canonical: 'https://supercx.co/solutions',
    },
    openGraph: {
        title: 'CX Solutions by Industry & Role | SuperCX',
        description: 'Tailored solutions for E-commerce, SaaS, Healthcare, BFSI and Sales, Support, Marketing teams.',
        url: 'https://supercx.co/solutions',
        siteName: 'SuperCX',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SuperCX Solutions by Industry & Role',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CX Solutions by Industry & Role | SuperCX',
        description: 'Tailored CX solutions for every industry and team.',
        images: ['/og-image.png'],
    },
};

const industries = [
    {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: 'E-commerce',
        description: 'Abandoned cart recovery, WhatsApp commerce, order tracking bots, and customer retention automation.',
        href: '/solutions/industry#ecommerce',
        glowColor: 'blue' as const,
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: 'SaaS',
        description: 'Lead nurturing, trial-to-paid conversion, helpdesk automation, and proactive churn prevention.',
        href: '/solutions/industry#saas',
        glowColor: 'cyan' as const,
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: 'Healthcare',
        description: 'Appointment scheduling, telehealth bots, patient engagement, and HIPAA-compliant communications.',
        href: '/solutions/industry#healthcare',
        glowColor: 'pink' as const,
    },
    {
        icon: <Landmark className="w-8 h-8" />,
        title: 'BFSI',
        description: 'Secure multilingual chatbots, voice banking, fraud detection alerts, and KYC automation.',
        href: '/solutions/industry#bfsi',
        glowColor: 'coral' as const,
    },
];

const roles = [
    {
        icon: <Users className="w-8 h-8" />,
        title: 'For Sales Teams',
        description: 'Lead qualification, outbound calling automation, CRM integration, and pipeline analytics.',
        href: '/solutions/role#sales',
        color: 'text-primary',
    },
    {
        icon: <Headphones className="w-8 h-8" />,
        title: 'For Support Teams',
        description: 'Ticket automation, self-service portals, knowledge base, and CSAT improvement tools.',
        href: '/solutions/role#support',
        color: 'text-highlight',
    },
    {
        icon: <Megaphone className="w-8 h-8" />,
        title: 'For Marketing Teams',
        description: 'Campaign automation, lead scoring, customer journey mapping, and attribution analytics.',
        href: '/solutions/role#marketing',
        color: 'text-tertiary',
    },
];

// JSON-LD Structured Data
const solutionsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SuperCX CX Solutions',
    description: 'Customer experience solutions tailored by industry and role.',
    numberOfItems: 7,
    itemListElement: [
        ...industries.map((industry, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                name: `SuperCX for ${industry.title}`,
                description: industry.description,
                url: `https://supercx.co${industry.href}`,
                provider: {
                    '@type': 'Organization',
                    name: 'SuperCX',
                },
            },
        })),
        ...roles.map((role, index) => ({
            '@type': 'ListItem',
            position: industries.length + index + 1,
            item: {
                '@type': 'Service',
                name: role.title,
                description: role.description,
                url: `https://supercx.co${role.href}`,
                provider: {
                    '@type': 'Organization',
                    name: 'SuperCX',
                },
            },
        })),
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
            name: 'Solutions',
            item: 'https://supercx.co/solutions',
        },
    ],
};

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <Navbar />

            <PageHero
                badge="Solutions"
                title="Solutions That Fit Your Business"
                subtitle="Whether you're in e-commerce, healthcare, or SaaS—and whether you're in sales, support, or marketing—we have the right solution for you."
                gradient="purple"
            />

            {/* By Industry */}
            <section className="py-24" aria-labelledby="industry-solutions-heading">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 id="industry-solutions-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions by Industry</h2>
                            <p className="text-gray-400 max-w-xl">Tailored solutions for specific industry challenges and regulations.</p>
                        </div>
                        <Link href="/solutions/industry">
                            <Button variant="ghost" className="hidden md:flex">
                                View All Industries <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry) => (
                            <Card key={industry.title} glowColor={industry.glowColor} className="p-8">
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-primary" aria-hidden="true">
                                    {industry.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                                <Link href={industry.href} aria-label={`Learn more about ${industry.title} solutions`}>
                                    <Button variant="ghost" className="p-0 h-auto">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* By Role */}
            <section className="py-24 border-t border-white/5" aria-labelledby="role-solutions-heading">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 id="role-solutions-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions by Role</h2>
                            <p className="text-gray-400 max-w-xl">Purpose-built tools for every team in your organization.</p>
                        </div>
                        <Link href="/solutions/role">
                            <Button variant="ghost" className="hidden md:flex">
                                View All Roles <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roles.map((role) => (
                            <div key={role.title} className="p-8 bg-[#161b22] border border-white/10 rounded-2xl hover:border-primary/30 transition-colors">
                                <div className={`mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 ${role.color}`} aria-hidden="true">
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{role.description}</p>
                                <Link href={role.href} aria-label={`Explore ${role.title} solutions`}>
                                    <Button variant="ghost" className="p-0 h-auto">
                                        Explore <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24" aria-labelledby="solutions-cta-heading">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 id="solutions-cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Solution Fits?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Talk to our solutions team and get a personalized recommendation based on your needs.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Talk to an Expert</Button>
                            <Button variant="outline" size="lg">View Case Studies</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
