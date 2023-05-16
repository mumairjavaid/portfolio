import React from 'react'
import CV from '../../Images/Umair_CV.pdf'

const Button = () => {
  return (
    <>
    <div className="btn">
        <a href={CV} download>Download CV</a>
        <a href='#'>Know more</a>
    </div>
    </>
  )
}

export default Button