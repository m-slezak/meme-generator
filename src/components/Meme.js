import React, {useState} from 'react'
import memesData from '../memesData'


const Meme = () => {

    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImage, setAllMemeImage] = useState(memesData)
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })



    function getRandomImg() {
        const memes = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)
        let randomUrl = memes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomUrl
        }))
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

        <img src={meme.randomImage} alt="memeImage" className='meme--image'/>
    </main>
  )
}

export default Meme