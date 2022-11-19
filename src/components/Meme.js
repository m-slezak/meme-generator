import React, {useState} from 'react'
import memesData from '../memesData'


const Meme = () => {

    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")


    function getRandomImg() {
        const memes = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)
        let randomUrl = memes[randomNumber].url
        setMemeImage(randomUrl)
    }

  return (
    <main className='meme'>
        <div className='form'>
            <input type="text" placeholder="Top text" className='form--input'/>
            <input type="text" placeholder="Bottom text" className='form--input'/>
           <button
           className='form--button'
           onClick = {getRandomImg}>
            Get a new meme image  🖼</button>
        </div>

        <img src={memeImage} alt="memeImage" className='meme--image'/>


    </main>
  )
}

export default Meme