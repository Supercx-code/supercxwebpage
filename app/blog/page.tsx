import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | CX, AI & Automation Insights',
    description: 'Expert insights on customer experience, AI voice agents, CRM best practices, and marketing automation. Stay updated with the latest trends in CX technology.',
    keywords: [
        'customer experience blog',
        'AI automation blog',
        'CRM best practices',
        'voice AI insights',
        'marketing automation tips',
        'helpdesk automation',
        'CX industry trends',
        'SaaS blog',
        'B2B marketing insights',
    ],
    alternates: {
        canonical: 'https://supercx.co/blog',
    },
    openGraph: {
        title: 'SuperCX Blog | CX & AI Insights',
        description: 'Expert perspectives on CX, AI automation, and building better customer experiences.',
        url: 'https://supercx.co/blog',
        siteName: 'SuperCX',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SuperCX Blog',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SuperCX Blog | CX & AI Insights',
        description: 'Expert perspectives on CX and AI automation.',
        images: ['/og-image.png'],
    },
};

const categories = ['All', 'AI & Automation', 'CRM', 'Customer Support', 'Industry Insights', 'Product Updates'];

const featuredPost = {
    title: 'How AI Voice Agents Are Revolutionizing Customer Service in 2026',
    excerpt: 'Discover how next-generation voice AI is transforming customer interactions with human-like conversations, multilingual support, and unprecedented scalability.',
    author: 'Priya Sharma',
    date: 'Jan 10, 2026',
    dateISO: '2026-01-10T10:00:00+05:30',
    readTime: '8 min read',
    category: 'AI & Automation',
    featured: true,
    slug: 'ai-voice-agents-customer-service-2026',
};

const posts = [
    {
        title: 'The Complete Guide to CRM Implementation',
        excerpt: 'Everything you need to know about implementing a CRM system, from planning to go-live and beyond.',
        author: 'Raj Patel',
        date: 'Jan 8, 2026',
        dateISO: '2026-01-08T10:00:00+05:30',
        readTime: '12 min read',
        category: 'CRM',
        slug: 'complete-guide-crm-implementation',
    },
    {
        title: '5 Metrics Every Support Team Should Track',
        excerpt: 'The key performance indicators that help you measure and improve customer support quality.',
        author: 'Anita Desai',
        date: 'Jan 5, 2026',
        dateISO: '2026-01-05T10:00:00+05:30',
        readTime: '6 min read',
        category: 'Customer Support',
        slug: '5-metrics-support-team-track',
    },
    {
        title: 'WhatsApp Business API: A Complete Guide',
        excerpt: 'Learn how to leverage WhatsApp for business communication, automation, and customer engagement.',
        author: 'Vikram Singh',
        date: 'Jan 2, 2026',
        dateISO: '2026-01-02T10:00:00+05:30',
        readTime: '10 min read',
        category: 'AI & Automation',
        slug: 'whatsapp-business-api-guide',
    },
    {
        title: 'E-commerce CX Trends to Watch in 2026',
        excerpt: 'The emerging trends shaping customer experience in online retail this year.',
        author: 'Priya Sharma',
        date: 'Dec 28, 2025',
        dateISO: '2025-12-28T10:00:00+05:30',
        readTime: '7 min read',
        category: 'Industry Insights',
        slug: 'ecommerce-cx-trends-2026',
    },
    {
        title: 'Introducing Voice AI: Our New AI Voice Platform',
        excerpt: 'Announcing the launch of Voice AI—human-like AI voice agents for your business.',
        author: 'SuperCX Team',
        date: 'Dec 20, 2025',
        dateISO: '2025-12-20T10:00:00+05:30',
        readTime: '5 min read',
        category: 'Product Updates',
        slug: 'introducing-supervoice-ai-voice-platform',
    },
    {
        title: 'How to Reduce Customer Support Costs by 60%',
        excerpt: 'Practical strategies for automating support while maintaining quality.',
        author: 'Raj Patel',
        date: 'Dec 15, 2025',
        dateISO: '2025-12-15T10:00:00+05:30',
        readTime: '9 min read',
        category: 'Customer Support',
        slug: 'reduce-support-costs-60-percent',
    },
];

