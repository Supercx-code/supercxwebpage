'use client';

import Link from 'next/link';
import { LinkButton } from '@/components/ui/LinkButton';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
    {
        title: 'SuperCX',
        description: 'The unified omni-channel platform. SuperDesk for seamless support operations, CRM integration for sales operations—all in one powerful experience.',
        glowColor: 'bg-secondary',
        href: '/products/supercx',
    },
    {
        title: 'Voice AI',
        description: 'AI-powered voice platform with human-like voice agents for inbound & outbound calls. Enterprise-grade CRM telephony integration for your sales and support teams.',
        glowColor: 'bg-primary',
        href: '/products/voice-ai',
    },
];

const Products = () => {
    return (
        <section id="products" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
                        <p className="text-gray-400">
                            Powerful tools designed to work together or stand alone. Build your perfect CX stack.
                        </p>
                    </div>
                    <LinkButton href="/products" variant="ghost" className="hidden md:flex">
                        View All Products <ArrowRight className="ml-2 w-4 h-4" />
                    </LinkButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((product) => (
                        <Link key={product.title} href={product.href}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#161b22] cursor-pointer"
                            >
                                {/* Product Visual Area */}
                                <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${product.glowColor}`} />

                                <div className="absolute top-0 right-0 p-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-background to-transparent">
                                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                                    <p className="text-sm text-gray-400 mb-6">{product.description}</p>
                                    <span className="text-sm font-semibold text-white flex items-center group-hover:translate-x-2 transition-transform">
                                        Learn More <ArrowRight className="ml-2 w-4 h-4 text-primary" />
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;

