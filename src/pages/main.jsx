import React from 'react'
import Home from '../home/Home.jsx'
import Services from '../service/Services.jsx'
import Event from '../Event/Event.jsx'  
import Exclusive from '../exclusive/Exclusive.jsx'
import Weddingsection from '../weddingsection/Weddingsection.jsx'
import Contact from '../contact/Contact.jsx'
import Footer from '../footer/Footer.jsx'
import { NavLink } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'

const main = () => {
  return (
    <div>
        <Navbar />
       <Home /> 
     <Services />
     <Event />
     <Exclusive />
     <Weddingsection />
     {/* <Contact /> */}
  
    </div>
  )
}

export default main
