import React from "react";
import { Link } from "react-scroll"
import Popup from "reactjs-popup";
import Getincontact from "../../../views/Getincontact"

const Header = () => {    
  return (
        <>
        <div id="header-top">
          <div className="weblogo">
            <h1>Manzi Fabrice</h1>
          </div>
          <div className="menu-wrap">
            <div className="navbarlinks">
                <Link activeClass="active"
                    to="header-top"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={1000}
                >
                Home
                </Link>
                <Link activeClass="active"
                    to="language"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={1000}
                >
                Language
                </Link>
                <Link activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={2000}
                >
                Portfolio
                </Link>
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={2000}
                >
                Bio
                </Link>
                
                <Popup trigger={<button className="marketing-button">Get in Contact</button>}>
                <Getincontact></Getincontact>
                </Popup>
            </div>
          </div>
        </div>
        <div className="header-message">
          <h1>Welcome to my page</h1>
          <p>I created this place to showcase my journey so far. This page contains my skills, experiences, and hobbies. I made this page accessible by everyone because I want to work with you or hear from you.</p>
          <Link activeClass="active"
                to="language"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={1300}
             className="btn btn-white" >
            <span><i className="fa fa-arrow-circle-down fa-2x" id="move-down-icon"></i></span>
          </Link>
        </div>
        </>
  );
};

export default Header;
