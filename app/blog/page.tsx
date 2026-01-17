import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Blog | SuperCX - CX, AI & Automation Insights',
    description: 'Latest insights on customer experience, AI voice agents, CRM automation, and industry best practices.',
};

const categories = ['All', 'AI & Automation', 'CRM', 'Customer Support', 'Industry Insights', 'Product Updates'];

const featuredPost = {
    title: 'How AI Voice Agents Are Revolutionizing Customer Service in 2026',
    excerpt: 'Discover how next-generation voice AI is transforming customer interactions with human-like conversations, multilingual support, and unprecedented scalability.',
    author: 'Priya Sharma',
    date: 'Jan 10, 2026',
    readTime: '8 min read',
    category: 'AI & Automation',
    featured: true,
};

const posts = [
    {
        title: 'The Complete Guide to CRM Implementation',
        excerpt: 'Everything you need to know about implementing a CRM system, from planning to go-live and beyond.',
        author: 'Raj Patel',
        date: 'Jan 8, 2026',
        readTime: '12 min read',
        category: 'CRM',
    },
    {
        title: '5 Metrics Every Support Team Should Track',
        excerpt: 'The key performance indicators that help you measure and improve customer support quality.',
        author: 'Anita Desai',
        date: 'Jan 5, 2026',
        readTime: '6 min read',
        category: 'Customer Support',
    },
    {
        title: 'WhatsApp Business API: A Complete Guide',
        excerpt: 'Learn how to leverage WhatsApp for business communication, automation, and customer engagement.',
        author: 'Vikram Singh',
        date: 'Jan 2, 2026',
        readTime: '10 min read',
        category: 'AI & Automation',
    },
    {
        title: 'E-commerce CX Trends to Watch in 2026',
        excerpt: 'The emerging trends shaping customer experience in online retail this year.',
        author: 'Priya Sharma',
        date: 'Dec 28, 2025',
        readTime: '7 min read',
        category: 'Industry Insights',
    },
    {
        title: 'Introducing SuperVoice: Our New AI Voice Platform',
        excerpt: 'Announcing the launch of SuperVoice—human-like AI voice agents for your business.',
        author: 'SuperCX Team',
        date: 'Dec 20, 2025',
        readTime: '5 min read',
        category: 'Product Updates',
    },
    {
        title: 'How to Reduce Customer Support Costs by 60%',
        excerpt: 'Practical strategies for automating support while maintaining quality.',
        author: 'Raj Patel',
        date: 'Dec 15, 2025',
        readTime: '9 min read',
        category: 'Customer Support',
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Blog"
                title="Insights & Updates"
                subtitle="Expert perspectives on CX, AI automation, and building better customer experiences."
                gradient="blue"
            />

            {/* Categories */}
            <section className="py-8 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                                        ? 'bg-primary text-white'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-8 md:p-12 rounded-3xl border border-white/10">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
                            Featured
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-3xl">
                            {featuredPost.title}
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {featuredPost.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {featuredPost.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {featuredPost.readTime}
                            </span>
                        </div>
                        <Button variant="primary">
                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.title} className="group">
                                <div className="p-6 bg-[#161b22] border border-white/10 rounded-xl hover:border-primary/30 transition-all h-full flex flex-col">
                                    <span className="text-xs font-medium text-primary mb-3">{post.category}</span>
                                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                                        <span>{post.author}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline">
                            Load More Articles <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Subscribe to get the latest articles, product updates, and industry insights.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                        />
                        <Button variant="primary">Subscribe</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
