import React from "react";
import { Link } from "react-scroll"
 
const Remind = () => {

  return (
        <>
        <div className="remind-container">
          <Link activeClass="active"
                to="header-top"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={4000}
              className="back-top" >
              back to top <span><i className="fa fa-arrow-circle-up fa" id="move-up-icon"></i></span>
          </Link>
        </div>
        </>
  );
};

export default Remind;
