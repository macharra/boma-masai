import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import { logos } from './BomaFiles'; // Importing logos

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2 md:justify-start justify-center w-full md:w-auto mb-8">
          <Link to="/">
            <img src={logos[1]} alt="Logo" className="h-auto max-h-12" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-serif font-bold mb-4 text-red-500">Quick Links</h3>
            <ul className='font-body' >
              <li><Link to="/" className="hover:underline hover:text-red-500 transition-colors duration-300">Home</Link></li>
              <li><Link to="/our-rooms" className="hover:underline hover:text-red-500 transition-colors duration-300">Our Rooms</Link></li>
              <li><Link to="/restaurants" className="hover:underline hover:text-red-500 transition-colors duration-300">Restaurants</Link></li>
              <li><Link to="/about-us" className="hover:underline hover:text-red-500 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:underline hover:text-red-500 transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>
          {/* Column 2: Contact Information */}
          <div>
            <h3 className="font-serif font-bold mb-4 text-red-500">Contact Information</h3>
            <p className="font-body flex items-center"><FaPhone className="text-red-500 mr-2" />+255 746 264 461 </p>
            <p className="font-body flex items-center"><FaPhone className="text-red-500 mr-2" /> +255 737 093 897</p>
            <p className="font-body flex items-center"><FaEnvelope className="text-red-500 mr-2" />
              <a href="mailto:bomamasaigardens@gmail.com" className="font-body hover:underline hover:text-red-500 transition-colors duration-300">bomamasaigardens@gmail.com</a>
            </p>
            <p className="font-body flex items-center"><FaWhatsapp className="text-red-500 mr-2" /> +255 783 045 154</p>
    </div>
          {/* Column 3: Social Media */}
          <div>
            <h3 className="font-serif font-bold mb-4 text-red-500">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/people/Boma-Masai-Garden/pfbid02RnjJQYRu2kUjGhaYY11doWWVvXr9WWCQVvbrNVYQYrozYpWNJ4sXGwdeeud33bGdl/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a 
                href={`https://wa.me/255783045154`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-500 transition-colors duration-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://www.instagram.com/bomamasaigarden?igsh=ajRtc2FraDgyY3ds" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className='font-body'>Developed by <a href="https://www.instagram.com/donkongvisualz/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-red-500 transition-colors duration-300">donkongvisualz</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
