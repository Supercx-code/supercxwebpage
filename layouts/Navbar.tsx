"use client"
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-[#EBE9E9] sticky top-0 w-full flex flex-row justify-between items-center p-4 rounded-2xl h-fit'>
            <div className="relative h-14 w-48">
                <Image
                    src={"/logo.svg"}
                    alt='Super CX'
                    fill
                    className='object-cover pointer-events-none select-none'
                />
            </div>

            <button className='custom-button px-6 py-3 rounded-full'>
                Get Started
            </button>
        </div>
    )
}

export default Navbar