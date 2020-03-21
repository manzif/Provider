import React from "react";
import Image7 from "../../../assets/transax.png"
import Image8 from "../../../assets/image7.jpg"
import { Link } from "react-router-dom";

const ProjectImage = () => {    
  return (
        <>
            
                        <div className="composition">
                            <Link to="https://www.dailymail.co.uk/sport/football/index.html">
                                <img src={Image7} alt="face" className="composition__link composition__link--1"></img>
                            </Link>
                            <Link to="https://transax.rw/">
                                <img src={Image8} alt="face"  className="composition__link composition__link--2"></img>
                            </Link>
                        </div>
        </>
  );
};

export default ProjectImage;
