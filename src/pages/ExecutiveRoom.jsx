// ExecutiveRoom.js
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import RoomView from '../components/RoomView';
import { executives } from '../components/BomaFiles';

const ExecutiveRoom = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <RoomView
        title="Executive Room"
        images={executives}
        description="Our Executive Rooms offer a perfect blend of luxury and comfort for those who desire the best during their stay."
        features={[
          "Large living space",
          "King-size bed",
          "Private office space",
          "Complimentary minibar",
          "High-speed internet"
        ]}
        price="50,000 / $50"
        rates="Residential and Non-residential"
      />
      <Footer/>
    </>
  );
};

export default ExecutiveRoom;
