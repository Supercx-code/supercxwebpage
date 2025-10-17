import React from "react";
import NavBar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";
import PageHeader from "../../../layout/PageHeader";
import Link from "next/link";

const services = [
  {
    title: "AI CHATBOTS",
    description: "AI-Driven Chatbots For Customer Engagement And Automation",
    icon: "/our-services/ai-chatbot.svg",
    slug: "ai-chatbots",
  },
  {
    title: "CRM IMPLEMENTATION",
    description: "Deployment Of Leadsquared, Salesforce, SAP, And Other CRMs",
    icon: "/our-services/crm.svg",
    slug: "crm-implementation",
  },
  {
    title: "HELPDESK SUPPORT",
    description: "Deployment Of Leadsquared, Salesforce, SAP, And Other CRMs",
    icon: "/our-services/headphones.svg",
    slug: "helpdesk-support",
  },
  {
    title: "MARKETING AUTOMATION",
    description: "End-To-End Setup For Streamlined Marketing Operations",
    icon: "/our-services/marketing.svg",
    slug: "marketing-automation",
  },
  {
    title: "BPM CONSULTING",
    description: "Process Optimization And Business Workflow Automation",
    icon: "/our-services/bpm.svg",
    slug: "bpm-consulting",
  },
  {
    title: "INTEGRATION SERVICES",
    description: "CXO, B2B, And Industry-Specific Integrations",
    icon: "/our-services/integration.svg",
    slug: "integration-services",
  },
];

const Services = () => {
  return (
    <div className="bg-[#373737] min-h-screen p-4 space-y-4 relative">
      <NavBar />
      <PageHeader>OUR SERVICES</PageHeader>

      {/* --- Services Section --- */}
      <div className="bg-[#EBE9E9] border-2 border-black rounded-2xl py-16 md:p-24 lg:px-36 mx-auto my-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F9EDED] border border-black rounded-xl p-8 flex flex-col items-center text-center min-h-[450px]
              shadow-[0_8px_0_#000] hover:shadow-[0_10px_20px_#000] transition-shadow duration-300"
            >
              {/* icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-48 h-48 mb-12"
              />

              {/* title + desc */}
              <div className="flex-grow flex flex-col justify-end">
                <h3 className="text-lg font-bold text-[#111] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#333] mb-6 px-2 leading-snug">
                  {service.description}
                </p>
              </div>

              {/* button pinned at bottom */}
              <div className="w-full mt-auto mb-4">
                <Link href={`/services/${service.slug}`}>
                  <button className="w-full border border-black bg-[#F9EDED] px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#FF9D6C] hover:text-black">
                    Learn More <span className="text-base">→</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
