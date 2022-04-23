import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h2 className='footer__logo'>IKKRIT</h2>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">A propos de moi</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">R&D</a></li>
        <li><a href="#portfolio">Portefolio</a></li>
        <li><a href="#testimonials">Resources</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare /></a>
        <a href="https://discord.com"><FaDiscord /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ikkrit. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer