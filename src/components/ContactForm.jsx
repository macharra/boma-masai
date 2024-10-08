import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import NotificationBox from './NotificationBox';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ 
    show: false,
    header: "",
    message: "",
    type: '' 
  });

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = form.name ? "" : "Name is required.";
    tempErrors.email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email) ? "" : "Email is not valid.";
    tempErrors.message = form.message ? "" : "Message is required.";
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
      emailjs.send(
        'service_k7ch0uk', // Replace with your EmailJS service ID
        'template_o0kz8lh', // Replace with your EmailJS template ID
        form,
        'VMOd9iiwDdbJT63So' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setNotification({
            show: true,
            header: 'Success!',
            message: 'Your message has been successfully submitted!',
            type: 'success',
          });
        }, 
        (error) => {
          setNotification({
            show: true,
            header: 'Error',
            message: 'Failed to send the message. Please try again.',
            type: 'error',
          });
        }
      );
    } else {
      setNotification({
        show: true,
        header: 'Form Error',
        message: 'Please fill out all required fields correctly.',
        type: 'error',
      });
    }
  };

  const closeNotification = () => {
    setNotification({ ...notification, show: false });
  };

  return (
    <>
      {notification.show && (
        <NotificationBox
          header={notification.header}
          message={notification.message}
          onClose={closeNotification}
          type={notification.type}
        />
      )}
      <form onSubmit={handleSubmit} className="bg-white text-black p-8 shadow-lg rounded-md">
        <h2 className="text-3xl font-serif font-bold mb-6 text-red-600">Drop Us a Line</h2>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={`block font-body w-full mb-4 px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-red-500`}
        />
        <div className="text-red-500 text-sm mb-4">{errors.name}</div>
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className={`block w-full mb-4 px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-red-500`}
        />
        <div className="text-red-500 text-sm mb-4">{errors.email}</div>
        <input
          name="phone"
          type="text"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
          className="block w-full font-body mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="block font-body w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className={`block font-body w-full mb-4 px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded h-32 focus:outline-none focus:border-red-500`}
        />
        <div className="text-red-500 font-body text-sm mb-4">{errors.message}</div>
        <button type="submit" className="w-full font-body bg-red-600 text-white px-6 py-2 rounded hover:bg-black transition duration-300">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
