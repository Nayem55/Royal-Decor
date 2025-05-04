import React from 'react';
import banner from "../Images/about.jpg"

const AboutUs = () => {
    return (
        <div>
        <div className="banner">
          <img alt="" src={banner}/>
          {/* Optional overlay */}
          <div className="overlay"></div>
        </div>
        <div className='bg-accent text-primary p-10'>
        <p className="text-center text-3xl pb-10 md:p-10">WHO WE ARE</p>
        <p className="text-center text-3xl pb-10 md:p-10 md:w-[50vw] mx-auto">We are an example of growth and innovation. The 3 pillars that underpin our cosmetic development policy are: innovation, sustainability, and quality.</p>
        <p className="text-center text-3xl pb-10 p-6 md:w-[30vw] mx-auto">We create Perfumery collections for retail chains and leading brands</p>
        </div>
      </div>
    );
};

export default AboutUs;