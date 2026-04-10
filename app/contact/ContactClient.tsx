'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useRef } from 'react';

const contactMethods = [
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Us',
        description: 'Get a response within 24 hours',
        value: 'Lohith@supercx.co',
        href: 'mailto:Lohith@supercx.co',
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Call Us',
        description: 'Mon-Fri, 9am-6pm IST',
        value: '+91 89700 81700',
        href: 'tel:+918970081700',
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
        address: 'HSR Layout, Bangalore 560102',
        type: 'Headquarters',
    },
];

// JSON-LD Structured Data for Local Business
const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://supercx.co/#localbusiness',
    name: 'SuperCX',
    image: 'https://supercx.co/logo.png',
    url: 'https://supercx.co',
    telephone: '+91 89700 81700',
    email: 'Lohith@supercx.co',
    description: 'AI-Powered Customer Experience Platform offering Voice AI, CRM Implementation, and Helpdesk Automation services.',
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'HSR Layout',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560102',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9698,
        longitude: 77.7499,
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+91 89700 81700',
            contactType: 'sales',
            email: 'Lohith@supercx.co',
            availableLanguage: ['English', 'Hindi'],
        },
        {
            '@type': 'ContactPoint',
            telephone: '+91 89700 81700',
            contactType: 'customer support',
            email: 'Lohith@supercx.co',
            availableLanguage: ['English', 'Hindi'],
        },
    ],
    sameAs: [
        'https://twitter.com/supercx',
        'https://linkedin.com/company/supercx',
    ],
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://supercx.co',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact',
            item: 'https://supercx.co/contact',
        },
    ],
};

export default function ContactClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const formRef = useRef<HTMLFormElement>(null);

    const validateForm = (): boolean => {
        const form = formRef.current;
        if (!form) return false;

        const errors: Record<string, string> = {};
        const company = (form.elements.namedItem('Company') as HTMLInputElement)?.value?.trim();
        const lastName = (form.elements.namedItem('Last Name') as HTMLInputElement)?.value?.trim();
        const email = (form.elements.namedItem('Email') as HTMLInputElement)?.value?.trim();

        if (!company) errors.company = 'Company is required.';
        if (!lastName) errors.lastName = 'Last Name is required.';
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Please enter a valid email address.';
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const form = formRef.current!;
            const formData = new FormData(form);

            const res = await fetch('/api/zoho-lead', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();

            if (result.success) {
                setSubmitStatus({ success: true, message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.' });
                form.reset();
                setFieldErrors({});
            } else {
                setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
            }
        } catch {
            setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <Navbar />

            <PageHero
                badge="Contact Us"
                title="Let's Talk"
                subtitle="Have a question, need a demo, or want to explore how SuperCX can help? We're here to help."
                gradient="blue"
            />

            {/* Contact Methods */}
            <section className="py-16 border-b border-white/5" aria-labelledby="contact-methods-heading">
                <div className="container mx-auto px-6">
                    <h2 id="contact-methods-heading" className="sr-only">Contact Methods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method) => (
                            <a
                                key={method.title}
                                href={method.href}
                                className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors text-center group"
                                aria-label={`${method.title}: ${method.value}`}
                            >
                                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
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
            <section className="py-24" aria-labelledby="contact-form-heading">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <h2 id="contact-form-heading" className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                            <p className="text-gray-400 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                            <form
                                ref={formRef}
                                id="webform987156000000595039"
                                action="https://crm.zoho.in/crm/WebToLeadForm"
                                name="WebToLeads987156000000595039"
                                method="POST"
                                onSubmit={handleSubmit}
                                acceptCharset="UTF-8"
                                className="space-y-6"
                                aria-label="Contact form"
                            >
                                {/* Zoho hidden fields - Do not remove this code */}
                                <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue="fe7f0a748c199c3bda8b5fee6a3cdbf237f214d7a1bf066ed847db0638030183" />
                                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                                <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue="67c7a6ee708e8597b091826a8611fe069be710a02e06981453d112de284dc1494313bb8cc1c0a83fbf83e4fb86cc2aca" />
                                <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM=" />
                                <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue="null" />

                                {submitStatus && (
                                    <div className={`p-4 rounded-lg flex items-start gap-3 ${submitStatus.success ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                        }`}>
                                        {submitStatus.success ? <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                                        <p>{submitStatus.message}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="First_Name" className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                        <input
                                            id="First_Name"
                                            type="text"
                                            name="First Name"
                                            maxLength={40}
                                            className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="First name"
                                            autoComplete="given-name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-400 mb-2">Last Name <span className="text-red-400">*</span></label>
                                        <input
                                            id="Last_Name"
                                            type="text"
                                            name="Last Name"
                                            maxLength={80}
                                            required
                                            className={`w-full px-4 py-3 bg-[#161b22] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors ${fieldErrors.lastName ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                                            placeholder="Last name"
                                            autoComplete="family-name"
                                        />
                                        {fieldErrors.lastName && (
                                            <p className="mt-1 text-sm text-red-400">{fieldErrors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="Company" className="block text-sm font-medium text-gray-400 mb-2">Company <span className="text-red-400">*</span></label>
                                        <input
                                            id="Company"
                                            type="text"
                                            name="Company"
                                            maxLength={200}
                                            required
                                            className={`w-full px-4 py-3 bg-[#161b22] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors ${fieldErrors.company ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                                            placeholder="Your company"
                                            autoComplete="organization"
                                        />
                                        {fieldErrors.company && (
                                            <p className="mt-1 text-sm text-red-400">{fieldErrors.company}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="Email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input
                                            id="Email"
                                            type="email"
                                            name="Email"
                                            maxLength={100}
                                            className={`w-full px-4 py-3 bg-[#161b22] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors ${fieldErrors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                                            placeholder="you@company.com"
                                            autoComplete="email"
                                        />
                                        {fieldErrors.email && (
                                            <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="Mobile" className="block text-sm font-medium text-gray-400 mb-2">Mobile</label>
                                        <input
                                            id="Mobile"
                                            type="tel"
                                            name="Mobile"
                                            maxLength={30}
                                            className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="+91 98765 43210"
                                            autoComplete="tel"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Country" className="block text-sm font-medium text-gray-400 mb-2">Country</label>
                                        <input
                                            id="Country"
                                            type="text"
                                            name="Country"
                                            maxLength={100}
                                            className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Your country"
                                            autoComplete="country-name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="Description" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="Description"
                                        name="Description"
                                        rows={5}
                                        className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us how we can help..."
                                    />
                                </div>

                                {/* Honeypot - Do not remove */}
                                <input type="text" name="aG9uZXlwb3Q" defaultValue="" style={{ display: 'none' }} />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full md:w-auto"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            Sending...
                                            <Loader2 className="w-4 h-4 ml-2 animate-spin" aria-hidden="true" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Offices */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
                            <p className="text-gray-400 mb-8">Visit us at one of our locations.</p>

                            <div className="space-y-6">
                                {offices.map((office) => (
                                    <address key={office.city} className="p-6 bg-[#161b22] border border-white/10 rounded-xl not-italic">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0" aria-hidden="true">
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
                                    </address>
                                ))}
                            </div>

                            {/* Response Time */}
                            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
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
            <section className="py-24 border-t border-white/5" aria-labelledby="faq-cta-heading">
                <div className="container mx-auto px-6 text-center">
                    <h2 id="faq-cta-heading" className="text-2xl font-bold text-white mb-4">Have Quick Questions?</h2>
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
