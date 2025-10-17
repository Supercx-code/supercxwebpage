import React from 'react'
import NavBar from '../../../../layout/Navbar'
import Footer from '../../../../layout/Footer'
import PageHeader from '../../../../layout/PageHeader'
import HeadingText from '../../../../components/HeadingText';

const Services = () => {
    return (
        <div className='bg-[#373737] min-h-screen p-4 space-y-4 relative'>
            <NavBar />

            <PageHeader>
                CRM<br />IMPLEMENTATION
            </PageHeader>

            <AreYouReady />

            <Footer />
        </div>
    )
};

const AreYouReady = () => {
    return (
        <div className="bg-[#EBE9E9] p-16 rounded-2xl text-center flex flex-col gap-10 items-center">
            <div className="max-w-4xl space-y-4">
                <HeadingText>
                    <>
                        Are you ready <br /> to take our services?
                    </>
                </HeadingText>

                <p className='text-2xl font-normal'>
                    Let’s transform your customer experience with SuperCX.”
                </p>
            </div>

            <button className='text-white custom-black-button mt-auto text-xl font-medium w-fit rounded-full py-3 px-12'>
                Let&apos;s Get Started
            </button>
        </div>
    )
};

export default Services