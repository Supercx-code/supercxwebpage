import React, { JSX } from 'react'
import Image from 'next/image';

const Page = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-4 space-y-4 relative'>
      <NavBar />

      <HeroSection />
    </div>
  )
};

const NavBar = () => {
  return (
    <div className="bg-[#EBE9E9] p-4 flex flex-row justify-between items-center rounded-2xl sticky top-4 w-full shadow">
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
    <div className='p-4 pr-0 rounded-2xl bg-[#EBE9E9]'>
      <div className="w-full flex flex-row items-start">
        <div className="p-16 pr-0 flex-1 space-y-8">
          <HeadingText>
            <>
              Drive Revenue Growth with Data-Backed Customer
              <img src={"/spark.svg"} alt='' className='h-[90px] w-[90px] inline mx-8 pointer-events-none select-none' />
              Engagement
            </>
          </HeadingText>

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

      <div className="flex flex-row items-center p-16 pr-0 pt-0">
        <div className="w-1/3">
          <p className='text-3xl font-light'>Trusted by organizations</p>
        </div>
        <div className="w-2/3 overflow-x-hidden">
          <InfiniteMoving />
        </div>
      </div>
    </div>
  )
};

const HeadingText = ({ children }: { children: JSX.Element }) => {
  return (
    <h1 className='text-6xl italic font-extrabold leading-normal uppercase' style={{ letterSpacing: "0.05em" }}>
      {children}
    </h1>
  )
};

const InfiniteMoving = () => {
  return (
    <div className='animate-to-left flex flex-row overflow-x-hidden w-full'>
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
}

export default Page;