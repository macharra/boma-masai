import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import image1 from '../assets/boma-masai-rooms/SHOO0660.jpg';
import image2 from '../assets/boma-masai-rooms/SHOO0788.jpg';
import image3 from '../assets/boma-masai-rooms/SHOO0822.jpg';

const HeroSection = ({ defaultHeading1, defaultHeading2, defaultButtonText }) => {
  const images = [
    {
      src: image1,
      heading1: "ENJOY BEST",
      heading2: "HOSPITALITY",
      button: "AT BOMA MASAI"
    },
    {
      src: image2,
      heading1: "EXPERIENCE",
      heading2: "LUXURY",
      button: "IN OUR ROOMS"
    },
    {
      src: image3,
      heading1: "RELAX IN",
      heading2: "COMFORT",
      button: "WITH US"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const changeSlide = (direction) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % images.length;
        } else if (direction === 'prev') {
          return (prevIndex - 1 + images.length) % images.length;
        }
        return prevIndex;
      });
      setFadeIn(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => changeSlide('next'), 5000);
    return () => clearInterval(interval);
  }, []);

  const { src, heading1, heading2, button } = images[currentIndex];

  return (
    <div className="relative">
      <img
        src={src}
        alt="Hotel"
        className={`w-full h-screen object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center space-y-4 transition-all duration-1000">
        <h1 className={`text-white text-5xl md:text-6xl font-bold transition-transform duration-1000 ${fadeIn ? 'scale-105' : 'scale-100'}`}>
          {heading1 || defaultHeading1}
        </h1>
        <h1 className={`text-white text-5xl md:text-6xl font-bold mt-2 transition-transform duration-1000 ${fadeIn ? 'scale-105' : 'scale-100'}`}>
          {heading2 || defaultHeading2}
        </h1>
        <button className={`mt-4 px-6 py-2 bg-white text-black font-semibold hover:bg-black hover:text-white transition-transform duration-1000 ${fadeIn ? 'scale-105' : 'scale-100'}`}>
          {button || defaultButtonText}
        </button>
      </div>
      <button onClick={() => changeSlide('prev')} className="absolute left-5 top-1/2 text-white transform -translate-y-1/2 text-3xl">
        ❮
      </button>
      <button onClick={() => changeSlide('next')} className="absolute right-5 top-1/2 text-white transform -translate-y-1/2 text-3xl">
        ❯
      </button>
    </div>
  );
};

HeroSection.propTypes = {
  defaultHeading1: PropTypes.string,
  defaultHeading2: PropTypes.string,
  defaultButtonText: PropTypes.string,
};

HeroSection.defaultProps = {
  defaultHeading1: "WELCOME TO",
  defaultHeading2: "BOMA MASAI",
  defaultButtonText: "DISCOVER US"
};

export default HeroSection;
