import React from 'react';
import Footer from '../components/Footer';
import RoomCategories from '../components/RoomCategories';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import vip from '../assets/boma-masai-rooms/SHOO0745.jpg'
import { useNavigate } from 'react-router-dom';

const VIPRoom = () => {
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
      <h1 className="text-4xl font-bold mb-4">VIP Room</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <img src={vip} alt="VIP Room" className="w-full rounded-lg" />
        <div>
          <p className="mb-4">
            Experience the luxury of our VIP Rooms, equipped with premium amenities and exquisite decor to ensure an unforgettable stay.
          </p>
          <ul className="mb-4">
            <li>Spacious area</li>
            <li>Private balcony</li>
            <li>King-size bed</li>
            <li>High-speed Wi-Fi</li>
            <li>Complimentary breakfast</li>
          </ul>
          <button
              onClick={handleBookNow}
              className="bg-black text-white px-6 py-3 rounded-md mt-4 hover:bg-red-600 transition"
            >
              Book Now
            </button>        </div>
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

export default VIPRoom;
