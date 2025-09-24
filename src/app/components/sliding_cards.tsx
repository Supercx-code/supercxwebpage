// src/app/components/sliding_cards.tsx
import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  logos?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export default function Card2({
  title,
  subtitle,
  icon,
  logos,
  isActive = false,
  onClick,
}: CardProps) {
  return (
    <motion.button
      onClick={onClick}
      aria-pressed={isActive}
      animate={{
        borderRadius: isActive ? "1rem" : "0.75rem",
        padding: isActive ? "1.5rem" : "0.75rem",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`relative group focus:outline-none bg-white/5 shadow-sm text-left 
        flex flex-col items-center justify-center
        ${isActive ? "backdrop-blur-sm border border-white/10" : "border border-white/5 hover:border-white/20 hover:shadow-md"}
      `}
    >
      {/* Inactive card */}
      {!isActive && (
        <>
          <motion.div
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center mb-2"
          >
            {icon ?? <span className="text-xl">🛒</span>}
          </motion.div>
          <span className="text-sm text-white/80">{subtitle}</span>
        </>
      )}

      {/* Active card */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col h-full justify-between w-full"
        >
          {/* pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full 
                        bg-white/15 text-base font-semibold text-white mb-8 
                        w-fit max-w-fit shadow-md"
          >
            <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center">
              {icon ?? <span className="text-lg">🛒</span>}
            </div>
            <span className="tracking-wide">{subtitle}</span>
          </motion.div>

          {/* title */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-subtle-gradient"
          >
            {title}
          </motion.h3>

          {/* logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-6 mt-8"
          >
            <img
              src="/360.png"
              alt="R360 and CURAPOD logos"
              className="h-8 object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.button>
  );
}
