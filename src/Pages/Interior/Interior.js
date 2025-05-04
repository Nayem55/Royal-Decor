import React from "react";
import { Link } from "react-router-dom";

const Interior = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/Images/Interior-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Interior Design & Styling Services
          </h1>
        </div>
      </section>

      {/* What is Interior Design */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">What is Interior Design?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Interior design is the process of enhancing the interior of a space to achieve a healthier and more aesthetically pleasing environment. Our team brings together creativity, functionality, and expert craftsmanship to design homes that reflect your unique taste and lifestyle.
            </p>
          </div>
          <div>
            <img
              src="https://foyr.com/learn/wp-content/uploads/2022/06/shabby-chic-interior-design-style.jpg"
              alt="Interior Design Example"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F7F2E9] py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Why Invest in Interior Design?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🎯",
              title: "Personalized Aesthetic",
              subtitle: "Spaces that reflect you",
              desc: "We tailor every design element to match your lifestyle and personal preferences.",
              bg: "bg-pink-100",
            },
            {
              icon: "🧩",
              title: "Maximized Functionality",
              subtitle: "Form meets function",
              desc: "Every room is designed to be beautiful and practical, maximizing space and flow.",
              bg: "bg-blue-100",
            },
            {
              icon: "🌟",
              title: "Professional Finish",
              subtitle: "Details matter",
              desc: "Our expert touch ensures a polished, cohesive, and high-end result in every space.",
              bg: "bg-green-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center text-3xl rounded-full mb-6 ${item.bg}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Design Process
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div className="w-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5be73ec5a2772c36af11997a/dc7fb457-ccad-4755-a210-f135b0271651/the+interior+design+process.jpeg?format=2500w"
              alt="Interior Design Process"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="relative border-l-4 border-black pl-6 space-y-12">
            {[
              {
                step: "Initial Consultation",
                desc: "We listen to your needs, understand your style, and define your goals.",
              },
              {
                step: "Concept & Mood Board",
                desc: "We craft mood boards and layout suggestions to visualize your dream space.",
              },
              {
                step: "Implementation",
                desc: "From furnishings to accessories, we transform your home with expert execution.",
              },
              {
                step: "Final Reveal",
                desc: "We walk you through your redesigned space and fine-tune every detail.",
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[42px] top-1 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold shadow-md">
                  {i + 1}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.step}
                </h4>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 md:px-20 bg-[#F7F2E9]">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          What’s Included in Our Design Service
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { title: "Furniture & Layout Planning", icon: "🛋️" },
            { title: "Color Scheme Consultation", icon: "🎨" },
            { title: "Lighting & Ambience Design", icon: "💡" },
            { title: "Wall Art & Décor Curation", icon: "🖼️" },
            { title: "Space Optimization", icon: "📐" },
            { title: "Full Installation & Styling", icon: "🔧" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-3xl">{item.icon}</div>
              <div className="text-black font-bold text-lg font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Home, Effortlessly
        </h2>
        <p className="text-lg mb-6">
          Ready to create a beautiful and functional space that truly feels like home? Let’s get started.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-[#F7F2E9] text-black px-6 py-3 rounded-full font-semibold hover:bg-accent transition"
        >
          Schedule Your Interior Consultation
        </Link>
      </section>
    </div>
  );
};

export default Interior;
