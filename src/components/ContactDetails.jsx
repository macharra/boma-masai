import React from 'react';

const ContactDetails = () => {
  return (
    <div className="bg-white text-black p-8 shadow-lg rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Get in Touch</h2>
      <p className="mb-4"><strong>Address:</strong> Uzunguni Tanzania</p>
      <p className="mb-4"><strong>City:</strong> Moshi</p>
      <p className="mb-4"><strong>Phone:</strong> <a href="tel:+255 746 264 461" className="text-red-600 hover:underline">+255 746 264 461</a></p>
      <p className="mb-8"><strong>Email:</strong> <a href="mailto:bomamasaigardens@gmail.com" className="text-red-600 hover:underline">bomamaasai@gmail.com</a></p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4072249.6163024646!2d33.59390600299824!3d-4.628626177850156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837652aae3afeb5%3A0x214769f5f8d3dfbd!2sBoma%20Masai%20Garden!5e0!3m2!1sen!2ske!4v1724837922989!5m2!1sen!2ske"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Boma Maasai"
      ></iframe>
    </div>
  );
};

export default ContactDetails;


