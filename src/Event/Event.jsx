import React from 'react'
import './event.css'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'
const Event = () => {
  return (
    <div className='color'>
        <div className='heading'>
          <h1> Our events innovates,rather  <br />than follow trends</h1> 
          <p>Duits auts irure in Lorem ipsum dolor siteveniet unde modi deleniti illo soluta vel minus officiis. <br />Exercitationem officia inventore incidunt?</p>
        </div>
      <div className='images'>
        <div className='wedding'>
            <img src={image1}alt="" />
            <p>Destination Wedding</p>
        </div>
        <div className='wedding'>
            <img src={image2} alt="" />
            <p>Complete Worry-free Package</p>
        </div>
        <div className='wedding'>
            <img src={image3} alt="" />
            <p>Partial Package</p>
        </div>
        <div className='wedding'>
            <img src={image4} alt="" />
            <p> Wedding Ceremonies</p>
        </div>
        <div className='wedding'>
            <img src={image5} alt="" />
            <p>Sample Headline</p>
        </div>
        <div className='wedding'>
            <img src={image6} alt="" />
            <p>Sample Headline</p>
        </div>
      </div>
      <div className='branding'>
        <h1>We Do Brandings</h1>
        <div className='para'>
        <p>Experience a magical destination wedding crafted with elegance, love, and unforgettable moments <br />
        Beautifully organized ceremonies that reflect your traditions, emotions, and personal style. <br />
    Capturing every beautiful moment so your wedding memories stay alive forever.</p>

        <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Event
