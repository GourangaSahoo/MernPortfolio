import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/gouranga-sahoo-154396289/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/GourangaSahoo" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/i_m_pikun_14/" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials