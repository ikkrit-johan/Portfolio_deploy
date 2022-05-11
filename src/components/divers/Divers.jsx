import React from 'react';
import './divers.css';
import IMG01 from '../../assets/portfolio5.jpg';
import IMG02 from '../../assets/capture_vaya/back_vaya.jpg';


const Divers = () => {
    return (
        <section id="divers">
            <h5>Projets</h5>
            <h2>Divers</h2>
            <div className="divers__container">
                <div className="divers__intro">

                    <div className="divers__intro--present">
                        <h4>Divers projets pendant ma formation au BTS SIO.</h4>
                        <div className="divers__vaya">
                            <img src={IMG02} alt="" />
                        </div>
                        <div className="divers__intro--para">
                            <p>Environnement Linux</p>
                            <p>Formation SQL</p>
                            <p>Formation PHP</p>
                            <p>Un market avec des liens sur divers sites marchands</p>
                            <p>Un formulaire de contact</p>
                            <p>Une interface simple pour la gestion des images</p>
                            <p>Le site doit être classe et simple d'utlisation !</p>
                        </div>
                    </div>

                    <div className="divers__logo">
                        <img src={IMG01} alt="" />
                    </div>

                        <a href="#portfolio" className='btn right plus'>Retour portefolio</a>
                    </div>
                </div>
        </section>
    );
};

export default Divers;