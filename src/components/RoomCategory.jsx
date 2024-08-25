import React from 'react';

const RoomCategory = ({ title, description, imageUrl, price, guests, roomSize, amenities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200 transition transform hover:scale-105 max-w-sm">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover rounded-t-lg" 
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-700 text-sm">{guests} Guests</span>
          <span className="text-gray-700 text-sm">{roomSize} ft²</span>
        </div>
        <div className="mt-4">
          <h4 className="text-gray-800 font-semibold">Price: {price}</h4>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          {amenities.map((amenity, index) => (
            <span key={index} className="text-xs text-gray-500">{amenity}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCategory;
