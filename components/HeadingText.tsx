import React, { JSX } from 'react'

const HeadingText = ({ children }: { children: JSX.Element }) => {
    return (
        <h1 className='text-6xl italic font-extrabold leading-normal uppercase' style={{ letterSpacing: "0.05em" }}>
            {children}
        </h1>
    )
};

export default HeadingText