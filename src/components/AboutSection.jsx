import React, { useState, useEffect } from 'react';
import {regulars, standards, restaurants} from './BomaFiles'
import { useNavigate } from 'react-router-dom'; 

const images = [regulars[3], restaurants[2], standards[0]];

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate('/bookings');
  };

  return (
    <div className="py-20 my-12 px-6 md:px-16 bg-white text-black">
      <h1 className="text-5xl font-bold text-center mb-10">
        About Boma Masai
        <span className="block w-24 h-1 bg-red-500 mx-auto my-2"></span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-4xl font-bold text-center md:text-left mb-4">BOMA MASAI</h2>
          <h1 className="text-5xl font-semibold text-center md:text-left mb-6">
            Find Comfort in our Hotel
          </h1>
          <p className="text-lg text-center md:text-left mb-6">
          Boma Masai Gardens stands as the foremost leader in luxury and comfort in Boma ng'ombe, Hai in Tanzania. Positioned in a tranquil and serene environment, it provides a peaceful getaway from the hustle and bustle of city noise.
          </p>
          <div className="flex justify-center md:justify-start">
          <button
          onClick={handleButtonClick}
          className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
        >
          ABOUT US
        </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-96 relative rounded-md overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Room ${index + 1}`}
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 transform scale-105 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-red-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentImageIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
