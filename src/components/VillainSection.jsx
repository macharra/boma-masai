import React from 'react';
import { views } from './BomaFiles';

const VillainSection = () => {
  return (
    <div
      className="relative h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${views[0]})` }} // Ensure views[0] is correctly wrapped
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl font-serif md:text-5xl font-bold mb-4 text-boma-red">
        Experience Boma Masai Gardens
        </h1>
        <p className="text-lg font-body md:text-xl max-w-3xl mx-auto mb-8 text-white">
          Discover the perfect balance of modern luxury and Tanzanian heritage. At Boma Masai Gardens, we ensure your stay is memorable with unmatched hospitality and breathtaking views.
        </p>
        <button className="bg-red-600 font-serif text-white font-bold py-3 px-6 rounded-full hover:bg-black transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
          Get In Touch
        </button>

      </div>
    </div>
  );
};

export default VillainSection;
