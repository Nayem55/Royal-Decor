// src/Components/HomeSec5/HomeSec5.jsx
import React from 'react';

const packages = [
  {
    name: 'Essential Staging',
    price: '$999',
    features: [
      'Up to 3 rooms staged',
      'Basic furniture and decor',
      '1 day setup',
      'Client consultation',
    ],
  },
  {
    name: 'Premium Staging',
    price: '$1,999',
    features: [
      'Up to 5 rooms staged',
      'Premium furniture and decor',
      '2 day setup',
      'Client consultation',
      'Full styling plan',
    ],
  },
  {
    name: 'Luxe Staging',
    price: '$3,499',
    features: [
      'Full home staging (5+ rooms)',
      'High-end luxury furniture and decor',
      '3+ day setup',
      'Client consultation',
      'Custom color palette and design',
      'Personalized styling advice',
    ],
  },
];

const HomeSec5 = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{pkg.name}</h3>
              <p className="text-lg text-gray-700 mb-6">{pkg.price}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSec5;
