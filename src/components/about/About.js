import React from "react";
import Image7 from "../../assets/image10.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutFirst">
        <h1>With you from first sale to full scale</h1>
        <h3 align="center">One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.</h3>
      </div>
      <div className="aboutImage">
        <img src={Image7} width="30%" height="40%" alt="face"></img>
      </div>
      <div className="aboutText">
        <h1 style={{color: "#5c6ac4"}}>Please -- </h1>
        <h1>work with us</h1>
        <h3>One platform with all the ecommerce and point of sale features</h3>
        <Link to="/Pricing">
          Explore our services to start 
        </Link>
      </div>
    </div>
  );
};

export default About;