// JSON-LD for Blog listing page
const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://supercx.co/blog/#blog',
    name: 'SuperCX Blog',
    description: 'Expert insights on customer experience, AI voice agents, CRM best practices, and marketing automation.',
    url: 'https://supercx.co/blog',
    publisher: {
        '@type': 'Organization',
        name: 'SuperCX',
        logo: {
            '@type': 'ImageObject',
            url: 'https://supercx.co/logo.png',
        },
    },
    blogPost: [featuredPost, ...posts].map(post => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        datePublished: post.dateISO,
        publisher: {
            '@type': 'Organization',
            name: 'SuperCX',
        },
    })),
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
            name: 'Blog',
            item: 'https://supercx.co/blog',
        },
    ],
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <Navbar />

            <PageHero
                badge="Blog"
                title="Insights & Updates"
                subtitle="Expert perspectives on CX, AI automation, and building better customer experiences."
                gradient="blue"
            />

            {/* Categories */}
            <section className="py-8 border-b border-white/5" aria-label="Blog categories">
                <div className="container mx-auto px-6">
                    <nav className="flex flex-wrap gap-3 justify-center" aria-label="Blog category filter">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                                    ? 'bg-primary text-white'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                aria-pressed={index === 0}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16" aria-labelledby="featured-post-heading">
                <div className="container mx-auto px-6">
                    <h2 id="featured-post-heading" className="sr-only">Featured Article</h2>
                    <article className="bg-gradient-to-r from-primary/10 to-transparent p-8 md:p-12 rounded-3xl border border-white/10">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
                            Featured
                        </span>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-3xl">
                            {featuredPost.title}
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" aria-hidden="true" />
                                <span>{featuredPost.author}</span>
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <time dateTime={featuredPost.dateISO}>{featuredPost.date}</time>
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" aria-hidden="true" />
                                <span>{featuredPost.readTime}</span>
                            </span>
                        </div>
                        <Button variant="primary">
                            Read Article <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                        </Button>
                    </article>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16" aria-labelledby="latest-articles-heading">
                <div className="container mx-auto px-6">
                    <h2 id="latest-articles-heading" className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="group">
                                <div className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-all h-full flex flex-col">
                                    <span className="text-xs font-medium text-primary mb-3">{post.category}</span>
                                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                                        <span>{post.author}</span>
                                        <time dateTime={post.dateISO}>{post.readTime}</time>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline">
                            Load More Articles <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter - Connected to Zoho CRM */}
            <section className="py-24 border-t border-white/5" aria-labelledby="newsletter-heading">
                <div className="container mx-auto px-6 text-center">
                    <h2 id="newsletter-heading" className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Subscribe to get the latest articles, product updates, and industry insights.</p>
                    <iframe name="zoho_iframe_blog" style={{ display: 'none' }} title="Newsletter form submission" />
                    <form
                        action="https://crm.zoho.in/crm/WebToLeadForm"
                        method="POST"
                        target="zoho_iframe_blog"
                        acceptCharset="UTF-8"
                        className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                        aria-label="Newsletter signup"
                    >
                        {/* Zoho hidden fields - Do not remove */}
                        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="fe7f0a748c199c3bda8b5fee6a3cdbf237f214d7a1bf066ed847db0638030183" readOnly />
                        <input type="hidden" name="zc_gad" value="" />
                        <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="67c7a6ee708e8597b091826a8611fe069be710a02e06981453d112de284dc1494313bb8cc1c0a83fbf83e4fb86cc2aca" readOnly />
                        <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" readOnly />
                        <input type="text" style={{ display: 'none' }} name="returnURL" value="null" readOnly />
                        <input type="hidden" name="Last Name" value="Newsletter Subscriber" />
                        <input type="hidden" name="Company" value="Newsletter Signup" />
                        <input type="text" name="aG9uZXlwb3Q" value="" style={{ display: 'none' }} readOnly />

                        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            name="Email"
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                            autoComplete="email"
                        />
                        <Button variant="primary" type="submit">Subscribe</Button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}
