// HeroSection.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { views, restaurants, vips } from './BomaFiles';

const HeroSection = ({ images = [], heading1, heading2, buttonText }) => {
  const defaultImages = [
    { src: vips[0], heading1: "ENJOY BEST", heading2: "HOSPITALITY", button: "AT BOMA MASAI" },
    { src: restaurants[1], heading1: "TASTE DELICIOUS", heading2: "CUISINE", button: "AT OUR RESTAURANT" },
    { src: views[0], heading1: "KARIBU NYUMBANI", heading2: "", button: "BOMA MASAI GARDENS" },
  ];

  const actualImages = images.length > 0 ? images : defaultImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % actualImages.length);
        setFadeIn(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [actualImages.length]);

  const { src, heading1: imgHeading1, heading2: imgHeading2, button: imgButton } = actualImages[currentIndex];

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 1.25,
      behavior:'smooth',
    });
  }

  return (
    <div className="relative">
      <img
        src={src}
        alt="Hero"
        className={`w-full h-screen object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center space-y-4 transition-all duration-1000">
      <h1 
      style={{
        fontFamily:"'Playfair Display', 'serif'",
        color: '#F70000',            // Equivalent to text-red-500
        fontSize: window.innerWidth >= 768 ? '4rem' : '3rem', // text-6xl for md screens and text-5xl for smaller screens
        fontWeight: '900',           // Equivalent to font-bold
        display: 'inline-block',     // Necessary for hover animations
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseOver={(e) => {
        e.target.style.animation = 'bounce 1s infinite';
      }}
      onMouseOut={(e) => {
        e.target.style.animation = 'none';
      }}
    >
      {heading1 || imgHeading1}
    </h1>

        <h2 className="text-white text-4xl font-serif md:text-4xl hover:animate-fade-in font-semibold mt-2">
          {heading2 || imgHeading2}
        </h2>
       <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2'>
        <div 
        className='animate-bounce text-white text-3xl cursor-pointer'
        onClick={scrollToNextSection}
        >
          ↓
        </div>
       </div>

      </div>
      {/* <button onClick={() => setCurrentIndex((currentIndex - 1 + actualImages.length) % actualImages.length)} className="absolute left-5 top-1/2 text-white transform -translate-y-1/2 text-3xl">
        ❮
      </button>
      <button onClick={() => setCurrentIndex((currentIndex + 1) % actualImages.length)} className="absolute right-5 top-1/2 text-white transform -translate-y-1/2 text-3xl">
        ❯
      </button> */}
    </div>
  );
};

HeroSection.propTypes = {
  images: PropTypes.array,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  buttonText: PropTypes.string,
};

export default HeroSection;

