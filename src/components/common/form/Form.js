import React from "react";

const Form = ({
 onSubmit, 
 fullname, 
 email, 
 telephone, 
 message, 
 onChange
}) => {
 
  return (
      
             <form onSubmit={onSubmit} className="form">
                        <div className="u-center-text">
                            <h2 className="form__text u-margin-bottom-medium">Get in contact with me</h2>
                        </div>
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Full name" id="name"
                            name="fullname"
                            onChange={onChange}
                            value={fullname}
                            ></input>
                            <label htmlFor="name" className="form__label">Full Name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="Email address" id="email"
                            name="email"
                            onChange={onChange}
                            value={email}
                            ></input>
                            <label htmlFor="email" className="form__label">Email address</label>
                        </div>
                        <div className="form__group">
                            <input className="form__input" placeholder="Telephone" id="telephone"
                            name="telephone"
                            onChange={onChange}
                            value={telephone}
                            ></input>
                            <label htmlFor="telephone" className="form__label">Telephone</label>
                        </div>
                        <div className="form__group">
                            <textarea type="integer" rows="10" className="form__textarea" placeholder="Remember, be nice!" id="textarea"
                            name="message"
                            onChange={onChange}
                            value={message}
                            ></textarea>
                            <label htmlFor="textarea" className="form__label">Message</label>
                        </div>
                        <button className="form__bottom-1">Submit</button>
            </form>
    );
    };
export default Form;
