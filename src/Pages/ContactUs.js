import React from "react";
import banner from '../Images/contact-banner.jpg'
import ContactForm from "../Components/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh]">
        <img className="w-[100vw] h-[100vh]" alt="" src={banner}/>
        {/* Optional overlay */}
        <div className="overlay"></div>
      </div>
      {/* <p className="text-center bg-[#fcfcfc] p-10">Contact Us</p> */}
      <ContactForm />
    </div>
  );
};

export default ContactUs;
