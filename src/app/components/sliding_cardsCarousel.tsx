// src/app/components/sliding_cardsCarousel.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import Card2 from "./sliding_cards"; // adjust path if needed
import GlassyButton from "./GlassyButton";

type Item = {
  id: number;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
};

const data: Item[] = [
  {
    id: 1,
    subtitle: "E-Commerce Brand",
    title: "45% fewer tickets + 30% higher conversions with AI chatbot.",
    icon: "🛒",
  },
  {
    id: 2,
    subtitle: "Healthcare Provider",
    title: "Patient support automation & triage improvements.",
    icon: "🩺",
  },
  {
    id: 3,
    subtitle: "SaaS Enterprise",
    title: "Enterprise-scale support automation and knowledge ops.",
    icon: "📦",
  },
];

export default function CardsCarousel() {
  const [active, setActive] = useState<number>(0);
  const offsetSpacing = 520; // tweak for horizontal spacing

  // keyboard nav
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") setActive((s) => (s - 1 + data.length) % data.length);
    if (e.key === "ArrowRight") setActive((s) => (s + 1) % data.length);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  // Precompute layout values
  const positioned = useMemo(() => {
    const n = data.length;
    return data.map((item, idx) => {
      let dist = (idx - active) % n;
      if (dist < -Math.floor(n / 2)) dist += n;
      if (dist > Math.floor(n / 2)) dist -= n;
      const offsetX = dist * offsetSpacing;
      const yOffset = dist === 0 ? 0 : 18;
      const isActive = dist === 0;
      const zIndex = 50 - Math.abs(dist);
      const opacity = Math.abs(dist) > 2 ? 0 : 1;
      return { item, idx, dist, offsetX, yOffset, isActive, zIndex, opacity };
    });
  }, [active]);

  // typed variants — use string easing to avoid TS complaints
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-20 flex flex-col items-center relative overflow-hidden">
      {/* Section header */}
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center mb-12">
        <div className="inline-flex items-center mb-4 rounded-full bg-gradient-to-br from-[#585867] via-[#3A3A3F] to-[#080D1C] p-[1px]">
          <GlassyButton className="px-6 py-2 text-base">
            <img src="/supercx-icon.svg" alt="icon" className="w-5 h-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
            <span>Case Studies</span>
          </GlassyButton>
        </div>

        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-subtle-gradient">
          <span>Real Results, Real</span> <br />
          <span>Businesses</span>
        </h2>
      </motion.div>

      {/* Carousel area */}
      <div className="relative w-full h-[520px]">
        {positioned.map(({ item, idx, offsetX, yOffset, isActive, zIndex, opacity }) => {
          // visual scale
          const scale = isActive ? 1 : Math.max(0.78, 1 - Math.abs(offsetX) / 3000);

          // explicit sizing — helps avoid overflow of content
          const width = isActive ? 760 : 220;
          const height = isActive ? 480 : 140;

          return (
            // Outer wrapper centers the element using translate(-50%,-50%)
            <div
              key={item.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex,
                pointerEvents: isActive ? "auto" : "none", // only active is interactive
              }}
            >
              {/* Animate x/y/scale/opacity relative to the centered wrapper */}
              <motion.div
              key={item.id}
              drag="x"                         // ✅ enable horizontal drag
              dragConstraints={{ left: 0, right: 0 }} // prevents infinite dragging
              onDragEnd={(e, info) => {
                // ✅ snap to closest card based on drag distance
                if (info.offset.x < -100) {
                  setActive((active + 1) % data.length);  // swipe left → next card
                } else if (info.offset.x > 100) {
                  setActive((active - 1 + data.length) % data.length); // swipe right → prev card
                }
              }}
              onClick={() => setActive(idx)}   // ✅ click card → make active
              animate={{
                x: offsetX,
                y: yOffset,
                scale: isActive ? 1 : 0.85,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 24,
              }}
              className="flex items-center justify-center cursor-pointer"
              style={{ width, height }}
            >
              <Card2
                title={item.title}
                subtitle={item.subtitle}
                icon={<span className="text-lg">{item.icon}</span>}
                isActive={isActive}
              />
            </motion.div>

            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {data.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            whileTap={{ scale: 0.92 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-white" : "w-2 bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
