import React from 'react'
import './services.css'
import serviceImage from '../assets/service.jpg'
const Services = () => {
  return (
    <div>
      <div class="services-section">
    {/* <div class="pink-block"></div>
    <div class="dot-block"></div> */}
    <div class="services-images">
        <img src={serviceImage} alt="wedding" />
    </div>
    <div class="services-card">
        <h1>Services of our <span>wedding agency</span></h1>
        <p>Sample text. Click to edit...</p>
        <button>View More</button>
    </div>
</div>

    </div>
  )
}

export default Services
