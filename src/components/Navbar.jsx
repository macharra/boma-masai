import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from '../assets/food2.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "border-b-2 border-red-500 text-red-500 font-bold"
      : "hover:text-gray-300";

  return (
    <nav className="sticky top-0 bg-black bg-opacity-80 text-white py-3 px-6 flex justify-between items-center z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <Link to="/" className="text-xl font-bold hover:text-red-500">
          BOMA MASAI
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="/" className={linkStyle} end>
          Home
        </NavLink>
        <NavLink to="/our-rooms" className={linkStyle}>
          Rooms
        </NavLink>
        <NavLink to="/about-us" className={linkStyle}>
          About Us
        </NavLink>
        <NavLink to="/contact-us" className={linkStyle}>
          Contact Us
        </NavLink>
      </div>

      <Link to="/bookings" className="hidden md:block">
        <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
          Book Now
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black bg-opacity-90 text-white flex flex-col items-end space-y-2 px-6 py-4 rounded-md z-50">
          <NavLink to="/" className={linkStyle} end onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/our-rooms" className={linkStyle} onClick={toggleMenu}>
            Rooms
          </NavLink>
          <NavLink to="/about-us" className={linkStyle} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className={linkStyle} onClick={toggleMenu}>
            Contact Us
          </NavLink>
          <Link to="/bookings" onClick={toggleMenu}>
            <button className="bg-red-500 w-32 px-3 py-2 rounded-md hover:bg-red-600">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
