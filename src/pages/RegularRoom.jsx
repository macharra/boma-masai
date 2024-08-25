import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import RoomCategories from '../components/RoomCategories';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import regular from '../assets/boma-masai-rooms/SHOO0745.jpg'
import { useNavigate } from 'react-router-dom';


const RegularRoom = () => {

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
      <h1 className="text-4xl font-bold mb-4">Regular Room</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <img src={regular} alt="Regular Room" className="w-full rounded-lg" />
        <div>
          <p className="mb-4">
            Our Regular Rooms are designed to provide a comfortable stay at an affordable price, with all the basics covered.
          </p>
          <ul className="mb-4">
            <li>Cozy bed</li>
            <li>Private bathroom</li>
            <li>Free Wi-Fi</li>
            <li>Air conditioning</li>
            <li>Daily housekeeping</li>
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

export default RegularRoom;
