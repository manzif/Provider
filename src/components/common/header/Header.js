import React from "react";
import { Link } from "react-router-dom"
import About from "../../scroll/Scroll"
 
const Header = () => {

  return (
        <>
        <div>
          <div className="weblogo">
            <h1>Telegram</h1>
          </div>
          <div className="menu-wrap">
            <div className="navbarlinks">
                <Link to="/Pricing">
                    Home
                </Link>
                <Link to="/Pricing">
                    Home
                </Link>
                <Link to="/Pricing">
                    Pricing
                </Link>
                <Link to="/Pricing">
                    Pricing
                </Link>
                <button className="marketing-button">Get in Contact</button>
            </div>
          </div>
        </div>
        <div className="header-message">
          <h1>We design extraordinary customer experiences</h1>
          <p>We deliver meaningful and lasting results for our clients by improving the experience of their users. Learn more about our unique approach to services and broad portfolio of work.</p>
          <About></About>
        </div>
        </>
  );
};

export default Header;
