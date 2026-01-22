'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, Brain, Globe, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

const features = [
    {
        icon: <Bot className="w-6 h-6" />,
        title: '24/7 Availability',
        description: 'Instant responses at any time of day, ensuring no customer is left waiting.',
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: 'Intent Recognition',
        description: 'Advanced NLP understands customer intent beyond simple keywords.',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Multilingual Chat',
        description: 'Auto-translate conversations or converse natively in 50+ languages.',
    },
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: 'Omni-channel Deployment',
        description: 'Deploy on Web, WhatsApp, Messenger, and Instagram from a single bot brain.',
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Instant Resolution',
        description: 'Automate FAQs, order status, and basic troubleshooting instantly.',
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Smart Handoff',
        description: 'Seamlessly transfer complex issues to human agents with full context.',
    },
];

export default function AIChatbotPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Intelligent Automation"
                title="AI Chatbots"
                subtitle="Smart, conversational agents that automate support and sales on your website and messaging apps. Always on, always helpful."
                gradient="blue"
            />

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Chat Intelligence</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">More than just a script. True conversational AI.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={feature.title} glowColor="blue" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases/CTA Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Start Automating Today</h2>
                            <p className="text-gray-400 max-w-lg mb-8">
                                Deflect up to 70% of routine queries and free up your human agents for what matters.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="primary">Get a Demo</Button>
                                <Button variant="outline">View Integrations</Button>
                            </div>
                        </div>
                        <div className="relative w-full max-w-sm">
                            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-4 shadow-2xl">
                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">Support Bot</div>
                                        <div className="text-xs text-green-400">Online</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white/5 rounded-lg p-3 rounded-tl-none text-sm text-gray-300">
                                        Hi! How can I help you today?
                                    </div>
                                    <div className="bg-cyan-500/10 rounded-lg p-3 rounded-tr-none text-sm text-cyan-100 ml-auto w-max max-w-[85%]">
                                        I need to check my order status.
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 rounded-tl-none text-sm text-gray-300">
                                        Sure! Please provide your order ID.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
