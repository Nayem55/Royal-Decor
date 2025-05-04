// src/Components/HomeSec3/HomeSec3.jsx
import React from 'react';

const projects = [
  {
    title: 'Modern Coastal Living Room',
    description:
      'A bright and airy coastal-inspired living room designed with neutral tones, layered textures, and carefully placed decor to invite warmth and sophistication.',
    image: 'https://blog.canadianloghomes.com/wp-content/uploads/2024/01/coastal-living-room-ideas.jpg',
  },
  {
    title: 'Luxury Bedroom Retreat',
    description:
      'Staged for relaxation and elegance with soft palettes, ambient lighting, and premium furnishings that transform the space into a personal sanctuary.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LpFTClEQmCDYlQ_y6i009E7rDwodD4gVwA&s',
  },
  {
    title: 'Contemporary Kitchen Transformation',
    description:
      'This kitchen was completely modernized with sleek cabinetry, stylish lighting, and curated accessories to help buyers envision everyday life.',
    image: 'https://st.hzcdn.com/simgs/9f91003c025e9e3d_4-2904/home-design.jpg',
  },
];

const HomeSec3 = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#F7F2E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } gap-8`}
            >
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">{project.title}</h3>
                <p className="text-gray-600 text-lg">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSec3;
