import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoo.jpg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
        </div>

        <ul className='navbar-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
