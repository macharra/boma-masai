import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-40 left-1 transform -translate-x-1/2 z-50 p-4 bg-black text-white shadow-lg flex justify-between items-center max-w-xl w-full"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p className="text-xl font-serif font-bold">
          Attention!
        </p>
        <p className="text-lg font-body">
          Non-East Africans are required to make their payments in <span className="text-red-600 font-bold">USD</span>.
        </p>
      </div>
      <button
        onClick={handleHide}
        className="ml-4 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
      >
        <FaTimes size={20} />
      </button>
    </motion.div>
  );
};

export default Disclaimer;
