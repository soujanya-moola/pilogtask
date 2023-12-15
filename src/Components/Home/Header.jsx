import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-bootstrap'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    // const [showNavbar, setShowNavbar] = useState(true)

    // const handleShowNavbar = () => {
    //   setShowNavbar(showNavbar)
    // }
    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  return (
    <div>
      {/* <nav className="navbar">
      <div className="container">
        <div className="logo">
         <img src={require('./logo-header.png')}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon/>
        </div>
        <div className="nav-elements">
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav> */}
        <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <img src={require('./logo-header.png')}/>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <MenuIcon/>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Header
