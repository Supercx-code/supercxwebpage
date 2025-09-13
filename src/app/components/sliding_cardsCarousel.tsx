"use client";

import React, { useCallback, useEffect, useState } from "react";
import Card2 from "./sliding_cards";

type Item = {
  id: number;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
};

// ✅ keep this above the component
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

  // keyboard navigation
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") setActive((s) => (s - 1 + data.length) % data.length);
    if (e.key === "ArrowRight") setActive((s) => (s + 1) % data.length);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const offsetSpacing = 450;

  return (
        <section className="w-full py-16 flex flex-col items-center relative overflow-hidden">
          {/* Section header */}
          <div className="text-center mb-12">
            {/* pill */}
            <div
              className="inline-flex flex-row gap-2 items-center 
                        w-fit
                        px-5 py-2 
                        bg-gradient-to-b from-[#10151D] to-[#1D1F1E] 
                        text-sm font-medium 
                        rounded-full 
                        transition transform duration-200 
                        hover:scale-105 hover:brightness-110"
            >
              <img
                src="/supercx-icon.svg"
                alt="icon"
                className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              />
              Case Studies
            </div>


            {/* heading */}
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-subtle-gradient">
              <span>Real Results, Real</span> <br />
              <span>Businesses</span>
            </h2>
          </div>
      {/* Carousel */}
      <div className="relative w-full h-[420px]">
        {data.map((item, idx) => {
          const n = data.length;
          let dist = (idx - active) % n;
          if (dist < -Math.floor(n / 2)) dist += n;
          if (dist > Math.floor(n / 2)) dist -= n;

          const offsetX = dist * offsetSpacing;
          const yOffset = dist === 0 ? 0 : 10;
          const isActive = dist === 0;

          const zIndex = 50 - Math.abs(dist);
          const opacity = Math.abs(dist) > 2 ? 0 : 1;

          const widthClass = isActive ? "w-[600px] h-[340px]" : "w-[180px] h-[120px]";

          return (
            <div
              key={item.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translateX(${offsetX}px) translateY(${yOffset}px)`,
                zIndex,
                opacity,
                transition: "transform 700ms cubic-bezier(.2,.9,.2,1), opacity 400ms",
                willChange: "transform, opacity",
              }}
              className={`flex items-center justify-center ${widthClass}`}
            >
              <Card2
                title={item.title}
                subtitle={item.subtitle}
                icon={<span className="text-lg">{item.icon}</span>}
                isActive={isActive}
                onClick={() => setActive(idx)}
              />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
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
