// AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { views } from '../components/BomaFiles';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact-us');
  };

  const heroImages = [
    { src: views[3], heading1: "ABOUT US", heading2: "BOMA MASAI GARDENS", button: "DISCOVER US" },
    { src: views[0], heading1: "OUR HISTORY", heading2: "AND JOURNEY", button: "LEARN MORE" },
    { src: views[1], heading1: "JOIN US", heading2: "ON OUR PATH", button: "CONNECT NOW" },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <HeroSection images={heroImages} />
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <section className="mb-12 text-center">
            <h2 className="font-serif font-primary text-4xl font-bold text-black">Our Story</h2>
            <p className="font-body font-secondary mt-4 text-lg text-gray-700">
              Boma Masai Gardens stands as a leader in luxury and comfort in Boma ng'ombe, Hai in Tanzania.
              Nestled in a tranquil and serene environment, it offers a peaceful retreat from
              the hustle and bustle of city life, a dedication that has earned us numerous accolades.
            </p>
          </section>
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <img src={views[0]} alt="Boma Maasai Gardens" className="rounded-md shadow-lg w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-semibold text-black">Our Mission</h3>
              <p className="font-body mt-4 text-gray-700">
                To provide unparalleled hospitality that blends traditional values with modern luxury.
                We focus on delivering exceptional experiences, keeping our guests at the heart of our service.
              </p>
              <h3 className="text-3xl font-serif font-semibold text-black mt-10">Our Vision</h3>
              <p className="font-body mt-4 text-gray-700">
                To be the premier choice for travelers visiting Uzunguni, recognized for our commitment
                to comfort, culture, and community engagement.
              </p>
            </div>
          </section>
          <section className="text-center mt-16">
            <h3 className="font-serif text-3xl font-bold text-black mb-4">Explore More with Us</h3>
            <p className="font-body text-lg text-gray-700 mb-6">
              Dive into a world of luxurious hospitality and make your stay a memorable one.
            </p>
            <button onClick={handleClick} className="bg-red-500 font-body text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
              Contact Us
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
