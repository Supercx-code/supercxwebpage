import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ShoppingCart, Building2, Heart, Landmark, Users, Megaphone, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Solutions | SuperCX - CX Solutions by Industry & Role',
    description: 'Customer experience solutions tailored for E-commerce, SaaS, Healthcare, BFSI industries and Sales, Support, Marketing teams.',
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

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Solutions"
                title="Solutions That Fit Your Business"
                subtitle="Whether you're in e-commerce, healthcare, or SaaS—and whether you're in sales, support, or marketing—we have the right solution for you."
                gradient="purple"
            />

            {/* By Industry */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions by Industry</h2>
                            <p className="text-gray-400 max-w-xl">Tailored solutions for specific industry challenges and regulations.</p>
                        </div>
                        <Link href="/solutions/industry">
                            <Button variant="ghost" className="hidden md:flex">
                                View All Industries <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry) => (
                            <Card key={industry.title} glowColor={industry.glowColor} className="p-8">
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-primary">
                                    {industry.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                                <Link href={industry.href}>
                                    <Button variant="ghost" className="p-0 h-auto">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* By Role */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions by Role</h2>
                            <p className="text-gray-400 max-w-xl">Purpose-built tools for every team in your organization.</p>
                        </div>
                        <Link href="/solutions/role">
                            <Button variant="ghost" className="hidden md:flex">
                                View All Roles <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roles.map((role) => (
                            <div key={role.title} className="p-8 bg-[#161b22] border border-white/10 rounded-2xl hover:border-primary/30 transition-colors">
                                <div className={`mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 ${role.color}`}>
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{role.description}</p>
                                <Link href={role.href}>
                                    <Button variant="ghost" className="p-0 h-auto">
                                        Explore <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Solution Fits?</h2>
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
