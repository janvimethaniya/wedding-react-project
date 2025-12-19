import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main.jsx'
import About from './pages/About/About.jsx'
import Packages from './pages/packeges/Packages.jsx'
import Footer from './footer/Footer.jsx'
import Navbar from './navbar/Navbar.jsx'
import ScrollToTop from "./ScrollToTop/ScrollToTop.jsx";
import Contact from './pages/contact/Contact.jsx'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
<Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  
  )
}

export default App
