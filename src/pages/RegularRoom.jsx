// RegularRoom.js
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import RoomView from '../components/RoomView';
import { regulars } from '../components/BomaFiles';

const RegularRoom = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <RoomView
        title="Regular Room"
        images={regulars}
        description="Traveling for business? We've got you covered with bed and breakfast. The spacious room provides a private entrance and garden views, along with a private bathroom featuring a walk-in shower. Enjoy a TV unit, wardrobe, fresh cotton linens, and a garden outside your room."
        features={[
          "Bed & breakfast",
          "Private entrance",
          "Garden views",
          "Private bathroom",
          "TV unit, wardrobe"
        ]}
        price="30,000 / $30"
        rates="East African residents and Non-residents"
      />
      <Footer/>
    </>
  );
};

export default RegularRoom;
