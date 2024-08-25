import React, { useState } from 'react';

const RoomView = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="w-full md:w-1/2">
        <img
          src={room.images[currentImageIndex]}
          alt={`Room ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button onClick={prevImage} className="absolute left-5 top-1/2 text-gray-800">
          ❮
        </button>
        <button onClick={nextImage} className="absolute right-5 top-1/2 text-gray-800">
          ❯
        </button>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">{room.title}</h2>
        <div className="mb-4">
          <button className="px-3 py-1 bg-gray-200 rounded-md mr-2">Room Details</button>
          <button className="px-3 py-1 bg-gray-200 rounded-md">Photo Gallery</button>
        </div>
        <p className="text-gray-700 mb-4">{room.description}</p>
        <p className="text-gray-600 mb-4">
          <strong>Available Amenities:</strong> {room.amenities}
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default RoomView;
