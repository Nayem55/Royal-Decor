import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    web: '',
    email: '',
    telephone: '',
    comments: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Request for Information from Royal Decor and Staging`;
    const body = `Name: ${formData.name}\nCompany: ${formData.company}\nCountry: ${formData.country}\nWebsite: ${formData.web}\nEmail: ${formData.email}\nTelephone: ${formData.telephone}\nComments: ${formData.comments}`;
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@royaldecor.com.au&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="relative bg-white pt-32 pb-12 px-6 sm:px-12 lg:px-20 mt-10 z-10">
      {/* Triangle roof */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-b-[100px] border-b-[#F7F2E9] z-20"></div>

      <div className="max-w-3xl mx-auto bg-[#F7F2E9] p-8 rounded-b-2xl shadow-lg z-30 relative">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Request more information about our home staging and decor services or download our brochure.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { id: 'name', label: 'Name', required: true },
            { id: 'company', label: 'Company' },
            { id: 'country', label: 'Country', required: true },
            { id: 'web', label: 'Website' },
            { id: 'email', label: 'Email', type: 'email', required: true },
            { id: 'telephone', label: 'Telephone', required: true },
          ].map(({ id, label, type = 'text', required }) => (
            <div key={id}>
              <label htmlFor={id} className="block font-medium text-gray-700 mb-1">
                {label}{required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required={required}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
              />
            </div>
          ))}

          {/* Comments */}
          <div>
            <label htmlFor="comments" className="block font-medium text-gray-700 mb-1">
              Comments<span className="text-red-500">*</span>
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
            />
          </div>

          {/* Legal Terms */}
          <div className="flex items-start">
            <input type="checkbox" id="terms" required className="mt-1 mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I have read and accept the legal terms.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
