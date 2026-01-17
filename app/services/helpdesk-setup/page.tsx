'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Headphones, ArrowRight, CheckCircle2, Inbox, Route, Bot, FileText, BarChart3, Globe } from 'lucide-react';

const platforms = [
    { name: 'Freshdesk', description: 'Omnichannel customer support' },
    { name: 'Zendesk', description: 'Enterprise helpdesk solution' },
    { name: 'Kapture CX', description: 'AI-powered support platform' },
    { name: 'Freshservice', description: 'IT service management' },
    { name: 'Intercom', description: 'Conversational support' },
    { name: 'Zoho Desk', description: 'Context-aware helpdesk' },
];

const services = [
    {
        icon: <Inbox className="w-6 h-6" />,
        title: 'Multi-Channel Setup',
        description: 'Configure email, chat, phone, social media, and WhatsApp channels in one unified inbox.',
    },
    {
        icon: <Route className="w-6 h-6" />,
        title: 'Ticket Routing',
        description: 'Smart assignment rules based on skills, workload, priority, and customer segments.',
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: 'Automation Rules',
        description: 'Auto-responses, escalation rules, SLA policies, and workflow triggers.',
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: 'Knowledge Base',
        description: 'Self-service portal with searchable articles, FAQs, and community forums.',
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Reporting Setup',
        description: 'Custom dashboards for CSAT, resolution times, agent performance, and SLA compliance.',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Localization',
        description: 'Multi-language support, regional workflows, and timezone-aware routing.',
    },
];

const benefits = [
    { value: '60%', label: 'Faster Resolution' },
    { value: '40%', label: 'Reduced Tickets' },
    { value: '95%', label: 'CSAT Score' },
];

export default function HelpdeskSetupPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Support Services"
                title="Helpdesk Setup"
                subtitle="Complete helpdesk implementation with Freshdesk, Zendesk, or Kapture CX. Multi-channel support, automation, and self-service portals."
                gradient="rose"
            />

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-highlight mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platforms We Implement</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Expert implementation across leading helpdesk platforms.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {platforms.map((platform) => (
                            <div key={platform.name} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-highlight/30 transition-colors text-center">
                                <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                                <p className="text-sm text-gray-500">{platform.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What&apos;s Included</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything you need for world-class customer support.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={service.title} glowColor="pink" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-highlight">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Support</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                We don&apos;t just set up your helpdesk—we optimize it for efficiency. Our team configures
                                automation rules, creates canned responses, and builds knowledge bases that reduce ticket volume.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Unified inbox for all support channels',
                                    'Smart routing based on skills & availability',
                                    'Automation for repetitive tasks',
                                    'Self-service portal to reduce tickets',
                                    'Custom reporting and SLA tracking',
                                    'Team training and documentation',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-highlight flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary" size="lg">
                                Get Started <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="bg-[#161b22] rounded-2xl border border-white/10 p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <Headphones className="w-6 h-6 text-highlight" />
                                    <span className="font-semibold text-white">Support Dashboard</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {[
                                        { label: 'Open', value: '24' },
                                        { label: 'Pending', value: '12' },
                                        { label: 'Resolved', value: '156' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center p-3 bg-white/5 rounded-lg">
                                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                                            <div className="text-xs text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="p-3 bg-white/5 rounded-lg flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-highlight' : 'bg-gray-500'}`} />
                                            <div className="flex-1">
                                                <div className="w-32 h-3 bg-white/10 rounded mb-1" />
                                                <div className="w-20 h-2 bg-white/5 rounded" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-highlight/20 blur-[100px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-highlight/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Support?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free helpdesk audit and implementation roadmap.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Get Free Audit</Button>
                            <Button variant="outline" size="lg">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
