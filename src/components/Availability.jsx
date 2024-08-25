import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const Availability = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();
  const handleAvailabilityCheck = () => {
    // Navigate to bookings page
    navigate('/bookings');
  };
  return (
    <div className="w-full max-w-4xl mx-auto bg-black text-white p-4 rounded-lg shadow-md flex items-center justify-between mt-10 space-x-4">
      <div className="flex-1 text-center">
        <label className="block uppercase text-sm tracking-wide text-gray-400 mb-1">Check-In</label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          minDate={new Date()}
          className="block w-full bg-transparent border-none text-2xl font-bold text-white text-center focus:outline-none"
          dateFormat="d MMM"
        />
      </div>
      <div className="flex-1 text-center">
        <label className="block uppercase text-sm tracking-wide text-gray-400 mb-1">Check-Out</label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          minDate={checkInDate}
          className="block w-full bg-transparent border-none text-2xl font-bold text-white text-center focus:outline-none"
          dateFormat="d MMM"
        />
      </div>
      <div className="flex-1 text-center">
        <label className="block uppercase text-sm tracking-wide text-gray-400 mb-1">Guests</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="block w-full bg-transparent border-none text-2xl font-bold text-white text-center focus:outline-none"
        />
      </div>
      <div className="flex-1">
      <button
          onClick={handleAvailabilityCheck}
          className="w-full bg-gray-800 text-white py-3 rounded-md text-center hover:bg-gray-900 transition-all duration-300"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default Availability;
