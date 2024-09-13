import React from 'react';
import { FaWifi, FaTv, FaUtensils, FaGlassCheers, FaTree, FaTshirt } from 'react-icons/fa';

const BomaServices = () => {
  const services = [
    {
      icon: <FaWifi size={40} className="text-blue-500" />,
      title: 'Free WiFi',
      description: 'High-speed internet throughout the hotel.',
    },
    {
      icon: <FaTv size={40} className="text-green-500" />,
      title: 'Television',
      description: 'Flat-screen TVs in all rooms.',
    },
    {
      icon: <FaUtensils size={40} className="text-red-500" />,
      title: 'Food Service',
      description: '24/7 room service with gourmet options.',
    },
    {
      icon: <FaTshirt size={40} className="text-yellow-500" />,
      title: 'Laundry',
      description: 'Professional laundry and dry cleaning services.',
    },
    {
      icon: <FaGlassCheers size={40} className="text-purple-500" />,
      title: 'Drinks',
      description: 'Enjoy a variety of beverages at our bar.',
    },
    {
      icon: <FaTree size={40} className="text-orange-500" />,
      title: 'Garden Views',
      description: 'Relax with stunning garden views.',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="font-serif text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
            <p className="font-body text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BomaServices;
