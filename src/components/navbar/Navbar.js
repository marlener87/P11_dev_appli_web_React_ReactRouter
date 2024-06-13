import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.jpg";

const Navbar = () => {
    return (
        <header>
            <Link to="/">
                <img className="logo" src={logo} alt="logo du site Kasa" />
            </Link>

            <nav>
                <NavLink className="navbarLink" to="/error">Erreur</NavLink>
                <NavLink className="navbarLink" to="/">Accueil</NavLink>
                <NavLink className="navbarLink" to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;