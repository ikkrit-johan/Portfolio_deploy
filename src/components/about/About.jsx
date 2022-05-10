import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {SiKnowledgebase} from 'react-icons/si';



const About = () => {
  return (
    <section id="about">
      <h5>Qui suis-je ?</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Développeur web</h5>
              <small>En formation</small>
            </article>

            <article className='about__card'>
              <SiKnowledgebase className='about__icon'/>
              <h5>Cuisinier</h5>
              <h5>Technicien de Maintenance</h5>
              <small>BAC Professionnel</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Loisirs</h5>
              <small>Cinema</small><br />
              <small>Jeux Videos</small><br />
              <small>Lecture</small><br />
              <small>VR</small>
            </article>

          </div>
          <p>
            Johan Carrion 40 ans et je suis actuellement en formation au Greta de Saint Malo.
            Ce portfolio fut réalisé durant mon année de BTS SIO (Services Informatiques aux Organisations) Option SLAM (Développement d'applications).<br /><br />
            VOUS Y RETROUVEREZ L'ENSEMBLE DE MES RÉALISATIONS QUE J'AI PU EFFECTUER
            DURANT MON BTS SIO OPTION SLAM
          </p>
          <p>
            Ce portfolio a pour but de vous présenter mes travaux et mon parcours dans le numérique.
          </p>
          <a href="#contact" className='btn btn-primary'>Contacter moi</a>
          <a href="https://diplomeo.com/trouver-bts-sio" target='_blank' className='btn btn-primary right' rel="noreferrer">Le BTS SIO</a>
        </div>
      </div>
    </section>
  )
}

export default About;