import React from 'react'
import './nav.css'
import Logo from '../../assets/brand_logo.png'

const Nav = () => {
  return (
    <div className='nav-color'>
      <div className="container">
       <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-context">
          <ul className="nav-link">
            <li className="nav-links">
              <a href="#home">Home</a>
            </li>
            <li className="nav-links">
              <a href="#location">location</a>
            </li>
            <li className="nav-links">
              <a href="#about">about</a>
            </li>
            <li className="nav-links">
              <a href="#contact">contact</a>
            </li>
            
          </ul>
        </div>
        <div className="login">
          <a href="#">Login</a>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Nav