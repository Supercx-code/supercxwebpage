'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: '2M+', label: 'AI Conversations', suffix: 'Monthly' },
    { value: '100+', label: 'Businesses Automated', suffix: 'Globally' },
    { value: '40%', label: 'Faster Conversions', suffix: 'with SuperCX' },
    { value: '60%', label: 'Reduction in Costs', suffix: 'Support Ops' },
];

const StatItem = ({ item, index }: { item: typeof stats[0], index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2"
            >
                {item.value}
            </motion.div>
            <div className="text-lg font-semibold text-primary mb-1">{item.label}</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">{item.suffix}</div>
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-24 bg-[#0B0F19] relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, index) => (
                        <StatItem key={index} item={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
