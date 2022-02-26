import React from "react"
import Header from "./Header"
import Buttons from "./Buttons"
import Info from "./Info"
import Footer from "./Footer"
import image from  "../images/laura-smith.jpeg"

export default function Card() {
  return (
    <div className="card">
      <img className="laura-pic" src={image}></img>
      <div className="padding-div">
        <Header />
        <Buttons />
        <Info />
      </div>
      <Footer />
    </div>
  )
}