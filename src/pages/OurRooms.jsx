// OurRooms.js
import React from 'react';
import RoomCategories from '../components/RoomCategories';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { vips, standards, regulars } from '../components/BomaFiles';

const OurRooms = () => {
  const heroImages = [
    { src: vips[0], heading1: "OUR ROOMS", heading2: "EXPERIENCE LUXURY", button: "BOOK NOW" },
    { src: standards[1], heading1: "RELAX IN COMFORT", heading2: "WITH US", button: "SEE ROOMS" },
    { src: regulars[2], heading1: "STAY WITH STYLE", heading2: "AND GRACE", button: "EXPLORE NOW" },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <HeroSection images={heroImages} />
      <div>
        <h2 className="text-center text-3xl font-bold text-black my-8">Our Rooms</h2>
        <RoomCategories />
      </div>
      <Footer />
    </>
  );
};

export default OurRooms;
