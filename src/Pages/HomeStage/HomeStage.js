import React from "react";
import { Link } from "react-router-dom";

const HomeStage = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section
        className="relative h-[70vh] sm:h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/Images/Home-stage-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 sm:px-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Professional Home Staging Services
          </h1>
        </div>
      </section>

      {/* What is Home Staging */}
      <section className="py-14 px-4 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              What is Home Staging?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Home staging is the art of preparing and styling a home for sale, making it appealing to potential buyers. Our team strategically places furniture and décor to highlight your home’s strengths and help buyers visualize living there.
            </p>
          </div>
          <div>
            <img
              src="https://www.columbusmonthly.com/gcdn/presto/2021/04/22/NCOM/7b6fe45a-63ca-4c55-ab85-04630a083cdb-cmm_style_homestaging.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp"
              alt="Home Staging Example"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F7F2E9] py-16 px-4 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Why Choose Home Staging?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "💰",
              title: "Sell for Higher Price",
              subtitle: "Increase your property’s perceived value",
              desc: "Staged homes create emotional appeal, often leading to higher offers.",
              bg: "bg-green-100",
            },
            {
              icon: "⚡",
              title: "Faster Sale",
              subtitle: "Speed up your time on market",
              desc: "Staged properties sell faster, saving you time and hassle.",
              bg: "bg-blue-100",
            },
            {
              icon: "🏠",
              title: "Stand Out",
              subtitle: "Make a lasting first impression",
              desc: "Expert staging makes your listing shine in photos and walkthroughs.",
              bg: "bg-yellow-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center text-2xl rounded-full mb-4 ${item.bg}`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{item.subtitle}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Staging Process */}
      <section className="py-16 px-4 sm:px-10 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-800">
          Our Staging Process
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <img
            src="https://ovacen.com/wp-content/uploads/2020/12/what-is-home-staging.jpg"
            alt="Staging Process"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
          <div className="relative border-l-4 border-black pl-6 space-y-10 ms-4">
            {[
              {
                step: "Consultation",
                desc: "We assess your property and define your goals.",
              },
              {
                step: "Planning & Design",
                desc: "We create a personalized styling plan.",
              },
              {
                step: "Staging Day",
                desc: "Our team stages the space for maximum impact.",
              },
              {
                step: "Removal Post-Sale",
                desc: "We remove all staging items promptly after sale.",
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-6">
                <div className="absolute -left-[42px] top-1 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold mb-1">{item.step}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-[#F7F2E9] py-16 px-4 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Before & After Showcase
        </h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              label: "Before",
              img: "https://na.rdcpix.com/fbf2dd0f80253bea52e21e356ddf7031w-c348321396xd-w640_h480_q80.jpg",
            },
            {
              label: "After",
              img: "https://www.homeaccentstoday.com/wp-content/uploads/sites/13/2024/12/dsc_0360_48903770712_o.jpeg",
            },
          ].map((item, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border shadow-lg">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center mt-3 text-lg font-medium text-gray-700">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-10 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          What’s Included in Our Home Staging
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Furniture Rental & Placement", icon: "🛋️" },
            { title: "Decorative Artwork & Accessories", icon: "🖼️" },
            { title: "Lighting & Soft Furnishings", icon: "💡" },
            { title: "Room Layout Optimization", icon: "📐" },
            { title: "Color & Design Enhancements", icon: "🎨" },
            { title: "Full Styling Setup & Takedown", icon: "📦" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 bg-[#F7F2E9] rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl sm:text-3xl">{item.icon}</div>
              <p className="text-base font-medium text-black">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F2E9] text-black py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let’s Stage Your Space to Perfection
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Contact us today to book a consultation or learn more about how staging can help you.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-accent transition"
        >
          Book a Staging Consultation
        </Link>
      </section>
    </div>
  );
};

export default HomeStage;
