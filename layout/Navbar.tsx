import Image from 'next/image';
import React from 'react'
import NavigationTabs from '../components/NavigationTabs';

const NavBar = () => {
    return (
        <div className="bg-[#EBE9E9] font-['Poppins'] p-4 flex flex-row justify-between items-center rounded-2xl sticky top-4 w-full shadow z-50">
            <div className="relative flex-shrink-0 h-14 w-48">
                <Image
                    src={"/logo.svg"}
                    alt='Super CX'
                    fill
                    className='object-contain pointer-events-none select-none'
                />
            </div>

            <nav className="hidden sm:flex flex-row items-center xl:gap-10 gap-6 font-['Poppins']">
                <NavigationTabs />
            </nav>

            <button className='custom-yellow-button px-6 py-3 rounded-full'>
                Get Started
            </button>
        </div>
    )
};


export default NavBar