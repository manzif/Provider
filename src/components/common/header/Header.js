import React from "react";
import { Link } from "react-scroll"

const Header = () => {
  return (
        <>
        <div id="header-top">
          <div className="weblogo">
            <h1>Telegram</h1>
          </div>
          <div className="menu-wrap">
            <div className="navbarlinks">
                <a href="/pricing">Home</a>
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={1500}
                >
                Bio
                </Link>
                <a href="/pricing">Pricing</a>
                <a href="/pricing">Home</a>
                <button className="marketing-button">Get in Contact</button>
            </div>
          </div>
        </div>
        <div className="header-message">
          <h1>We design extraordinary customer experiences</h1>
          <p>We deliver meaningful and lasting results for our clients by improving the experience of their users. Learn more about our unique approach to services and broad portfolio of work.</p>
          <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={1500}
             className="btn btn-white" >
            <span><i className="fa fa-arrow-circle-down fa-2x" id="move-down-icon"></i></span>
          </Link>
        </div>
        </>
  );
};

export default Header;
