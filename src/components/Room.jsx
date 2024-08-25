import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import roomImage1 from '../assets/boma-masai-rooms/SHOO0660.jpg';
import roomImage2 from '../assets/boma-masai-rooms/SHOO0788.jpg';
import roomImage3 from '../assets/boma-masai-rooms/SHOO0822.jpg';
import 'animate.css';

// Images array
const images = [roomImage1, roomImage2, roomImage3];

const Rooms = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate('/our-rooms');
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="relative z-10">
        <h1 className="animate__animated animate__fadeInDown text-red-500 text-4xl md:text-5xl font-semibold mb-4 transition-transform duration-300 hover:scale-105">
          THE BOMA MASAI EXPERIENCE
        </h1>
        <p className="animate__animated animate__fadeInUp text-white text-lg mb-6 transition-transform duration-300 hover:scale-105">
          World Luxury Hotel Awards and African Leading Business Hotel in Africa.
        </p>
        <button
          onClick={handleButtonClick}
          className="animate__animated animate__bounceIn text-white px-6 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-transform duration-300 hover:scale-110"
        >
          ROOMS & SUITES OFFERS
        </button>
      </div>
    </div>
  );
};

export default Rooms;
