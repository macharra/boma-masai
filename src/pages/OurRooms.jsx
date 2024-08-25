import React from 'react';
import RoomCategories from '../components/RoomCategories';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const OurRooms = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <div>
        <h2 className="text-center text-3xl font-bold text-black my-8">Our Rooms</h2>
        <RoomCategories />
        
      </div>
      <Footer/>
    </>
  
  );
};

export default OurRooms;
