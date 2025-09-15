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
      style={{ padding: "0.7rem 1.8rem", lineHeight: 1 }} // reduced padding
    >
      {/* Foreground content */}
      <span className="relative z-20 flex items-center gap-3">{children}</span>

      {/* darker bluish glass background */}
      <div
        className="absolute inset-[2px] rounded-full z-0 pointer-events-none transition duration-300 group-hover:brightness-110 backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,19,56,0.9) 0%, rgba(8,7,22,0.95) 100%)", // darker gradient
          boxShadow:
            "inset 0 6px 14px rgba(0,0,0,0.35), inset 0 -6px 12px rgba(255,255,255,0.05)",
        }}
      />

      {/* subtle glossy sheen (top) */}
      <div
        className="absolute inset-0 rounded-full z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 25%, rgba(0,0,0,0) 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* silver stroke outline */}
        <svg
        className="absolute inset-0 w-full h-full z-30 pointer-events-none"
        viewBox="0 0 300 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
            <linearGradient id="silverStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#e6e6e6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>
        </defs>

        <rect
            x="2"
            y="2"
            width="296"
            height="76"
            rx="38"
            ry="38"
            fill="none"
            stroke="url(#silverStroke)"
            strokeWidth="1.4"
            strokeLinecap="round"
            pathLength="678.76"  // match perimeter
            strokeDasharray="299.4 40 299.4 40"
            strokeDashoffset="60"   // shift so gaps align left/right
            className="transition-all duration-300 group-hover:stroke-[1.6] group-hover:opacity-100"
            opacity="0.9"
            />

        </svg>
    </button>
  );
}
