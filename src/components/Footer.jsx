import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import FontAwesome icons

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h3 className="font-bold mb-4 text-red-500">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:underline hover:text-red-500 transition-colors duration-300">Home</a></li>
            <li><a href="/our-rooms" className="hover:underline hover:text-red-500 transition-colors duration-300">Our Rooms</a></li>
            <li><a href="/about-us" className="hover:underline hover:text-red-500 transition-colors duration-300">About Us</a></li>
            <li><a href="/contact-us" className="hover:underline hover:text-red-500 transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>
        {/* Column 2: Contact Information */}
        <div>
          <h3 className="font-bold mb-4 text-red-500">Contact Information</h3>
          <p>Reception: +255 746 264 461 </p>
          <p>Ttcl: +255 737 093 897</p>
          <p>Email: <a href="mailto:bomamaasai@gmail.com" className="hover:underline hover:text-red-500 transition-colors duration-300">bomamaasai@gmail.com</a></p>
          <p>Whatsapp: +255783045154</p>
        </div>
        {/* Column 3: Social Media */}
        <div>
          <h3 className="font-bold mb-4 text-red-500">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Developed by <a href="https://yourdeveloperlink.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-red-500 transition-colors duration-300">Rogers Machara</a></p>
      </div>
    </div>
  );
};

export default Footer;
