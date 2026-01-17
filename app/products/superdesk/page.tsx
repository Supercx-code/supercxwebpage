'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Headphones, Inbox, Route, Bot, FileText, Users, BarChart3, Layers, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const features = [
    {
        icon: <Inbox className="w-6 h-6" />,
        title: 'Unified Inbox',
        description: 'All support channels in one place—email, chat, social, and phone.',
    },
    {
        icon: <Route className="w-6 h-6" />,
        title: 'Smart Routing',
        description: 'AI-powered ticket assignment based on skills, workload, and priority.',
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: 'Auto-Responses',
        description: 'Intelligent canned responses and AI-suggested replies for faster resolution.',
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: 'Knowledge Base',
        description: 'Self-service portal with searchable articles and FAQs.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Team Collaboration',
        description: 'Internal notes, mentions, and collision detection for seamless teamwork.',
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Analytics Dashboard',
        description: 'Real-time metrics on resolution times, CSAT, and agent performance.',
    },
];

const integrations = [
    'Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Microsoft Teams', 'Jira', 'Shopify', 'WhatsApp'
];

const plans = [
    {
        name: 'Starter',
        price: '$29',
        period: '/agent/month',
        description: 'Perfect for small teams getting started',
        features: ['Up to 5 agents', 'Email & chat support', 'Basic automation', 'Standard analytics'],
    },
    {
        name: 'Professional',
        price: '$79',
        period: '/agent/month',
        description: 'For growing teams with advanced needs',
        features: ['Unlimited agents', 'All channels', 'Advanced automation', 'Custom workflows', 'API access'],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations with custom requirements',
        features: ['Everything in Pro', 'Dedicated support', 'Custom integrations', 'SLA guarantees', 'On-premise option'],
    },
];

export default function SuperDeskPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Helpdesk Platform"
                title="SuperDesk"
                subtitle="Automated helpdesk that scales with your team. Smart routing, auto-responses, and self-service portals for world-class support."
                gradient="rose"
            />

            {/* Key Benefits */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Zap />, value: '60%', label: 'Faster Resolution' },
                            { icon: <Users />, value: '40%', label: 'Reduced Ticket Volume' },
                            { icon: <BarChart3 />, value: '95%', label: 'Customer Satisfaction' },
                        ].map((stat) => (
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

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Modern helpdesk features designed for teams that care about customer experience.</p>
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

            {/* Product UI Preview */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Intuitive Interface</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                SuperDesk is built for speed. Your team will feel right at home with a clean,
                                intuitive interface that helps them resolve tickets faster without the learning curve.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Keyboard shortcuts for power users', 'Drag-and-drop workflow builder', 'Real-time notifications', 'Mobile app for on-the-go support'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-highlight flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary" size="lg">
                                Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-[#161b22] rounded-2xl border border-white/10 p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-highlight/50" />
                                    <div className="w-3 h-3 rounded-full bg-tertiary/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                                            <div className="w-8 h-8 rounded-full bg-primary/20" />
                                            <div className="flex-1">
                                                <div className="w-32 h-3 bg-white/10 rounded mb-2" />
                                                <div className="w-48 h-2 bg-white/5 rounded" />
                                            </div>
                                            <span className={`px-2 py-1 text-xs rounded ${i === 1 ? 'bg-highlight/20 text-highlight' : 'bg-gray-500/20 text-gray-400'}`}>
                                                {i === 1 ? 'Urgent' : 'Normal'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-highlight/20 blur-[100px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Works With Your Stack</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">Connect SuperDesk with the tools you already use.</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {integrations.map((integration) => (
                            <div key={integration} className="px-6 py-3 bg-[#161b22] border border-white/10 rounded-full text-gray-300 text-sm hover:border-highlight/30 transition-colors">
                                {integration}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
                        <p className="text-gray-400">Choose the plan that fits your team.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`relative p-8 rounded-2xl border ${plan.popular ? 'bg-primary/5 border-primary/30' : 'bg-[#161b22] border-white/10'}`}>
                                {plan.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-500 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                                    Get Started
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
