import React from 'react';
import './ppe.css';

import IMG01 from '../../assets/portfolio3.jpg';
import IMG02 from '../../assets/capture_ppe/Pouzy.jpg';
import IMG1 from '../../assets/capture_ppe/Capture_ppe1.png';
import IMG2 from '../../assets/capture_ppe/Capture_ppe2.png';
import IMG3 from '../../assets/capture_ppe/Capture_ppe3.png';
import IMG4 from '../../assets/capture_ppe/Capture_ppe4.png';
import IMG5 from '../../assets/capture_ppe/Capture_ppe5.png';
import IMG6 from '../../assets/capture_ppe/Capture_ppe_java1.png';
import IMG7 from '../../assets/capture_ppe/Capture_ppe_java2.png';
import IMG8 from '../../assets/capture_ppe/Capture_ppe_java4.png';


const data = [
    {id: 1, image: IMG1, title: 'Ppe img'},
    {id: 2, image: IMG2, title: 'Ppe img'},
    {id: 3, image: IMG3, title: 'Ppe img'},
    {id: 4, image: IMG4, title: 'Ppe img'},
    {id: 5, image: IMG5, title: 'Ppe img'},
    {id: 6, image: IMG6, title: 'Ppe img'},
    {id: 7, image: IMG7, title: 'Ppe img'},
    {id: 8, image: IMG8, title: 'Ppe img'}
]


const Ppe = () => {
    return (
        <section id="ppe">
            <h5>Projets</h5>
            <h2>Ppe</h2>
            <div className="ppe__container">
                <div className="react__intro">

                    <div className="ppe__intro--present">
                        <h4>Projet PPE Team React, application legere et lourde de gestion d'une bibliotheque pour la commune de Pouzy-Mesangy</h4>
                        <div className="ppe__vaya">
                            <img src={IMG02} alt="" />
                        </div>
                        <div className="ppe__intro--para">
                            <p>Projet de groupe</p>
                            <p>Mise en condition réel</p>
                            <p>Demande client</p>
                            <p>Implication personnel</p>
                            <p>@Alexy</p>
                            <p>@Solene</p>
                            <p>@Ange</p>
                            <p>@Johan</p>
                        </div>
                    </div>

                    <div className="ppe__logo">
                        <img src={IMG01} alt="" />
                    </div>

                    <div className="ppe__intro--techno">
                        <h2>Technologie</h2>
                        <h3>JAVA (Application lourde)</h3>
                        <p>Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy, présenté officiellement le 23 mai 1995 au SunWorld. La société Sun a été ensuite rachetée en 2009 par la société Oracle qui détient et maintient désormais Java.</p>
                
                        <h3>PHP</h3>
                        <p>PHP: Hypertext Preprocessor, plus connu sous son sigle PHP, est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.</p>

                        <h3>SQL</h3>
                        <p>SQL est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles. Outre le langage de manipulation des données.</p>

                        <h3>Bootstrap</h3>
                        <p>Bootstrap est une collection d'outils utiles à la création du design de sites et d'applications web. C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option.</p>

                        <h3>JS HTML CSS</h3>
                        <p>HTML, CSS et JavaScript sont les noms de différents types de code fréquemment rencontrés dans le développement web. L'HTML permet l'affichage des informations de la page sur le navigateur, le CSS met en page son contenu et JavaScript intègre les animations et spécifie les interactions entre les éléments.</p>

                        <h3>En savoir plus</h3>
                        <a href="https://www.java.com/fr/" target='_blank' className='btn btn-primary plus' rel="noreferrer">JAVA</a>
                        <a href="https://www.php.net/" target='_blank' className='btn btn-primary plus' rel="noreferrer">PHP</a>
                        <a href="https://sql.sh/" target='_blank' className='btn btn-primary plus' rel="noreferrer">SQL</a>
                        <a href="https://getbootstrap.com/" target='_blank' className='btn btn-primary plus' rel="noreferrer">Bootstrap</a>
                        <a href="#portfolio" className='btn right plus'>Retour portefolio</a>
                    </div>

                    <div className="gallery__title">
                        <h2>Images du projet</h2>
                    </div>

                    <div className="ppe__gallery">
                        {
                            data.map(({id, image, title}) => {
                                return (
                                    
                                <div key={id}className="ppe__grille">
                                    <div className="ppe__grille--item">
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

export default Ppe;