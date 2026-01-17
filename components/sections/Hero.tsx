'use client';

import { LinkButton } from '@/components/ui/LinkButton';
import HeroBackground from '@/components/HeroBackground';
import RotatingShape from '@/components/ui/RotatingShape';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();

    // Parallax values
    const yText = useTransform(scrollY, [0, 500], [0, 150]); // Text moves down slower than scroll
    const yDashboard = useTransform(scrollY, [0, 500], [0, -50]); // Dashboard moves slightly up/slower to detach

    return (
        <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Lightweight Dark Glass Background */}
            <HeroBackground />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        style={{ y: yText }}
                        className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight px-4 sm:px-0"
                        >
                            The Complete <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary text-glow">
                                CX Powerhouse
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed px-4 sm:px-0"
                        >
                            Powering businesses with human-like AI Voice Agents and expert CX Services. From verified outbound calling to full-stack CRM implementation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0"
                        >
                            <LinkButton href="/products/supervoice" variant="primary" size="lg" className="w-full sm:w-auto group">
                                Meet SuperVoice
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </LinkButton>
                            <LinkButton href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
                                Enterprise Services
                            </LinkButton>
                        </motion.div>
                    </motion.div>

                    {/* Abstract Dashboard Preview (Parallax Effect) */}
                    <motion.div
                        style={{ y: yDashboard }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative w-full h-[600px] flex items-center justify-center -mt-20 lg:mt-0"
                    >
                        <RotatingShape />
                        {/* Background glow for the visual */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" aria-hidden="true" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
