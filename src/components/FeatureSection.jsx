import React from 'react';

const FeatureSection = ({ title, description, image, buttonLabel, onButtonClick, reverse }) => {
  return (
    <div
      className="relative h-[500px] my-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`absolute inset-0 bg-black bg-opacity-50 ${reverse ? 'text-right' : 'text-left'} flex flex-col justify-center p-8 md:p-16`}>
        <div className={`max-w-lg mx-auto ${reverse ? 'mr-auto' : 'ml-auto'}`}>
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-lg text-white mb-6">{description}</p>
          <button
            onClick={onButtonClick}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-transform duration-300 transform hover:scale-105"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
