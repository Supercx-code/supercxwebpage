import React from 'react'

const InfiniteMoving = () => {
    return (
        <div className='animate-to-left flex flex-row gap-10 overflow-x-hidden w-full'>
            <img
                alt='Companies'
                className='h-full w-full'
                src={"/companies.svg"}
            />
            <img
                alt='Companies'
                className='h-full w-full'
                src={"/companies.svg"}
            />
            <img
                alt='Companies'
                className='h-full w-full'
                src={"/companies.svg"}
            />
            <img
                alt='Companies'
                className='h-full w-full'
                src={"/companies.svg"}
            />
        </div>
    )
};

export default InfiniteMoving