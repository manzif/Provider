import React from "react";

const Form = () => {
  return (
             <form action="#" className="form">
                        <div className="u-center-text">
                            <h2 className="form__text u-margin-bottom-medium">Get in contact with me</h2>
                        </div>
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Full name" id="name" required></input>
                            <label for="name" className="form__label">Full Name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" class="form__input" placeholder="Email address" id="email" required></input>
                            <label for="email" className="form__label">Email address</label>
                        </div>
                        <div className="form__group">
                            <input type="tel" className="form__input" placeholder="Telephone" id="telephone" required></input>
                            <label for="telephone" className="form__label">Telephone</label>
                        </div>
                        <div className="form__group">
                            <textarea type="integer" rows="10" className="form__textarea" placeholder="Remember, be nice!" id="textarea" required></textarea>
                            <label for="textarea" className="form__label">Message</label>
                        </div>
                        <button className="form__bottom-1">Submit</button>
            </form>
    );
    };
export default Form;
