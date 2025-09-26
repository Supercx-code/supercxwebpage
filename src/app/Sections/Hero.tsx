import React from 'react'
import { IoDiamondOutline } from 'react-icons/io5'
import RainbowButton from '../components/RainBowButton'

const Hero = () => {
    return (
        <div className="relative z-10 max-w-4xl mt-20">
            <h1 className="mx-auto w-full text-white max-w-4xl text-[48px] md:text-[64px] font-semibold leading-[1.2] text-center">
                Revolutionize Customer Experience with AI-Powered Solutions
            </h1>

            <p className="mt-6 text-base md:text-lg font-light text-gray-300 max-w-6xl mx-auto leading-relaxed">
                From intelligent chatbots to CRM and marketing automation, SuperCX helps businesses scale smarter, faster, and more efficiently
            </p>

            <div className="mt-10 flex justify-center gap-6 flex-wrap">
                <button
                    className="relative text-subtle-gradient font-medium
                        after:content-[''] after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-purple-400
                        after:transition-all after:duration-300 hover:after:w-full"
                >
                    Book a Free Consultation
                </button>

                <RainbowButton link=''>
                    <>
                        Explore Our Products
                        <IoDiamondOutline className='text-lg' />
                    </>
                </RainbowButton>
            </div>
        </div>
    )
}

export default Hero