import React from "react";
import Image7 from "../../../assets/converge.png"
import Image8 from "../../../assets/ah.png"

const ProjectImage = () => {    
  return (
        <>
            <div className="composition">
                <a href="https://ah-lobos-frontend.herokuapp.com/">
                    <img src={Image8} alt="face" className="composition__link composition__link--1"></img>
                </a>
                <a href="https://converge-staging.andela.com/">
                    <img src={Image7} alt="face"  className="composition__link composition__link--2"></img>
                </a>
            </div>
        </>
  );
};

export default ProjectImage;
