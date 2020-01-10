import React from "react";
import { Link } from "react-scroll"

const About = () => {
  return (
    <div>
      <Link activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={0}
      duration={1500}
    >
  <i className="fa fa-long-arrow-down fa-2x" id="long-arrow"></i>
  </Link>
    </div>
  );
};

export default About;
