// Book.js
import React from 'react';
import BookingForm from '../components/BookingForm';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { standards } from '../components/BomaFiles';

const Book = () => {
  const heroImages = [
    { src: standards[0], heading1: "BOOK NOW", heading2: "RESERVE YOUR SPOT", button: "CHECK AVAILABILITY" },
    { src: standards[1], heading1: "PLAN YOUR STAY", heading2: "WITH BOMA MASAI", button: "VIEW OPTIONS" },
    { src: standards[2], heading1: "ENJOY LUXURY", heading2: "AND COMFORT", button: "BOOK TODAY" },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <HeroSection images={heroImages} />
      <div className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Book;
