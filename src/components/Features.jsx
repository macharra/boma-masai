import React from 'react';
import FeatureSection from './FeatureSection';
import {laundry} from './BomaFiles';
import { restaurants } from './BomaFiles';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate(); 

  const handleRestaurantClick = () => {
    navigate('/restaurants');
  };

  const handleLaundryClick = () => {
    alert('Our laundry services are available for your convenience at an additional cost. Pricing details will be provided upon request.');
  };
  

  return (
    <div>
      <FeatureSection
        title="Fine Food: Restaurant"
        description="Enjoy a variety of your favorite dishes at our restaurant. Mouth-watering all the way."
        image={restaurants[2]}
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
