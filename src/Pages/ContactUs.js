import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div id="contact">
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://dlifeinteriors.com/wp-content/uploads/2022/07/interior-design-companies-in-Coimbatore-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We’re here to bring your vision to life — reach out for
            consultations, questions, or collaborations.
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactUs;
