'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    icon?: React.ReactNode;
}

// Convert standard button props to motion component props
type MotionButtonProps = ButtonProps & HTMLMotionProps<"button">;

const Button = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, icon, ...props }, ref) => {
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

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'inline-flex items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {icon && <span className="ml-2">{icon}</span>}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
