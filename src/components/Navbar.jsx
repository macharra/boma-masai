import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { logos } from './BomaFiles'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "border-b-2 border-red-500 text-red-500 font-body font-bold"
      : "hover:text-gray-300";

  return (
    <nav className="sticky top-0 bg-black bg-opacity-80 text-white font-body py-3 px-6 flex justify-between items-center z-50">
      <div className="flex items-center space-x-2 md:justify-start justify-center w-full md:w-auto">
        <Link to="/">
          <img src={logos[1]} alt="Logo" className="h-auto max-h-12" />
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
        <NavLink to="/restaurants" className={linkStyle}>
          Restaurants
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
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-90 text-white flex flex-col items-start py-10 px-6 space-y-8 z-50">
          <button 
            className="text-white absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
          >
            <XIcon className="w-6 h-6" />
          </button>
          <NavLink to="/" className={linkStyle} end onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/our-rooms" className={linkStyle} onClick={toggleMenu}>
            Rooms
          </NavLink>
          <NavLink to="/restaurants" className={linkStyle} onClick={toggleMenu}>
            Restaurants
          </NavLink>
          <NavLink to="/about-us" className={linkStyle} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className={linkStyle} onClick={toggleMenu}>
            Contact Us
          </NavLink>
          
          <Link to="/bookings" onClick={toggleMenu}>
            <button className="bg-red-500 w-full px-4 py-2 rounded-md hover:bg-red-600">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
