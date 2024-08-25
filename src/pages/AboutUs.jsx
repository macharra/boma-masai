import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImage from '../assets/boma-masai-rooms/SHOO0863.jpg';
import Header from '../components/Header';

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleClick = () => {
    navigate('/contact-us'); // Navigate to the contact us page
  };

  return (
    <>
      <Header/>
      <Navbar />
      <HeroSection
        heading1="WELCOME TO"
        heading2="BOMA MAASAI GARDENS"
        buttonText="DISCOVER US"
      />
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <section className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-black">Our Story</h2>
            <p className="mt-4 text-lg text-gray-700">
              Boma Maasai Gardens stands as a leader in luxury and comfort in Uzunguni, Tanzania.
              Nestled in a tranquil and serene environment, it offers a peaceful retreat from
              the hustle and bustle of city life, a dedication that has earned us numerous accolades.
            </p>
          </section>

          {/* Gallery and Mission/Vision Section */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <img
                src={aboutImage}
                alt="Boma Maasai Gardens"
                className="rounded-md shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-black">Our Mission</h3>
              <p className="mt-4 text-gray-700">
                To provide unparalleled hospitality that blends traditional values with modern luxury.
                We focus on delivering exceptional experiences, keeping our guests at the heart of our service.
              </p>
              <h3 className="text-3xl font-semibold text-black mt-10">Our Vision</h3>
              <p className="mt-4 text-gray-700">
                To be the premier choice for travelers visiting Uzunguni, recognized for our commitment
                to comfort, culture, and community engagement.
              </p>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center mt-16">
            <h3 className="text-3xl font-bold text-black mb-4">Explore More with Us</h3>
            <p className="text-lg text-gray-700 mb-6">
              Dive into a world of luxurious hospitality and make your stay a memorable one.
            </p>
            <button onClick={handleClick} className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
              Contact Us
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
