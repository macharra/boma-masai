import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import RoomCategories from '../components/RoomCategories';
import standard from '../assets/boma-masai-rooms/SHOO0745.jpg'
import { useNavigate } from 'react-router-dom';

const StandardRoom = () => {

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/bookings');
  };

  return (
    <>
    <Header/>
    <Navbar/>
    <HeroSection />
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold mb-4">Standard Room</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <img src={standard} alt="Standard Room" className="w-full rounded-lg" />
        <div>
          <p className="mb-4">
            Our Standard Rooms offer comfort and convenience with all the essential amenities for a pleasant stay.
          </p>
          <ul className="mb-4">
            <li>Comfortable queen-size bed</li>
            <li>En-suite bathroom</li>
            <li>Free Wi-Fi</li>
            <li>24/7 room service</li>
            <li>Flat-screen TV</li>
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

export default StandardRoom;
