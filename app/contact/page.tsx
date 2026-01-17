'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Us',
        description: 'Get a response within 24 hours',
        value: 'hello@supercx.co',
        href: 'mailto:hello@supercx.co',
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Call Us',
        description: 'Mon-Fri, 9am-6pm IST',
        value: '+91 80 4123 4567',
        href: 'tel:+918041234567',
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: 'Live Chat',
        description: 'Available 24/7',
        value: 'Start a conversation',
        href: '#',
    },
];

const offices = [
    {
        city: 'Bangalore',
        country: 'India',
        address: '123 Tech Park, Whitefield, Bangalore 560066',
        type: 'Headquarters',
    },
    {
        city: 'Mumbai',
        country: 'India',
        address: '456 Business Hub, Andheri East, Mumbai 400069',
        type: 'Sales Office',
    },
];

const departments = [
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Support' },
    { value: 'partnerships', label: 'Partnerships' },
    { value: 'press', label: 'Press & Media' },
    { value: 'careers', label: 'Careers' },
    { value: 'other', label: 'Other' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        department: 'sales',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Contact Us"
                title="Let's Talk"
                subtitle="Have a question, need a demo, or want to explore how SuperCX can help? We're here to help."
                gradient="blue"
            />

            {/* Contact Methods */}
            <section className="py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method) => (
                            <a
                                key={method.title}
                                href={method.href}
                                className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors text-center group"
                            >
                                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                                <p className="text-primary font-medium">{method.value}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Offices */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                            <p className="text-gray-400 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Your company"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Department *</label>
                                        <select
                                            required
                                            value={formData.department}
                                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                        >
                                            {departments.map((dept) => (
                                                <option key={dept.value} value={dept.value}>{dept.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us how we can help..."
                                    />
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                                    Send Message <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </form>
                        </div>

                        {/* Offices */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
                            <p className="text-gray-400 mb-8">Visit us at one of our locations.</p>

                            <div className="space-y-6">
                                {offices.map((office) => (
                                    <div key={office.city} className="p-6 bg-[#161b22] border border-white/10 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold text-white">{office.city}, {office.country}</h3>
                                                    <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded">{office.type}</span>
                                                </div>
                                                <p className="text-sm text-gray-500">{office.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Response Time */}
                            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <h4 className="font-semibold text-white">Quick Response Guarantee</h4>
                                </div>
                                <p className="text-sm text-gray-400">
                                    We respond to all inquiries within 24 hours during business days.
                                    For urgent matters, please use our live chat for immediate assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ CTA */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Have Quick Questions?</h2>
                    <p className="text-gray-400 mb-8">Check our FAQ or help center for instant answers.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="outline">Visit Help Center</Button>
                        <Button variant="ghost">View FAQ</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
