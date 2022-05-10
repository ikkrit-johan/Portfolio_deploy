import React from 'react'
import './header.css';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Johan Carrion</h1>
        <h5 className="text-light">Etudiant BTS-SIO</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header;