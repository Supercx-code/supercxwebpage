'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    badge?: string;
    gradient?: 'blue' | 'purple' | 'gold' | 'rose';
}

const PageHero = ({ title, subtitle, badge, gradient = 'blue' }: PageHeroProps) => {
    const gradientColors = {
        blue: 'from-primary/20 via-transparent to-transparent',
        purple: 'from-purple-500/20 via-transparent to-transparent',
        gold: 'from-tertiary/20 via-transparent to-transparent',
        rose: 'from-highlight/20 via-transparent to-transparent',
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b ${gradientColors[gradient]} pointer-events-none`} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                        >
                            {badge}
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
