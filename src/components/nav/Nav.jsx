import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {FaImages} from 'react-icons/fa';
import {GiStarFormation} from 'react-icons/gi';
import {FaSymfony} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {BiGame} from 'react-icons/bi';
import {IoIosContact} from 'react-icons/io';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#symfonyProject')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaImages />
      </a>
      <a href="#stage" onClick={() => setActiveNav('#symfonyProject')} className={activeNav === '#stage' ? 'active' : ''}>
        <GiStarFormation />
      </a>
      <a href="#game" onClick={() => setActiveNav('#symfonyProject')} className={activeNav === '#game' ? 'active' : ''}>
        <BiGame />
      </a>
      <a href="#symfonyproject" onClick={() => setActiveNav('#symfonyProject')} className={activeNav === '#symfonyproject' ? 'active' : ''}>
        <FaSymfony />
      </a>
      <a href="#reactproject" onClick={() => setActiveNav('#symfonyProject')} className={activeNav === '#reactproject' ? 'active' : ''}>
        <FaReact />
      </a>
      <a href="#resources" onClick={() => setActiveNav('#resources')} className={activeNav === '#resources' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <IoIosContact />
      </a>
    </nav>
  )
}

export default Nav;