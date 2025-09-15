import React from "react";
import Image from "next/image";

type CardProps = {
  icon: string;      // filename of svg inside /public/products
  title: string;     // main heading
  subtitle: string;  // smaller text below
};

const Card1: React.FC<CardProps> = ({ icon, title, subtitle }) => {
  return (
    <div
      className="relative w-[320px] h-[320px] rounded-[28px] overflow-hidden border border-white/6 
                 bg-[#0b0f16] flex flex-col items-center justify-end p-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(22,24,31,0.86) 0%, rgba(6,8,12,0.95) 100%)",
        boxShadow: "inset 0 32px 56px rgba(6,8,15,0.6), 0 8px 30px rgba(0,0,0,0.6)",
      }}
    >
      {/* Gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "100%",
          height: "60%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 35%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "120%",
          height: "50%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(10,12,18,0.65) 0%, rgba(6,8,12,0.45) 50%, transparent 100%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Icon */}
      <div className="relative mb-6">
        <Image
          src={`/products/${icon}`}
          alt={title}
          width={80}
          height={80}
          className="opacity-90"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white text-center">{title}</h3>

      {/* Subtitle */}
      <p className="text-gray-300 text-sm text-center mt-2">{subtitle}</p>
    </div>
  );
};

export default Card1;













