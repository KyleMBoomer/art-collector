import React from 'react'
import '../CSS/Header.css'
import Logo from '../Assets/Logo.png'
import { NavLink, Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className="Header">
      <NavLink to='/' className="home-link">
        <img src={Logo} className="main-logo" aria-label="Art Collector Logo" />
      </NavLink>
      <nav className="Links">
        <Link to='/MainGallery' className="MainGallery-button">Main Gallery</Link>
        <span className="big-slash">/</span>
        <Link to='/MyGallery' className="MyGallery-button"> My Gallery</Link>
      </nav>
    </div>
  )
}

export default Header