import React from 'react'
import logo from '../images/react-logo.png'

export default function Navbar() {
  return (
    <div className='nav-container'>
      <nav>
        <div className="logo-and-name">
          <img src={logo}></img>
          <h2>ReactFacts</h2>
        </div>
        <div>
          <h3>React Course - Project 1</h3>
        </div>
      </nav>
    </div>
    
  )
}