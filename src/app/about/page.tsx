import React from 'react'
import NavBar from '../../../layout/Navbar'
import Footer from '../../../layout/Footer'
import PageHeader from '../../../layout/PageHeader'
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-4 space-y-4 relative'>
      <NavBar />

      <PageHeader>
        Our Team
      </PageHeader>

      <div className="grid grid-cols-3 gap-6 bg-[#EBE9E9] p-20 px-32 rounded-2xl justify-center">
        {[
          { name: "Lohit J", position: "Founder, CEO", img: "/ourteam/member1.jpg" },
          { name: "Nuthan", position: "CTO", img: "/ourteam/member1.jpg" },
          { name: "Neha", position: "CXO", img: "/ourteam/member1.jpg" },
          { name: "Harab Rasheed", position: "CMO", img: "/ourteam/member1.jpg" },
          { name: "Vlohit", position: "Developer", img: "/ourteam/member1.jpg" },
          { name: "Aditya", position: "Designer", img: "/ourteam/member1.jpg" },
        ].map((team, index) => (
          <MemberCard {...team} key={index} />
        ))}
      </div>

      <Footer />
    </div>
  )
};

const MemberCard = ({ name, position, img }: { name: string; position: string; img: string }) => {

  return (
    <div className='flex-1 border-2 border-black bg-[#FFF0F1] shadow-[0rem_0.4rem_#000] rounded-3xl p-4'>

      <div className="relative w-full h-80 border-2 border-black rounded-2xl mb-6">
        <Image
          src={img}
          alt={name}
          fill
          className='rounded-2xl object-cover pointer-events-none select-none'
        />
      </div>

      <h2 className='text-3xl font-semibold uppercase text-center'>{name}</h2>

      <h2 className='text-lg font-light uppercase text-center'>{position}</h2>
    </div>
  )
}

export default About