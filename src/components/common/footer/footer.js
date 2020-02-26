import React from "react";
import FooterNav from "./footerNav"

const Footer = () => {
  return (
    <div className="footer">       
            <div className="footer__logo-box">
              <h1>Manzi Fabrice</h1>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <div className="footer__navigation">
                  <FooterNav></FooterNav>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="footer__email">
                  <i className="fa fa-envelope" aria-hidden="true"></i>manzif60@gmail.com
                </div>
              </div>
            </div>
    </div>
  );
};

export default Footer;
