import React, { useState, useEffect } from 'react';

const texts = ["Welcome to Boma Masai", "Experience Luxury", "Your Comfort, Our Priority"];
const backgroundImages = [
  '../assets/boma-masai-rooms/SHOO0856.jpg',
  '../assets/boma-masai-rooms/SHOO0865.jpg',
  '../assets/boma-masai-rooms/SHOO0829.jpg'
];

const IntroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center relative text-center"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">{texts[currentTextIndex]}</h1>
        <button className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
