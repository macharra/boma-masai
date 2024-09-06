// StandardRoom.js
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import RoomView from '../components/RoomView';
import { standards } from '../components/BomaFiles';

const StandardRoom = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <RoomView
        title="Standard Room"
        images={standards}
        description="Featuring free toiletries and fresh towels, this room includes a private bathroom with a walk-in shower. The room features a flat-screen TV, a reading area, and garden views. The unit has one bed with side tables and can sleep up to two adults or a couple."
        features={[
          "Free toiletries and fresh towels",
          "Private bathroom",
          "Flat-screen TV",
          "Reading area",
          "Garden views"
        ]}
        price="40,000 / $40"
        rates="Residential and Non-residential"
      />
      <Footer/>
    </>
  );
};

export default StandardRoom;
