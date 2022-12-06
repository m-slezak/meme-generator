import React, {useState} from 'react'
import memesData from '../memesData'


const Meme = () => {


    const [allMemeImage, setAllMemeImage] = useState(memesData)
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getRandomImg() {
        const memes = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)
        const url = memes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


  return (
    <main className='meme'>
        <div className='form' >
            <input
            type="text"
            placeholder="Top text"
            className='form--input'
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Bottom text"
            className='form--input'
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
           <button
           className='form--button'
           onClick = {getRandomImg}>
            Get a new meme image  🖼</button>
        </div>
             <div className="meme--container">
                <img src={meme.randomImage} alt="memeImage" className='meme--image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>


    </main>
  )
}

export default Meme