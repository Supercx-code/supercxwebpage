import React from 'react'
import NavBar from '../../../layout/Navbar'
import Footer from '../../../layout/Footer'
import PageHeader from '../../../layout/PageHeader'
import ContactForm from "../../../components/ContactForm";

const Contact = () => {
  return (
    <div className='bg-[#373737] min-h-screen p-4 space-y-4 relative'>
      <NavBar />

      <PageHeader>
        CONTACT US
      </PageHeader>

      {/* Contact Form Section */}
      <ContactForm />



      <Footer />
    </div>
  )
}

export default Contact
