"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassyButton({ children, className = "" }: Props) {
  return (
    <button
      className={`relative rounded-full text-white font-medium overflow-visible group transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
      style={{ padding: "0.55rem 1.4rem", lineHeight: 1 }}
    >
      {/* Foreground content */}
      <span className="relative z-20 flex items-center gap-2 text-sm">
        {children}
      </span>

      {/* Dark glass background */}
      <div
        className="absolute inset-[2px] rounded-full z-0 pointer-events-none transition duration-300 group-hover:brightness-110 backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,19,56,0.9) 0%, rgba(8,7,22,0.95) 100%)",
          boxShadow:
            "inset 0 4px 10px rgba(0,0,0,0.35), inset 0 -4px 8px rgba(255,255,255,0.05)",
        }}
      />

      {/* Subtle glossy sheen */}
      <div
        className="absolute inset-0 rounded-full z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0) 80%)",
          mixBlendMode: "screen",
        }}
      />

      {/* White glowing borders */}
      <div
        className="absolute inset-0 rounded-full z-30 pointer-events-none"
        style={{
          boxShadow: `
            0 0 5px rgba(255,255,255,0.45),   /* outer glow */
            inset 0 0 2px rgba(255,255,255,0.35) /* inner rim */
          `,
        }}
      />

      {/* Thin crisp stroke */}
      <svg
        className="absolute inset-0 w-full h-full z-40 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4)"
          height="calc(100% - 4)"
          rx="9999"
          ry="9999"
          fill="none"
          stroke="white"
          strokeOpacity="0.8"
          strokeWidth="1"
          className="transition-all duration-300 group-hover:stroke-[1.3]"
        />
      </svg>

      {/* 🔹 Border thinning fades (left & right) */}
      <div
        className="absolute inset-y-0 left-0 w-10 rounded-l-full z-50 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(20,19,56,0.95), transparent)",
          mixBlendMode: "overlay",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-10 rounded-r-full z-50 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(20,19,56,0.95), transparent)",
          mixBlendMode: "overlay",
        }}
      />
    </button>
  );
}
