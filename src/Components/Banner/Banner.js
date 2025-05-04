import React from "react";
import "./Banner.css";
import banner from "../../Images/banner1.jpg";

const Banner = () => {
  return (
    <div className="banner">
    <img src={banner} alt=""/>
    {/* Optional overlay */}
    <div className="overlay"></div>
  </div>
  );
};

export default Banner;
