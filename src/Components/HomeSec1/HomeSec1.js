import React from 'react';
import { Home, Brush, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Home size={40} className="text-gold" />,
    title: 'Home Staging',
    desc: 'Sell faster and for more with market-savvy staging solutions that highlight your property’s strengths.',
    points: [
      'Furniture placement and layout',
      'Lighting optimization',
      'Neutral, elegant styling',
    ],
  },
  {
    icon: <Brush size={40} className="text-gold" />,
    title: 'Interior Styling',
    desc: 'Elevate your lifestyle through functional, stylish interiors designed around your personality.',
    points: [
      'Color and texture consultation',
      'Furniture and decor sourcing',
      'Room-by-room styling services',
    ],
  },
  {
    icon: <Building2 size={40} className="text-gold" />,
    title: 'Property Makeovers',
    desc: 'We breathe new life into tired spaces—cost-effectively boosting your property’s aesthetic and appeal.',
    points: [
      'Pre-sale renovation advice',
      'Modern fixture upgrades',
      'Painting & cosmetic changes',
    ],
  },
];

const HomeSec1 = () => {
  return (
    <section id="services" className="py-20 bg-[#F7F2E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Our Core Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          From transforming homes for sale to elevating everyday interiors, we offer bespoke services tailored to your space and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-80 border border-gray-200 backdrop-blur-md rounded-3xl shadow-lg p-8 text-left transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#fff9f0] rounded-full shadow">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="#contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300"
          >
            Enquire About a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSec1;
