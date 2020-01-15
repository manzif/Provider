import React from "react";
import Image7 from "../../assets/pp.jpeg"

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="about-profile">
          <img src={Image7} alt="face"></img>
        <h2>Hello,</h2>
      </div>
      <div className="about-text">
        <div className="about-text-paragraph">
        <p>I’m a web designer, developer and teacher with a great passion for building things with code. I live in beautiful Algarve in the south of Portugal, where I create amazing websites and apps, just like you're gonna build in one of my courses.</p>
        <br></br>
        <p>As an online instructor, I get to mix my two great passions: building things with code and teaching. If I had to describe my coding courses in one sentence, I would say “These are exactly the courses I wish I had when I first started with web design and development”.</p>
        </div>
        <h1>Manzi Fabrice</h1>
        <div id="move-right-contact">
          <a href="/pricing" className="about-slide-right">Get in touch with me
          <span> <i className="fa fa-arrow-circle-right fa" id="move-right-icon"></i></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
