import React from 'react';
import './reactProject.css';

import IMG01 from '../../assets/portfolio2.png';
import IMG02 from '../../assets/capture_react/react_back.jpeg';
import IMG1 from '../../assets/capture_react/Capture_react_movie1.png';
import IMG2 from '../../assets/capture_react/Capture_react_movie2.png';
import IMG3 from '../../assets/capture_react/Capture_react_movie3.png';
import IMG8 from '../../assets/capture_react/Capture_portefolio_test2.png';
import IMG9 from '../../assets/capture_react/Capture_cours_js1.png';
import IMG10 from '../../assets/capture_react/Capture_cours_js2.png';
import IMG11 from '../../assets/capture_react/Capture_portefolio_master1.png';
import IMG12 from '../../assets/capture_react/Capture_portefolio_master2.png';


const data = [
    {id: 1, image: IMG1, title: 'movie img'},
    {id: 2, image: IMG2, title: 'movie img'},
    {id: 3, image: IMG3, title: 'movie img'},
    {id: 8, image: IMG8, title: 'portefolio img'},
    {id: 9, image: IMG9, title: 'javascript img'},
    {id: 10, image: IMG10, title: 'javascript img'},
    {id: 11, image: IMG11, title: 'portefolio img'},
    {id: 12, image: IMG12, title: 'portefolio img'}
]


const SymfonyProject = () => {
    return (
        <section id="reactproject">
            <h5>Projets</h5>
            <h2>React</h2>
            <div className="react__container">
                <div className="react__intro">

                    <div className="react__intro--present">
                        <h4>Pour mon deuxieme stage, j'ai eu comme mission de me familiariser avec le framework React.</h4>
                        <div className="react__vaya">
                            <img src={IMG02} alt="" />
                        </div>
                        <div className="react__intro--para">
                            <p>Amelioration de mon niveau JavaScript</p>
                            <p>Initiation avec la documentation React</p>
                            <p>Divers missions de mon formateur en React</p>
                            <p>Decouverte du JSX</p>
                            <p>Decouverte de TypeScript</p>
                            <p>Initiation au SASS</p>
                            <p>Divers tutorials en formation personnel...</p>
                            <p>...Comme ce portefolio conçu avec React !</p>
                        </div>
                    </div>

                    <div className="react__logo">
                        <img src={IMG01} alt="" />
                    </div>

                    <div className="react__intro--techno">
                        <h2>Technologie</h2>
                        <h3>Framework React</h3>
                        <p>React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.</p>
                
                        <h3>JSX et JS</h3>
                        <p>JSX est une extension React de la syntaxe du langage JavaScript qui permet de structurer le rendu des composants à l'aide d'une syntaxe familière à de nombreux développeurs. Il est similaire en apparence au HTML.</p>

                        <h3>TypeScript</h3>
                        <p>TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Il s'agit d'un sur-ensemble syntaxique strict de JavaScript.</p>


                        <h3>SASS</h3>
                        <p>Sass est un langage de script préprocesseur qui est compilé ou interprété en CSS. SassScript est le langage de script en lui-même. Sass est disponible en deux syntaxes.</p>

                        <h3>En savoir plus</h3>
                        <a href="https://fr.reactjs.org/" target='_blank' className='btn btn-primary plus' rel="noreferrer">React</a>
                        <a href="https://fr.reactjs.org/docs/introducing-jsx.html" target='_blank' className='btn btn-primary plus' rel="noreferrer">JSX</a>
                        <a href="https://www.typescriptlang.org/" target='_blank' className='btn btn-primary plus' rel="noreferrer">TypeScript</a>
                        <a href="https://sass-lang.com/" target='_blank' className='btn btn-primary plus' rel="noreferrer">SASS</a>
                        <a href="#portfolio" className='btn right plus'>Retour portefolio</a>
                    </div>

                    <div className="gallery__title">
                        <h2>Images des projets</h2>
                    </div>

                    <div className="react__gallery">
                        {
                            data.map(({id, image, title}) => {
                                return (
                                    
                                <div key={id}className="react__grille">
                                    <div className="react__grille--item">
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