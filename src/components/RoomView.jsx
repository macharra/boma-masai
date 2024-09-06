// RoomView.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomView = ({ title, images, description, features, price, rates }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleBookNow = () => {
    navigate('/bookings');
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <img src={images[currentImageIndex]} alt={title} className="w-full rounded-lg" />
          <button onClick={handlePrevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full">
            ❮
          </button>
          <button onClick={handleNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full">
            ❯
          </button>
        </div>
        <div>
          <p className="mb-4">{description}</p>
          <ul className="mb-4">{features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}</ul>
          <p className="mb-4"><strong>Pricing:</strong> {price}</p>
          <p className="mb-4"><strong>Rates:</strong> {rates}</p>
          <button
              onClick={handleBookNow}
              className="bg-black text-white px-6 py-3 rounded-md mt-4 hover:bg-red-600 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomView;
