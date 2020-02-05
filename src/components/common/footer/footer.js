import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
        <li>2019 &copy;Telegram</li>
        <ul>
          <li>
                  <a href="https://linkedin.com/in/manzi-fabrice-69726315a/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
          </li>
          <li>
                  <a href="https://twitter.com/manzif6">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a> 
          </li>
          <li>
                  <a href="https://www.instagram.com/manzif6/?hl=en">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a> 
          </li>
        </ul>
        <li><i className="fa fa-envelope" aria-hidden="true"></i>manzif60@gmail.com</li>
    </div>
  );
};

export default Footer;
