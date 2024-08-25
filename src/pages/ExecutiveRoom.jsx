import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import RoomCategories from '../components/RoomCategories';
import executive from '../assets/boma-masai-rooms/SHOO0745.jpg'
import { useNavigate } from 'react-router-dom';

const ExecutiveRoom = () => {

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/bookings');
  };

  return (
    <>
    <Header/>
    <Navbar/>
    <HeroSection/>
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold mb-4">Executive Room</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <img src={executive} alt="Executive Room" className="w-full rounded-lg" />
        <div>
          <p className="mb-4">
            Our Executive Rooms offer a perfect blend of luxury and comfort for those who desire the best during their stay.
          </p>
          <ul className="mb-4">
            <li>Large living space</li>
            <li>King-size bed</li>
            <li>Private office space</li>
            <li>Complimentary minibar</li>
            <li>High-speed internet</li>
          </ul>
          <button
              onClick={handleBookNow}
              className="bg-black text-white px-6 py-3 rounded-md mt-4 hover:bg-red-600 transition"
            >
              Book Now
            </button>        
        </div>
      </div>
    </div>
    <div>
        <h2 className="text-center text-3xl font-bold text-black my-8">Our Rooms</h2>
        <RoomCategories />
        
      </div>
    <Footer/>
    </>
  );
};

export default ExecutiveRoom;
