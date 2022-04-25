import React from 'react';
import './symfonyProject.css';
import IMG1 from '../../assets/portfolio1.jpg';

const SymfonyProject = () => {
    return (
        <section className='container section__symfony-project'>
            <h1>Framework Symfony</h1>
            <h5 className="text-light">Projet de Stage</h5>
            <div className="symfony__container">
                <div className="symfony__intro">
                    <div className="symfony__intro--present">
                        <h4>Pour mon premier stage en entreprise, j'ai eu comme mission de concevoir un site Web pour une cliente avec le framework Symfony.</h4>
                    </div>
                    <div className="symfony__intro--img">
                        <img src={IMG1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SymfonyProject;