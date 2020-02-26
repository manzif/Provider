import React, { Component } from "react";
import  Form  from "../components/common/form/Form"

export class Getincontact extends Component {
  render() {
      return (
        <>
        <div className="popup">
            <a href="/" className="popup__close">&times;</a>
                <div className="popup__content">
                    <Form></Form>
                </div>
            </div>
        </>
      );
    }
  }
export default Getincontact
