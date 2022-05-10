import React from 'react';
import './portfolio.css';
import IMG4 from '../../assets/portfolio1.jpg';
import IMG6 from '../../assets/portfolio5.jpg';
import IMG5 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG1 from '../../assets/portfolio4.jpg';
import IMG2 from '../../assets/portfolio6.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Stages',
    github: 'https://github.com',
    page: "#stage"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Projet Jeux',
    github: 'https://github.com',
    page: "#game"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Projet PPE',
    github: 'https://github.com',
    page: "#ppe"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Projet Symfony',
    github: 'https://github.com',
    page: "#symfonyproject"
  },
  {
    id: 5,
    image: IMG5,
    title: 'Projet React',
    github: 'https://github.com',
    page: "#reactproject"
  },
  {
    id: 6,
    image: IMG6,
    title: 'Divers',
    github: 'https://github.com',
    page: "#divers"
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes Projets récents</h5>
      <h2>Portefolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, page}) => {
            return (
              <article key={id} className="portfolio__items">
                <div className="portfolio__items-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__items-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Git</a>
                  <a href={page} className='btn btn-primary'>En voir plus</a>
                </div>
              </article>
            )
          })
        }
      </div>
        
    </section>
  )
}

export default Portfolio;