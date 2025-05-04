import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://etedge-insights.com/wp-content/uploads/2025/04/Retail-Omnichannel.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Elevating homes through elegance, creativity, and strategic staging solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong>Royal Decor and Staging PTY LTD</strong>, we are passionate creatives,
              design strategists, and home staging professionals based in Australia.
              Our mission is simple — to help homeowners, real estate agents, and developers
              present their properties in the best possible light.
              <br />
              <br />
              With a keen eye for detail and deep market understanding, we specialize in transforming
              spaces into compelling environments that attract buyers and elevate value.
            </p>
          </div>
          <div>
            <img
              src="https://biopolislifesciences.com/wp-content/uploads/2019/01/who.png"
              alt="Who We Are"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-[#F7F2E9] py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🎨",
              title: "Tailored Design Approach",
              desc: "We curate every project based on property style, market trends, and buyer psychology.",
            },
            {
              icon: "🤝",
              title: "Client-Centric Philosophy",
              desc: "We value communication, transparency, and long-term relationships with our clients.",
            },
            {
              icon: "🏠",
              title: "Full-Service Expertise",
              desc: "From home staging to property makeovers, we handle it all under one roof.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to enhance the emotional appeal of every property we touch.
              We aim to turn houses into homes that resonate with potential buyers and
              reflect our client’s goals and lifestyle.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To become Australia’s most trusted name in home staging and interior styling,
              recognized for our creativity, integrity, and impact on the property market.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team (Optional section) */}
      <section className="bg-[#F7F2E9] py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Sophie Williams",
              role: "Creative Director",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Liam Patel",
              role: "Lead Stylist",
              img: "https://randomuser.me/api/portraits/men/33.jpg",
            },
            {
              name: "Emily Chen",
              role: "Client Relations Manager",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl text-center shadow-md">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Create Something Beautiful Together
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-700">
          Whether you're preparing to sell, renovate, or redesign your home — we’re here to help
          you make the most of your space.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-[#F7F2E9] text-black px-6 py-3 rounded-full font-semibold hover:bg-accent transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
