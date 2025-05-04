import React from "react";
import { Link } from "react-router-dom";

const Property = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/Images/property-makeover banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Property Makeover Services
          </h1>
        </div>
      </section>

      {/* What is Property Makeover */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">What is Property Makeover?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A property makeover is a strategic update of your home or investment property
              to improve its appearance, functionality, and market value. Whether you're preparing to sell,
              rent, or simply refresh your space, we offer tailored solutions to make your property shine.
            </p>
          </div>
          <div>
            <img
              src="https://i.ytimg.com/vi/Hz9HNU2IIxI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAx-0ZhjAMTFR65BD7DD4KL9GmhWw"
              alt="Property Makeover"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Property Makeover */}
      <section className="bg-[#F7F2E9] py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Why Choose a Property Makeover?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "📈",
              title: "Increase Market Value",
              subtitle: "Boost your property's worth",
              desc: "Well-executed improvements can significantly raise your resale or rental value.",
              bg: "bg-green-100",
            },
            {
              icon: "🏡",
              title: "Enhance First Impressions",
              subtitle: "Stand out from the crowd",
              desc: "A beautiful, clean, and modern look instantly attracts more buyers or tenants.",
              bg: "bg-yellow-100",
            },
            {
              icon: "🔨",
              title: "Targeted Upgrades",
              subtitle: "Smart renovations",
              desc: "We focus on high-impact changes like painting, flooring, lighting, and layout.",
              bg: "bg-blue-100",
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

      {/* Our Makeover Process */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Makeover Process
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div className="w-full">
            <img
              src="https://img.freepik.com/free-photo/real-estate-agent-customer-face-mask-looking-new-project_53876-97516.jpg?semt=ais_hybrid&w=740"
              alt="Makeover Steps"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="relative border-l-4 border-black pl-6 space-y-12">
            {[
              {
                step: "Property Evaluation",
                desc: "We assess the property and suggest key areas to improve based on your goals.",
              },
              {
                step: "Design & Budget Plan",
                desc: "We propose a cost-effective design plan that maximizes value and visual impact.",
              },
              {
                step: "Execution & Upgrades",
                desc: "Our team handles all renovations, styling, and sourcing to transform the space.",
              },
              {
                step: "Presentation Ready",
                desc: "We finish with professional styling so your property is ready to impress.",
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
          What's Included in Our Property Makeover
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { title: "Pre-sale Consultation", icon: "📋" },
            { title: "Light Renovations & Painting", icon: "🎨" },
            { title: "Furniture & Decor Styling", icon: "🛋️" },
            { title: "Decluttering & Space Optimization", icon: "📦" },
            { title: "Lighting & Accessory Updates", icon: "💡" },
            { title: "Professional Photography Prep", icon: "📷" },
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
          Give Your Property a Value-Boosting Makeover
        </h2>
        <p className="text-lg mb-6">
          Ready to transform your property and make it stand out in the market? Let’s make it happen.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-[#F7F2E9] text-black px-6 py-3 rounded-full font-semibold hover:bg-accent transition"
        >
          Book Your Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default Property;
