'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { LinkButton } from '@/components/ui/LinkButton';
import { Menu, X, ChevronDown, Mic, Headphones, Phone, Database, Settings, Share2, ShoppingCart, Building2, Heart, Landmark, Users, Megaphone, FileText, BookOpen, Code, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Set mounted state for portal
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const toggleMobileSection = useCallback((label: string) => {
        setExpandedMobileSection(prev => prev === label ? null : label);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
        setExpandedMobileSection(null);
    }, []);

    interface DropdownItem {
        label: string;
        href: string;
        icon: React.ReactNode;
        description: string;
        badge?: string;
    }

    interface NavItem {
        label: string;
        href: string;
        dropdown: DropdownItem[];
    }

    const navItems: NavItem[] = [
        {
            label: 'Products',
            href: '/products',
            dropdown: [
                { label: 'Voice AI', href: '/products/voice-ai', icon: <Mic className="w-4 h-4" />, description: 'Human-like AI voice agents', badge: 'New' },
                { label: 'SuperDesk', href: '/products/superdesk', icon: <Headphones className="w-4 h-4" />, description: 'Automated helpdesk platform' },
                { label: 'SuperVoice', href: '/products/supervoice', icon: <Phone className="w-4 h-4" />, description: 'CRM telephony integration' },
            ],
        },
        {
            label: 'Services',
            href: '/services',
            dropdown: [
                { label: 'CRM Implementation', href: '/services/crm-implementation', icon: <Database className="w-4 h-4" />, description: 'Salesforce, SAP, Leadsquared' },
                { label: 'Helpdesk Setup', href: '/services/helpdesk-setup', icon: <Settings className="w-4 h-4" />, description: 'Freshdesk, Zendesk, Kapture' },
                { label: 'Integration Services', href: '/services/integration-services', icon: <Share2 className="w-4 h-4" />, description: 'API & platform integrations' },
            ],
        },
        {
            label: 'Solutions',
            href: '/solutions',
            dropdown: [
                { label: 'E-commerce', href: '/solutions/industry#ecommerce', icon: <ShoppingCart className="w-4 h-4" />, description: 'Cart recovery & WhatsApp bots' },
                { label: 'SaaS', href: '/solutions/industry#saas', icon: <Building2 className="w-4 h-4" />, description: 'Lead nurturing automation' },
                { label: 'Healthcare', href: '/solutions/industry#healthcare', icon: <Heart className="w-4 h-4" />, description: 'Telehealth & scheduling' },
                { label: 'BFSI', href: '/solutions/industry#bfsi', icon: <Landmark className="w-4 h-4" />, description: 'Secure multilingual bots' },
                { label: 'divider', href: '', icon: null, description: '' },
                { label: 'For Sales', href: '/solutions/role#sales', icon: <Users className="w-4 h-4" />, description: 'Lead qualification & calling' },
                { label: 'For Support', href: '/solutions/role#support', icon: <Headphones className="w-4 h-4" />, description: 'Ticket automation' },
                { label: 'For Marketing', href: '/solutions/role#marketing', icon: <Megaphone className="w-4 h-4" />, description: 'Campaign automation' },
            ],
        },
        {
            label: 'Resources',
            href: '/resources',
            dropdown: [
                { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" />, description: 'Latest insights & updates' },
                { label: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" />, description: 'Customer success stories' },
                { label: 'API Docs', href: '/api-docs', icon: <Code className="w-4 h-4" />, description: 'Developer documentation' },
            ],
        },
        {
            label: 'Company',
            href: '/about',
            dropdown: [
                { label: 'About Us', href: '/about', icon: <Building2 className="w-4 h-4" />, description: 'Our mission & team' },
                { label: 'Careers', href: '/careers', icon: <Users className="w-4 h-4" />, description: 'Join our team' },
                { label: 'Contact', href: '/contact', icon: <Megaphone className="w-4 h-4" />, description: 'Get in touch' },
            ],
        },
    ];

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-[#0d1117]/98 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent'
                }`}
            style={isScrolled ? { WebkitBackdropFilter: 'blur(12px)' } : undefined}
        >
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                    aria-label="SuperCX Home"
                >
                    <img src="/logo.png" alt="" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg" aria-hidden="true" />
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-white">SuperCX</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                aria-haspopup={item.dropdown ? 'true' : undefined}
                                aria-expanded={activeDropdown === item.label}
                            >
                                {item.label}
                                {item.dropdown && (
                                    <ChevronDown
                                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                    />
                                )}
                            </Link>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {item.dropdown && activeDropdown === item.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-2 w-72 bg-[#0d1117]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                        role="menu"
                                    >
                                        <div className="p-2">
                                            {item.dropdown.map((subItem, index) => (
                                                subItem.label === 'divider' ? (
                                                    <div key={index} className="my-2 border-t border-white/10" role="separator" />
                                                ) : (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                                                        role="menuitem"
                                                    >
                                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                                                            {subItem.icon}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm font-medium text-white">{subItem.label}</span>
                                                                {subItem.badge && (
                                                                    <span className="px-1.5 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded">
                                                                        {subItem.badge}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                                        </div>
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    {/* Powered by Saasiple */}
                    <div className="px-3 py-1 text-xs text-gray-500 border-l border-white/10 ml-2 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        <span>Powered by <a href="https://saasiple.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Saasiple</a></span>
                    </div>
                </div>

                {/* CTA */}
                <div className="hidden lg:block">
                    <LinkButton href="/contact" variant="primary" size="sm" className="rounded-full px-6">
                        Get Started
                    </LinkButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2 -mr-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu - Rendered via Portal for proper stacking */}
            {isMounted && createPortal(
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden"
                                style={{
                                    zIndex: 9998,
                                    height: '100dvh',
                                    minHeight: '100vh',
                                }}
                                onClick={closeMobileMenu}
                                aria-hidden="true"
                            />

                            {/* Menu Panel */}
                            <motion.div
                                id="mobile-menu"
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 w-[85%] max-w-sm bg-[#0d1117] border-l border-white/10 lg:hidden overflow-y-auto"
                                style={{
                                    zIndex: 9999,
                                    height: '100dvh',
                                    minHeight: '100vh',
                                }}
                                role="dialog"
                                aria-modal="true"
                                aria-label="Navigation menu"
                            >
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-4 border-b border-white/10">
                                    <Link
                                        href="/"
                                        className="flex items-center space-x-2"
                                        onClick={closeMobileMenu}
                                    >
                                        <img src="/logo.png" alt="" className="w-8 h-8 rounded-lg" />
                                        <span className="text-lg font-bold text-white">SuperCX</span>
                                    </Link>
                                    <button
                                        className="p-2 text-white rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                        onClick={closeMobileMenu}
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Mobile Menu Content */}
                                <div className="p-4 space-y-1">
                                    {navItems.map((item) => (
                                        <div key={item.label} className="border-b border-white/5 last:border-0">
                                            {/* Section Header */}
                                            <button
                                                className="w-full flex items-center justify-between py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded"
                                                onClick={() => toggleMobileSection(item.label)}
                                                aria-expanded={expandedMobileSection === item.label}
                                            >
                                                <span className="text-base font-medium text-white">{item.label}</span>
                                                {item.dropdown && (
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedMobileSection === item.label ? 'rotate-180' : ''}`}
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </button>

                                            {/* Section Items */}
                                            <AnimatePresence>
                                                {item.dropdown && expandedMobileSection === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-4 pl-2 space-y-1">
                                                            {/* View All Link */}
                                                            <Link
                                                                href={item.href}
                                                                className="flex items-center gap-3 p-3 rounded-lg text-primary hover:bg-white/5 transition-colors"
                                                                onClick={closeMobileMenu}
                                                            >
                                                                <span className="text-sm font-medium">View All {item.label}</span>
                                                            </Link>

                                                            {item.dropdown.filter(sub => sub.label !== 'divider').map((subItem) => (
                                                                <Link
                                                                    key={subItem.label}
                                                                    href={subItem.href}
                                                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                                                    onClick={closeMobileMenu}
                                                                >
                                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                                                                        {subItem.icon}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="text-sm font-medium text-gray-200">{subItem.label}</span>
                                                                            {subItem.badge && (
                                                                                <span className="px-1.5 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded">
                                                                                    {subItem.badge}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                        <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="p-4 mt-auto border-t border-white/10">
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mb-4">
                                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                                        Powered by <a href="https://saasiple.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Saasiple</a>
                                    </p>
                                    <LinkButton href="/contact" variant="primary" className="w-full justify-center">
                                        Get Started
                                    </LinkButton>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </nav>
    );
};

export { Navbar };
