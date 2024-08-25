import React from 'react';

const ContactDetails = () => {
  return (
    <div className="bg-white text-black p-8 shadow-lg rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Get in Touch</h2>
      <p className="mb-4"><strong>Address:</strong> Uzunguni Tanzania</p>
      <p className="mb-4"><strong>City:</strong> Moshi</p>
      <p className="mb-4"><strong>Phone:</strong> <a href="tel:+255 746 264 461" className="text-red-600 hover:underline">+255 746 264 461</a></p>
      <p className="mb-8"><strong>Email:</strong> <a href="mailto:bomamaasai@gmail.com" className="text-red-600 hover:underline">bomamaasai@gmail.com</a></p>
      <iframe
        src="https://www.google.com/maps/@-3.3219364,37.1488872,17z?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
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
