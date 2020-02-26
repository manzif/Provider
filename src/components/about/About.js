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
        <p>I am a full-stack javascript(PREN) and python engineer. I am passionate about providing the best user experience possible by being professional and providing the best quality work I can. I hold a bachelor’s degree in Computer Engineering at the University of Rwanda in networking. </p>
        <br></br>
        <p>Currently, I am working at Andela as a software Engineer. At Andela, I have been developing different software applications like Converge and the author's haven as well as mentoring software engineers through boot-camps(Technical Team lead) and conducting interviews for new engineers.</p>
        <br></br>
        <p>I have 2 certificates from the CISCO networking academy for IT essential and CCNA routing and switching.</p>
        <br></br>
        <p>I appreciate you taking the time to learn about me, and you can get in with me by the link below. Thanks.</p>
        </div>
        <h1>Manzi Fabrice</h1>
        <div id="move-right-contact">
          <a href="/getincontact" className="about-slide-right">Get in touch with me
          <span> <i className="fa fa-arrow-circle-right fa" id="move-right-icon"></i></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
