import React, { Component } from "react";
import Bio from "../components/about/About"
import Footer from "../components/common/footer/footer"
import Header from "../components/common/header/Header"
import Language from "../components/language/Language"
import  Message from "../components/message/Message"
import Contact from "../components/contact/Contact"
import Remind from "../components/Remind/Remind"

export class HomePage extends Component {

  render() {
      return (
        <>
        <div className="landingContainer">
            <div className="header"> <Header></Header> </div>
            <div> <Bio></Bio> </div>
            <div className="programming-language"> <Language></Language> </div>
            <div> <Message></Message> </div>
            <div className="partnerbro"> <Contact></Contact> </div>
            <div> <Remind></Remind> </div>
            <div className="footer"> <Footer></Footer> </div>
        </div>
        </>
      );
    }
  }
export default HomePage
