import React from 'react'
import memesData from "../memesData"

export default function Meme() {

  let [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  let [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    let index = Math.floor(Math.random() * memesArray.length)
    let url = memesArray[index].url
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  return (
    <div className="meme">
      <div className="container">

        <div className="form">
          <div className="form-inputs-container">
            <input className="form-input" type="text" placeholder="top text"></input>
            <input className="form-input" type="text" placeholder="bottom text"></input>
          </div>
          <button onClick={getMemeImage}>Get a new meme image</button>
        </div>

        <div className='meme-image'>
          <img src={meme.randomImage} alt="meme"></img>
        </div>

      </div>
    </div>
  )
}