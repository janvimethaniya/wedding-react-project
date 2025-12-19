import React from 'react'
import './home.css'
import home from '../assets/home.jpg'

const Home = () => {
  return (
    <div className='hero-section'>
      {/* <div className='pink-block'></div> */}
       <div className='hero-image'>
        <img src={home} alt="wedding" />
      </div>
      <div className='dot-block'></div>
      <div className='content-card'>
        <h1>NYC Event & <br /><span>Wedding Planner</span></h1>
        <p>
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam nunc justo sagittis suscipit ultrices.
        </p>
        <button>READ MORE</button>
      </div>

    </div>
  )
}

export default Home
