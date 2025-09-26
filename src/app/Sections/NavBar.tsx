"use client"
import React, { useState } from 'react'
import GlassyButton from '../components/GlassyButton';

interface NavItem {
    name: string;
    targetId: string;
}

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", targetId: "home" },
        { name: "Products", targetId: "products" },
        { name: "Services", targetId: "services" },
        { name: "About Us", targetId: "about" },
        { name: "Blog", targetId: "blog" },
        { name: "Contact", targetId: "contact" },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        setActiveSection(id);

        if (section) {
            const yOffset = -100; // offset from top
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false); // close menu after click
        }
    };

    return (
        <header className="relative z-20 flex flex-row items-center w-full justify-between px-12 py-6">
            <div className="flex-shrink-0">
                <img src="/logo.svg" alt="Logo" className="h-full" /> {/* increased size */}
            </div>

            <div className="border-[3px] rounded-xl">
                <nav className="px-8 py-4 flex flex-row gap-8 rounded-full bg-gradient-to-b from-[#181A2B75] via-[#18242B75] to-[#0D0D0E]">
                    <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Home</a>
                    <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Products</a>
                    <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Services</a>
                    <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">About Us</a>
                    <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Blog</a>
                    <a href="#" className="text-base font-medium text-white/90 hover:text-pink-400 transition">Contact</a>
                </nav>
            </div>

            <div className="flex-shrink-0" >
                <div className="rounded-full">
                    <button className="bg-gradient-to-b from-[#10151D] to-[#1D1F1E] px-6 py-3 rounded-full">
                        Get in Touch →
                    </button>
                </div>
            </div>
        </header>
    )
}

export default NavBar