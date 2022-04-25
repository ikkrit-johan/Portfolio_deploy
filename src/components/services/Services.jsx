import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>Mon Parcours en développement</h5>
      <h2>Recherche et développement</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Développement</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Formation BTS-SIO.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Stages en Entreprises.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MOOC de L’ANSSI <a href="#"> ( Cliquer ici )</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Projets de Groupes (Approfondissement en parallèle).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gestion de Projets.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conception de Sites Web.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Webdesign.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maquettes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Relations Clients.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Divers Projets Personnels.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Autoformation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://openclassrooms.com/fr/" target="_blank" rel="noreferrer">Openclassrooms</a>
              <small>' HTML, CSS '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/Formationvid%C3%A9o8" target="_blank" rel="noreferrer">FormationVidéo</a>
              <small>' SQL '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/grafikart" target="_blank" rel="noreferrer">Grafikart</a>
              <small>' Parcours Dev '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/watch?v=tUv7L5fQFFU&list=PLeeuvNW2FHVgfbhZM3S8kqZOmnY7TEorW" target="_blank" rel="noreferrer">Nord Coders</a>
              <small>' PHP POO '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/FromScratchD%C3%A9veloppementWeb/featured" target="_blank" rel="noreferrer">From Scratch</a>
              <small>' JS, React '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/NouvelleTechno" target="_blank" rel="noreferrer">Nouvelle Techno</a>
              <small>' Symfony '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/Teachersdunet" target="_blank" rel="noreferrer">Les Teachers du Net</a>
              <small>' Symfony '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/DominiqueLiard06" target="_blank" rel="noreferrer">KOOR.fr</a>
              <small>' JAVA '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/Gravenilvectuto" target="_blank" rel="noreferrer">Graven</a>
              <small>' JAVA, Python '</small>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/channel/UCxYGJ6GQpu--u8s9ovWX57Q" target="_blank" rel="noreferrer">Jessica Trocmé</a>
              <small>' Figma '</small>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Veille technologique</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/grafikart" target="_blank" rel="noreferrer">Grafikart</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.reddit.com/r/webdev/" target="_blank" rel="noreferrer">Reddit</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/NouvelleTechno" target="_blank" rel="noreferrer">Nouvelle Techno</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">Stack Overflow</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.clubic.com/" target="_blank" rel="noreferrer">Clubic</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.cowcotland.com/" target="_blank" rel="noreferrer">Cowcotland</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/TechSama" target="_blank" rel="noreferrer">Tech_Sama</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://www.youtube.com/c/LeDesignerduWeb" target="_blank" rel="noreferrer">Le Designer du Web</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://twitter.com/?lang=fr" target="_blank" rel="noreferrer">Twitter</a>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services;