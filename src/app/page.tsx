import React from 'react'
import Image from 'next/image';
import HeadinText from '../../components/HeadinText';

const Page = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-5 space-y-5 relative'>
      <NavBar />

      <HeroSection />
    </div>
  )
};

const NavBar = () => {
  return (
    <div className="bg-[#EBE9E9] p-4 flex flex-row justify-between items-center rounded-2xl sticky top-0 w-full shadow">
      <div className="relative flex-shrink-0 h-14 w-48">
        <Image
          src={"/logo.svg"}
          alt='Super CX'
          fill
          className='object-contain pointer-events-none select-none'
        />
      </div>

      <button className='custom-yellow-button px-6 py-3 rounded-full'>
        Get Started
      </button>
    </div>
  )
}

const HeroSection = () => {
  return (
    <div className="p-4 rounded-2xl bg-[#EBE9E9] w-full flex flex-row items-start">
      <div className="p-16 pr-0 flex-1 space-y-8">
        <HeadinText>
          <>
            Drive Revenue Growth with Data-Backed Customer
            <img src={"/spark.svg"} alt='' className='h-[90px] w-[90px] inline mx-8 pointer-events-none select-none' />
            Engagement
          </>
        </HeadinText>

        <p className='text-2xl font-light'>
          SuperCX powers smarter, faster growth with chatbots, CRM, and marketing automation.
        </p>

        <div className="flex flex-row gap-4">
          <button className='custom-yellow-button px-8 py-3 rounded-full'>
            Book A Free Consultation
          </button>
          <button className='custom-black-button px-8 py-3 rounded-full'>
            Explore Our Products
          </button>
        </div>
      </div>

      <div className="flex-1"></div>
    </div>
  )
}

export default Page;