import React from 'react';
import { ChevronRight } from 'lucide-react';

const transformations = [
  {
    before: 'https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-b09352a/www.decorilla.com/online-decorating/wp-content/uploads/2024/01/Modern-rustic-living-room-by-Decorilla-scaled-345x.jpeg',
    after: 'https://rnb.scene7.com/is/image/roomandboard/carlton_002738_25e?size=2400,2400&scl=1&qlt=5',
    label: 'Living Room Makeover',
  },
  {
    before: 'https://iconcustombuilders.com/wp-content/uploads/2024/05/DS77374-Final-web-copy-scaled-1.webp',
    after: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-nTShUk0-VcbVOYUaJOZdek-MHvz2byoi_r100c0uoHgHqdsEGi7q3YAibLR9ehlpI8&usqp=CAU',
    label: 'Modern Kitchen Upgrade',
  },
  {
    before: 'https://cdn.shopify.com/s/files/1/1740/0017/files/8-classy-elegant-bedroom-design-tips-4_1024x1024.jpg?v=1638078124',
    after: 'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/10/Serene-bedroom-with-gold-accents.jpg?width=900',
    label: 'Elegant Bedroom Styling',
  },
];

const HomeSec2 = () => {
  return (
    <section id="before-after" className="py-24 bg-[#FDFAF4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Stunning <span className="text-gold">Before & After</span> Transformations
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group relative"
            >
              <div className="relative h-72">
                <img
                  src={item.before}
                  alt="Before"
                  className="absolute top-0 left-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                />
                <img
                  src={item.after}
                  alt="After"
                  className="absolute top-0 left-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition duration-700"
                />
                <div className="absolute bottom-0 w-full text-center text-white bg-black/50 py-2 font-medium text-sm tracking-wide">
                  Hover to Reveal After
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                  {item.label} <ChevronRight className="text-gold" size={18} />
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  See how we’ve elevated ordinary rooms into stunning interiors.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-gray-600 text-md max-w-2xl mx-auto">
          With precision staging and intentional design, our team reimagines every room—turning potential into presence.
        </p>
      </div>
    </section>
  );
};

export default HomeSec2;
