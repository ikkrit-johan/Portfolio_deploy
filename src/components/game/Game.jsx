import React from 'react';
import './game.css';
import IMG01 from '../../assets/portfolio6.jpg';
import IMG02 from '../../assets/capture_game/back_game.jpg';
import IMG1 from '../../assets/capture_game/Game1.png';
import IMG2 from '../../assets/capture_game/Game2.png';
import IMG3 from '../../assets/capture_game/Game3.png';
import IMG4 from '../../assets/capture_game/Game4.png';


const data = [
    {id: 1, image: IMG1, title: 'pendu'},
    {id: 2, image: IMG2, title: 'pendu'},
    {id: 3, image: IMG3, title: 'Acey'},
    {id: 4, image: IMG4, title: 'Crap'},
]


const Game = () => {
    return (
        <section id="game">
            <h5>Game</h5>
            <h2>Les jeux</h2>
            <div className="game__container">
                <div className="symfony__intro">

                    <div className="game__intro--present">
                        <h4>Divers petit projet de jeux.</h4>
                        <div className="game__vaya">
                            <img src={IMG02} alt="" />
                        </div>
                        <div className="game__intro--para">
                            <p>Jeu du pendu en JS</p>
                            <p>Acey en python</p>
                            <p>Crap en python</p>
                            <p>Divers tutoriels de jeux</p>
                        </div>
                    </div>

                    <div className="game__logo">
                        <img src={IMG01} alt="" />
                    </div>

                    <div className="game__intro--techno">
                        <h2>Technologie</h2>
                        <h3>Python</h3>
                
                        <h3>JavaScript</h3>

                        <a href="#portfolio" className='btn right plus'>Retour portefolio</a>
                    </div>

                    <div className="gallery__title">
                        <h2>Images des projets</h2>
                    </div>

                    <div className="game__gallery">
                        {
                            data.map(({id, image, title}) => {
                                return (
                                    
                                <div key={id}className="game__grille">
                                    <div className="game__grille--item">
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

export default Game;