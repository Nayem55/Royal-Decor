import React from 'react';
import { Home, Brush, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Home size={28} className="text-gold" />,
    title: 'Home Staging',
    desc: 'Thoughtful staging that increases buyer appeal and maximizes property value.',
  },
  {
    icon: <Brush size={28} className="text-gold" />,
    title: 'Interior Styling',
    desc: 'Breathe new life into your rooms with curated decor and timeless finishes.',
  },
  {
    icon: <Sparkles size={28} className="text-gold" />,
    title: 'Personalized Touch',
    desc: 'We tailor every design to match your space, goals, and personality.',
  },
];

const HomeAbout = () => {
  return (
    <section id="about" className="py-24 bg-[#fdfaf4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-6">
            Transforming Spaces, <span className="text-gold">Elevating Experiences</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            At <strong>Royal Decor and Staging PTY LTD</strong>, we don’t just decorate—we create stories. Whether it’s a home going on the
            market or a room in need of rejuvenation, our goal is to blend form, function, and emotion into every project.
          </p>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-[#fff8e6] rounded-full shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="w-full">
          <img
            src="https://www.verraterra.com/wp-content/uploads/2019/09/home-staging-photos.jpeg"
            alt="Elegant interior staging"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
