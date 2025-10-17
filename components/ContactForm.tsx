"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#EBE9E9] border-2 border-black shadow-[0rem_0.4rem_#000] rounded-2xl p-20 md:p-24 lg:px-36 max-w-[100%] mx-auto my-16 min-h-[1000px] flex flex-col justify-center">
      <form className="space-y-12">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Full Name */}
          <div className="relative">
            <div className="absolute left-6 top-3 text-xs text-gray-600">
              Name<span className="text-red-600">*</span>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-2 border-black rounded-xl p-6 pt-8 text-lg font-semibold bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black placeholder-black"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute left-6 top-3 text-xs text-gray-600">
              Email<span className="text-red-600">*</span>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-2 border-black rounded-xl p-6 pt-8 text-lg font-semibold bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black placeholder-black"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="relative">
          <div className="absolute left-6 top-3 text-xs text-gray-600">
            Subject <span className="text-gray-500">(optional)</span>
          </div>
          <input
            type="text"
            placeholder="Write your subject"
            className="w-full border-2 border-black rounded-xl p-6 pt-8 text-lg font-semibold bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black placeholder-black"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <div className="absolute left-6 top-3 text-xs text-gray-600">
            Write Message Here
          </div>
          <textarea
            
            className="w-full h-72 border-2 border-black rounded-xl p-6 pt-8 text-lg font-semibold bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black placeholder-black resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="relative inline-block px-12 py-4 text-lg font-medium text-white bg-black border-2 border-black rounded-full
                      transition-all duration-200 ease-in-out
                      hover:-translate-y-[4px] hover:translate-x-[4px] 
                      hover:shadow-[-4px_4px_0px_#FF7A00]"
          >
            Send Message
          </button>




        </div>
      </form>
    </div>
  );
};

export default ContactForm;
