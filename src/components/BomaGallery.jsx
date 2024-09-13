import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // For linking paths
import { executives, regulars, standards, vips } from './BomaFiles'; // Import images from BomaFiles

const hotelImages = [
  { src: executives[0], alt: 'Executive', link: '/executive-room' },
  { src: executives[1], alt: 'Executive', link: '/executive-room' },
  { src: regulars[0], alt: 'Regular', link: '/regular-room' },
  { src: regulars[1], alt: 'Regular', link: '/regular-room' },
  { src: standards[0], alt: 'Standard', link: '/standard-room' },
  { src: standards[1], alt: 'Standard', link: '/standard-room' },
  { src: vips[0], alt: 'VIP', link: '/vip-room' },
  { src: vips[1], alt: 'VIP', link: '/vip-room' },
];

const BomaGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="bg-gray-50 py-20">
      <h2 className="text-4xl font-serif font-bold text-center text-black mb-12">
        Our Luxurious Rooms
      </h2>
      <div className="hotel-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        {hotelImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg cursor-pointer"
            onMouseEnter={() => setActiveImage(index)}
            onMouseLeave={() => setActiveImage(null)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={image.link}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-80 transition-transform transform hover:scale-105"
                loading="lazy"
              />
              {activeImage === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-boma-red font-body text-xl font-semibold">{image.alt}</span>
                </div>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BomaGallery;
