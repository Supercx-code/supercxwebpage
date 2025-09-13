// src/app/components/CardsGrid.tsx
import Image from "next/image";
import React from "react";

type Card = {
  id: number;
  icon: string;
  title: string;
  desc: string;
};

const cards: Card[] = [
  {
    id: 1,
    icon: "/icons/thunder.png",
    title: "AI-First Approach:",
    desc: "Implementing next-gen conversational AI & automation",
  },
  {
    id: 2,
    icon: "/icons/chain.png",
    title: "Seamless Integrations:",
    desc: "Works with Salesforce, SAP, Freshdesk, and more",
  },
  {
    id: 3,
    icon: "/icons/chart.png",
    title: "Proven Impact:",
    desc: "Boost customer engagement & streamline workflows",
  },
  {
    id: 4,
    icon: "/icons/shield.png",
    title: "Reliable Support:",
    desc: "24/7 managed services for continuous optimization",
  },
];

export default function CardsGrid() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((c) => (
          <article
            key={c.id}
            className="relative rounded-2xl p-8 min-h-[300px] flex flex-col
                       border border-white/10 backdrop-blur-md
                       bg-gradient-to-b from-[rgba(12,12,20,0.25)] to-[rgba(17,13,35,0.18)]
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_12px_30px_rgba(3,6,12,0.45)]
                       hover:translate-y-[-6px] transition-transform duration-300"
          >
            {/* Icon frame */}
            <div className="mb-6">
              <div
                className="relative inline-flex items-center justify-center w-11 h-11 rounded-lg p-1.5
                           bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(20,20,28,0.25)]
                           shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_6px_14px_rgba(3,6,12,0.35)]
                           border border-white/10 backdrop-blur-sm"
              >
                <Image
                  src={c.icon}
                  alt={`${c.title} icon`}
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title & text */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 leading-tight">
              {c.title}
            </h3>
            <p className="text-sm md:text-base text-white/70 max-w-[90%]">
              {c.desc}
            </p>

            {/* Divider line */}
            <div className="absolute bottom-6 left-8 right-8 h-px bg-white/5" />
          </article>
        ))}
      </div>
    </div>
  );
}
