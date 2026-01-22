'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle2, GitBranch, Settings, TrendingUp, Users, FileText, Target, Lightbulb } from 'lucide-react';

const services = [
    {
        icon: <GitBranch className="w-6 h-6" />,
        title: 'Process Mapping & Analysis',
        description: 'Comprehensive documentation and analysis of your current business processes to identify bottlenecks and inefficiencies.',
    },
    {
        icon: <Settings className="w-6 h-6" />,
        title: 'Workflow Optimization',
        description: 'Redesign and streamline workflows to eliminate waste, reduce cycle times, and improve operational efficiency.',
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: 'Digital Transformation',
        description: 'Guide your organization through technology adoption and process automation initiatives.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Change Management',
        description: 'Support your teams through organizational changes with training, communication, and adoption strategies.',
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: 'Process Documentation',
        description: 'Create detailed SOPs, process guides, and training materials for sustainable operations.',
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Performance Metrics',
        description: 'Define and implement KPIs to measure process performance and drive continuous improvement.',
    },
];

const methodology = [
    { phase: 'Discovery', title: 'Assess & Analyze', items: ['Stakeholder interviews', 'Current state mapping', 'Pain point identification', 'Opportunity analysis'], duration: '2-3 weeks' },
    { phase: 'Design', title: 'Plan & Architect', items: ['Future state design', 'Technology selection', 'Implementation roadmap', 'ROI projections'], duration: '2-4 weeks' },
    { phase: 'Implement', title: 'Execute & Deploy', items: ['Process rollout', 'System configuration', 'Team training', 'Change management'], duration: '4-8 weeks' },
    { phase: 'Optimize', title: 'Measure & Improve', items: ['Performance monitoring', 'Continuous improvement', 'Ongoing support', 'Quarterly reviews'], duration: 'Ongoing' },
];

const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail & E-commerce',
    'Technology',
    'Professional Services',
];

export default function BPMConsultingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Consulting Services"
                title="BPM Consulting"
                subtitle="Transform your business operations with expert process consulting. We help organizations streamline workflows, eliminate inefficiencies, and drive sustainable growth."
                gradient="purple"
            />

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '200+', label: 'Processes Optimized' },
                            { value: '35%', label: 'Average Cost Reduction' },
                            { value: '60%', label: 'Efficiency Improvement' },
                            { value: '50+', label: 'Enterprise Clients' },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our BPM Services</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive business process management services to transform your operations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={service.title} glowColor="pink" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Methodology</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">A proven approach to business process transformation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {methodology.map((phase, index) => (
                            <motion.div
                                key={phase.phase}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="p-6 bg-[#161b22] border border-white/10 rounded-xl h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-purple-400 font-medium text-sm">{phase.phase}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                                    <ul className="space-y-2 mb-4">
                                        {phase.items.map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-xs text-gray-500 mt-auto">{phase.duration}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industries We Serve</h2>
                            <p className="text-gray-400 mb-8">
                                Our BPM consultants bring deep domain expertise across multiple industries.
                                We understand the unique challenges and regulatory requirements of each sector
                                to deliver tailored solutions.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {industries.map((industry) => (
                                    <div key={industry} className="flex items-center gap-3 p-4 bg-[#161b22] border border-white/10 rounded-lg">
                                        <Briefcase className="w-5 h-5 text-purple-400" />
                                        <span className="text-gray-300 text-sm">{industry}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
                                <Lightbulb className="w-32 h-32 text-purple-400/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Processes?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free process assessment and optimization roadmap.</p>
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
