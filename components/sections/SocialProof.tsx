'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SocialProof = () => {
    return (
        <section className="py-10 border-t border-white/5 bg-[#0B0F19]/50 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-medium text-gray-400 mb-8 tracking-widest uppercase">
                    Trusted by Innovative Organizations
                </p>

                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks for fade effect at edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0F19] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0F19] to-transparent z-10"></div>

                    <motion.div
                        className="flex items-center gap-8 whitespace-nowrap"
                        animate={{
                            x: [0, -900],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate images for seamless loop */}
                        <Image
                            src="/organizations.png"
                            alt="Trusted Organizations"
                            width={900}
                            height={60}
                            className="invert opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                            priority
                        />
                        <Image
                            src="/organizations.png"
                            alt="Trusted Organizations"
                            width={900}
                            height={60}
                            className="invert opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
