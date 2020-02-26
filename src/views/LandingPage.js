import React, { Component } from "react";
import Bio from "../components/about/About"
import Footer from "../components/common/footer/footer"
import Header from "../components/common/header/Header"
import Language from "../components/language/Language"

export class HomePage extends Component {
  render() {
      return (
        <>
        <div className="landing-container">
            <div className="header"> <Header></Header> </div>
            <div className="programming-language"> <Language></Language> </div>
            <div> <Bio></Bio> </div>
            <div className="footer"> <Footer></Footer> </div>
        </div>
        </>
      );
    }
  }
export default HomePage
