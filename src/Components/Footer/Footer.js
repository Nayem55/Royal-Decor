// src/Components/Footer/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../Images/Logo.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Royal Decor Logo"
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-2xl font-semibold">
                Royal Decor and Staging PTY LTD
              </h3>
            </div>
            <p className="text-gray-400 ms-4">
              Professional home staging and interior design services that
              transform your space and elevate your living experience. We cater
              to both residential and commercial spaces.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold my-4">services</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Home Staging</li>
              <li>Interior Styling</li>
              <li>Property Makeovers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold my-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@royaldecor.com.au"
                  className="hover:underline"
                >
                  info@royaldecor.com.au
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li>Address: 123 Royal St, Sydney, NSW</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold my-4">Follow Us</h3>
            <div className="flex space-x-6 text-2xl text-gray-400">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 Royal Decor and Staging PTY LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
