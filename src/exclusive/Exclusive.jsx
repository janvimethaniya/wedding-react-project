import React from 'react'
import './Exclusive.css'
import image from '../assets/exclusive.jpg'
const Exclusive = () => {
  return (
    <div className='exclusive'>
        <img src={image} alt="" />
      <div className='love'>
        <h1>We love exclusive  <br />weddings</h1>
       
            <p>Duis auts irier dolor in reprehender in <br /> voluprate velit esse cillum dolor eu fugiat <br /> nulla pariature.</p>
       <button>READ MORE</button> 
      </div>
    </div>
  )
}

export default Exclusive
