import React, { Component } from "react";
import PropTypes from 'prop-types'
import { toast } from "react-toastify";

import  Form  from "../components/common/form/Form"
import { connect } from 'react-redux';
import { addMessage } from '../redux/actions/messageActions';


export class Getincontact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fullname: "",
        email: "",
        telephone: "",
        message: "",
      }
    }
  }

  componentWillReceiveProps(nexProps) {
    console.log(nexProps)
    if (nexProps.message.status === 200) {
      this.setState({ fullname: "", email: "", telephone: "", message: "" });
      return toast.success(nexProps.message.shoutout, {
        className: 'toast-success-container toast-success-container-after'})
    }
    if (nexProps.message.status === 400) {
      return toast.error(nexProps.message.message, {
        className: 'toast-error-container toast-error-container-after'})
    }
  }

 
  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = e => {
    e.preventDefault();
    const message  = {
      fullname: this.state.fullname,
      email: this.state.email,
      telephone: this.state.telephone,
      message: this.state.message
    }
    this.props.addMessage(message);
  }

  render() {
      return (
        <>
        <div className="popup">
            <a href="/" className="popup__close">&times;</a>
                <div className="popup__content">
                    <Form className="submtest"
                    fullname={this.state.fullname}
                    email={this.state.email}
                    telephone={this.state.telephone}
                    message={this.state.message}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    ></Form>
                </div>
            </div>
        </>
      );
    }
  }


  Getincontact.propTypes = {
    addMessage: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired
  }
  export const mapStateToProps = state => ({
    message: state.messages.message
  });

export default connect(mapStateToProps, { addMessage })(Getincontact);
