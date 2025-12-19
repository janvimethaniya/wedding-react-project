import React from "react";
import "./Wedding.css";
import cakeImage from "../assets/wedding.jpg"; 
import bouquetImage from "../assets/buket.jpg"; 

const Weddingsection = () => {
  return (
    <div className="wedding-section">
      <div className="left-image">
        <img src={cakeImage} alt="Wedding Cake" />
        <h2>Checklist, Budget tool, Wedding Website, and more!</h2>
      </div>

      <div className="right-text">
        <h2>Free Online Wedding  <br />Planning Tools</h2>
        <p>
          We are proud of our international reputation for creating exclusive
          events and delivering first-class service with discretion.
        </p>
        <button>Read More</button>
        <p className="details">
          From our London headquarters we enjoy working with diverse clients
          from across the globe. Our bespoke international service is tailored
          to their individual needs. Our discerning, international clientele
          include aristocrats, people of note, high net-worth individuals and
          families seeking unique and meaningful celebrations. We strive to be
          the best at what we do - and several prestigious international
          publications have been kind enough to state that we are.
        </p>
      </div>

      <div className="right-image">
        <img src={bouquetImage} alt="Wedding Bouquet" />
      </div>
    </div>
  );
};

export default Weddingsection;
