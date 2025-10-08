import React from 'react'
import Navbar from '../../layouts/Navbar'

const Page = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-5 space-y-5 relative'>
      <Navbar />

      <HeroSection />
    </div>
  )
};

const HeroSection = () => {
  return (
    <div className="p-4 rounded-2xl bg-[#EBE9E9] w-full">
      <div className="p-16 pr-0 w-1/2 space-y-8">
        <h1 className='text-6xl italic font-extrabold leading-normal uppercase' style={{letterSpacing: "0.05em"}}>
          Drive Revenue Growth with Data-Backed Customer
          <img src={"/spark.svg"} alt='' className='h-[90px] w-[90px] inline mx-8' />
          Engagement
        </h1>

        <p className='text-2xl font-light'>
          SuperCX powers smarter, faster growth with chatbots, CRM, and marketing automation.
        </p>
      </div>
    </div>
  )
}

export default Page;