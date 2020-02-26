import React from "react";
import ProjectImage from "../common/projectImage/projectImage"

const Project = () => {    
  return (
        <>
            <div className="project">
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="project-content-inner"> 
                                <h1>
                                    <div className="project-content-line" data-aos="fade-up" data-aos-delay="500" data-aos-easing="linear">
                                        <div className="project-content-line-inner">The lastest 2 projects</div>
                                    </div>
                                    <div className="project-content-line" data-aos="fade-up" data-aos-delay="700" data-aos-easing="linear">
                                        <div className="project-content-line-inner">I have worked on</div>
                                    </div>
                                </h1>
                                <p>lorem   or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                <div className="btn-row">Explore
                                    <span> <i className="fa fa-arrow-circle-right fa" id="move-right-icon"></i></span>
                                </div>
                        </div>
                    </div>
                    <div className="col-1-of-2"> <ProjectImage></ProjectImage> </div>
                </div>
            </div>
        </>
  );
};

export default Project;
