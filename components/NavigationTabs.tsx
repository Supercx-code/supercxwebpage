"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavigationTabs = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <>
            {
                navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`font-medium transition ${pathname === item.path
                            ? "text-purple-600 font-semibold"
                            : "text-black hover:text-purple-600"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))
            }
        </>

    )
}

export default NavigationTabs