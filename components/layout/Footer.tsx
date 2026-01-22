'use client';

import Link from 'next/link';
import { LinkButton } from '@/components/ui/LinkButton';
import { Send, Instagram, Linkedin, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // TODO: Implement actual subscription logic
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const footerLinks = {
        company: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
        ],
        products: [
            { label: 'Voice AI', href: '/products/voice-ai' },
            { label: 'SuperCX', href: '/products/supercx' },
            { label: 'AI Chatbot', href: '/products/ai-chatbot' },
        ],
        resources: [
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'API Documentation', href: '/api-docs' },
            { label: 'Help Center', href: '/contact' },
        ],
        legal: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
        ],
    };

    const socialLinks = [
        {
            icon: <Instagram className="w-5 h-5" />,
            href: 'https://www.instagram.com/supercxco/',
            label: 'Instagram'
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: 'https://linkedin.com/company/supercx',
            label: 'LinkedIn'
        },
    ];

    return (
        <footer className="bg-[#0B0F19] border-t border-white/10 pt-16 sm:pt-20 pb-8 sm:pb-10">
            <div className="container mx-auto px-4 sm:px-6">
                {/* CTA Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-white/5 to-transparent p-6 sm:p-10 rounded-2xl border border-white/5 mb-12 sm:mb-20 gap-6 lg:gap-0">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Ready to Scale Smarter with AI?</h2>
                        <p className="text-gray-400 text-sm sm:text-base">Join 100+ automation-first companies today.</p>
                    </div>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full sm:w-64 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                aria-label="Email address"
                            />
                        </div>
                        <LinkButton href="/contact" variant="primary" className="whitespace-nowrap">
                            {isSubscribed ? 'Subscribed!' : 'Get Started'} <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                        </LinkButton>
                    </form>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 sm:mb-6 text-sm uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 sm:mb-6 text-sm uppercase tracking-wider">Products</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li>
                                <Link
                                    href="/products/voice-ai"
                                    className="text-gray-400 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                                >
                                    Voice AI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/supercx"
                                    className="text-gray-400 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                                >
                                    SuperCX
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/ai-chatbot"
                                    className="text-gray-400 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                                >
                                    AI Chatbot
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 sm:mb-6 text-sm uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 sm:mb-6 text-sm uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <h3 className="text-white font-semibold mb-4 sm:mb-6 text-sm uppercase tracking-wider">Connect</h3>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a
                                href="mailto:Lohith@supercx.co"
                                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                <Mail className="w-4 h-4" aria-hidden="true" />
                                Lohith@supercx.co
                            </a>
                            <a
                                href="tel:+918970081700"
                                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                <Phone className="w-4 h-4" aria-hidden="true" />
                                +91 89700 81700
                            </a>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4" aria-hidden="true" />
                                HSR Layout, Bangalore
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    aria-label={`Follow us on ${social.label}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="SuperCX" className="h-8 sm:h-10 w-[110px] sm:w-[130px] object-cover opacity-70" />
                        <p>© {new Date().getFullYear()} SuperCX. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
