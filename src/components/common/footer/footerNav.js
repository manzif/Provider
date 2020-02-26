import React from "react";

const FooterNav = () => {
  return (
        <ul className="footer__list">
            <li className="footer__item">
                <a href="https://linkedin.com/in/manzi-fabrice-69726315a/" className="footer__link footer__link-1">
                    <i className="fa fa-linkedin" aria-hidden="true" id="link-1"></i>
                </a>
            </li>
            <li className="footer__item">
                <a href="https://twitter.com/manzif6" className="footer__link footer__link-2">
                    <i className="fa fa-twitter" aria-hidden="true" id="link-2"></i>
                </a> 
            </li>
            <li className="footer__item">
                <a href="https://www.instagram.com/manzif6/?hl=en" className="footer__link link-3">
                    <i className="fa fa-instagram" aria-hidden="true" id="link-3"></i>
                </a> 
            </li>
            <li className="footer__item">
                <a href="https://github.com/manzif" className="footer__link link-4">
                    <i className="fa fa-github" aria-hidden="true" id="link-4"></i>
                </a> 
            </li>
        </ul>
  );
};
export default FooterNav;
