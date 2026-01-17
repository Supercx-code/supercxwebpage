'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Phone, PhoneCall, PhoneOff, Voicemail, BarChart3, Database, Settings, Clock, ArrowRight, CheckCircle2, Play, Pause, Volume2 } from 'lucide-react';

const features = [
    {
        icon: <PhoneCall className="w-6 h-6" />,
        title: 'Click-to-Call',
        description: 'One-click calling directly from your CRM. No more manual dialing or switching between apps.',
    },
    {
        icon: <Voicemail className="w-6 h-6" />,
        title: 'Call Recording',
        description: 'Automatic call recording with transcription. Never miss important details from conversations.',
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: 'CRM Integration',
        description: 'Deep integration with Salesforce, HubSpot, and other CRMs. Calls logged automatically.',
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Call Analytics',
        description: 'Track call duration, outcomes, and team performance with detailed analytics.',
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: 'Call Scheduling',
        description: 'Schedule calls and set reminders. Never miss a follow-up again.',
    },
    {
        icon: <Settings className="w-6 h-6" />,
        title: 'IVR Builder',
        description: 'Drag-and-drop IVR builder for custom call flows without coding.',
    },
];

const crmIntegrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Leadsquared', logo: 'LS' },
    { name: 'Zoho CRM', logo: 'ZO' },
    { name: 'Pipedrive', logo: 'PD' },
    { name: 'Freshsales', logo: 'FS' },
];

const benefits = [
    { value: '35%', label: 'More calls per day' },
    { value: '50%', label: 'Faster response times' },
    { value: '100%', label: 'Call logging accuracy' },
];

export default function SuperVoicePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="CRM Telephony"
                title="SuperVoice"
                subtitle="Turn your CRM into a call center. Click-to-call, automatic logging, and powerful analytics—all in one seamless integration."
                gradient="gold"
            />

            {/* Stats */}
            <section className="py-12 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-tertiary mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Calling Made Simple</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                SuperVoice integrates directly into your CRM, turning every record into a one-click calling opportunity.
                                All calls are automatically logged with notes, recordings, and outcomes.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Click any phone number to call instantly', 'Automatic call logging in CRM', 'Smart call dispositions', 'Team performance dashboards'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary" size="lg">
                                Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>

                        {/* Call UI Mockup */}
                        <div className="relative">
                            <div className="bg-[#161b22] rounded-2xl border border-white/10 p-6">
                                {/* Active Call */}
                                <div className="bg-tertiary/10 border border-tertiary/30 rounded-xl p-4 mb-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center">
                                                <Phone className="w-6 h-6 text-tertiary" />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">John Smith</div>
                                                <div className="text-sm text-gray-400">+1 (555) 123-4567</div>
                                            </div>
                                        </div>
                                        <div className="text-tertiary font-mono">02:34</div>
                                    </div>
                                    <div className="flex items-center justify-center gap-4">
                                        <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white/20 transition-colors">
                                            <Volume2 className="w-5 h-5" />
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white/20 transition-colors">
                                            <Pause className="w-5 h-5" />
                                        </button>
                                        <button className="w-14 h-14 rounded-full bg-highlight flex items-center justify-center text-white">
                                            <PhoneOff className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>

                                {/* Recent Calls */}
                                <div className="space-y-2">
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Recent Calls</div>
                                    {[
                                        { name: 'Sarah Johnson', time: '10 min ago', status: 'Completed' },
                                        { name: 'Mike Chen', time: '1 hour ago', status: 'Voicemail' },
                                    ].map((call) => (
                                        <div key={call.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/20" />
                                                <span className="text-sm text-white">{call.name}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-gray-500">{call.time}</div>
                                                <div className="text-xs text-gray-400">{call.status}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-tertiary/20 blur-[100px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything your sales and support teams need to make every call count.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={feature.title} glowColor="coral" delay={index * 0.1}>
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-tertiary">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CRM Integrations */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Works With Your CRM</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">Native integrations with popular CRMs. Setup takes minutes, not days.</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
                        {crmIntegrations.map((crm) => (
                            <div key={crm.name} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-tertiary/30 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-tertiary font-bold text-sm">{crm.logo}</span>
                                </div>
                                <div className="text-sm text-gray-400">{crm.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-tertiary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Supercharge Your Calls?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Start a free trial and integrate SuperVoice with your CRM today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Start Free Trial</Button>
                            <Button variant="outline" size="lg">Book a Demo</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
