import React from "react";

const HomeStage = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/home-staging-banner.jpg')" }}>
        <div className="bg-black/50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Professional Home Staging Services
          </h1>
        </div>
      </section>

      {/* What is Home Staging */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-center">What is Home Staging?</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed text-center">
          Home staging is the art of preparing and styling a home for sale, making it appealing to the highest number of potential buyers. Our professional team strategically places furniture, accessories, and décor to showcase the home’s best features, creating emotional appeal and helping buyers envision themselves living there.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Home Staging?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { icon: "💰", title: "Sell for Higher Price", desc: "Staged homes often receive more offers and higher bids." },
            { icon: "⚡", title: "Faster Sale", desc: "On average, staged homes sell significantly faster than non-staged ones." },
            { icon: "🏠", title: "Stand Out", desc: "In a crowded market, staging sets your home apart from the competition." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Staging Process</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { step: "1. Consultation", desc: "We assess your property and discuss the best staging approach for your goals and timeline." },
            { step: "2. Planning & Design", desc: "Our designers create a custom styling plan using furniture, art, and accessories that suit your space." },
            { step: "3. Staging Day", desc: "Our team professionally stages your home, transforming it into a visually captivating space." },
            { step: "4. Removal Post-Sale", desc: "Once the property is sold, we remove all staging items seamlessly and efficiently." },
          ].map((item, i) => (
            <div key={i}>
              <h4 className="font-semibold text-lg">{item.step}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Before & After Showcase</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-2">Before</h4>
            <img src="/images/before-staging.jpg" alt="Before staging" className="rounded-xl shadow" />
          </div>
          <div>
            <h4 className="font-medium mb-2">After</h4>
            <img src="/images/after-staging.jpg" alt="After staging" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* What’s Included */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">What’s Included in Our Home Staging</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "Furniture rental and placement",
            "Decorative artwork and accessories",
            "Lighting and soft furnishings",
            "Room layout optimization",
            "Color and design enhancements",
            "Full styling setup and takedown",
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-green-500 text-xl mt-1">✓</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Stage Your Space to Perfection</h2>
        <p className="text-lg mb-6">Get in touch today to book a consultation or learn more about how home staging can benefit your property.</p>
        <a href="/contact" className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Book a Staging Consultation
        </a>
      </section>
    </div>
  );
};

export default HomeStage;
