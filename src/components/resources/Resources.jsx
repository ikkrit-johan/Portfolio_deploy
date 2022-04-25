import React from 'react'
import './resources.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.png';
import AVTR6 from '../../assets/avatar6.jpg';
import AVTR7 from '../../assets/avatar7.jpg';
import AVTR8 from '../../assets/avatar8.jpg';
import AVTR9 from '../../assets/avatar9.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    names: 'Grafikart',
    review: 'Formation complete de développeur web, la chaine youtube la plus complete du web.'
  },
  {
    avatar: AVTR2,
    names: 'Les Teachers Du Net',
    review: 'Découvrez des tutoriels de catégories diverses (informatique, physique, télécommunications...) expliqués de manière simple et chirurgicale !!.'
  },
  {
    avatar: AVTR3,
    names: 'Graven - Développement',
    review: "Graven est un youtuber orienté vers l'informatique, il fait des vidéos sur comment utiliser les langages Python et Java, créer des sites webs, des applications Android."
  },
  {
    avatar: AVTR4,
    names: 'Dominique Liard',
    review: 'Chaine de KOOR.fr, vous trouverez sur cette chaîne de nombreux tutos sur la programmation (C, Python, Java, Android, ...).'
  },
  {
    avatar: AVTR5,
    names: 'OpenClassrooms',
    review: 'OpenClassrooms est un site web de formation en ligne, créé en 1999 sous le nom de Site du Zéro. Il propose à ses membres des cours certifiants et des parcours débouchant sur des métiers en croissance.'
  },
  {
    avatar: AVTR6,
    names: 'Nouvelle Techno',
    review: "Développeur / Intégrateur web, formateur en création de sites web.Vous trouverez sur cette chaine des sessions de live coding sur des sujets proposés par les abonnés."
  },{
    avatar: AVTR7,
    names: 'Le Designer du Web',
    review: "Retrouve ici ta dose de développement Web, entrepreneuriat, UX/UI, référencement et bien d'autres choses !."
  },{
    avatar: AVTR8,
    names: 'From Scratch',
    review: "Ceux qui ne deviendront pas développeur sont ceux qui abandonnent."
  },{
    avatar: AVTR9,
    names: 'Online Tutorials',
    review: "Online Tutorials is a channel for learning Complete responsive website design, Creative CSS animation and Hover Effects,Amazing Vanilla Javascript projects, creative UX and UI Design using Html and CSS and much more... Htm5, CSS3, Javascript,jQuery,Bootstrap, photoshop, Website Design."
  }
];

const Resources = () => {
  return (
    <section id="resources">
      <h5>Mes Sources</h5>
      <h2>Formations en ligne</h2>

      <Swiper className="container resources__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, names, review}, index) => {
            return (
              <SwiperSlide key={index} className="resource">
                <div className="client__avatar">
                  <img src={avatar} alt={names} />
                </div>
                <h5 className='client__name'>{names}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Resources;