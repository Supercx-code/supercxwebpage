'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LinkButtonProps {
    href: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    external?: boolean;
}

const LinkButton = ({
    href,
    variant = 'primary',
    size = 'md',
    children,
    className,
    external = false,
}: LinkButtonProps) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] border-transparent',
        secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_-5px_rgba(148,163,184,0.4)] border-transparent',
        outline: 'bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40',
        ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5 border-transparent',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg font-semibold',
    };

    const buttonClasses = cn(
        'inline-flex items-center justify-center rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
        variants[variant],
        sizes[size],
        className
    );

    if (external) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={buttonClasses}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
        >
            <Link href={href} className={buttonClasses}>
                {children}
            </Link>
        </motion.div>
    );
};

export { LinkButton };

