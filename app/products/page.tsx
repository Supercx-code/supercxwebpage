import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { Card } from '@/components/ui/Card';
import { Mic, Headphones, Phone, ArrowRight, Zap, Globe, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Products | SuperCX - AI-Powered Customer Experience Platform',
    description: 'Explore SuperCX products: Voice AI for human-like conversations, SuperDesk for automated helpdesk, and SuperVoice for CRM telephony integration.',
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

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Our Products"
                title="Build Your Perfect CX Stack"
                subtitle="Powerful tools designed to work together or stand alone. From AI voice agents to automated helpdesks, we've got you covered."
                gradient="blue"
            />

            {/* Products Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.title} glowColor={product.glowColor} className="p-8 relative group">
                                {product.badge && (
                                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                                        {product.badge}
                                    </span>
                                )}

                                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-primary">
                                    {product.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

                                <ul className="space-y-2 mb-8">
                                    {product.features.map((feature) => (
                                        <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href={product.href}>
                                    <Button variant="ghost" className="group-hover:text-primary">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose SuperCX Products</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Enterprise-grade solutions built for scale, security, and performance.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {highlights.map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="inline-flex p-4 rounded-full bg-white/5 border border-white/10 text-primary mb-4">
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
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your CX?</h2>
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
