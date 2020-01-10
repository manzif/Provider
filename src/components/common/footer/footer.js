import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="inner-footer">
      <div className="footer-items">
        <h1>Telegram</h1>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
      </div>
      <div className="footer-items">
        <h2>Quick Links</h2>
        <div className="border"></div>
        <ul>
              <Link to="/Pricing">
                     <li>Home</li>
              </Link>
              <Link to="/Pricing">
                    <li>Services</li>
              </Link>
              <Link to="/Pricing">
                    <li>About us</li>
              </Link>
              <Link to="/Pricing">
                    <li>Pricing</li>
              </Link>
        </ul>
      </div>
      <div className="footer-items">
        <h2>Products</h2>
        <div className="border"></div>
        <ul>
              <Link to="/Pricing">
                     <li>Products1</li>
              </Link>
              <Link to="/Pricing">
                    <li>Products3</li>
              </Link>
              <Link to="/Pricing">
                    <li>Products2</li>
              </Link>
              <Link to="/Pricing">
                    <li>Products4</li>
              </Link>
        </ul>
      </div>
      <div className="footer-items">
        <h2>Contact us</h2>
        <div className="border"></div>
          <ul>
            <li><i className="fa fa-map-marker" aria-hidden="true"></i>1, XYZ Street, Kigali</li>
            <li><i className="fa fa-phone" aria-hidden="true"></i>+250 78454545</li>
            <li><i className="fa fa-envelope" aria-hidden="true"></i>support@telegram.com</li>
          </ul>
          <div className="social-media">
                <Link to="/Pricing">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="/Pricing">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link> 
                <Link to="/Pricing">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link> 
                <Link to="/Pricing">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
          </div>
      </div>
      </div>
      <div className="footer-buttom">
        2019 &copy;Telegram<span> | All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
