'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Code, Key, Webhook, Database, Phone, MessageSquare, BarChart3, Shield, ArrowRight, Copy, ExternalLink } from 'lucide-react';

const endpoints = [
    {
        category: 'Voice AI',
        icon: <Phone className="w-5 h-5" />,
        items: [
            { method: 'POST', path: '/v1/calls/outbound', description: 'Initiate an outbound call' },
            { method: 'POST', path: '/v1/calls/inbound/config', description: 'Configure inbound call handling' },
            { method: 'GET', path: '/v1/calls/{id}', description: 'Get call details and transcript' },
            { method: 'GET', path: '/v1/calls/{id}/recording', description: 'Get call recording' },
        ],
    },
    {
        category: 'Conversations',
        icon: <MessageSquare className="w-5 h-5" />,
        items: [
            { method: 'POST', path: '/v1/messages/send', description: 'Send a message' },
            { method: 'GET', path: '/v1/conversations/{id}', description: 'Get conversation history' },
            { method: 'POST', path: '/v1/webhooks/configure', description: 'Configure webhooks' },
        ],
    },
    {
        category: 'Analytics',
        icon: <BarChart3 className="w-5 h-5" />,
        items: [
            { method: 'GET', path: '/v1/analytics/calls', description: 'Get call analytics' },
            { method: 'GET', path: '/v1/analytics/conversations', description: 'Get conversation metrics' },
            { method: 'GET', path: '/v1/analytics/sentiment', description: 'Get sentiment analysis' },
        ],
    },
];

const codeExample = `// Initialize SuperCX client
import { SuperCX } from '@supercx/sdk';

const client = new SuperCX({
  apiKey: process.env.SUPERCX_API_KEY,
});

// Make an outbound call
const call = await client.calls.create({
  to: '+919876543210',
  from: '+918765432100',
  voice: 'sophia-hindi',
  script: 'greeting-template',
  metadata: {
    customerId: 'cust_123',
    campaignId: 'camp_456',
  },
});

console.log(\`Call initiated: \${call.id}\`);`;

const features = [
    { icon: <Key className="w-6 h-6" />, title: 'API Keys', description: 'Secure authentication with scoped API keys' },
    { icon: <Webhook className="w-6 h-6" />, title: 'Webhooks', description: 'Real-time event notifications' },
    { icon: <Database className="w-6 h-6" />, title: 'SDKs', description: 'Official SDKs for Node.js, Python, Go' },
    { icon: <Shield className="w-6 h-6" />, title: 'Rate Limits', description: 'Generous limits for enterprise scale' },
];

export default function ApiDocsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Developer Docs"
                title="API Documentation"
                subtitle="Build powerful integrations with the SuperCX API. Comprehensive documentation for Voice AI, Messaging, and Analytics."
                gradient="blue"
            />

            {/* Quick Start */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Quick Start</h2>
                            <p className="text-gray-400 mb-8">
                                Get started with the SuperCX API in minutes. Install our SDK and make your first API call.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-2">1. Install the SDK</h4>
                                    <div className="flex items-center gap-2 p-3 bg-[#161b22] border border-white/10 rounded-lg font-mono text-sm">
                                        <code className="text-green-400 flex-1">npm install @supercx/sdk</code>
                                        <button className="p-1 hover:bg-white/10 rounded">
                                            <Copy className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-2">2. Get your API key</h4>
                                    <p className="text-sm text-gray-500">
                                        Log into the SuperCX dashboard and navigate to Settings → API Keys
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-2">3. Make your first call</h4>
                                    <p className="text-sm text-gray-500">
                                        Use the example on the right to initiate an outbound call
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="primary">
                                    Full Documentation <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                                <Button variant="outline">
                                    Get API Key
                                </Button>
                            </div>
                        </div>

                        {/* Code Example */}
                        <div className="relative">
                            <div className="bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-highlight/50" />
                                        <div className="w-3 h-3 rounded-full bg-tertiary/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-xs text-gray-500 ml-2">example.js</span>
                                </div>
                                <pre className="p-4 overflow-x-auto text-sm">
                                    <code className="text-gray-300">{codeExample}</code>
                                </pre>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* API Features */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="text-center">
                                <div className="inline-flex p-4 rounded-xl bg-white/5 border border-white/10 text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Endpoints */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">API Endpoints</h2>
                        <p className="text-gray-400">Explore our comprehensive API endpoints.</p>
                    </div>

                    <div className="space-y-12">
                        {endpoints.map((group) => (
                            <div key={group.category}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                                </div>

                                <div className="space-y-3">
                                    {group.items.map((endpoint) => (
                                        <div key={endpoint.path} className="flex items-center gap-4 p-4 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors">
                                            <span className={`px-2 py-1 text-xs font-mono font-medium rounded ${endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary'
                                                }`}>
                                                {endpoint.method}
                                            </span>
                                            <code className="text-sm text-gray-300 font-mono flex-1">{endpoint.path}</code>
                                            <span className="text-sm text-gray-500 hidden md:block">{endpoint.description}</span>
                                            <ArrowRight className="w-4 h-4 text-gray-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline">
                            View All Endpoints <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get your API key and start integrating SuperCX into your applications today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg">Create Free Account</Button>
                            <Button variant="outline" size="lg">Contact Developer Support</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
