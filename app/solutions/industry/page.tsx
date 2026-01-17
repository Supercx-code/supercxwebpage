'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { motion } from 'framer-motion';
import { ShoppingCart, Building2, Heart, Landmark, ArrowRight, CheckCircle2, Bot, Phone, BarChart3, MessageSquare } from 'lucide-react';

const industries = [
    {
        id: 'ecommerce',
        icon: <ShoppingCart className="w-10 h-10" />,
        title: 'E-commerce',
        subtitle: 'Abandoned cart recovery, WhatsApp bots',
        color: 'primary',
        solutions: [
            { title: 'Abandoned Cart Recovery', description: 'WhatsApp and SMS reminders that bring customers back to complete purchases.' },
            { title: 'Order Tracking Bots', description: 'Automated order status updates via WhatsApp, reducing WISMO calls by 60%.' },
            { title: 'Product Recommendation', description: 'AI-powered product suggestions based on browsing and purchase history.' },
            { title: 'Returns & Refunds Automation', description: 'Self-service returns process with instant refund processing.' },
        ],
        stats: [
            { value: '35%', label: 'Cart Recovery Rate' },
            { value: '60%', label: 'Reduction in WISMO' },
            { value: '25%', label: 'Increase in AOV' },
        ],
    },
    {
        id: 'saas',
        icon: <Building2 className="w-10 h-10" />,
        title: 'SaaS',
        subtitle: 'Lead nurturing automation, helpdesk bots',
        color: 'secondary',
        solutions: [
            { title: 'Lead Nurturing Workflows', description: 'Automated email and chat sequences that guide prospects through the funnel.' },
            { title: 'Trial-to-Paid Conversion', description: 'Targeted outreach and in-app messaging to convert trial users.' },
            { title: 'Helpdesk Automation', description: 'AI-powered ticket routing and self-service knowledge base.' },
            { title: 'Churn Prevention', description: 'Proactive engagement based on usage patterns and health scores.' },
        ],
        stats: [
            { value: '40%', label: 'Trial Conversion' },
            { value: '50%', label: 'Faster Onboarding' },
            { value: '30%', label: 'Churn Reduction' },
        ],
    },
    {
        id: 'healthcare',
        icon: <Heart className="w-10 h-10" />,
        title: 'Healthcare',
        subtitle: 'Appointment scheduling, telehealth bots',
        color: 'highlight',
        solutions: [
            { title: 'Appointment Scheduling', description: 'AI-powered booking with calendar integration and automated reminders.' },
            { title: 'Telehealth Bots', description: 'Pre-consultation forms, symptom checkers, and post-visit follow-ups.' },
            { title: 'Patient Engagement', description: 'Medication reminders, health tips, and wellness check-ins.' },
            { title: 'HIPAA-Compliant Messaging', description: 'Secure communication channels for sensitive health information.' },
        ],
        stats: [
            { value: '45%', label: 'No-Show Reduction' },
            { value: '80%', label: 'Patient Satisfaction' },
            { value: '50%', label: 'Staff Time Saved' },
        ],
    },
    {
        id: 'bfsi',
        icon: <Landmark className="w-10 h-10" />,
        title: 'BFSI',
        subtitle: 'Secure, multilingual chatbots, voice banking',
        color: 'tertiary',
        solutions: [
            { title: 'Multilingual Chatbots', description: 'Support in 10+ regional languages with secure authentication.' },
            { title: 'Voice Banking', description: 'IVR automation for balance inquiries, transfers, and bill payments.' },
            { title: 'Fraud Detection Alerts', description: 'Real-time notifications for suspicious transactions.' },
            { title: 'KYC Automation', description: 'Document collection and verification workflows.' },
        ],
        stats: [
            { value: '70%', label: 'Call Deflection' },
            { value: '99.9%', label: 'Security Compliance' },
            { value: '40%', label: 'Cost Reduction' },
        ],
    },
];

export default function IndustryPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="By Industry"
                title="Industry Solutions"
                subtitle="Tailored CX automation for your industry's specific challenges, regulations, and customer expectations."
                gradient="blue"
            />

            {/* Industries */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.id}
                                id={industry.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="scroll-mt-32"
                            >
                                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className={`inline-flex p-4 rounded-2xl bg-${industry.color}/10 border border-${industry.color}/20 text-${industry.color} mb-6`}>
                                            {industry.icon}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{industry.title}</h2>
                                        <p className="text-xl text-gray-400 mb-8">{industry.subtitle}</p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {industry.stats.map((stat) => (
                                                <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl">
                                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <LinkButton href="/contact" variant="primary" size="lg">
                                            Get {industry.title} Demo <ArrowRight className="w-4 h-4 ml-2" />
                                        </LinkButton>
                                    </div>

                                    <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        {industry.solutions.map((solution) => (
                                            <div key={solution.title} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors">
                                                <div className="flex items-start gap-4">
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-semibold text-white mb-1">{solution.title}</h4>
                                                        <p className="text-sm text-gray-500">{solution.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {index < industries.length - 1 && (
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don&apos;t See Your Industry?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">We work across many industries. Let&apos;s discuss your specific requirements.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <LinkButton href="/contact" variant="primary" size="lg">Schedule Consultation</LinkButton>
                            <LinkButton href="/case-studies" variant="outline" size="lg">View Case Studies</LinkButton>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
