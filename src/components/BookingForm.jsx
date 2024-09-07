import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import emailjs from 'emailjs-com'; 

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    adults: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable the button during submission

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
  
      // EmailJS integration
      emailjs.send(
        'service_k7ch0uk', // Replace with your EmailJS service ID
        'template_0v7vha8', // Replace with your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          checkin: form.checkin,
          checkout: form.checkout,
          adults: form.adults,
        },
        'LNdb6ymqrY3gv6Lai' // Replace with your EmailJS user ID
      )
        .then((response) => {
          alert('Your booking has been submitted!');
          console.log('SUCCESS!', response);
  
          // Confirmation for WhatsApp redirect
          const confirmRedirect = confirm('Would you like to continue to WhatsApp for further assistance?');
  
          if (confirmRedirect) {
            // Prepare WhatsApp message
            const whatsappMessage = `Hello, I would like to book a room. 
            Name: ${form.name}, 
            Email: ${form.email}, 
            Phone: ${form.phone}, 
            Check-in: ${form.checkin}, 
            Check-out: ${form.checkout}, 
            Number of Adults: ${form.adults}`;
  
            // Hotel's WhatsApp number in international format
            const hotelNumber = '+255783045154'; // Replace with the hotel's WhatsApp number
  
            // Redirect to WhatsApp chat
            window.location.href = `https://wa.me/${hotelNumber}?text=${encodeURIComponent(whatsappMessage)}`;
          }
  
          // Reset the form fields
          setForm({
            name: '',
            email: '',
            phone: '',
            checkin: '',
            checkout: '',
            adults: '',
          });
        })
        .catch((error) => {
          console.log('FAILED...', error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black p-8 shadow-lg rounded-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>

      {/* Name Field */}
      <div className="mb-4 relative">
        <FaUser className="absolute left-3 top-3 text-gray-400" />
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={`pl-10 block w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        <div className="text-red-500 text-sm">{errors.name}</div>
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
          className={`pl-10 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        <div className="text-red-500 text-sm">{errors.email}</div>
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
          className={`pl-10 block w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        <div className="text-red-500 text-sm">{errors.phone}</div>
      </div>

      {/* Check-in Field */}
      <div className="mb-4 relative">
        <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
        <input
          name="checkin"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          value={form.checkin}
          onChange={handleChange}
          className={`pl-10 block w-full px-4 py-2 border ${errors.checkin ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        <div className="text-red-600 text-base">{errors.checkin}</div>
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
          className={`pl-10 block w-full px-4 py-2 border ${errors.checkout ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        <div className="text-red-500 text-sm">{errors.checkout}</div>
      </div>

      {/* Adults Field */}
      <div className="mb-4 relative">
        <FaUsers className="absolute left-3 top-3 text-gray-400" />
        <input
          name="adults"
          type="number"
          min="1"
          placeholder="Number of Adults"
          value={form.adults}
          onChange={handleChange}
          className={`pl-10 block w-full px-4 py-2 border ${errors.adults ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
        />
        <div className="text-red-500 text-sm">{errors.adults}</div>
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition duration-300"
        disabled={isSubmitting} // Disable button while submitting
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default BookingForm;
