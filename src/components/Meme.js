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
        let randomUrl = memes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomUrl
        }))
    }

    function submitHandler(event) {
        event.preventDefault()

    }



  return (
    <main className='meme'>
        <form className='form' onSubmit={submitHandler}>
            <input
            type="text"
            placeholder="Top text"
            className='form--input'
            name="topText"
            value={text.topText}
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder="Bottom text"
            className='form--input'
            name="bottomText"
            value={text.bottomText}
            onChange={handleChange}
            />
           <button
           className='form--button'
           onClick = {getRandomImg}>
            Get a new meme image  🖼</button>
        </form>
        <div className="meme--container">
                <img src={meme.randomImage} alt="memeImage" className='meme--image'/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>


    </main>
  )
}

export default Meme