import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { FileText, Users, Shield, AlertCircle, Scale, Mail } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service | SuperCX',
    description: 'Read our terms of service to understand the rules and guidelines for using SuperCX services.',
};

const sections = [
    {
        icon: <FileText className="w-6 h-6" />,
        title: 'Acceptance of Terms',
        content: `By accessing or using SuperCX services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all users, including:
• Individual customers
• Business and enterprise clients
• API integration partners
• Website visitors`,
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Use of Services',
        content: `You agree to use SuperCX services only for lawful purposes and in accordance with these terms. You agree not to:

• Violate any applicable laws or regulations
• Infringe on intellectual property rights
• Transmit harmful code or malware
• Attempt to gain unauthorized access
• Interfere with service operations
• Resell services without authorization`,
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Account Responsibilities',
        content: `You are responsible for:

• Maintaining confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of unauthorized access
• Ensuring accurate account information
• Compliance with all applicable laws`,
    },
    {
        icon: <AlertCircle className="w-6 h-6" />,
        title: 'Limitation of Liability',
        content: `To the maximum extent permitted by law:

• SuperCX shall not be liable for indirect, incidental, or consequential damages
• Our total liability shall not exceed the amount paid by you in the past 12 months
• We do not guarantee uninterrupted or error-free service
• We are not responsible for third-party service disruptions`,
    },
    {
        icon: <Scale className="w-6 h-6" />,
        title: 'Governing Law',
        content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved in the courts of Bangalore, Karnataka.

You agree to:
• Submit to the exclusive jurisdiction of these courts
• Waive any objection to venue
• Resolve disputes through arbitration when applicable`,
    },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Legal"
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our services. By using SuperCX, you agree to these terms."
                gradient="blue"
            />

            {/* Last Updated */}
            <section className="py-8 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <p className="text-sm text-gray-500">Last updated: January 2026</p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {sections.map((section) => (
                            <div key={section.title} className="p-8 bg-[#161b22] border border-white/10 rounded-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                                </div>
                                <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </div>
                        ))}

                        {/* Contact Section */}
                        <div className="p-8 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="w-6 h-6 text-primary" />
                                <h2 className="text-xl font-bold text-white">Questions About Terms?</h2>
                            </div>
                            <p className="text-gray-400 mb-4">
                                If you have any questions about these Terms of Service, please contact our legal team.
                            </p>
                            <a
                                href="mailto:Lohith@supercx.co"
                                className="text-primary hover:underline font-medium"
                            >
                                Lohith@supercx.co
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
