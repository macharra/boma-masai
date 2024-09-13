import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const RoomView = ({ title, images, description, features, price, rates }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleBookNow = () => {
    navigate('/bookings');
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="font-serif text-4xl font-bold mb-4">{title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-lg h-80">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div>
          <p className="font-body mb-4">{description}</p>
          <ul className="mb-4 list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="font-body mb-4"><strong>Pricing:</strong> {price}</p>
          <p className="font-body mb-4"><strong>Rates:</strong> {rates}</p>
          <button
            onClick={handleBookNow}
            className="bg-black font-body text-white px-6 py-3 rounded-md mt-4 hover:bg-red-600 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomView;
