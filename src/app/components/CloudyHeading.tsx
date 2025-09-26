import React from 'react'

const CloudyHeading = ({ children }: { children: string }) => {
    return (
        <h3 className="text-4xl md:text-5xl font-semibold leading-[1.2] bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
            {children}
        </h3>
    )
}

export default CloudyHeading