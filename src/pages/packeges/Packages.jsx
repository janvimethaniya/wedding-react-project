import React from 'react';
import './packages.css';
import grid from '../../assets/packege.jpg';
import grid5 from '../../assets/pack1.jpg';
import grid1 from '../../assets/pack5.jpg';
import grid6 from '../../assets/pack2.jpg';
import grid7 from '../../assets/pack3.jpg';
import grid8 from '../../assets/pack4.jpg';
const Packages = () => {
  return (
    <div className='packages'>
      <div className='packages-heading'>
        <h1>Prysmor Wedding Packages</h1>
      </div>

      <div className='images1'>
        {/* Left image */}
        <div className='gridimages'>
          <img src={grid} alt="Wedding 1" />
        </div>

        {/* Middle block text */}
        <div className='gridimages'>
          <p>
            We offer beautifully curated wedding packages designed to make your special day truly unforgettable. From intimate ceremonies to grand celebrations, our expert team ensures every detail is planned with perfection, elegance, and care.
           </p>
        </div>

        {/* Right image */}
        <div className='gridimages'>
          <img src={grid1} alt="Wedding 2" />
        </div>
      </div>

      {/* Main Package Details */}
      <div className='package-details'>
        <h2>Essential Central Park Wedding Package</h2>
        <h3>Starting at Rs.25,950</h3>
        <ul>
          <li>Central Park wedding permit</li>
          <li>Wedding planning services</li>
          <li>Walkthrough of wedding ceremony</li>
          <li>
            Three hours of on-site wedding coordination: secure ceremony area,
            greet and usher your guests, organize processional, coordinate with vendors, organize photos
          </li>
          <li>Officiant to perform personalized ceremony</li>
          <li>Two hours of professional photography</li>
          <li>Online gallery of processed, print-quality images</li>
          <li>Seasonal round bridal bouquet of your choosing (*Style upgrade available)</li>
          <li>Boutonniere of your choosing</li>
        </ul>
      </div>

      {/* Three Cards Section */}
      <div className='package-cards'>
        <div className='card'>
          <img src={grid7} alt="Planning" />
          <div className='overlay'>
            <h3>PLANNING</h3>
            <p>Christa will be your dedicated planner from the moment you book, guiding you through every step of the planning process.</p>
          </div>
        </div>

        <div className='card'>
          <img src={grid6} alt="Rehearsal" />
          <div className='overlay'>
            <h3>REHEARSAL</h3>
            <p>On-site rehearsal prior to your wedding day to review all details and run through the ceremony.</p>
          </div>
        </div>

        <div className='card'>
          <img src={grid5} alt="Coordination" />
          <div className='overlay'>
            <h3>COORDINATION</h3>
            <p>On your wedding day, Christa and her staff will be there on site to flawlessly execute the day as planned!</p>
          </div>
        </div>
      </div>

      {/* ⭐ NEW: OPTIONAL PACKAGE UPGRADES SECTION ⭐ */}
      <div className="optional-upgrades">
        <h2>OPTIONAL PACKAGE UPGRADES</h2>
        <p className="subtitle">Please contact us for preferred rates</p>

        <ul>
          <li>FLOWERS: Bouquets, corsages, boutonnieres and reception flowers</li>
          <li>HUPPAH RENTAL: Handheld huppah with birch poles and white satin canopy</li>
          <li>LIVESTREAM SERVICES: Professional livestream services with on-site camera operator</li>
          <li>MUSIC: Acoustic musicians to play ceremony</li>
          <li>PHOTOGRAPHY: Additional hours of photography coverage</li>
          <li>STYLING: On-site hair and makeup artists for the bride and wedding party</li>
          <li>TRANSPORTATION: Mercedes Sprinter Van, Vintage Taxicab, Cadillac Escalade, Coach Bus</li>
          <li>VIDEOGRAPHY: Videography packages and edited highlight videos</li>
          <li>
            WEDDING RECEPTION: Picnic wedding reception in the park; Day-of Coordination services; Private cruise around Manhattan
          </li>
          <li>
            WEDDING CAKE & COOKIES: Custom cakes and cookies available to enjoy in the park or at your reception venue
          </li>
        </ul>
      </div>
      <div className="details-booking">
  <div className="details-left">
    <img
      src={grid8}
      alt="wedding couple"
    />
  </div>

  <div className="details-right">
    <h2>Additional Details & How to Book</h2>

    <p className="sub-text">
      We are currently accepting bookings for 2025 and 2026<br />
      Central Park wedding packages
    </p>

    <ul>
      <li>Conservatory Garden wedding permits are an additional $1,000</li>
      <li>Signed contract and 50% retainer will secure our planning services</li>
      <li>Package balance is due one month before your wedding date</li>
      <li>Payments can be made by check, Zelle or credit card</li>
      <li>Please read our Frequently Asked Questions for more information</li>
    </ul>

    <button className="details-btn">CONTACT US TODAY →</button>
  </div>
</div>

    </div>
  );
};

export default Packages;
