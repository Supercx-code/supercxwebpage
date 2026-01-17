'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
    className?: string;
    children: React.ReactNode;
    glowColor?: 'blue' | 'cyan' | 'coral' | 'pink';
    delay?: number;
}

const Card = ({ className, children, glowColor = 'blue', delay = 0 }: CardProps) => {
    const glowColors = {
        blue: 'hover:border-primary hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)]',
        cyan: 'hover:border-secondary hover:shadow-[0_0_50px_-10px_rgba(148,163,184,0.3)]',
        coral: 'hover:border-tertiary hover:shadow-[0_0_50px_-10px_rgba(217,119,6,0.3)]',
        pink: 'hover:border-highlight hover:shadow-[0_0_50px_-10px_rgba(225,29,72,0.3)]',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className={cn(
                'relative overflow-hidden rounded-2xl bg-[#161b22] border border-white/5 p-6 transition-[border-color,box-shadow,background-color] duration-300',
                glowColors[glowColor],
                className
            )}
        >
            <div className="relative z-10">{children}</div>

            {/* Subtle noisy texture overlay or gradient blob can go here */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};

export { Card };
