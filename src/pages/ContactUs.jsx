// ContactUs.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { views } from '../components/BomaFiles';

const ContactUs = () => {
  const heroImages = [
    { src: views[0], heading1: "GET IN TOUCH", heading2: "WE'RE HERE TO HELP", button: "CONTACT US" },
    { src: views[1], heading1: "CONNECT WITH US", heading2: "ANYTIME", button: "EMAIL US" },
    { src: views[2], heading1: "VISIT US", heading2: "IN TANZANIA", button: "FIND US" },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <HeroSection images={heroImages} />
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
