import React from 'react';
import CV from '../../assets/data/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Télécharger CV</a>
        <a href="#contact" className='btn btn-primary'>Me contacter</a>
    </div>
  )
}

export default CTA;