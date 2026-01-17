'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Users, Globe, Award, ArrowRight } from 'lucide-react';

const values = [
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Customer Obsession',
        description: 'Every decision starts with the customer. We measure success by the impact we create for our clients.',
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Innovation First',
        description: 'We push boundaries and embrace new technologies to solve complex problems in simpler ways.',
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Collaboration',
        description: 'Great things happen when talented people work together. We value diverse perspectives.',
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: 'Integrity',
        description: 'We do what\'s right, even when it\'s hard. Trust is the foundation of everything we build.',
    },
];

const stats = [
    { value: '100+', label: 'Enterprise Clients' },
    { value: '2M+', label: 'AI Conversations/Month' },
    { value: '50+', label: 'Team Members' },
    { value: '4', label: 'Global Offices' },
];

const team = [
    { name: 'CEO & Founder', role: 'Leadership', bio: 'Driving vision for AI-first customer experience transformation' },
    { name: 'CTO', role: 'Technology', bio: 'Leading AI/ML innovation and platform architecture' },
    { name: 'VP Engineering', role: 'Engineering', bio: 'Building scalable systems that power millions of conversations' },
    { name: 'VP Customer Success', role: 'Customer Success', bio: 'Ensuring client success and driving adoption at enterprise scale' },
];

const milestones = [
    { year: '2020', title: 'Founded', description: 'SuperCX founded with a mission to democratize AI for customer experience.' },
    { year: '2021', title: 'Series A', description: 'Raised $10M to accelerate product development and team growth.' },
    { year: '2023', title: '100 Customers', description: 'Reached 100 enterprise customers across 4 continents.' },
    { year: '2025', title: 'Voice AI Launch', description: 'Launched industry-leading Voice AI platform with multilingual support.' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="About Us"
                title="Transforming Customer Experience with AI"
                subtitle="We're building the future of customer engagement—making AI-powered experiences accessible to every business."
                gradient="purple"
            />

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-[#161b22] border border-white/10 rounded-2xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-8 h-8 text-primary" />
                                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To empower businesses of all sizes to deliver exceptional customer experiences through
                                intelligent automation. We believe every customer deserves instant, personalized, and
                                helpful interactions—24/7.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 bg-[#161b22] border border-white/10 rounded-2xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="w-8 h-8 text-primary" />
                                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                A world where AI enhances human connection, not replaces it. Where businesses can scale
                                their customer relationships without sacrificing quality, and where every interaction
                                builds trust and loyalty.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-500">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Experienced leaders from world-class companies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="text-center p-6 bg-[#161b22] border border-white/10 rounded-xl">
                                <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary">{member.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                                <p className="text-sm text-primary mb-2">{member.role}</p>
                                <p className="text-xs text-gray-500">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Key milestones in our story.</p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0 w-20 text-right">
                                        <span className="text-primary font-bold">{milestone.year}</span>
                                    </div>
                                    <div className="relative pb-8">
                                        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
                                        {index < milestones.length - 1 && (
                                            <div className="absolute left-1.5 top-5 w-px h-full bg-white/10" />
                                        )}
                                        <div className="pl-8">
                                            <h4 className="font-semibold text-white mb-1">{milestone.title}</h4>
                                            <p className="text-sm text-gray-500">{milestone.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Mission</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">We&apos;re always looking for talented people who share our passion for customer experience.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <LinkButton href="/careers" variant="primary" size="lg">View Open Roles <ArrowRight className="w-4 h-4 ml-2" /></LinkButton>
                            <LinkButton href="/contact" variant="outline" size="lg">Contact Us</LinkButton>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
