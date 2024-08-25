import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black p-8 shadow-lg rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Drop Us a Line</h2>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
      />
      <input
        name="phone"
        type="text"
        placeholder="Your Phone"
        value={form.phone}
        onChange={handleChange}
        className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
      />
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded h-32 focus:outline-none focus:border-red-500"
      />
      <button type="submit" className="w-full bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
