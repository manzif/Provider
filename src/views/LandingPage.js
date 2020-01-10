import React, { Component } from "react";
import About from "../components/about/About"
import Footer from "../components/common/footer/footer"
import Header from "../components/common/header/Header"
import Manage from "../components/manage/Manage"
import  Message from "../components/message/Message"
import Contact from "../components/contact/Contact"
import Partners from "../components/partners/Partners" 

export class HomePage extends Component {

  render() {

      return (
        <>
        <div className="landingContainer">
            <div className="aboutbro"> <Header></Header> </div>
            <div> <About></About> </div>
            <div className="messagebro"> <Manage></Manage> </div>
            <div> <Message></Message> </div>
            <div className="partnerbro"> <Contact></Contact> </div>
            <div> <Partners></Partners> </div>
            <div className="footer"> <Footer></Footer> </div>
        </div>
        </>
      );
    }
  }
export default HomePage
