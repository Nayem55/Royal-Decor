// src/Components/HomeBanner/HomeBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/Images/banner1.jpg')" }} // ✅ Corrected path
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Royal Decor and Staging PTY LTD</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Elevate your space. Impress every guest. Professional home staging & interior decor tailored for modern living.
        </p>
        <div className="space-x-4">
          <Link to="/contact-us" className="bg-white text-black px-6 py-4 rounded-full hover:bg-gray-200 transition">Book Consultation</Link>
          <a href='#services' className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
