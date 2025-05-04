import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Real Estate Agent',
    image:
      'https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=',
    quote:
      'Royal Decor and Staging completely transformed our listings! The staging was impeccable, and we saw a 20% increase in sales within the first month. Highly recommend!',
  },
  {
    name: 'David Harris',
    role: 'Home Seller',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjowSMfpcPacUvJlBC4MgiOohHlpENMyUcYGZESMsfTZHgwyMlUrLK9zjhWGD2rM0-TVU&usqp=CAU',
    quote:
      'I couldn’t believe how my home looked after staging! The attention to detail was incredible, and we sold above asking price within a week. Thank you, Royal Decor!',
  },
  {
    name: 'Jessica Kim',
    role: 'Interior Designer',
    image:
      'https://media.istockphoto.com/id/1216152397/photo/portrait-of-female-owner-of-gift-store-standing-in-front-of-shelves-with-cosmetics-and-candles.jpg?s=612x612&w=0&k=20&c=23L_GhirOBiExv00QPw555TiTsSrZqhFii2F89CHXVE=',
    quote:
      'Working with Royal Decor was a dream. Their ability to personalize each space is unparalleled. I’ve had several clients ask for their services, and they never disappoint.',
  },
];

const HomeSec6 = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#F7F2E9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          What <span className="text-gold">Our Clients</span> Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-gold/10 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative"
            >
              <Quote
                size={36}
                className="absolute top-6 right-6 text-gold/60 opacity-20"
              />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic relative z-10">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSec6;
