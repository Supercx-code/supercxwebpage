'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Headphones, Inbox, Route, Bot, FileText, Users, BarChart3, Layers, ArrowRight, CheckCircle2, Zap, Activity, Clock, Award } from 'lucide-react';

const features = [
    {
        icon: <Inbox className="w-6 h-6" />,
        title: 'Unified Omni-Channel Inbox',
        description: 'One seamless stream for Email, Voice, Chat, WhatsApp, and Social. Never switch tabs again.',
    },
    {
        icon: <Route className="w-6 h-6" />,
        title: 'Agentic Routing',
        description: 'AI agents analyze sentiment and intent to route tickets to the exact right human or automated workflow.',
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: 'Hybrid Intelligence',
        description: 'AI suggests responses and actions, but humans stay in the loop. The perfect blend of speed and empathy.',
    },
    {
        icon: <Activity className="w-6 h-6" />,
        title: 'Real-Time Pulse',
        description: 'Live view of support operations. monitor queue depths, agent status, and SLA breaches as they happen.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Collaborative Resolution',
        description: 'Internal swarming, private notes, and shared drafts. Solve complex issues together.',
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Deep Performance Analytics',
        description: 'Granular metrics on resolution time, CSAT, agent performance, and topic trends.',
    },
];

const metrics = [
    { label: 'Average First Response', value: '< 1 min', trend: '-80%', color: 'text-green-400' },
    { label: 'Ticket Resolution Autonomy', value: '45%', trend: '+15%', color: 'text-blue-400' },
    { label: 'CSAT Score', value: '4.8/5', trend: '+0.4', color: 'text-purple-400' },
    { label: 'Agent Efficiency', value: '2.5x', trend: 'YoY', color: 'text-pink-400' },
];

export default function SuperCXPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Omni-Channel CX Platform"
                title="SuperCX"
                subtitle="The unified omni-channel platform for modern businesses. SuperDesk for seamless support operations, CRM integration for sales operations—all powered by AI."
                gradient="rose"
            />

            {/* Performance Metrics Section - Dedicated Area */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Performance Metrics</h2>
                            <p className="text-sm text-gray-400">Real-time impact on support operations</p>
                        </div>
                        <div className="flex gap-2 text-sm text-gray-500 mt-4 md:mt-0">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live System Status</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors"
                            >
                                <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${metric.color}`}>
                                    <Activity className="w-16 h-16" />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                                    <div className="flex items-baseline gap-3">
                                        <div className="text-3xl font-bold text-white">{metric.value}</div>
                                        <div className={`text-sm font-medium ${metric.color}`}>{metric.trend}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Support Command Center</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to run high-performance support teams.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={feature.title} glowColor="pink" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-highlight">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interface Preview */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="bg-[#161b22] rounded-3xl border border-white/10 overflow-hidden relative">
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="pt-20 pb-16 px-8 md:px-20 text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">Designed for Agent Productivity</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                                A clutter-free workspace that brings relevant customer context, history, and AI assistance into a single view.
                                Reduce toggle tax and resolve tickets faster.
                            </p>
                            <Button variant="primary" size="lg">
                                Schedule a Demo <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
