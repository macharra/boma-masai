import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import { restaurants, menus } from '../components/BomaFiles';
import BarSection from '../components/BarSection';
import GrillSection from '../components/GrillSection';


const MainDishes = () => (
  <div className="bg-gray-100 py-20 px-6">
    <h2 className="text-5xl font-bold mb-12 text-center text-black">Main Dishes</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Description Column */}
      <div className="lg:text-left text-center">
        <p className="text-2xl text-gray-700 mb-6">
          Delight in our exquisitely curated selection of gourmet main dishes, crafted with fresh ingredients and exceptional flavors. Perfect for any palate.
        </p>
        <button
          className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-500 transition duration-300"
          onClick={() => window.open(menus[0], '_blank')}
        >
          View Main Menu
        </button>
      </div>
      {/* Image Column */}
      <div className="flex justify-center lg:justify-end">
        <img 
          src={restaurants[1]} 
          alt="Main Dishes" 
          className="w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  </div>
);





const PizzasBurgers = () => (
  <div className="bg-white py-20 px-6">
    <h2 className="text-5xl font-bold mb-12 text-center text-black">Pizzas & Burgers</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image Column */}
      <div className="flex justify-center lg:justify-start">
        <img 
          src={menus[2]} 
          alt="Pizzas & Burgers" 
          className="w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
      {/* Description Column */}
      <div className="lg:text-right text-center">
        <p className="text-2xl text-gray-700 mb-6">
          Satisfy your cravings with our delicious pizzas and burgers, made with fresh ingredients and bold flavors.
        </p>
        <button
          className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-500 transition duration-300"
          onClick={() => window.open(menus[1], '_blank')}
        >
          View Pizza Menu
        </button>
      </div>
    </div>
  </div>
);



const Restaurants = () => {
  const heroImages = [
    { src: restaurants[0], heading1: "THE DINING", heading2: "EXPERIENCE", button: "FOOD AND DRINKS" },
    { src: restaurants[1], heading1: "ENJOY", heading2: "MOUTHWATERING DISHES", button: "SEE MENUS" },
    { src: restaurants[2], heading1: "EXPLORE", heading2: "OUR BAR", button: "BEVERAGES" },
  ];


  return (
    <>
      <Header />
      <Navbar />
      <HeroSection images={heroImages} />
      <MainDishes/>
      <PizzasBurgers />
      <BarSection/>
      <GrillSection/>
      <Footer />
    </>
  );
}

export default Restaurants;