import React from 'react'
import './Header.css'
import Button from './Button'
import Socials from './Socials'

const Header = () => {
  return (
    <>
    <container>
    <div className="header_container">
        <h5>Hello I am</h5>
        <h2>Umair Javaid</h2>
        <h5>Frontend Developer</h5>
        <Button/>
        <Socials/>
    </div>
    </container>

    </>
  )
}

export default Header