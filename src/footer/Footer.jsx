import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="wed-footer">

      <div className="footer-top">
        <h2 className="footer-title">💍 Prysmor Wedding Events</h2>
        <p className="footer-sub">
          Making your special day magical, elegant & unforgettable.
        </p>
      </div>

      <div className="footer-content">

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Wedding Planning</li>
            <li>Decoration</li>
            <li>Catering</li>
            <li>Photography</li>
            <li>Makeup & Styling</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>Our Work</li>
            <li>Packages</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Ahmedabad, Gujarat</p>
          <p>📞 +91 7016432603</p>
          <p>✉️ prysmor@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Prysmor Wedding Events — Made with ❤️ for your big day.
      </div>

    </footer>
  );
};

export default Footer;
