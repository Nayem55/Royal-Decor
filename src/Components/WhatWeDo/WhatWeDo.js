import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    if (isMobile) {
      setVisible((prev) => !prev);
    }
  };

  return (
    <div
      onMouseEnter={() => !isMobile && setVisible(true)}
      onMouseLeave={() => !isMobile && setVisible(false)}
      className="relative w-full"
    >
      {/* Main Navigation Link */}
      <div
        className="nav-link hover:text-accent ease-in-out duration-200 cursor-pointer lg:h-[80px] flex items-center w-full"
        onClick={toggleDropdown}
      >
        WHAT WE DO
      </div>

      {/* Dropdown */}
      {visible && (
        <div
          className={`absolute ${
            isMobile ? "left-0 w-full" : "left-1/2 transform -translate-x-1/2 w-64"
          } mt-2 z-20`}
        >
          {/* Triangle Roof - Hidden on mobile */}
          {!isMobile && (
            <div className="w-0 h-0 mx-auto border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white opacity-70 -mt-6"></div>
          )}

          <div className="bg-black sm:bg-opacity-70 text-white border border-white rounded-md px-4 py-3 shadow-lg space-y-2">
            <Link
              className="block font-bold hover:text-accent transition-colors truncate"
              to="/home-staging"
              onClick={() => setVisible(false)}
            >
              Home Staging
            </Link>
            <Link
              className="block font-bold hover:text-accent transition-colors truncate"
              to="/interior-design"
              onClick={() => setVisible(false)}
            >
              Interior Styling
            </Link>
            <Link
              className="block font-bold hover:text-accent transition-colors truncate"
              to="/property-makeover"
              onClick={() => setVisible(false)}
            >
              Property Makeovers
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatWeDo;
