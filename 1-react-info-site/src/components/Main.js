import React from 'react'
import logo from '../images/react-logo.png'

export default function Main() {
  return (
    <div className='main'>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, inlcuding mobile apps</li>
      </ul>
      <img className='logo' src={logo}></img>
    </div>
  )
}