"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#EBE9E9] border-2 border-black shadow-[0rem_0.4rem_#000] rounded-2xl p-20 md:p-24 lg:px-36 max-w-[100%] mx-auto my-16 min-h-[1000px] flex flex-col justify-center">
      <form className="space-y-12">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className="block text-base font-semibold uppercase mb-4 text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-2 border-black rounded-xl p-5 text-lg bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-base font-semibold uppercase mb-4 text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-black rounded-xl p-5 text-lg bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Row 2: Subject */}
        <div>
          <label className="block text-base font-semibold uppercase mb-4 text-gray-800">
            Subject
          </label>
          <input
            type="text"
            placeholder="Write your subject"
            className="w-full border-2 border-black rounded-xl p-5 text-lg bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Row 3: Message */}
        <div>
          <label className="block text-base font-semibold uppercase mb-4 text-gray-800">
            Message
          </label>
          <textarea
            placeholder="Write your message here"
            className="w-full h-72 border-2 border-black rounded-xl p-5 text-lg bg-white shadow-[-0.3rem_0.3rem_#000] focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="px-12 py-4 bg-black text-white text-lg rounded-full shadow-[-0.3rem_0.3rem_#000] hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
