'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ParticleButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

interface Particle {
    x: number;
    y: number;
    destinationY: number;
    scaleMid: number;
    duration: number;
    delay: number;
    width: number;
    height: number;
    left: number;
    top: number;
}

interface Star {
    top: number;
    left: number;
    width: number;
    height: number;
    animationDuration: number;
}

const ParticleButton = ({ href, children, className = '' }: ParticleButtonProps) => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        // Generate particles
        const newParticles = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 200 - 100,
            y: Math.random() * 100 - 50,
            destinationY: Math.random() * -100,
            scaleMid: Math.random() + 0.5,
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 2,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
        setParticles(newParticles);

        // Generate stars
        const newStars = Array.from({ length: 10 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            animationDuration: Math.random() * 3 + 1,
        }));
        setStars(newStars);
    }, []);

    return (
        <Link href={href} className={`relative group inline-flex items-center justify-center ${className}`}>
            {/* Animated Border Glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full opacity-75 group-hover:opacity-100 blur-[2px] animate-gradient-x transition-opacity duration-300" />

            <motion.div
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white rounded-full bg-slate-900 border border-white/10 transition-transform duration-300 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Background Particles */}
                <div className="absolute inset-0 w-full h-full">
                    {particles.map((particle, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-sky-400 rounded-full opacity-0 group-hover:opacity-100"
                            initial={{
                                x: particle.x,
                                y: particle.y,
                                scale: 0,
                                opacity: 0,
                            }}
                            animate={{
                                y: [null, particle.destinationY],
                                scale: [0, particle.scaleMid, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                                delay: particle.delay,
                            }}
                            style={{
                                width: `${particle.width}px`,
                                height: `${particle.height}px`,
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Stars/Sparkles fixed in background */}
                <div className="absolute inset-0 w-full h-full opacity-30">
                    {stars.map((star, i) => (
                        <div
                            key={`star-${i}`}
                            className="absolute bg-sky-200 rounded-full animate-pulse"
                            style={{
                                top: `${star.top}%`,
                                left: `${star.left}%`,
                                width: `${star.width}px`,
                                height: `${star.height}px`,
                                animationDuration: `${star.animationDuration}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2">{children}</span>

                {/* Shine Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </motion.div>
        </Link>
    );
};

export default ParticleButton;
