'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Share2, ArrowRight, CheckCircle2, Code, Database, RefreshCw, Shield, Clock, Workflow } from 'lucide-react';

const integrationTypes = [
    {
        icon: <Code className="w-6 h-6" />,
        title: 'API Development',
        description: 'Custom API development for any platform. RESTful APIs, webhooks, and real-time data sync.',
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: 'Data Integration',
        description: 'Seamless data synchronization between CRM, helpdesk, marketing, and analytics platforms.',
    },
    {
        icon: <Workflow className="w-6 h-6" />,
        title: 'Middleware Solutions',
        description: 'Custom middleware that connects legacy systems with modern cloud applications.',
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: 'iPaaS Implementation',
        description: 'Setup and configuration of Zapier, Make, Workato, and other integration platforms.',
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Secure Data Transfer',
        description: 'Encrypted data pipelines with audit trails and compliance monitoring.',
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Real-time Sync',
        description: 'Near real-time data synchronization for mission-critical business processes.',
    },
];

const platforms = [
    'Salesforce', 'HubSpot', 'Freshdesk', 'Zendesk', 'SAP', 'Shopify',
    'Magento', 'WhatsApp', 'Slack', 'Microsoft Teams', 'Google Workspace', 'Zoho'
];

const useCases = [
    { title: 'CRM + Helpdesk', description: 'Sync customer data between sales and support for unified context.' },
    { title: 'E-commerce + CRM', description: 'Automatic lead creation and order sync from online stores.' },
    { title: 'Marketing + CRM', description: 'Campaign attribution and lead scoring across platforms.' },
    { title: 'Voice + CRM', description: 'Automatic call logging and disposition tracking.' },
];

export default function IntegrationServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Integration Services"
                title="Connect Your Stack"
                subtitle="Seamlessly integrate your CRM, helpdesk, marketing tools, and more. Custom APIs, data sync, and middleware solutions."
                gradient="blue"
            />

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '200+', label: 'Integrations Built' },
                            { value: '50+', label: 'Platforms Supported' },
                            { value: '99.9%', label: 'Uptime SLA' },
                            { value: '24/7', label: 'Monitoring' },
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

            {/* Integration Types */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integration Services</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive integration solutions for any use case.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {integrationTypes.map((type, index) => (
                            <Card key={type.title} glowColor="blue" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-primary">
                                    {type.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platforms We Integrate</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">Connect any platform in your stack. Here are some we work with regularly.</p>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {platforms.map((platform) => (
                            <div key={platform} className="px-6 py-3 bg-[#161b22] border border-white/10 rounded-full text-gray-300 text-sm hover:border-primary/30 transition-colors">
                                {platform}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Use Cases</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Popular integration scenarios we implement regularly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {useCases.map((useCase) => (
                            <div key={useCase.title} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                                <p className="text-sm text-gray-500">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How We Build Integrations</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our integration team follows a rigorous methodology to ensure reliable, scalable, and
                                maintainable integrations. We focus on data accuracy, error handling, and monitoring.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Detailed requirements and data mapping',
                                    'Secure authentication and API design',
                                    'Comprehensive error handling',
                                    'Real-time monitoring and alerting',
                                    'Documentation and knowledge transfer',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary" size="lg">
                                Discuss Your Integration <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="bg-[#161b22] rounded-2xl border border-white/10 p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <Share2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-white">Integration Monitor</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { name: 'CRM → Helpdesk', status: 'Active', synced: '2 min ago' },
                                        { name: 'E-commerce → CRM', status: 'Active', synced: '5 min ago' },
                                        { name: 'Marketing → Analytics', status: 'Active', synced: '1 min ago' },
                                    ].map((integration) => (
                                        <div key={integration.name} className="p-4 bg-white/5 rounded-lg flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-white text-sm">{integration.name}</span>
                                            </div>
                                            <span className="text-xs text-gray-500">{integration.synced}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Integration?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Tell us about your systems and we&apos;ll design the perfect integration solution.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Get Free Consultation</Button>
                            <Button variant="outline" size="lg">View API Docs</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
