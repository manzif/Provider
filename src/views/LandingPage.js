import React, { Component } from "react";
import Bio from "../components/about/About"
import Footer from "../components/common/footer/footer"
import Header from "../components/common/header/Header"
import Language from "../components/language/Language"
import Project from "../components/project/Project"
import Remind from "../components/remind/Remind"
import AOS from 'aos';


export class HomePage extends Component {
    
  componentDidMount(){
    AOS.init({
      duration : 1500,
      disable: "mobile"
    })
  }

  render() {
      return (
        <>
        <div className="landing-container">
            <div className="header"> <Header></Header> </div>
            <div id="language"> <Language></Language> </div>
            <div id="project"> <Project></Project> </div>
            <div> <Bio></Bio> </div>
            <div> <Remind></Remind> </div>
            <div className="footer"> <Footer></Footer> </div>
        </div>
        </>
      );
    }
  }
export default HomePage
