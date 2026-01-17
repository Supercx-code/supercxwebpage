'use client';

import { Card } from '@/components/ui/Card';
import { Bot, LineChart, Headphones, Settings, Database, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Bot className="w-8 h-8 text-secondary" />,
        title: 'AI Chatbot Implementation',
        description: 'Transform customer engagement with instant, 24/7 AI-driven support that improves efficiency and satisfaction.',
        color: 'cyan' as const,
    },
    {
        icon: <Database className="w-8 h-8 text-tertiary" />,
        title: 'CRM Implementation',
        description: 'Deployment of major CRM systems like Leadsquared, Salesforce, and SAP to streamline sales and marketing.',
        color: 'coral' as const,
    },
    {
        icon: <Headphones className="w-8 h-8 text-highlight" />,
        title: 'Helpdesk Support',
        description: 'Freshdesk, Zendesk, and Kapture CX implementation to streamline support operations and consolidate channels.',
        color: 'pink' as const,
    },
    {
        icon: <Settings className="w-8 h-8 text-primary" />,
        title: 'Marketing Automation',
        description: 'End-to-end setup for streamlined marketing operations, integrating all tools into a cohesive workflow.',
        color: 'blue' as const,
    },
    {
        icon: <LineChart className="w-8 h-8 text-secondary" />,
        title: 'BPM Consulting',
        description: 'Process optimization to analyze and refine existing operations, eliminating waste and increasing efficiency.',
        color: 'cyan' as const,
    },
    {
        icon: <Share2 className="w-8 h-8 text-tertiary" />,
        title: 'Integration Services',
        description: 'Seamlessly connecting your communication channels and software stack for a unified experience.',
        color: 'coral' as const,
    },
];

const ServicesGrid = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Comprehensive solutions to modernize your customer experience stack.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={service.title} glowColor={service.color} delay={index * 0.1}>
                            <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
