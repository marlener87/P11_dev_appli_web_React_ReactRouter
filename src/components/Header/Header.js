import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Accueil</Link>
            </li>
            <li>
                <Link to='/about'>A propos</Link>
            </li>
        </ul>
    );
};

export default Header;