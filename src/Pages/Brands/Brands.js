import React from "react";
import TD from "../../Images/TD.png";
import smartWorld from "../../Images/smart_world.png";
import explore from "../../Images/explore.png";

const Brands = () => {
  const brands = [
    {
      name: "TOM & DARIN",
      image: TD,
      pdf: "https://drive.google.com/file/d/1vyUoZTf3sg1zdiH-t1sZEi955P3MElIt/view?usp=sharing",
    },
    {
      name: "SMART WORLD",
      image: smartWorld,
      pdf: "https://drive.google.com/file/d/1eMCzKN_kDXhCqm8i6O4Ay-3cT0ja5VYu/view?usp=sharing",
    },
    {
      name: "EXPLORE",
      image: explore,
      pdf: "https://drive.google.com/file/d/1SOjADeI4R7MPvcQFqHsZhstV1UrkF_k9/view?usp=sharing",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-cover bg-center h-[400px] flex items-center justify-center text-white bg-[#1F2937]">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Esteemed Brand Partnerships
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Trusted by leading names in the perfume and cosmetics industry.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            About Our Partners
          </h2>
          <p className="mt-4 text-gray-600">
            Over the years, we’ve collaborated with a variety of renowned brands
            to bring their visions to life. Our full-service manufacturing
            process ensures excellence at every step, from product design to
            packaging and beyond.
          </p>
        </div>
      </div>

      {/* Brand Grid Section */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.pdf} // Link to the PDF file
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // For security
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-32 w-32 object-cover rounded-full"
              />
              <h3 className="text-lg font-semibold mt-4 text-center">
                {brand.name}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-10 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600">
            From concept to creation, we provide end-to-end solutions for your
            brand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Product Design */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Product Design
              </h3>
              <p className="text-sm text-gray-600 mt-4">
                We collaborate closely with your team to conceptualize and
                design products that reflect your brand's unique identity. Our
                design team specializes in creating elegant, innovative, and
                market-ready products that captivate your target audience.
              </p>
            </div>

            {/* Packaging */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Packaging</h3>
              <p className="text-sm text-gray-600 mt-4">
                Packaging is more than just a container; it’s a statement of
                your brand. Our team creates custom, eco-friendly, and visually
                striking packaging solutions that not only protect your products
                but also enhance their appeal on the shelves.
              </p>
            </div>

            {/* Manufacturing */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Manufacturing
              </h3>
              <p className="text-sm text-gray-600 mt-4">
                With state-of-the-art facilities and stringent quality control,
                we ensure that every product meets the highest standards. From
                small batches to large-scale production, we cater to diverse
                manufacturing needs, delivering precision and consistency every
                time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-4xl font-bold text-red-500">50+</h3>
              <p className="text-gray-600 mt-2">Brands Collaborated</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-4xl font-bold text-red-500">1000+</h3>
              <p className="text-gray-600 mt-2">Products Created</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-4xl font-bold text-red-500">20+</h3>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-4xl font-bold text-red-500">15+</h3>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-10 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center">FAQs</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                question: "What types of brands do you work with?",
                answer:
                  "We work with a wide range of brands, from luxury cosmetics to niche perfumes.",
              },
              {
                question: "Can you handle small production runs?",
                answer:
                  "Yes, we offer flexible production options to meet your needs.",
              },
              {
                question: "What is your typical production lead time?",
                answer:
                  "Our production lead time ranges from 4 to 8 weeks, depending on the project complexity.",
              },
              {
                question: "Do you offer packaging design services?",
                answer:
                  "Yes, we provide end-to-end packaging solutions, including custom designs tailored to your brand.",
              },
              {
                question: "How do I start working with your team?",
                answer:
                  "Simply contact us via our website, and we'll guide you through the process step by step.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white shadow-md rounded-lg p-4 overflow-hidden group sm:w-[80%] mx-auto"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span className="">{faq.question}</span>
                  <span className="transform group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-sm text-gray-600 mt-6 transition-all duration-500 ease-in-out group-open:max-h-96 max-h-0 overflow-hidden">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-800 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Work With Us</h2>
          <p className="mt-4">
            Ready to bring your brand's vision to life? Partner with Nextcare
            for unparalleled expertise in perfumes and cosmetics manufacturing.
          </p>
          <a
            href="/contact-us"
            className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brands;
