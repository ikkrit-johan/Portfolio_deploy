import React from 'react';
import './stage.css';
import IMG1 from '../../assets/portfolio4.jpg';
import IMG2 from '../../assets/portfolio1.jpg';
import IMG3 from '../../assets/portfolio2.png';

const Stage = () => {
    return (
        <section id="stage">
                <div className="container stage__container">
                    <h2>Stages</h2>
                    <h5 className="text-light">Mes stages en entreprises</h5>

                    <div className="stage__vaya">
                        <img src={IMG1} alt="" />
                    </div>

                    <div className="stage__intro--present">
                        <h4>Mes stages en entreprise ont etait fait à l'EIRL Sébastien Ducly</h4>
                        
                        <div className="stage__icon">
                            <div className="stage__illu">
                                <img src={IMG2} alt="" />
                                <a href="#symfonyproject" className='btn btn-primary prim'>Stage 1</a>
                            </div>
                            <div className="stage__illu">
                                <img src={IMG3} alt="" />
                                <a href="#reactproject" className='btn btn-primary prim'>Stage 2</a>
                            </div>
                        </div>
                    </div>

                    <a href="#portfolio" className='btn'>Retour portefolio</a>
                </div>
        </section>
    );
};

export default Stage;