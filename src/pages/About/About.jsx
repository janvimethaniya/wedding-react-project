import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import about3 from '../../assets/about3.jpg'
const About = () => {
  return (
    <>
      <div className='about'>
        <h1>Prysmor Wedding!</h1>
      </div>

      <div className='pera'>
        <p>
          With over a decade of experience planning weddings in Central Park, you can trust A Central Park Wedding 
          to flawlessly coordinate your dream wedding ceremony. Since 2012, we’ve expertly managed over 700 weddings
          and elopements and know the ins and outs of getting married in Central Park. <br /><br />

          We’ve curated our Essential Central Park Wedding Package to make it easy to hold your wedding 
          ceremony in Central Park. Our philosophy centers on creating a unique experience for you and your partner. 
          We work closely with you to tailor your wedding to your tastes and aesthetics – ensuring that each detail is 
          perfect. On your wedding day, all you have to do is show up and our team will ensure a seamless and 
          memorable experience for you and your guests. <br /><br />

          In order to provide greater attention to each couple we accept a limited number of weddings per year
          and only book one wedding per day.
        </p>
      </div>

      <div className='aboutimg'>
        <div className='image-about'>
           
          <div className='pink-block'><img src={about} alt="" /></div>
          
         
          
        </div>

        <div className='aboutpara'>
          <div className='heading'>
            <h1>MEET CHRISTA</h1>
          </div>

          <div className='paragraph'>Owner/Lead Planner</div>

          <div className='paraaa'>
            <p>
              Christa is an anthropologist by training who has blended her love for culture and events into a 
              successful career and has become a sought-after expert in the world of wedding planning.
              <br /><br />

              After starting a career in public health, a twist of fate landed her at an event planning firm, 
              where she quickly realized her talent for organizing and executing flawless events. Motivated by her 
              desire to create an unforgettable wedding experience for couples, she founded A Central Park Wedding in 2012.
              <br /><br />

              With over a decade of experience, Christa has become an expert on all that Central Park has to 
              offer—from iconic landmarks to hidden gems. Her expertise and attention to detail create a stress-free 
              and enjoyable experience.
            
            </p>
          </div>
        </div>
      </div>

      
      <div className="review-section">
        <h2 className="review-title">REAL WEDDING STORIES</h2>

        <div className="review-grid">

          <div className="review-card">
            <img src={about1} alt="" />
            <h3>- Sarah & Grace</h3>
            <p>
              From the very first email we knew this was the right wedding planner for us. Everything was 
              handled perfectly including permits, flowers, photography & music.
            </p>
          </div>

          <div className="review-card">
            <img src={about2} alt="" />
            <h3>- Margaret & Abel</h3>
            <p>
              Christa was AMAZING from beginning to end! She made EVERYTHING easy and brought our entire 
              wedding vision to life beautifully.
            </p>
          </div>

          <div className="review-card">
            <img src={about3}alt="" />
            <h3>- Paige & Kevin</h3>
            <p>
              Our wedding day felt effortless and calm thanks to the perfect planning and smooth guidance 
              throughout the day.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
