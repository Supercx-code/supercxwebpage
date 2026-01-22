'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Megaphone, ArrowRight, CheckCircle2, Mail, Target, BarChart3, Users, Zap, Layers, Sparkles } from 'lucide-react';

const features = [
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Campaign Automation',
        description: 'Automate personalized email sequences that nurture leads and drive conversions at scale.',
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Lead Scoring & Nurturing',
        description: 'AI-powered lead scoring to prioritize high-value prospects and automate follow-ups.',
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Campaign Analytics',
        description: 'Real-time dashboards and attribution modeling to measure ROI across all channels.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Audience Segmentation',
        description: 'Dynamic segmentation based on behavior, demographics, and engagement patterns.',
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Multi-Channel Automation',
        description: 'Unified automation across email, SMS, WhatsApp, and social media channels.',
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: 'CRM Integration',
        description: 'Seamless sync with your CRM for complete customer journey visibility.',
    },
];

const platforms = [
    { name: 'HubSpot Marketing Hub', description: 'Inbound Marketing Automation' },
    { name: 'Salesforce Marketing Cloud', description: 'Enterprise Marketing Suite' },
    { name: 'Marketo', description: 'B2B Marketing Automation' },
    { name: 'ActiveCampaign', description: 'Email & Marketing Automation' },
    { name: 'Mailchimp', description: 'Email Marketing Platform' },
    { name: 'Klaviyo', description: 'E-commerce Marketing' },
];

const benefits = [
    '3x increase in lead conversion rates',
    '50% reduction in manual marketing tasks',
    '40% improvement in email open rates',
    '2x faster campaign deployment',
    'Complete customer journey visibility',
    'Data-driven decision making',
];

export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Marketing Services"
                title="Marketing Automation"
                subtitle="Scale your marketing with intelligent automation. We implement and optimize marketing platforms that drive engagement, nurture leads, and accelerate revenue growth."
                gradient="blue"
            />

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '50+', label: 'Marketing Automations' },
                            { value: '3x', label: 'Average ROI Improvement' },
                            { value: '500K+', label: 'Leads Nurtured' },
                            { value: '98%', label: 'Client Satisfaction' },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Deliver</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">End-to-end marketing automation services tailored to your business goals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={feature.title} glowColor="blue" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-primary">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platforms We Support</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Expert implementation across leading marketing automation platforms.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {platforms.map((platform) => (
                            <div key={platform.name} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors text-center">
                                <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                                <p className="text-sm text-gray-500">{platform.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Marketing Services?</h2>
                            <p className="text-gray-400 mb-8">
                                We don&apos;t just implement tools—we build marketing engines that drive measurable results.
                                Our team combines technical expertise with marketing strategy to deliver automation
                                that actually works.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                                <Sparkles className="w-32 h-32 text-primary/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Automate Your Marketing?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free consultation and marketing automation roadmap.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Schedule Consultation</Button>
                            <Button variant="outline" size="lg">View Case Studies <ArrowRight className="w-4 h-4 ml-2" /></Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
