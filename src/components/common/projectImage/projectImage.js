import React from "react";
import Image7 from "../../../assets/converge.png"
import Image8 from "../../../assets/ah.png"
import Image9 from "../../../assets/converge-small.png"

const ProjectImage = () => {    
  return (
        <>
            <div className="composition">
                <a href="https://ah-lobos-frontend.herokuapp.com/">
                    <img srcSet={`${Image9} 1746w, ${Image8} 2880w`} sizes="(max-width:900px 20vw, max-width:600px 30vw)" src={Image8} alt="face" className="composition__link composition__link--1"></img>
                </a>
                <a href="https://converge-staging.andela.com/">
                    <img srcSet={Image7} alt="face"  className="composition__link composition__link--2"></img>
                </a>
            </div>
        </>
  );
};

export default ProjectImage;
