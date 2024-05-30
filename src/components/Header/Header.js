import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.jpg";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img className="logo" src={logo} alt="logo du site Kasa" />
            </Link>

            <nav>
                <NavLink className="headerLink" to="/error">Erreur</NavLink>
                <NavLink className="headerLink" to="/">Accueil</NavLink>
                <NavLink className="headerLink" to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;