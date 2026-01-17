import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | SuperCX',
    description: 'Learn how SuperCX collects, uses, and protects your personal information. Our commitment to data privacy and security.',
};

const sections = [
    {
        icon: <Database className="w-6 h-6" />,
        title: 'Information We Collect',
        content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:
        
• Name and contact information
• Company details and job title
• Payment and billing information
• Communication preferences
• Usage data and analytics`,
    },
    {
        icon: <Eye className="w-6 h-6" />,
        title: 'How We Use Your Information',
        content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments, questions, and requests
• Monitor and analyze trends, usage, and activities
• Personalize and improve your experience`,
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: 'Data Security',
        content: `We implement industry-standard security measures to protect your data:

• End-to-end encryption for data in transit
• AES-256 encryption for data at rest
• Regular security audits and penetration testing
• SOC 2 Type II compliance
• GDPR compliance for EU users`,
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Your Rights',
        content: `You have the right to:

• Access and receive a copy of your personal data
• Rectify inaccurate or incomplete data
• Request deletion of your personal data
• Object to processing of your personal data
• Data portability
• Withdraw consent at any time`,
    },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Legal"
                title="Privacy Policy"
                subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
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
                                <h2 className="text-xl font-bold text-white">Questions About Privacy?</h2>
                            </div>
                            <p className="text-gray-400 mb-4">
                                If you have any questions about this Privacy Policy or our data practices, please contact us.
                            </p>
                            <a
                                href="mailto:privacy@supercx.co"
                                className="text-primary hover:underline font-medium"
                            >
                                privacy@supercx.co
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
