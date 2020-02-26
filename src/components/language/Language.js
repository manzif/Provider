import React from "react";
import { FaPython, FaCss3Alt, FaHtml5,
   FaReact, FaFlask, FaDocker,
    FaSass} from 'react-icons/fa';
import { DiJavascript1, DiRedis, DiNodejs, DiPostgresql, DiMongodb } from 'react-icons/di';
import Popup from "reactjs-popup";
import Moretools from "../../views/Moretools"

const Language = () => {
  return (
    <>
    <div className="programming-language">
    <div className="section-language">  
        <div className="u-center-text">
          <h2 className="heading-primary">
            Programming Languages and Tools
          </h2>
        </div>
        <div className="languages-container">
          <div className="row">
            <div className="col-1-of-4" data-aos="fade-up-right">
              <div className="language-box">
                <DiJavascript1 className="language-box__icon icon-javascript"></DiJavascript1>
                <h3 className="heading-tertiary u-margin-bottom-small">Javascript</h3>
                <p className="language-box__text">
                I have been using javascript for more than 3 years. I am capable of working with different frameworks like Node.js and React. I have also worked with different testing tools.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="language-box">
                <FaPython className="language-box__icon icon-python"></FaPython>
                <h3 className="heading-tertiary u-margin-bottom-small">Python</h3>
                <p className="language-box__text">
                This is my newly adopted programming language. I have 1-2 years of experience in Python. I have worked with the Django framework and python flask. I have worked with Pytest too.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="language-box">
                <FaHtml5 className="language-box__icon icon-html"></FaHtml5>
                <h3 className="heading-tertiary u-margin-bottom-small">Html</h3>
                <p className="language-box__text">
                Html is the most basic building block of the Web. Because it defines the meaning and structure of the web content. I have been using it for 4-5years with more than 20 projects. 
                </p>
              </div>
            </div>
            <div className="col-1-of-4" data-aos="fade-up-left">
              <div className="language-box">
                <FaCss3Alt className="language-box__icon icon-css"></FaCss3Alt>
                <h3 className="heading-tertiary u-margin-bottom-small">Css</h3>
                <p className="language-box__text">
                  Like Html, I have experience of  4-5 years using CSS. I can work with Sass, bootstrap, semantic-UI, and Material-UI.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools-container">
          <div className="row">
              <div className="col-1-of-8">
                <div className="tool-box">
                  <DiNodejs className="tool-box__icon icon-javascript"></DiNodejs>
                  <h3 className=".heading-tertiary-tools">Node</h3>
                </div>
              </div>
              <div className="col-1-of-8">
                <div className="tool-box">
                  <FaReact className="tool-box__icon icon-javascript"></FaReact>
                  <h3 className=".heading-tertiary-tools">React</h3>
                </div>
              </div>
              <div className="col-1-of-8">
                <div className="tool-box">
                  <FaFlask className="tool-box__icon icon-javascript"></FaFlask>
                  <h3 className=".heading-tertiary-tools">Flask</h3>
                </div>
              </div>
              <div className="col-1-of-8">
                <div className="tool-box">
                  <FaDocker className="tool-box__icon icon-javascript"></FaDocker>
                  <h3 className=".heading-tertiary-tools">Docker</h3>
                </div>
              </div>
              <div className="col-1-of-8">
                <div className="tool-box">
                  <FaSass className="tool-box__icon icon-javascript"></FaSass>
                  <h3 className=".heading-tertiary-tools">Sass</h3>
                </div>
              </div>
              <div className="col-1-of-8">
                <div className="tool-box">
                  <DiRedis className="tool-box__icon icon-javascript"></DiRedis>
                  <h3 className=".heading-tertiary-tools">Redis</h3>
                </div>
              </div>
              <div className="col-1-of-8">
                <div className="tool-box">
                  <DiPostgresql className="tool-box__icon icon-javascript"></DiPostgresql>
                  <h3 className=".heading-tertiary-tools">PostgreSQL</h3>
                </div>
              </div>
              <div className="col-1-of-8">
                <div className="tool-box">
                  <DiMongodb className="tool-box__icon icon-javascript"></DiMongodb>
                  <h3 className=".heading-tertiary-tools">MongoDb</h3>
                </div>
              </div>
          </div>
        </div>
          <div className="more-tools">
              <Popup trigger={<button className="more-tools-button">More tools
              <span> <i className="fa fa-arrow-circle-right fa" id="move-right-icon"></i></span>
              </button>}>
                <Moretools></Moretools>
              </Popup>
          </div>
    </div>
    </div>
    </>
  );
};

export default Language;
