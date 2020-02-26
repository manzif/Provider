import React from "react";
import { Link } from "react-scroll"

const Remind = () => {
  return (
    <>
        <div className="remind">
        <Link activeClass="active"
                    to="header-top"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={0}
                >
                Back to top
                <span> <i className="fa fa-arrow-circle-up fa" id="move-right-up"></i></span>
        </Link>
        </div>
    </>
  );
};

export default Remind;
