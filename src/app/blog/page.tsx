"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";
import PageHeader from "../../../layout/PageHeader";

const Blog = () => {
  return (
    <div className="bg-[#373737] min-h-screen p-4 space-y-4 relative">
      <NavBar />
      <PageHeader>Blogs</PageHeader>
      <BlogsContainer />
      <Footer />
    </div>
  );
};

// ✅ Updated: 21 blogs total
const blogs = [
  {
    id: 1,
    title: "How to Become a Designer in 2021",
    date: "17 Nov, 2023",
    image: "/blogs/1.svg",
    category: "Marketing",
  },
  {
    id: 2,
    title: "Mastering App Interfaces in 2024",
    date: "21 Dec, 2023",
    image: "/blogs/2.svg",
    category: "Application",
  },
  {
    id: 3,
    title: "The Rise of AI in Development",
    date: "08 Jan, 2024",
    image: "/blogs/3.svg",
    category: "Development",
  },
  {
    id: 4,
    title: "Work-Life Balance for Designers",
    date: "12 Feb, 2024",
    image: "/blogs/4.svg",
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "Team Collaboration Tools in 2024",
    date: "02 Mar, 2024",
    image: "/blogs/5.svg",
    category: "Others",
  },
  {
    id: 6,
    title: "UI Trends: Minimalism Redefined",
    date: "15 Mar, 2024",
    image: "/blogs/6.svg",
    category: "Design",
  },
  {
    id: 7,
    title: "Why Developers Should Learn UX",
    date: "04 Apr, 2024",
    image: "/blogs/7.svg",
    category: "Development",
  },
  {
    id: 8,
    title: "Marketing Automation Simplified",
    date: "18 Apr, 2024",
    image: "/blogs/8.svg",
    category: "Marketing",
  },
  {
    id: 9,
    title: "Building Smarter Applications with AI",
    date: "27 Apr, 2024",
    image: "/blogs/9.svg",
    category: "Application",
  },
  {
    id: 10,
    title: "Top 10 Design Mistakes to Avoid",
    date: "05 May, 2024",
    image: "/blogs/3.svg",
    category: "Design",
  },
  {
    id: 11,
    title: "Boost Productivity with the Right Tools",
    date: "14 May, 2024",
    image: "/blogs/6.svg",
    category: "Lifestyle",
  },
  {
    id: 12,
    title: "Mastering API Integrations in 2024",
    date: "22 May, 2024",
    image: "/blogs/9.svg",
    category: "Development",
  },
  {
    id: 13,
    title: "Secrets of Successful Brand Building",
    date: "01 Jun, 2024",
    image: "/blogs/5.svg",
    category: "Marketing",
  },
  {
    id: 14,
    title: "Applying AI for Smart Automation",
    date: "10 Jun, 2024",
    image: "/blogs/2.svg",
    category: "Application",
  },
  {
    id: 15,
    title: "The Future of Responsive Design",
    date: "21 Jun, 2024",
    image: "/blogs/7.svg",
    category: "Design",
  },
  {
    id: 16,
    title: "Best Practices in Remote Teamwork",
    date: "02 Jul, 2024",
    image: "/blogs/6.svg",
    category: "Others",
  },
  {
    id: 17,
    title: "Creative Workspaces that Inspire",
    date: "13 Jul, 2024",
    image: "/blogs/3.svg",
    category: "Lifestyle",
  },
  {
    id: 18,
    title: "How to Manage Client Expectations",
    date: "25 Jul, 2024",
    image: "/blogs/4.svg",
    category: "Marketing",
  },
  {
    id: 19,
    title: "Modern UI Components in 2024",
    date: "02 Aug, 2024",
    image: "/blogs/1.svg",
    category: "Design",
  },
  {
    id: 20,
    title: "Data-Driven Development Decisions",
    date: "15 Aug, 2024",
    image: "/blogs/5.svg",
    category: "Development",
  },
  {
    id: 21,
    title: "Automating Customer Support with AI",
    date: "01 Sep, 2024",
    image: "/blogs/8.svg",
    category: "Application",
  },
];

const categories = [
  "All",
  "Marketing",
  "Application",
  "Development",
  "Lifestyle",
  "Others",
  "Design",
];

const BlogsContainer = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  // ✅ Updated pagination settings
  const blogsPerPage = 9; // Show 9 on page 1
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="bg-[#EBE9E9] p-10 px-20 rounded-2xl flex flex-col items-center">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentPage(1);
            }}
            className={`px-9 py-3 rounded-full text-base font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#373737] text-white shadow-md"
                : "bg-transparent text-[#373737] hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid (fixed width, not responsive) */}
      <div className="flex flex-wrap justify-center gap-10">
        {currentBlogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-[#F9EDED] border-2 border-black rounded-xl overflow-hidden flex flex-col justify-between text-center transition-shadow duration-300
                      shadow-[0_8px_0_#000]  min-h-[460px]"
            style={{ width: "381.33px" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >


            <motion.div  transition={{ duration: 0.3 }}>
              <div className="w-full flex items-center justify-center bg-[#F9EDED] px-4 pt-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[290px] object-contain rounded-md"
                />
              </div>

            </motion.div>

            <div className="p-5 flex flex-col items-start gap-2">
              <p className="text-xs text-gray-600">{blog.date}</p>
              <h3 className="font-semibold text-[#373737] text-base">
                {blog.title}
              </h3>
              <button
                className="mt-4 w-full border border-black bg-[#F9EDED] px-4 py-2 rounded-md text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#FF9D6C] hover:text-black"
              >
                Read More <span className="text-base">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination with Arrows */}
      <div className="flex items-center justify-center mt-12 gap-3">
        <motion.div
          onClick={handlePrev}
          className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer font-medium ${
            currentPage === 1
              ? "opacity-30 cursor-not-allowed"
              : "border border-[#373737] text-[#373737] hover:bg-[#373737]/10"
          }`}
          whileHover={{ scale: currentPage > 1 ? 1.2 : 1 }}
          whileTap={{ scale: currentPage > 1 ? 0.9 : 1 }}
        >
          ←
        </motion.div>

        {[...Array(totalPages)].map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer font-medium ${
              currentPage === i + 1
                ? "bg-[#373737] text-white"
                : "border border-[#373737] text-[#373737] hover:bg-[#373737]/10"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {i + 1}
          </motion.div>
        ))}

        <motion.div
          onClick={handleNext}
          className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer font-medium ${
            currentPage === totalPages
              ? "opacity-30 cursor-not-allowed"
              : "border border-[#373737] text-[#373737] hover:bg-[#373737]/10"
          }`}
          whileHover={{ scale: currentPage < totalPages ? 1.2 : 1 }}
          whileTap={{ scale: currentPage < totalPages ? 0.9 : 1 }}
        >
          →
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
