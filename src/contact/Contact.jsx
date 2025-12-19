import React from 'react'
import "./contact.css"
import bouquet from "../assets/buket.jpg";
const Contact = () => {
  return (
    <div>
       <div className="contact-wrapper">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p className="small-text">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>

        <div className="input-row">
          <input type="email" placeholder="Enter a valid email address" />
          <input type="text" placeholder="Enter your Name" />
        </div>

        <div className="checkbox-row">
          <input type="checkbox" />
          <label>I accept the <span>Terms of Service</span></label>
        </div>

        <textarea placeholder="Enter your message"></textarea>

        <button className="submit-btn">SUBMIT</button>
      </div>

     
      <div className="right-content">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="small-info">
          <p>
            SAMPLE TEXT. CLICK TO SELECT THE TEXT BOX. CLICK AGAIN OR DOUBLE CLICK TO START EDITING THE TEXT.
          </p>

          <img src={bouquet} alt="Bouquet" />
        </div>
      </div>

    </div>
    </div>
  )
}

export default Contact
