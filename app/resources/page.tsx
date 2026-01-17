import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { FileText, BookOpen, Code, ArrowRight, Newspaper, Video, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Resources | SuperCX - Blog, Case Studies & API Documentation',
    description: 'Explore SuperCX resources including blog articles, customer case studies, and comprehensive API documentation.',
};

const resources = [
    {
        icon: <FileText className="w-10 h-10" />,
        title: 'Blog',
        description: 'Latest insights on CX, AI, automation, and industry best practices. Updated weekly.',
        href: '/blog',
        cta: 'Read Articles',
        count: '50+ Articles',
    },
    {
        icon: <BookOpen className="w-10 h-10" />,
        title: 'Case Studies',
        description: 'Real success stories from our customers across industries. See the impact of SuperCX.',
        href: '/case-studies',
        cta: 'View Studies',
        count: '20+ Case Studies',
    },
    {
        icon: <Code className="w-10 h-10" />,
        title: 'API Documentation',
        description: 'Comprehensive API docs for Voice AI, integrations, and platform customization.',
        href: '/api-docs',
        cta: 'Explore API',
        count: 'Full Reference',
    },
];

const featured = [
    { type: 'Blog', title: 'How AI Voice Agents Are Transforming Customer Service in 2026', date: 'Jan 10, 2026' },
    { type: 'Case Study', title: 'How TechStart Reduced Support Costs by 60%', date: 'Jan 5, 2026' },
    { type: 'Blog', title: 'The Complete Guide to CRM Implementation', date: 'Dec 28, 2025' },
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Resources"
                title="Learn, Explore, Build"
                subtitle="Everything you need to succeed with SuperCX. From thought leadership to technical documentation."
                gradient="blue"
            />

            {/* Resource Cards */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resources.map((resource) => (
                            <div key={resource.title} className="p-8 bg-[#161b22] border border-white/10 rounded-2xl hover:border-primary/30 transition-all group">
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                                    {resource.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{resource.title}</h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">{resource.description}</p>
                                <p className="text-sm text-primary mb-6">{resource.count}</p>
                                <Link href={resource.href}>
                                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                        {resource.cta} <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Content */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Content</h2>
                            <p className="text-gray-400">Our latest and most popular resources.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featured.map((item) => (
                            <div key={item.title} className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-colors">
                                <span className="text-xs font-medium text-primary mb-2 block">{item.type}</span>
                                <h4 className="text-lg font-semibold text-white mb-3 line-clamp-2">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Resources */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">More Resources</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                                <Video className="w-6 h-6 text-gray-400" />
                            </div>
                            <h4 className="font-semibold text-white mb-2">Webinars</h4>
                            <p className="text-sm text-gray-500">Live and recorded sessions on CX trends</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                                <Download className="w-6 h-6 text-gray-400" />
                            </div>
                            <h4 className="font-semibold text-white mb-2">Whitepapers</h4>
                            <p className="text-sm text-gray-500">In-depth research and analysis</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                                <Newspaper className="w-6 h-6 text-gray-400" />
                            </div>
                            <h4 className="font-semibold text-white mb-2">Newsletter</h4>
                            <p className="text-sm text-gray-500">Weekly updates delivered to your inbox</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-3xl border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Subscribe to our newsletter for the latest insights, product updates, and industry news.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                            />
                            <Button variant="primary">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
