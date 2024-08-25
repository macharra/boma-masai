import React from 'react';
import FeatureSection from './FeatureSection';
import laundry from '../assets/laundry.jpg';
import food from '../assets/food.jpg';
import menuPDF from '../assets/menu.pdf'; // Import the PDF file

const Features = () => {
  const handleRestaurantClick = () => {
    // Opens the PDF in a new tab
    window.open(menuPDF, '_blank');
  };

  const handleLaundryClick = () => {
    alert('Check out our laundry services!');
  };

  return (
    <div>
      <FeatureSection
        title="Fine Food: Restaurant"
        description="Enjoy a variety of your favorite dishes at our restaurant. Mouth-watering all the way."
        image={food}
        buttonLabel="See More"
        onButtonClick={handleRestaurantClick}
      />
      <FeatureSection
        title="Convenient Services: Laundry"
        description="Experience hassle-free laundry services at your convenience."
        image={laundry}
        buttonLabel="Learn More"
        onButtonClick={handleLaundryClick}
        reverse // Reverse to change text alignment
      />
    </div>
  );
};

export default Features;
