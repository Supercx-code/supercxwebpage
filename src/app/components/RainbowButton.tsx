import React, { JSX } from 'react'

const RainbowButton = ({ children, link }: { children: JSX.Element; link: string; }) => {
    return (
        <button
            className="flex items-center gap-2 bg-[linear-gradient(120deg,#553997,#C80EAA,#AC2723,#DB6C3D)] px-4 py-3 rounded-full"
            type="button"
            aria-label="Learn more about our products"
        >
            {children}
        </button>
    )
}

export default RainbowButton