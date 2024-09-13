import React from 'react';
import { motion } from 'framer-motion';

const PromoSection = () => {
  return (
    <motion.div
      className="relative flex justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-10 mx-4 sm:mx-8 lg:mx-36 h-auto lg:h-[60vh] mt-[-40px] lg:mt-[-60px] z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="max-w-lg md:max-w-2xl lg:max-w-3xl text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-8">
          Discover the Tranquility of Boma Masai Gardens
        </h2>
        <p className="font-body text-base md:text-lg mt-2">
          Escape to Boma Masai Gardens, where luxury meets the serene beauty of Tanzania. Experience unparalleled comfort and service amidst lush landscapes and stunning views.
        </p>
        <p className="font-body text-base md:text-lg mt-4">
          Our gardens offer a peaceful retreat with modern amenities to ensure your stay is both relaxing and memorable. Come and create unforgettable moments at Boma Masai Gardens.
        </p>
      </div>
    </motion.div>
  );
};

export default PromoSection;
