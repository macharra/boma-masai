import { useState, useEffect } from "react";
import { bars } from './BomaFiles';
import 'animate.css';

const BarSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bars.length);
        setFade(true);
      }, 500); // Fade-out effect duration
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${bars[currentImageIndex]})` }}
      ></div>
      
      {/* Semi-transparent overlay */}
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>

      {/* Text Content */}
      <div className="relative z-10">
        <h2 className="animate__animated animate__fadeInDown text-red-500 text-4xl md:text-5xl font-semibold mb-4 transition-transform duration-300 hover:scale-105">
          The Bar Experience
        </h2>
        <p className="animate__animated animate__fadeInUp text-white text-lg mb-6 transition-transform duration-300 hover:scale-105">
          Enjoy a diverse selection of signature cocktails crafted by our expert mixologists.
        </p>
      </div>
    </div>
  );
};

export default BarSection;
