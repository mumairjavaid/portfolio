import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'


const Socials = () => {
  return (
    <>
    <div className="container_socials">
    <a href="https://www.linkedin.com/" target='_blank'><AiFillLinkedin/></a>
    <a href="linkedin.com"><AiFillGithub/></a>
    <a href="linkedin.com"><FaTwitterSquare/></a>
    </div>
    </>
  )
}

export default Socials