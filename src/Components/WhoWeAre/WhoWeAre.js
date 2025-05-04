import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
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
        className="nav-link hover:text-accent ease-in-out duration-200 cursor-pointer lg:h-[80px] flex items-center w-[105px]"
        onClick={toggleDropdown}
      >
        WHO WE ARE
      </div>

      {/* Dropdown */}
      {visible && (
        <div
          className={`absolute ${
            isMobile ? "left-0 w-full" : "left-1/2 transform -translate-x-1/2 w-64"
          } mt-2 z-20`}
        >
          {/* Triangle Roof - Desktop only */}
          {!isMobile && (
            <div className="w-0 h-0 mx-auto border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white opacity-70 -mt-6"></div>
          )}

          {/* Dropdown Content */}
          <div
            className={`text-white border border-white rounded-md px-4 py-3 shadow-lg space-y-2 ${
              isMobile ? "bg-black" : "bg-black bg-opacity-70"
            }`}
          >
            <Link
              className="flex items-center gap-3 font-bold hover:text-accent transition-colors truncate"
              to="/who-we-are"
              onClick={() => setVisible(false)}
            >
              <span>About Us</span>
            </Link>

            <Link
              className="flex items-center gap-3 font-bold hover:text-accent transition-colors truncate"
              to="/portfolio"
              onClick={() => setVisible(false)}
            >
              <span>Portfolio</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhoWeAre;
