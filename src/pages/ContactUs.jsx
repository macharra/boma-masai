import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const ContactUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <div className="flex flex-col md:flex-row justify-between items-start p-8 bg-black text-white">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2 md:ml-8">
          <ContactDetails />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
