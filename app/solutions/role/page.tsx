'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Users, Headphones, Megaphone, ArrowRight, CheckCircle2, Phone, Mail, Target, BarChart3, Bot, FileText, Zap, TrendingUp } from 'lucide-react';

const roles = [
    {
        id: 'sales',
        icon: <Users className="w-10 h-10" />,
        title: 'For Sales Teams',
        subtitle: 'Close more deals with intelligent automation',
        color: 'primary',
        challenges: [
            'Too much time spent on manual outreach',
            'Lead qualification is slow and inconsistent',
            'CRM data is incomplete or outdated',
            'Difficulty scaling outbound operations',
        ],
        solutions: [
            { icon: <Phone className="w-5 h-5" />, title: 'AI Voice Agents', description: 'Automated outbound calls for lead qualification and appointment setting.' },
            { icon: <Target className="w-5 h-5" />, title: 'Smart Lead Scoring', description: 'AI-powered scoring based on engagement, fit, and intent signals.' },
            { icon: <Mail className="w-5 h-5" />, title: 'Sequence Automation', description: 'Multi-touch email and call sequences with personalization.' },
            { icon: <BarChart3 className="w-5 h-5" />, title: 'Pipeline Analytics', description: 'Real-time dashboards with conversion rates and forecasting.' },
        ],
        stats: [
            { value: '40%', label: 'More Qualified Leads' },
            { value: '2x', label: 'Sales Velocity' },
            { value: '35%', label: 'Win Rate Increase' },
        ],
    },
    {
        id: 'support',
        icon: <Headphones className="w-10 h-10" />,
        title: 'For Support Teams',
        subtitle: 'Deliver exceptional support at scale',
        color: 'highlight',
        challenges: [
            'High ticket volume overwhelming agents',
            'Repetitive queries taking up too much time',
            'Inconsistent response quality',
            'Difficulty maintaining SLAs during peak times',
        ],
        solutions: [
            { icon: <Bot className="w-5 h-5" />, title: 'AI Chatbots', description: 'Handle common queries 24/7 with intelligent conversation.' },
            { icon: <FileText className="w-5 h-5" />, title: 'Self-Service Portal', description: 'Searchable knowledge base that reduces ticket volume.' },
            { icon: <Zap className="w-5 h-5" />, title: 'Smart Routing', description: 'Automatic assignment based on skills and workload.' },
            { icon: <BarChart3 className="w-5 h-5" />, title: 'CSAT Analytics', description: 'Real-time satisfaction tracking and improvement insights.' },
        ],
        stats: [
            { value: '60%', label: 'Ticket Deflection' },
            { value: '50%', label: 'Faster Resolution' },
            { value: '95%', label: 'CSAT Score' },
        ],
    },
    {
        id: 'marketing',
        icon: <Megaphone className="w-10 h-10" />,
        title: 'For Marketing Teams',
        subtitle: 'Engage customers across every touchpoint',
        color: 'tertiary',
        challenges: [
            'Difficulty personalizing at scale',
            'Low engagement rates on campaigns',
            'Lack of visibility into customer journey',
            'Attribution and ROI measurement gaps',
        ],
        solutions: [
            { icon: <Mail className="w-5 h-5" />, title: 'Campaign Automation', description: 'Multi-channel campaigns with dynamic personalization.' },
            { icon: <Target className="w-5 h-5" />, title: 'Lead Nurturing', description: 'Automated nurture sequences based on behavior.' },
            { icon: <TrendingUp className="w-5 h-5" />, title: 'Journey Mapping', description: 'Visual customer journey builder with triggers.' },
            { icon: <BarChart3 className="w-5 h-5" />, title: 'Attribution Analytics', description: 'Multi-touch attribution and campaign ROI.' },
        ],
        stats: [
            { value: '45%', label: 'Higher Engagement' },
            { value: '30%', label: 'More MQLs' },
            { value: '25%', label: 'Better ROI' },
        ],
    },
];

export default function RolePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="By Role"
                title="Solutions for Every Team"
                subtitle="Purpose-built tools for Sales, Support, and Marketing teams. Solve your specific challenges with targeted solutions."
                gradient="purple"
            />

            {/* Roles */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {roles.map((role, index) => (
                            <motion.div
                                key={role.id}
                                id={role.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="scroll-mt-32"
                            >
                                <div className="grid lg:grid-cols-2 gap-12 items-start">
                                    <div>
                                        <div className={`inline-flex p-4 rounded-2xl bg-${role.color}/10 border border-${role.color}/20 text-${role.color} mb-6`}>
                                            {role.icon}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{role.title}</h2>
                                        <p className="text-xl text-gray-400 mb-8">{role.subtitle}</p>

                                        {/* Challenges */}
                                        <div className="mb-8">
                                            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Common Challenges</h4>
                                            <ul className="space-y-2">
                                                {role.challenges.map((challenge) => (
                                                    <li key={challenge} className="flex items-center gap-3 text-gray-400 text-sm">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {role.stats.map((stat) => (
                                                <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl">
                                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <Button variant="primary" size="lg">
                                            See Demo <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Our Solutions</h4>
                                        {role.solutions.map((solution) => (
                                            <div key={solution.title} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors">
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                                        {solution.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-white mb-1">{solution.title}</h4>
                                                        <p className="text-sm text-gray-500">{solution.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {index < roles.length - 1 && (
                                    <div className="mt-32 border-t border-white/5" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Empower Your Team?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a personalized demo for your specific team and use case.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Schedule Team Demo</Button>
                            <Button variant="outline" size="lg">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
