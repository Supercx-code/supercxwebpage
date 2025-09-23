// src/app/components/sliding_cards.tsx
import React from "react";

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
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className={`relative group focus:outline-none transition-all duration-500
        ${isActive ? "w-[600px] h-[380px] p-6 rounded-2xl" : "w-[180px] h-[120px] p-3 rounded-xl"}
        ${isActive ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-white/5 border border-white/5"}
        shadow-sm text-left flex flex-col items-center justify-center
        ${!isActive ? "hover:border-white/20 hover:shadow-md" : ""}`}
    >
      {/* Inactive card */}
      {!isActive && (
        <>
          <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center mb-2">
            {icon ?? <span className="text-xl">🛒</span>}
          </div>
          <span className="text-sm text-white/80">{subtitle}</span>
        </>
      )}

      {/* Active card */}
      {isActive && (
        <div className="flex flex-col h-full justify-between w-full">
          {/* pill */}
          <div
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full 
                       bg-white/15 text-base font-semibold text-white mb-8 
                       w-fit max-w-fit shadow-md"
          >
            <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center">
              {icon ?? <span className="text-lg">🛒</span>}
            </div>
            <span className="tracking-wide">{subtitle}</span>
          </div>

          {/* title */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-subtle-gradient">
            {title}
          </h3>

          {/* logos */}
          <div className="flex items-center gap-6 mt-8">
            <img
              src="/360.png"
              alt="R360 and CURAPOD logos"
              className="h-8 object-contain"
            />
          </div>
        </div>
      )}
    </button>
  );
}
