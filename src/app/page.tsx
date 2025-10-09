import React, { JSX } from 'react'
import Image from 'next/image';
import InfiniteMoving from '../../components/InfiniteMoving';

const Page = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-4 space-y-4 relative'>
      <NavBar />

      <HeroSection />

      <OurServices />

      <HowWeWork />

      <OurProducts />

      <ServicesCounts />
    </div>
  )
};

const NavBar = () => {
  return (
    <div className="bg-[#EBE9E9] p-4 flex flex-row justify-between items-center rounded-2xl sticky top-4 w-full shadow z-50">
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

const OurServices = () => {
  const services = [
    {
      image: "/services/bot.svg",
      bgColor: "#FF9945",
      title: "AI Chatbots",
      description: "AI-driven chatbots are transforming customer engagement by providing instant, leading to improved efficiency and customer satisfaction."
    },
    {
      image: "/services/crm.svg",
      bgColor: "#4564FF",
      title: "CRM IMPLEMENTATION",
      description: "Deployment of major CRM systems like Leadsquared, Salesforce, and SAP to streamline sales, marketing, and customer service operations."
    },
    {
      image: "/services/helpdesk.svg",
      bgColor: "#E045FF",
      title: "Helpdesk Support",
      description: "Freshdesk, Zendesk, and Kapture CX are are implemented to streamline support operations by consolidating communication channels ."
    },
    {
      image: "/services/marketing.svg",
      bgColor: "#FF4545",
      title: "Marketing Automation",
      description: "The end-to-end setup for streamlined marketing operations involves integrating all tools and platform into a cohesive workflow."
    },
    {
      image: "/services/bpm.svg",
      bgColor: "#FFFF45",
      title: "BPM CONSULTING",
      description: "Process optimization focuses on analyzing and refining existing operations to eliminate waste and increase efficiency."
    },
    {
      image: "/services/integration.svg",
      bgColor: "#83FF45",
      title: "Integration Services",
      description: "Freshdesk, Zendesk, and Kapture CX are are implemented to streamline support operations by consolidating communication channels ."
    },
  ]
  return (
    <div className='bg-[#69EEC6] p-16 rounded-2xl'>
      <HeadingText>
        <>
          Our Services
          <img src="/sparks.svg" alt="" className='mx-8 inline pointer-events-none select-none' />
        </>
      </HeadingText>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {services.map((serv, idex) => (
          <ServicesCard
            key={idex}
            title={serv.title}
            image={serv.image}
            description={serv.description}
            backgroundColor={serv.bgColor}
          />
        ))}
      </div>
    </div>
  )
};


const HowWeWork = () => {
  const list = [
    {
      image: "/howwework/robot.svg",
      title: "AI First Approach",
      description: "Implementing next-gen conversational AI & automation"
    },
    {
      image: "/howwework/link.svg",
      title: "Seamless integration",
      description: "Works with Salesforce, SAP, Freshdesk, and more"
    },
    {
      image: "/howwework/chart.svg",
      title: "Proven Impact",
      description: "Boost customer engagement & streamline workflows"
    },
    {
      image: "/howwework/shield.svg",
      title: "Reliable support",
      description: "24/7 managed services for continuous optimization"
    },
  ];

  return (
    <div className='flex flex-row gap-4 w-full'>
      {list.map(({ image, title, description }) => (
        <div className='bg-white flex-1 p-6 flex flex-col items-center text-center gap-4 rounded-2xl'>
          <div className="relative w-14 h-14">
            <Image
              src={image}
              alt={title}
              fill
            />
          </div>

          <h3 className='text-xl uppercase font-medium text-center'>{title}</h3>

          <p className='text-base font-normal text-center'>{description}</p>
        </div>
      ))}
    </div>
  )
};

const OurProducts = () => {
  const productsList = [
    {
      title: "SuperCX",
      description: "AI-driven chatbots are transforming customer engagement by providing instant, leading to improved efficiency and customer satisfaction.",
      image: ""
    },
    {
      title: "SuperVoice",
      description: "Deployment of major CRM systems like Leadsquared, Salesforce, and SAP to streamline sales, marketing, and customer service operations.",
      image: ""
    },
    {
      title: "SuperDesk",
      description: "Freshdesk, Zendesk, and Kapture CX are are implemented to streamline support operations by consolidating communication channels .",
      image: ""
    },
  ];

  return (
    <div className='bg-[#FFEA7B] p-16 rounded-2xl'>
      <HeadingText>
        <>
          Our Products
          <img src="/sparks.svg" alt="" className='mx-8 inline pointer-events-none select-none' />
        </>
      </HeadingText>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {productsList.map((product, index) => (
          <ProductsCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  )
};

const ServicesCounts = () => {

  const list = [
    {
      number: 2,
      sign: "M+",
      description: "AI Conversations Powered Monthly"
    },
    {
      number: 100,
      sign: "+",
      description: "Businesses Automated Globally"
    },
    {
      number: 40,
      sign: "%",
      description: "Faster Sales Conversions with SuperCX"
    },
    {
      number: 60,
      sign: "%",
      description: " Reduction in Support Costs"
    },
  ]

  return (
    <div className='flex flex-row gap-4 w-full'>
      {list.map(({ number, sign, description }) => (
        <div className='bg-white flex-1 p-6 pt-10 flex flex-col items-center text-center gap-4 rounded-2xl'>
          <h4 className='text-5xl font-[500]'>
            {number}{sign}
          </h4>

          <p className='text-base font-normal text-center'>{description}</p>
        </div>
      ))}
    </div>
  )
}

const HeadingText = ({ children }: { children: JSX.Element }) => {
  return (
    <h1 className='text-6xl italic font-extrabold leading-normal uppercase' style={{ letterSpacing: "0.05em" }}>
      {children}
    </h1>
  )
};


const ServicesCard = ({ image, title, description, backgroundColor }: { image: string; title: string; description: string; backgroundColor: string }) => {
  const style: React.CSSProperties & { [key: string]: string } = {
    "--shadow-color": backgroundColor,
  };

  return (
    <div
      style={style}
      className='bg-white px-6 py-10 rounded-2xl border-2 border-black flex flex-col gap-10 items-center hover:translate-x-1 hover:-translate-y-1 transition duration-200 hover:shadow-[-0.5em_0.5em_var(--shadow-color)]'
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="relative w-16 h-16">
          <Image
            src={image}
            alt={title}
            fill
          />
        </div>

        <h3 className='text-2xl uppercase font-medium text-center'>{title}</h3>

        <p className='text-base font-normal text-center'>{description}</p>
      </div>

      <button className='text-lg font-medium mt-auto'>
        Learn More -&gt;
      </button>
    </div>
  )
};

const ProductsCard = ({ image, title, description }: { image: string; title: string; description: string; }) => {
  return (
    <div className='bg-[#FFF0F1] border-2 border-black rounded-2xl p-6 flex flex-col gap-6 items-center text-center'>
      <div className="bg-white rounded-xl h-72 w-full">
      </div>

      <h3 className='text-2xl uppercase font-semibold text-center'>
        {title.slice(0, 5)}
        <span className='text-[#FF9945]'>
          {title.slice(5)}
        </span>
      </h3>

      <p className='text-base font-normal text-center'>{description}</p>

      <button className='text-white mt-auto text-xl font-medium bg-black w-full rounded-md p-2'>
        Learn More
      </button>
    </div>
  )
}

export default Page;