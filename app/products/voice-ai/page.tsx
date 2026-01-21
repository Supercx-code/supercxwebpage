'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Mic, Zap, Globe, Brain, Phone, MessageSquare, BarChart3, Shield, Clock, Users, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const features = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Multilingual Support',
        description: 'Native support for Hindi, Tamil, Telugu, and 10+ regional languages with natural accents and dialects.',
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Ultra-Low Latency',
        description: 'Sub-300ms response times for natural, human-like conversations without awkward pauses.',
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: 'Contextual Intelligence',
        description: 'Advanced NLU understands context, handles interruptions, and maintains conversation flow.',
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Concurrent Calls',
        description: 'Handle thousands of simultaneous inbound and outbound calls without quality degradation.',
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: 'Omnichannel Ready',
        description: 'Deploy across phone, WhatsApp, web chat, and mobile apps with unified conversation history.',
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Enterprise CRM Telephony',
        description: 'Complete Supervoice capabilities: Click-to-call, call recording, and seamless CRM syncing for your sales floor.',
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Real-time Analytics',
        description: 'Live dashboards with sentiment analysis, call quality metrics, and conversion tracking.',
    },
];

const useCases = [
    { title: 'Outbound Sales', description: 'Verified calling for lead qualification and appointment setting' },
    { title: 'Customer Support', description: 'First-line support handling FAQs and ticket creation' },
    { title: 'Collections', description: 'Automated payment reminders with compliance built-in' },
    { title: 'Surveys & Feedback', description: 'Post-interaction surveys with sentiment analysis' },
    { title: 'Appointment Booking', description: 'Schedule, reschedule, and confirm appointments' },
    { title: 'Order Updates', description: 'Proactive delivery notifications and status updates' },
];

const stats = [
    { value: '2M+', label: 'Calls Handled Monthly' },
    { value: '<300ms', label: 'Average Latency' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '40%', label: 'Cost Reduction' },
];

export default function VoiceAIPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Agentic Voice Platform"
                title="Unified Voice Intelligence"
                subtitle="The complete Voice Operating System. Native AI agents for human-like conversations + Enterprise-grade CRM telephony for your human team. One platform, infinite scale."
                gradient="blue"
            />

            {/* Stats Banner */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Preview */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the Future of Voice</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our Voice AI doesn&apos;t just respond—it understands. With advanced natural language understanding,
                                it handles complex queries, manages interruptions gracefully, and maintains context throughout the conversation.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['No more "Press 1 for..."', 'Handles complex multi-turn dialogs', 'Seamless handoff to human agents', 'CRM integration out of the box'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                <LinkButton href="/contact" variant="primary" size="lg">
                                    <Play className="w-4 h-4 mr-2" /> Try Live Demo
                                </LinkButton>
                                <LinkButton href="/contact" variant="outline" size="lg">
                                    Talk to Sales
                                </LinkButton>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-[#161b22] rounded-2xl border border-white/10 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                                        <Mic className="w-8 h-8 text-primary animate-pulse" />
                                    </div>
                                    <p className="text-gray-400">Voice AI Demo</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Capabilities</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to deploy enterprise-grade voice AI at scale.</p>
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

            {/* Use Cases */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Use Cases</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Deploy Voice AI across your entire customer journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase) => (
                            <div key={useCase.title} className="p-6 rounded-xl bg-[#161b22] border border-white/5 hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                                <p className="text-sm text-gray-500">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-white/5 to-transparent p-12 rounded-3xl border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Shield className="w-8 h-8 text-primary" />
                                    <h2 className="text-2xl font-bold text-white">Enterprise Security & Compliance</h2>
                                </div>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Built for enterprises with strict security and compliance requirements. Our Voice AI platform
                                    is SOC2 Type II certified and GDPR compliant.
                                </p>
                                <ul className="space-y-3">
                                    {['End-to-end encryption', 'Data residency options', 'Role-based access control', 'Audit logging & compliance reports'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center gap-8">
                                <div className="text-center">
                                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                                        <span className="text-xs font-medium text-gray-400">SOC2</span>
                                    </div>
                                    <span className="text-xs text-gray-500">Type II Certified</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                                        <span className="text-xs font-medium text-gray-400">GDPR</span>
                                    </div>
                                    <span className="text-xs text-gray-500">Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy Voice AI?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get started with a pilot program and see results in weeks, not months.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <LinkButton href="/contact" variant="primary" size="lg">Start Free Trial</LinkButton>
                        <LinkButton href="/api-docs" variant="outline" size="lg">View API Docs <ArrowRight className="w-4 h-4 ml-2" /></LinkButton>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
