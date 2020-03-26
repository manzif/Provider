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
                                <p>This part consists of 2 of the latest projects I have worked on. As Bang Gae said ''Teamwork makes the dream work''. Some of these projects I was in a team that built them. If you want more projects, please get in contact with me. I will send them to you. </p>
                                <div className="btn-row">Explore
                                    <span> <i className="fa fa-arrow-circle-right fa" id="move-right-icon"></i> </span><span> <i className="fa fa-arrow-circle-down fa" id="move-right-down"></i></span>
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
