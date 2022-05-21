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

                        <div className="stage__intro--para">
                            <p>- Mettre en place environnement de travail logiciels et matériels : </p>
                            <p>- Mon tuteur ma confier un pc portable à nettoyer pour en faire mon poste de travail</p>
                            <p>- Remplacement du processeur , upgrade de la ram, reintalation complete de system (windows 10), antivirus...</p>
                            <p>- Installer l'environnement de developpement (vsc, Symfony, React, PHP, Bracket, Slack ...)</p>
                            <p>- Dans le respect des normes etablie par mon tuteur</p>
                            <p>- Installation est configuration de la base de données (Wamp, PHP admin)</p>
                            <p>- Mise en place de sauvegarde system externe, versioning du projet avec GIT/Bracket</p>
                            <p>- La gestion du materiel etait sous ma responsabilité, ainsi que leurs securité</p>
                            <p>- Quelques interventions, remplacement d'une carte graphique, et optimiser systeme de refroidisement</p>
                            <p>- Installation et configuration d'un ecosystem VR (Oculus S)</p>
                            

                            <h4>Client</h4>
                            <p>- Mise en relation avec le client</p>
                            <p>- Analyse de la demande client.</p>
                            <p>- Analyse des moyens a mettre en place.</p>
                            <p>- Maquette fonctionnel du projet sous Figma à partir de la demande client</p>
                            <p>- Installation et configuration d'une tablette wacom cintiq pro 24</p>

                            <p>- Analyse des technologie employer</p>
                            <p>- le projet est developper avec le Framework Symfony</p>
                            <p>- Prise en charge des commentaires suite au PR.</p>
                            <p>- Analyse des délais</p>

                            <h4>Equipe</h4>
                            
                            <p>- Travail en équipe suivant la méthode Agile, en céréromonies SCRUM .</p>
                            <p>- Mise en place d’un Kanban ( Trello ).</p>
                            <p>- Gestion des versions du projet avec Git / Bitbucket.</p>
                            <p>- Développement et intégration du projet.</p>

                            <h4>Formation</h4>
                            <p>- Formation au fonctionnement des Framework.</p>
                            <p>- Formation a la POO PHP, JavaScript, SASS...</p>
                            <p>- Formation FIGMA.</p>
                            
                        </div>
                        
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