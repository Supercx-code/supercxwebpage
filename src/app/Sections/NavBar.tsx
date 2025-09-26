"use client"
import React, { useState } from 'react'
import GlassyButton from '../components/GlassyButton';
import { LuMoveRight } from 'react-icons/lu';
import Image from 'next/image';

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
            <div className="flex-shrink-0 relative h-16 w-52">
                <Image fill src="/logo.svg" alt="Logo" className="h-full" />
            </div>

            <GlassyButton>
                <nav className="relative px-8 py-4 flex flex-row gap-8 rounded-full bg-gradient-to-b from-[#431156] via-[#2f133b] to-[#0D0D0E]">
                    {navItems.map((nav) => (
                        <a key={nav.targetId} href={`#${nav.targetId}`} className="text-base font-medium text-white/90 hover:text-pink-400 transition">{nav.name}</a>
                    ))}
                </nav>
            </GlassyButton>

            <GlassyButton>
                <button className="bg-gradient-to-b from-[#110723] to-[#1a0f29] px-6 py-3 rounded-full group flex items-center gap-1">
                    Get in Touch
                    <LuMoveRight className="group-hover:translate-x-0.5 transition" />
                </button>
            </GlassyButton>
        </header>
    )
}

export default NavBar