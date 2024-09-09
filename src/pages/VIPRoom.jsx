// VIPRoom.js
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import RoomView from '../components/RoomView';
import { vips } from '../components/BomaFiles';

const VIPRoom = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <RoomView
        title="VIP Room"
        images={vips}
        description="Featuring a king-size bed, full-length mirror, dressing table, and air conditioning. Fresh cotton towels are included in this room, which has a private bathroom with a walk-in shower and free toiletries. The room features a flat-screen TV, seating area, study area, and garden view. The unit has one bed with side tables and can sleep up to two adults and a child."
        features={[
          "King-size bed",
          "Full-length mirror",
          "Dressing table",
          "Air conditioning",
          "Flat-screen TV"
        ]}
        price="80,000 / $80"
        rates="Residential and Non-residential"
      />
      <Footer/>
    </>
  );
};

export default VIPRoom;
