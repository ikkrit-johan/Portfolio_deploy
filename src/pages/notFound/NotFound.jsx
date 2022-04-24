import React from 'react';
import './notFound.css'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container__error'>
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="terminal">
                <h1>Error <span className="errorcode">404</span></h1>
                <p className="output">La page que vous cherchez n'a pas été trouvée ou n'existe plus.</p>
                <p className="output">Retour à la <NavLink to="/">Home</NavLink></p>
                <p className="output">Good luck.</p>
            </div>
        </div>
    );
};

export default NotFound;