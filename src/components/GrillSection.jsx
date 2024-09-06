import React, { useState, useEffect } from 'react';
import { grills } from './BomaFiles'; // Assuming you have a grills array in BomaFiles

const images = [grills[0], grills[1], grills[2]];

const GrillSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 my-12 px-6 md:px-16 bg-white text-black">
      <h1 className="text-5xl font-bold text-center mb-10">
        Grills Section
        <span className="block w-24 h-1 bg-red-500 mx-auto my-2"></span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-4xl font-bold text-center md:text-left mb-4">Our Grills</h2>
          <h1 className="text-5xl font-semibold text-center md:text-left mb-6">
            Savor the Best Grilled Dishes
          </h1>
          <p className="text-lg text-center md:text-left mb-6">
            Experience the ultimate flavors of our expertly grilled dishes, featuring the freshest ingredients and masterful techniques. Perfect for meat lovers and grill enthusiasts.
          </p>
        </div>

        {/* Image Slideshow */}
        <div className="w-full md:w-1/2 h-96 relative rounded-md overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Grill ${index + 1}`}
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

export default GrillSection;
