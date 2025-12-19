import React from "react";
import "./Contact.css";
import couple from "../../assets/packege.jpg"; // image add કરજો

const Contact = () => {
  return (
    <div className="contact-page">
     
      {/* Content */}
      <div className="contact-container">
        {/* Left */}
        <div className="contact-left">
          <p>
            Complete the form or email us at
            <span> prysmor@gmail.com</span>.
          </p>
          <p>
            You can also reach us at <span>+91 7016432603</span>.
            We try to respond to all inquiries within 24 hours.
          </p>

          <img src={couple} alt="couple" />
        </div>

        {/* Right */}
        <div className="contact-right">
          <form>
            <label>Your Name *</label>
            <input type="text" />

            <label>Email Address *</label>
            <input type="email" />

            <label>Wedding Date</label>
            <input type="date" />

            <label>Your Message</label>
            <textarea rows="4"></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
