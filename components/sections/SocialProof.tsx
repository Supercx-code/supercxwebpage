'use client';

import { motion } from 'framer-motion';

const brands = [
    'Divine Heal', 'Marabha Hajj', '360', 'Curapod', 'WF',
    'Divine Heal', 'Marabha Hajj', '360', 'Curapod', 'WF', // Duplicated for loop
];

const SocialProof = () => {
    return (
        <section className="py-10 border-t border-white/5 bg-[#0B0F19]/50 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-medium text-gray-400 mb-8 tracking-widest uppercase">
                    Trusted by Innovative Organizations
                </p>

                <div className="relative w-full overflow-hidden mask-gradient-x">
                    {/* Gradient Masks for fade effect at edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0F19] to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0F19] to-transparent z-10"></div>

                    <motion.div
                        className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
                        animate={{
                            x: [0, -1000], // Adjust based on width of items
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {brands.map((brand, index) => (
                            <div
                                key={`${brand}-${index}`}
                                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 opacity-80 grayscale-0 hover:from-primary hover:to-secondary cursor-default select-none transition-all duration-300"
                            >
                                {brand}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
