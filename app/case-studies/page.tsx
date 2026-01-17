import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight, TrendingUp, Clock, Users, Quote } from 'lucide-react';

export const metadata = {
    title: 'Case Studies | SuperCX - Customer Success Stories',
    description: 'See how businesses across industries have transformed their customer experience with SuperCX.',
};

const caseStudies = [
    {
        company: 'TechStart Inc.',
        industry: 'SaaS',
        logo: 'TS',
        title: 'How TechStart Reduced Support Costs by 60%',
        description: 'A fast-growing SaaS company implemented SuperDesk and AI chatbots to handle their surging ticket volume.',
        results: [
            { metric: '60%', label: 'Cost Reduction' },
            { metric: '85%', label: 'CSAT Score' },
            { metric: '4hrs', label: 'Avg Resolution' },
        ],
        quote: 'SuperCX transformed our support operations. We handle 3x the volume with the same team.',
        author: 'CTO, TechStart Inc.',
        glowColor: 'blue' as const,
    },
    {
        company: 'ShopMax',
        industry: 'E-commerce',
        logo: 'SM',
        title: 'ShopMax Increases Revenue by 35% with Cart Recovery',
        description: 'India\'s leading fashion retailer used WhatsApp automation to recover abandoned carts and boost sales.',
        results: [
            { metric: '35%', label: 'Revenue Increase' },
            { metric: '42%', label: 'Cart Recovery' },
            { metric: '2M+', label: 'Messages/Month' },
        ],
        quote: 'The ROI was visible within the first month. SuperCX paid for itself many times over.',
        author: 'Head of Digital, ShopMax',
        glowColor: 'coral' as const,
    },
    {
        company: 'HealthFirst',
        industry: 'Healthcare',
        logo: 'HF',
        title: 'HealthFirst Cuts No-Shows by 45% with AI Reminders',
        description: 'A healthcare network implemented Voice AI for appointment reminders and patient engagement.',
        results: [
            { metric: '45%', label: 'No-Show Reduction' },
            { metric: '10K+', label: 'Calls/Day' },
            { metric: '95%', label: 'Patient Satisfaction' },
        ],
        quote: 'Our patients love the convenience. Staff can now focus on care instead of phone calls.',
        author: 'Operations Director, HealthFirst',
        glowColor: 'pink' as const,
    },
    {
        company: 'SecureBank',
        industry: 'BFSI',
        logo: 'SB',
        title: 'SecureBank Achieves 70% Call Deflection',
        description: 'A regional bank deployed multilingual voice bots for balance inquiries and transaction support.',
        results: [
            { metric: '70%', label: 'Call Deflection' },
            { metric: '12', label: 'Languages' },
            { metric: '24/7', label: 'Availability' },
        ],
        quote: 'Customers can get help in their preferred language at any time. It\'s a game-changer.',
        author: 'VP Customer Experience, SecureBank',
        glowColor: 'cyan' as const,
    },
];

const stats = [
    { value: '100+', label: 'Customers' },
    { value: '2M+', label: 'AI Conversations/Month' },
    { value: '40%', label: 'Avg Cost Reduction' },
    { value: '95%', label: 'Client Retention' },
];

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Case Studies"
                title="Customer Success Stories"
                subtitle="See how businesses across industries have transformed their customer experience with SuperCX."
                gradient="purple"
            />

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="space-y-12">
                        {caseStudies.map((study) => (
                            <Card key={study.company} glowColor={study.glowColor} className="p-8 md:p-12">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {/* Left - Company Info */}
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg">
                                                {study.logo}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white">{study.company}</h3>
                                                <span className="text-sm text-gray-500">{study.industry}</span>
                                            </div>
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{study.title}</h2>
                                        <p className="text-gray-400 mb-6">{study.description}</p>
                                        <Button variant="outline">
                                            Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>

                                    {/* Middle - Results */}
                                    <div className="lg:border-x lg:border-white/10 lg:px-8">
                                        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            Key Results
                                        </h4>
                                        <div className="space-y-6">
                                            {study.results.map((result) => (
                                                <div key={result.label}>
                                                    <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                                                    <div className="text-sm text-gray-500">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right - Quote */}
                                    <div className="flex flex-col justify-center">
                                        <Quote className="w-8 h-8 text-primary/40 mb-4" />
                                        <blockquote className="text-lg text-gray-300 italic mb-4">
                                            &ldquo;{study.quote}&rdquo;
                                        </blockquote>
                                        <cite className="text-sm text-gray-500 not-italic">{study.author}</cite>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Be Our Next Success Story?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join 100+ companies that have transformed their customer experience with SuperCX.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Get Started</Button>
                            <Button variant="outline" size="lg">Talk to Sales</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
