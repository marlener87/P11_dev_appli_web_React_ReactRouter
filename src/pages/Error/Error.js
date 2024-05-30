import React from 'react';
import { Link } from 'react-router-dom';

const error = () => {
    return (
        <div className="erreur">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to={'/'} className="lienError"><u>Retourner sur la page d'accueil</u></Link>
        </div>
    );
};

export default error;