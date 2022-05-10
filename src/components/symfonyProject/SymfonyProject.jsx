import React from 'react';
import './symfonyProject.css';
import IMG01 from '../../assets/portfolio1.jpg';
import IMG02 from '../../assets/capture_vaya/back_vaya.jpg';
import IMG1 from '../../assets/capture_vaya/capture_about.png';
import IMG2 from '../../assets/capture_vaya/capture_boutique.png';
import IMG3 from '../../assets/capture_vaya/capture_header_1.png';
import IMG4 from '../../assets/capture_vaya/capture_header_2.png';
import IMG5 from '../../assets/capture_vaya/capture_header_3.png';
import IMG7 from '../../assets/capture_vaya/capture_header_5.png';
import IMG8 from '../../assets/capture_vaya//capture_contact.png';
import IMG9 from '../../assets/capture_vaya/capture_portefolio_1.png';

const data = [
    {id: 1, image: IMG1, title: 'about'},
    {id: 2, image: IMG2, title: 'boutique'},
    {id: 3, image: IMG3, title: 'header'},
    {id: 4, image: IMG4, title: 'header'},
    {id: 5, image: IMG5, title: 'header'},
    {id: 7, image: IMG7, title: 'header'},
    {id: 8, image: IMG8, title: 'contact'},
    {id: 9, image: IMG9, title: 'portefolio'},
]


const SymfonyProject = () => {
    return (
        <section id="symfonyproject">
            <h5>Projets</h5>
            <h2>Symfony</h2>
            <div className="symfony__container">
                <div className="symfony__intro">

                    <div className="symfony__intro--present">
                        <h4>Pour mon premier stage, j'ai eu comme mission de concevoir un site Web avec le framework Symfony.</h4>
                        <div className="symfony__vaya">
                            <img src={IMG02} alt="" />
                        </div>
                        <div className="symfony__intro--para">
                            <p>La cliente est une illustratrice qui a besoin d'un site vitrine de ses oeuvres</p>
                            <p>Un portefolio pour les dessins et les livres</p>
                            <p>Une page de presentation</p>
                            <p>Un market avec des liens sur divers sites marchands</p>
                            <p>Un formulaire de contact</p>
                            <p>Une interface simple pour la gestion des images</p>
                            <p>Le site doit être classe et simple d'utlisation !</p>
                        </div>
                    </div>

                    <div className="symfony__logo">
                        <img src={IMG01} alt="" />
                    </div>

                    <div className="symfony__intro--techno">
                        <h2>Technologie</h2>
                        <h3>Framework Symfony</h3>
                        <p>Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web.</p>
                
                        <h3>Composer</h3>
                        <p>Composer est un logiciel gestionnaire de dépendances libre écrit en PHP. Il permet à ses utilisateurs de déclarer et d'installer les bibliothèques dont le projet principal a besoin.</p>

                        <h3>Doctrine</h3>
                        <p>Doctrine est un ORM pour PHP. Il s'agit d'un logiciel libre sous licence GNU LGPL. Doctrine est l'ORM par défaut du framework Symfony.</p>

                        <h3>Bitbucket</h3>
                        <p>Bitbucket est un service web d'hébergement et de gestion de développement logiciel utilisant le logiciel de gestion de versions Git.</p>

                        <h3>Trello</h3>
                        <p>Trello est un outil de gestion de projet en ligne, lancé en septembre 2011 et inspiré par la méthode Kanban de Toyota. Il repose sur une organisation des projets en planches listant des cartes, chacune représentant des tâches.</p>

                        <h3>En savoir plus</h3>
                        <a href="https://symfony.com/" target='_blank' className='btn btn-primary plus' rel="noreferrer">Symfony</a>
                        <a href="https://getcomposer.org/doc/" target='_blank' className='btn btn-primary plus' rel="noreferrer">Composer</a>
                        <a href="https://www.doctrine-project.org/" target='_blank' className='btn btn-primary plus' rel="noreferrer">Doctrine</a>
                        <a href="https://bitbucket.org/product/" target='_blank' className='btn btn-primary plus' rel="noreferrer">Bitbucket</a>
                        <a href="https://trello.com/home" target='_blank' className='btn btn-primary right plus' rel="noreferrer">Trello</a>
                        <a href="#portfolio" className='btn right plus'>Retour portefolio</a>
                    </div>

                    <div className="gallery__title">
                        <h2>Images du projet</h2>
                    </div>

                    <div className="symfony__gallery">
                        {
                            data.map(({id, image, title}) => {
                                return (
                                    
                                <div key={id}className="symfony__grille">
                                    <div className="symfony__grille--item">
                                        <a href={image} target='_blank' rel="noreferrer"><img src={image} alt={title} /></a>
                                    </div>
                                </div>
               
                        )
                        })
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SymfonyProject;