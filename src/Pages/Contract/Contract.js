import React from "react";

const Contract = () => {
  return (
    <div>
      <p className="mt-[120px] mb-[50px] text-black text-5xl text-center">
        CONTRACT MANUFACTURING
      </p>
      <div className="w-full h-[50vh] bg-[#FFB800] flex justify-center items-center">
        <p className="typing-text w-[80%] text-center text-5xl sm:m-10 text-white">
          Where Innovation Meets Quality Manufacturing
        </p>
      </div>

      {/* Section 1: Introduction to Contract Manufacturing */}
      <div className="w-[90%] lg:w-[70%] mx-auto my-10 flex flex-col lg:flex-row items-center gap-10">
        <div className="sm:w-[50%]">
          <p className="text-4xl my-6 font-bold">
            What is Contract Manufacturing?
          </p>
          <p className="text-2xl my-3">
            Contract manufacturing allows you to bring your product ideas to
            life without needing your own production facilities. We handle
            everything from sourcing ingredients to the final packaging,
            ensuring each product meets the highest quality standards.
          </p>
          <p className="text-2xl my-3">
            Our team works closely with you to understand your vision and
            deliver products that align with your brand's unique requirements
            and values.
          </p>
        </div>
        <img
          className="sm:w-[50%]"
          src="https://www.roetell.com/wp-content/uploads/2023/08/fist2-e1701153649471.jpeg"
          alt="Contract Manufacturing Process"
        />
      </div>

      {/* Section 2: Benefits of Contract Manufacturing */}
      <div className="w-[90%] sm:w-[70%] mx-auto my-10 flex flex-col lg:flex-row-reverse items-center gap-10">
        <div className="sm:w-[50%]">
          <p className="text-4xl my-6 font-bold">
            Why Choose Our Contract Manufacturing?
          </p>
          <p className="text-2xl my-3">
            We provide end-to-end contract manufacturing solutions to help you
            bring your products to market efficiently. Our facilities are
            equipped with the latest technology to ensure high-quality
            production at every step.
          </p>
          <p className="text-2xl my-3">
            With years of experience, our team is committed to maintaining
            product integrity and quality, while reducing costs and streamlining
            the production process.
          </p>
          <p className="text-2xl my-3">
            Let us take care of the manufacturing so you can focus on growing
            your brand and serving your customers.
          </p>
        </div>
        <img
          className="sm:w-[50%]"
          src="https://rixincosmetics.com/wp-content/uploads/2024/03/Contract-Manufacturing.webp"
          alt="Benefits of Contract Manufacturing"
        />
      </div>

      {/* Section 3: Our Contract Manufacturing Process */}
      <div className="w-[90%] lg:w-[70%] mx-auto my-10 flex flex-col">
        <p className="text-4xl my-6 font-bold text-center">
          Our Contract Manufacturing Process
        </p>
        <img alt="" src="https://shifony.com/wp-content/uploads/2023/02/factory-shifony.jpeg"/>
        <p className="text-2xl my-3 mt-10">
          1. <span className='bg-[#FFB800]'>**Consultation**</span>: We discuss your product ideas and project
          requirements.
        </p>
        <p className="text-2xl my-3 ">
          2. <span className='bg-[#FFB800]'>**Product Development**</span>: Our R&D team works on formulation and
          product design.
        </p>
        <p className="text-2xl my-3 ">
          3. <span className='bg-[#FFB800]'>**Ingredient Sourcing**</span>: We source high-quality, sustainable
          ingredients.
        </p>
        <p className="text-2xl my-3 ">
          4. <span className='bg-[#FFB800]'>**Manufacturing**</span>: The product is manufactured in our
          state-of-the-art facility.
        </p>
        <p className="text-2xl my-3 ">
          5. <span className='bg-[#FFB800]'>**Packaging and Delivery**</span>: We handle packaging and arrange for
          shipping.
        </p>
      </div>
    </div>
  );
};

export default Contract;
