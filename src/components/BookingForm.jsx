import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import NotificationBox from './NotificationBox';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    adults: 1,
    roomType: 'Standard',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    header: '',
    message: ''
  });
  

  const roomPrices = {
    VIP: 80000,
    Executive: 50000,
    Standard: 40000,
    Regular: 30000,
  };

  const calculatePrice = () => {
    const { adults, roomType } = form;
    const basePrice = roomPrices[roomType];

    // For VIP, the price remains the same regardless of the number of adults
    if (roomType === 'VIP') {
      return basePrice;
    }
    
    // For other rooms, add 10,000 per additional adult
    const extraCharge = adults > 1 ? 10000 * (adults - 1) : 0;
    return basePrice + extraCharge;
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = form.name ? "" : "Name is required.";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Email is not valid.";
    tempErrors.phone = /^\d{7,15}$/.test(form.phone) ? "" : "Phone number must be between 7-15 digits.";
    tempErrors.checkin = form.checkin ? "" : "Check-in date is required.";
    tempErrors.checkout = form.checkout ? "" : "Check-out date is required.";
    tempErrors.adults = form.adults > 0 ? "" : "At least one adult is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validate()) {
      setIsSubmitting(true);
      const price = calculatePrice();

      // EmailJS integration
      emailjs.send(
        'service_k7ch0uk',
        'template_0v7vha8',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          checkin: form.checkin,
          checkout: form.checkout,
          adults: form.adults,
          roomType: form.roomType,
          price,
        },
        'LNdb6ymqrY3gv6Lai'
      )
      .then((response) => {
        setNotification({
          show: true,
          type: 'success',
          header: 'Booking Submitted',
          message: `Your booking has been submitted! Total Price: ${price} TZS`
        });

        setTimeout(() => {
          setNotification({
            show: false,
            type: '',
            header: '',
            message: ''
          });
        }, 6000);

        const confirmRedirect = window.confirm('Would you like to continue to WhatsApp for further assistance?');
        if (confirmRedirect) {
          const whatsappMessage = `Hello, I would like to book a room. 
            Name: ${form.name}, 
            Email: ${form.email}, 
            Phone: ${form.phone}, 
            Check-in: ${form.checkin}, 
            Check-out: ${form.checkout}, 
            Number of Adults: ${form.adults}, 
            Room Type: ${form.roomType}, 
            Price: ${price} TZS`;

          const hotelNumber = '+255783045154';
          window.location.href = `https://wa.me/${hotelNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        }

        // Reset the form
        setForm({
          name: '',
          email: '',
          phone: '',
          checkin: '',
          checkout: '',
          adults: 1,
          roomType: 'Standard',
        });
      })
      .catch((error) => {
        setNotification({
          show: true,
          type: 'error',
          header: 'Booking Failed',
          message: 'Failed to submit booking. Please try again.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    } else {
      setNotification({
        show: true,
        type: 'error',
        header: 'Not Submitted',
        message: 'Please fill in all required fields correctly.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">Book Your Stay</h2>
  
      {/* Notification */}
      {notification.show && (
        <NotificationBox
          header={notification.header}
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ ...notification, show: false })}
        />
)}

  
      {/* Name Field */}
      <div className="mb-4 relative">
        <FaUser className="absolute left-3 top-3 text-gray-400" />
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={`pl-10 block font-body w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
      </div>
  
      {/* Email Field */}
      <div className="mb-4 relative">
        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className={`pl-10 font-body block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
      </div>
  
      {/* Phone Field */}
      <div className="mb-4 relative">
        <FaPhone className="absolute left-3 top-3 text-gray-400" />
        <input
          name="phone"
          type="text"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
          className={`pl-10 block font-body w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
      </div>
  
      {/* Check-in Field */}
      <div className="mb-4 relative">
        <FaCalendarAlt className="absolute left-3 top-3 font-body text-gray-400" />
        <input
          name="checkin"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          value={form.checkin}
          onChange={handleChange}
          className={`pl-10 block font-body w-full px-4 py-2 border ${errors.checkin ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        {errors.checkin && <div className="text-red-500 text-sm">{errors.checkin}</div>}
      </div>
  
      {/* Check-out Field */}
      <div className="mb-4 relative">
        <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
        <input
          name="checkout"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          value={form.checkout}
          onChange={handleChange}
          className={`pl-10 block font-body w-full px-4 py-2 border ${errors.checkout ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        {errors.checkout && <div className="text-red-500 text-sm">{errors.checkout}</div>}
      </div>
  
      {/* Adults Field */}
      <div className="mb-4 relative">
        <FaUsers className="absolute left-3 top-3 text-gray-400" />
        <input
          name="adults"
          type="number"
          min="1"
          max={form.roomType === 'VIP' ? '3' : '2'}
          value={form.adults}
          onChange={handleChange}
          className={`pl-10 block font-body w-full px-4 py-2 border ${errors.adults ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        {errors.adults && <div className="text-red-500 text-sm">{errors.adults}</div>}
      </div>
  
      {/* Room Type Field */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Room Type</label>
        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          className="block w-full font-body px-4 py-2 border border-gray-300 rounded focus:outline-none"
        >
          <option value="Standard">Standard Room - 40,000 TZS</option>
          <option value="Executive">Executive Room - 50,000 TZS</option>
          <option value="VIP">VIP Room - 80,000 TZS</option>
          <option value="Regular">Regular Room - 30,000 TZS</option>
        </select>
      </div>
  
      {/* Submit Button */}
      <button
        type="submit"
        className={`bg-black font-body text-white w-full py-3 mt-4 rounded-lg transition-all duration-300 hover:bg-gray-800 focus:outline-none ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking'}
      </button>
    </form>
  );
  
};

export default BookingForm;
