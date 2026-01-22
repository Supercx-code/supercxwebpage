'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { LinkButton } from '@/components/ui/LinkButton';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, Heart, Zap, Users, Globe, Coffee, Laptop, GraduationCap, ArrowRight } from 'lucide-react';

const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: 'Health & Wellness', description: 'Comprehensive health insurance for you and family' },
    { icon: <Laptop className="w-6 h-6" />, title: 'Remote Friendly', description: 'Work from anywhere with flexible hours' },
    { icon: <GraduationCap className="w-6 h-6" />, title: 'Learning Budget', description: '₹50K annual budget for courses and conferences' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Team Events', description: 'Regular team outings and annual retreats' },
    { icon: <Zap className="w-6 h-6" />, title: 'Stock Options', description: 'Equity for all full-time employees' },
    { icon: <Users className="w-6 h-6" />, title: 'Parental Leave', description: '6 months paid leave for primary caregivers' },
];


const values = [
    'We ship fast and iterate based on feedback',
    'We value impact over hours worked',
    'We believe in transparent communication',
    'We celebrate wins and learn from failures',
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Careers"
                title="Build the Future of CX With Us"
                subtitle="Join a team of passionate builders creating AI-powered experiences that delight millions of customers."
                gradient="purple"
            />

            {/* Why Join */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Join SuperCX?</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                We&apos;re a team of 50+ passionate individuals from companies like Google, Freshworks,
                                Salesforce, and Zoho. We&apos;re building technology that transforms how businesses
                                connect with their customers.
                            </p>
                            <ul className="space-y-4">
                                {values.map((value) => (
                                    <li key={value} className="flex items-start gap-3 text-gray-300">
                                        <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { value: '50+', label: 'Team Members' },
                                        { value: '4', label: 'Countries' },
                                        { value: '2', label: 'Offices' },
                                        { value: '∞', label: 'Growth Potential' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                            <div className="text-sm text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits & Perks</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We take care of our team so they can focus on building great products.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-[#161b22] border border-white/10 rounded-xl"
                            >
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-500">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join us in transforming how businesses connect with their customers.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <LinkButton href="/contact" variant="primary" size="lg">Get in Touch</LinkButton>
                            <LinkButton href="/about" variant="outline" size="lg">Learn About Our Culture</LinkButton>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
