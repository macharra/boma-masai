import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roomImage1 from '../assets/boma-masai-rooms/SHOO0660.jpg';
import roomImage2 from '../assets/boma-masai-rooms/SHOO0788.jpg';
import roomImage3 from '../assets/boma-masai-rooms/SHOO0822.jpg';

const roomCategories = [
  {
    name: 'VIP',
    description: 'Experience the epitome of luxury with our VIP rooms...',
    image: roomImage1,
    route: '/vip-room',
    priceUSD: 80,
    priceTZS: 80000,
  },
  {
    name: 'Executive',
    description: 'Spacious rooms with premium amenities for a luxurious stay...',
    image: roomImage2,
    route: '/executive-room',
    priceUSD: 50,
    priceTZS: 50000,
  },
  {
    name: 'Standard',
    description: 'Comfortable and affordable rooms for the budget-conscious traveler...',
    image: roomImage1,
    route: '/standard-room',
    priceUSD: 40,
    priceTZS: 40000,
  },
  {
    name: 'Regular',
    description: 'Simple yet cozy rooms for a comfortable stay...',
    image: roomImage3,
    route: '/regular-room',
    priceUSD: 30,
    priceTZS: 30000,
  },
];

const RoomCategories = () => {
  const [currency, setCurrency] = useState('USD');
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="flex justify-end mb-4">
        <label className="mr-2">Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border px-2 py-1 rounded-md"
        >
          <option value="USD">USD</option>
          <option value="TZS">TZS</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roomCategories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(category.route)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <div className="mt-4">
                <span className="text-lg font-bold">
                  Price: {currency === 'USD' ? `$${category.priceUSD}` : `${category.priceTZS.toLocaleString()} TZS`}
                </span>
              </div>
              <button className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-md transition hover:bg-gray-800">
                View {category.name} Rooms
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCategories;
