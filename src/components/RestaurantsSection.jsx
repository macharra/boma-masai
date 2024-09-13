import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurants } from './BomaFiles'; // Use restaurants images

// Images array for restaurants
const images = restaurants;

const RestaurantsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Total duration for each image display

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate('/restaurants');
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }} // Shorter duration for faster transitions
        />
      </AnimatePresence>
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h1 className="font-serif text-boma-red text-4xl md:text-5xl font-semibold mb-4 transition-transform duration-300 hover:scale-105">
          THE BOMA MASAI CULINARY EXPERIENCE
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="font-serif text-white text-lg mb-6 transition-transform duration-300 hover:scale-105"
        >
          Discover exquisite dining at our breath-taking restaurants.
        </motion.p>
        <button
          onClick={handleButtonClick}
          className="text-white font-body px-6 py-2 bg-black hover:bg-white hover:text-black rounded-md transition-transform duration-300 hover:scale-110"
        >
          EXPLORE OUR RESTAURANTS
        </button>
      </motion.div>
    </div>
  );
};

export default RestaurantsSection;
