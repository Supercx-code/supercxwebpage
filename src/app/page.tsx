import React, { JSX } from 'react'
import Image from 'next/image';
import InfiniteMoving from '../../components/InfiniteMoving';
import { IoStarSharp } from 'react-icons/io5';
import { RiArrowRightLine } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-4 space-y-4 relative'>
      <NavBar />

      <HeroSection />

      <OurServices />

      <HowWeWork />

      <OurProducts />

      <ServicesCounts />

      <Highlight />

      <Reviews />

      <Solutions />

      <ReadyToScale />

      <Footer />
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
        <div key={title} className='bg-white flex-1 p-6 flex flex-col items-center text-center gap-4 rounded-2xl'>
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
        <div key={number} className='bg-white flex-1 p-6 pt-10 flex flex-col items-center text-center gap-4 rounded-2xl'>
          <h4 className='text-5xl font-[500]'>
            {number}{sign}
          </h4>

          <p className='text-base font-normal text-center'>{description}</p>
        </div>
      ))}
    </div>
  )
};

const Highlight = () => {
  return (
    <div className="p-16 bg-[#B66CFF] rounded-2xl">

    </div>
  )
};

const Reviews = () => {
  const reviewsList = [
    {
      companyImage: "/reviews/360.svg",
      company: "Rewards 360",
      review: "“SuperCX transformed our customer support — response times cut from 12 hours to 1.5 hours+”",
      stars: 5,
      reviewBy: "CX HEAD",
      department: "Retail Brand"
    },
    {
      companyImage: "/reviews/marhabba.svg",
      company: "Rewards 360",
      review: "“SuperCX transformed our customer support — response times cut from 12 hours to 1.5 hours+”",
      stars: 5,
      reviewBy: "CX HEAD",
      department: "Retail Brand"
    },
  ];

  return (
    <div className='flex flex-row w-full gap-4'>
      {reviewsList.map(({ companyImage, company, review, stars, reviewBy, department }, index) => (
        <div key={index} className="w-full bg-white p-6 rounded-2xl space-y-8">
          <div className="flex flex-row items-start justify-between">
            <img src={companyImage} alt={company} className='w-fit h-fit' />

            <div className="relative w-10 h-10 bg-black rounded-full">
              <Image
                src={"/reviews/qoute.svg"}
                alt={"”"}
                fill
                className='p-2'
              />
            </div>
          </div>

          <p className='text-4xl italic font-bold leading-normal uppercase'>{review}</p>

          <div className="flex flex-row items-center justify-between">
            <p className='text-lg'>
              <span className='font-semibold'>
                {reviewBy},{" "}
              </span>
              {department}
            </p>

            <Stars rating={stars} />
          </div>
        </div>
      ))}
    </div>
  )
}

const Solutions = () => {
  const list = [
    {
      image: "/solutions/commerce.svg",
      title: "E-commerce",
      description: "Abandoned cart recovery, WhatsApp bots"
    },
    {
      image: "/solutions/bfsi.svg",
      title: "BFSI",
      description: "Secure, multilingual chatbots, voice banking."
    },
    {
      image: "/solutions/healthcare.svg",
      title: "HEalthcare",
      description: "Appointment scheduling, telehealth bots."
    },
    {
      image: "/solutions/saas.svg",
      title: "Saas",
      description: "Lead nurturing automation, helpdesk bots."
    },
  ];

  return (
    <div className='bg-[#FF9D6C] p-16 rounded-2xl'>
      <HeadingText>
        <>
          Solutions by industry
          <img src="/sparks.svg" alt="" className='mx-8 inline pointer-events-none select-none' />
        </>
      </HeadingText>

      <div className='flex flex-row gap-4 w-full mt-10'>
        {list.map(({ image, title, description }) => (
          <div key={title} className='bg-white flex-1 p-6 flex flex-col items-center text-center gap-4 rounded-2xl'>
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
    </div>
  )
};

const ReadyToScale = () => {
  return (
    <div className="bg-[#EBE9E9] p-16 rounded-2xl text-center flex flex-col gap-10 items-center">
      <div className="max-w-3xl space-y-4">
        <HeadingText>
          <>
            Ready to Scale Smarter with AI?
          </>
        </HeadingText>

        <p className='text-2xl font-normal'>
          “Let’s transform your customer experience with SuperCX.”
        </p>
      </div>

      <button className='text-white custom-black-button mt-auto text-xl font-medium w-fit rounded-full py-3 px-12'>
        Let's Get Started
      </button>
    </div>
  )
};

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

      <button className='text-white custom-black-button mt-auto text-xl font-medium w-full rounded-md p-2'>
        Learn More
      </button>
    </div>
  )
};

const Stars = ({
  rating,
}: {
  rating: number;
}) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }, (_, i) => (
        <IoStarSharp
          key={i}
          className={`sm:h-6 h-4 sm:w-6 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
        />
      ))}
    </div>
  );
};

export default Page;