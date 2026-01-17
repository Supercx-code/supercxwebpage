'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Database, ArrowRight, CheckCircle2, Users, Clock, Layers, FileCheck, Workflow, BarChart3 } from 'lucide-react';

const platforms = [
    { name: 'Salesforce', description: 'Sales Cloud, Service Cloud, Marketing Cloud' },
    { name: 'Leadsquared', description: 'Sales Automation & Marketing CRM' },
    { name: 'SAP CRM', description: 'Enterprise Customer Management' },
    { name: 'HubSpot', description: 'Inbound Marketing & Sales CRM' },
    { name: 'Zoho CRM', description: 'Small Business CRM Suite' },
    { name: 'Freshsales', description: 'AI-Powered Sales CRM' },
];

const services = [
    {
        icon: <Workflow className="w-6 h-6" />,
        title: 'Custom Workflow Design',
        description: 'Tailored workflows that match your sales process, from lead capture to deal closure.',
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: 'Data Migration',
        description: 'Seamless migration from spreadsheets or legacy systems with full data validation.',
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: 'Integration Setup',
        description: 'Connect your CRM with email, phone, marketing tools, and other business systems.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'User Training',
        description: 'Comprehensive training programs for admins, managers, and end users.',
    },
    {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Process Documentation',
        description: 'Detailed SOPs and documentation for ongoing maintenance and onboarding.',
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Reporting & Dashboards',
        description: 'Custom reports and real-time dashboards for sales performance tracking.',
    },
];

const process = [
    { phase: 'Week 1-2', title: 'Discovery & Planning', items: ['Requirements gathering', 'Current state analysis', 'Solution design', 'Project roadmap'] },
    { phase: 'Week 3-6', title: 'Implementation', items: ['System configuration', 'Data migration', 'Integration setup', 'Workflow automation'] },
    { phase: 'Week 7-8', title: 'Training & Go-Live', items: ['User training', 'UAT testing', 'Go-live support', 'Documentation handoff'] },
];

export default function CRMImplementationPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="CRM Services"
                title="CRM Implementation"
                subtitle="End-to-end CRM deployment that transforms your sales and marketing operations. Expert implementation of Salesforce, Leadsquared, SAP, and more."
                gradient="gold"
            />

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '100+', label: 'CRM Implementations' },
                            { value: '8 Weeks', label: 'Average Deployment' },
                            { value: '40%', label: 'Productivity Increase' },
                            { value: '99%', label: 'On-Time Delivery' },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-tertiary mb-2">{stat.value}</div>
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
                        <p className="text-gray-400 max-w-2xl mx-auto">Certified experts across all major CRM platforms.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {platforms.map((platform) => (
                            <div key={platform.name} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-tertiary/30 transition-colors text-center">
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
                        <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive implementation services from start to finish.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={service.title} glowColor="coral" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-tertiary">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Timeline */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Implementation Timeline</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">A typical 8-week implementation journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {process.map((phase, index) => (
                            <div key={phase.phase} className="relative">
                                <div className="p-8 bg-[#161b22] border border-white/10 rounded-xl h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Clock className="w-5 h-5 text-tertiary" />
                                        <span className="text-tertiary font-medium">{phase.phase}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                                    <ul className="space-y-3">
                                        {phase.items.map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-tertiary flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-tertiary/50 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-tertiary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Implement Your CRM?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free consultation and implementation roadmap.</p>
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
