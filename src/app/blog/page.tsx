import React from 'react'
import NavBar from '../../../layout/Navbar';
import Footer from '../../../layout/Footer';
import PageHeader from '../../../layout/PageHeader';

const Blog = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-4 space-y-4 relative'>
      <NavBar />

      <PageHeader>
        Blogs
      </PageHeader>

      <BlogsContainer />

      <Footer />
    </div>
  )
};

const BlogsContainer = () => {
  return (
    <div className="bg-[#EBE9E9] p-20 px-32 rounded-2xl"></div>
  )
}

export default Blog;