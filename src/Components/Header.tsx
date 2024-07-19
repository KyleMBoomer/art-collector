import React from 'react'
import '../CSS/Header.css'
import Logo from '../Assets/Logo.png'
import { NavLink, Link } from 'react-router-dom'



const Header = () => {
    return (
        <div className="Header">
            <NavLink to='/' className="home-link">
        <img src={Logo} className="main-logo" alt="Logo" />
            </NavLink>
        <nav className="Links">
          <Link to='/MainGallery' className="MainGallery-button">Main Gallery</Link>
          <p className="big-slash">/</p>
          <Link to='/MyGallery' className="MyGallery-button"> My Gallery</Link>
        </nav>
      </div>
    )
}

export default Header