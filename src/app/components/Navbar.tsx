"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="px-6 py-4 mx-auto rounded-full 
        bg-gradient-to-r from-black/80 via-purple-800/40 to-black/80 
        backdrop-blur-xl border border-white/10 
        shadow-[inset_1px_1px_2px_rgba(255,255,255,0.08),0_4px_25px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center justify-between">


        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Home</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Products</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Services</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">About Us</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Blog</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="flex flex-col items-center mt-4 gap-4 md:hidden">
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Home</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Products</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Services</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">About Us</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Blog</a>
          <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
