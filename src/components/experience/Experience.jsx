import React from 'react';
import './experience.css';
import {SiJavascript} from 'react-icons/si';
import {FaBootstrap} from 'react-icons/fa';
import {FaSass} from 'react-icons/fa';
import {SiCss3} from 'react-icons/si';
import {SiHtml5} from 'react-icons/si';
import {SiPhp} from 'react-icons/si';
import {SiJava} from 'react-icons/si';
import {SiPython} from 'react-icons/si';
import {SiSymfony} from 'react-icons/si';
import {SiReact} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {SiFigma} from 'react-icons/si';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Langages</h5>
      <h2>Mon Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Développement Front</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaSass className='experience__details-icon'/>
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediaire+</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediaire+</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiFigma className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Développement Back</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiPhp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiJava className='experience__details-icon'/>
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiSymfony className='experience__details-icon'/>
              <div>
                <h4>Symfony</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;