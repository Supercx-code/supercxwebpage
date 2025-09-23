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

      {/* darker bluish glass background */}
      <div
        className="absolute inset-[2px] rounded-full z-0 pointer-events-none transition duration-300 group-hover:brightness-110 backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,19,56,0.9) 0%, rgba(8,7,22,0.95) 100%)",
          boxShadow:
            "inset 0 4px 10px rgba(0,0,0,0.35), inset 0 -4px 8px rgba(255,255,255,0.05)",
        }}
      />

      {/* subtle glossy sheen (top) */}
      <div
        className="absolute inset-0 rounded-full z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 25%, rgba(0,0,0,0) 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* pure white stroke outline */}
      <svg
        className="absolute inset-0 w-full h-full z-30 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="silverStroke" x1="0" y1="0" x2="1" y2="1">
            {/* all white stops for max brightness */}
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
        </defs>

        <rect
          x="4"
          y="2"
          width="calc(100% - 8)"
          height="calc(100% - 4)"
          rx="9999"
          ry="9999"
          fill="none"
          stroke="url(#silverStroke)"
          strokeWidth="2.4"   // 🔹 thicker pure white stroke
          className="transition-all duration-300 group-hover:stroke-[2.8]"
        />
      </svg>
    </button>
  );
}
