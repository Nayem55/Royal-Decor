import React from 'react';
import {
  BadgeCheck,
  Brush,
  Timer,
  HeartHandshake,
} from 'lucide-react';

const features = [
  {
    title: 'Expertise You Can Trust',
    description:
      'With years of industry experience, we know what sells — transforming every space into a market-ready masterpiece.',
    icon: <BadgeCheck size={26} />,
  },
  {
    title: 'Tailored Staging Solutions',
    description:
      'Our designs are bespoke — curated to match your property’s character, neighborhood vibe, and buyer persona.',
    icon: <Brush size={26} />,
  },
  {
    title: 'Quick Turnaround Time',
    description:
      'Efficiency meets elegance. Our team delivers beautifully staged homes within tight timelines.',
    icon: <Timer size={26} />,
  },
  {
    title: 'Boost Buyer Emotion',
    description:
      'We stage with emotional impact in mind — evoking a sense of home the moment buyers step in.',
    icon: <HeartHandshake size={26} />,
  },
];

const HomeSec4 = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-[#FDFAF4]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Text and features */}
        <div className="flex-1 px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center lg:text-left">
            The <span className="text-gold">Royal Touch</span> Advantage
          </h2>
          <div className="relative border-l-4 border-gold pl-6 space-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[50px] top-1 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Full height image */}
        <div className="flex-1 w-full h-[400px] sm:h-[600px]">
          <img
            src="https://i.pinimg.com/736x/91/29/dd/9129ddeb5fc50f56b4cd413942a6da02.jpg"
            alt="Elegant Home Staging"
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSec4;
