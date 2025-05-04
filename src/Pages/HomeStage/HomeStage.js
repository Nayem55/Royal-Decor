import React from "react";

const HomeStage = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/Images/Home-stage-banner.jpg')" }} // ✅ Corrected path
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Professional Home Staging Services
          </h1>
        </div>
      </section>

      {/* What is Home Staging */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text on the Left */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              What is Home Staging?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Home staging is the art of preparing and styling a home for sale,
              making it appealing to the highest number of potential buyers. Our
              professional team strategically places furniture, accessories, and
              décor to showcase the home’s best features, creating emotional
              appeal and helping buyers envision themselves living there.
            </p>
          </div>

          {/* Image on the Right */}
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
      <section className="bg-[#F7F2E9] py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Why Choose Home Staging?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "💰",
              title: "Sell for Higher Price",
              subtitle: "Increase your property’s perceived value",
              desc: "Staged homes create a strong emotional appeal, often resulting in multiple offers and higher final sale prices.",
              bg: "bg-green-100",
            },
            {
              icon: "⚡",
              title: "Faster Sale",
              subtitle: "Speed up your time on market",
              desc: "Properties that are staged spend less time on the market compared to non-staged homes, saving you time and stress.",
              bg: "bg-blue-100",
            },
            {
              icon: "🏠",
              title: "Stand Out",
              subtitle: "Make a lasting first impression",
              desc: "Our expert staging helps your listing shine in photos and walkthroughs, grabbing buyer attention instantly.",
              bg: "bg-yellow-100",
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
      {/* Our Staging Process */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Staging Process
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Image Left */}
          <div className="w-full">
            <img
              src="https://ovacen.com/wp-content/uploads/2020/12/what-is-home-staging.jpg"
              alt="Our staging process"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Timeline Right */}
          <div className="relative border-l-4 border-black pl-6 space-y-12">
            {[
              {
                step: "Consultation",
                desc: "We assess your property and discuss the best staging approach for your goals and timeline.",
              },
              {
                step: "Planning & Design",
                desc: "Our designers create a custom styling plan using furniture, art, and accessories that suit your space.",
              },
              {
                step: "Staging Day",
                desc: "Our team professionally stages your home, transforming it into a visually captivating space.",
              },
              {
                step: "Removal Post-Sale",
                desc: "Once the property is sold, we remove all staging items seamlessly and efficiently.",
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-8">
                {/* Marker */}
                <div className="absolute -left-[42px] top-1 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold shadow-md">
                  {i + 1}
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.step}
                </h4>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="bg-[#F7F2E9] py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          Before & After Showcase
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Before */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img
                src="https://na.rdcpix.com/fbf2dd0f80253bea52e21e356ddf7031w-c348321396xd-w640_h480_q80.jpg"
                alt="Before staging"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center text-lg font-medium text-gray-700">
              Before
            </div>
          </div>

          {/* After */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img
                src="https://www.homeaccentstoday.com/wp-content/uploads/sites/13/2024/12/dsc_0360_48903770712_o.jpeg"
                alt="After staging"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center text-lg font-medium text-gray-700">
              After
            </div>
          </div>
        </div>
      </section>

      {/* What’s Included */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          What’s Included in Our Home Staging
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Furniture Rental & Placement",
              icon: "🛋️",
            },
            {
              title: "Decorative Artwork & Accessories",
              icon: "🖼️",
            },
            {
              title: "Lighting & Soft Furnishings",
              icon: "💡",
            },
            {
              title: "Room Layout Optimization",
              icon: "📐",
            },
            {
              title: "Color & Design Enhancements",
              icon: "🎨",
            },
            {
              title: "Full Styling Setup & Takedown",
              icon: "📦",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 bg-[#F7F2E9] rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
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
      <section className="bg-[#F7F2E9] text-black py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Stage Your Space to Perfection
        </h2>
        <p className="text-lg mb-6">
          Get in touch today to book a consultation or learn more about how home
          staging can benefit your property.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Book a Staging Consultation
        </a>
      </section>
    </div>
  );
};

export default HomeStage;

