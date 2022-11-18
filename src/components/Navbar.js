import React from 'react'
import trollFace from '../assets/troll-face.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar--image'>
            <img src={trollFace} alt="TrollFace"/>
            <h1 className='navbar--name'>Meme Generator</h1>
        </div>
        <h2 className='navbar--name_description'>React Course - Project 3</h2>
    </div>
  )
}

export default Navbar