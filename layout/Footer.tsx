import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const Links = [
        {
            heading: "Company",
            links: [
                { title: "About Us", link: "#", },
                { title: "Careers", link: "#" },
                { title: "Contact", link: "#" },
            ]
        },
        {
            heading: "Products",
            links: [
                { title: "SuperCX", link: "#", },
                { title: "SuperVoice", link: "#" },
                { title: "SuperDesk", link: "#" },
            ]
        },
        {
            heading: "Services",
            links: [
                { title: "AI Chatbots", link: "#", },
                { title: "CRM Implementation", link: "#" },
                { title: "Helpdesk Support", link: "#" },
                { title: "Marketing Automation", link: "#" },
                { title: "BPM Consulting", link: "#" },
                { title: "Integration Services", link: "#" },
            ]
        },
        {
            heading: "Services",
            links: [
                { title: "AI Chatbots", link: "#", },
                { title: "CRM Implementation", link: "#" },
                { title: "Helpdesk Support", link: "#" },
                { title: "Marketing Automation", link: "#" },
                { title: "BPM Consulting", link: "#" },
                { title: "Integration Services", link: "#" },
            ]
        },
        {
            heading: "Solutions",
            links: [
                { title: "E-commerce", link: "#", },
                { title: "BFSI", link: "#" },
                { title: "Healthcare", link: "#" },
                { title: "Marketing Automation", link: "#" },
                { title: "SaaS", link: "#" },
            ]
        },
    ]

    return (
        <div className="p-16 bg-[#EBE9E9] rounded-2xl space-y-16">
            <div className="w-full bg-[#69EEC6] rounded-2xl p-8 shadow-[-0.4em_0.4em_#000] flex flex-row justify-between">
                <p className='text-4xl italic font-extrabold leading-normal uppercase'>
                    Subscribe Now!
                </p>

                <div className="border-2 border-black flex flex-row items-center rounded-xl relative w-1/3">
                    <input type="email"
                        name="email"
                        id="email"
                        className='p-3 bg-transparent placeholder-black focus:outline-none focus:bg-transparent w-full h-full pr-10 rounded-xl'
                        placeholder='Your Email Address'
                    />

                    <button className='cursor-pointer absolute right-0.5 hover:bg-[#69EEC6] px-4 h-[90%] rounded-xl'>
                        <RiArrowRightLine className='text-xl' />
                    </button>
                </div>
            </div>

            <div className="w-full flex xl:flex-row flex-col gap-x-16 gap-y-4 flex-wrap items-start justify-between">
                <div className="relative flex-shrink-0 h-14 w-48">
                    <Image
                        src={"/logo.svg"}
                        alt='Super CX'
                        fill
                        className='object-contain pointer-events-none select-none'
                    />
                </div>

                <div className="lg:flex grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex-1 w-full flex-row flex-wrap items-start justify-between gap-6">
                    {Links.map(({ heading, links }, index) => (
                        <div key={index} className="flex flex-col space-y-1">
                            <h3 className='font-medium mb-2 text-lg'>{heading}</h3>

                            {links.map(({ title, link }) => (
                                <Link key={title} href={link}>
                                    {title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='border-t-2 border-black pt-6 flex flex-row items-center justify-between'>
                <div className="flex flex-row items-center gap-4 text-xl">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                </div>

                <span className='text-sm font-medium'>
                    &copy; 2025 SuperCX. All rights reserved.
                </span>

                <span className='text-sm font-medium'>
                    Privacy & Cookie Poilcy
                </span>
            </div>
        </div>
    )
}

export default Footer