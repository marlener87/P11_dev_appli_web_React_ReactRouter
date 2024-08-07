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
                <NavLink exact className="navbarLink" activeClassName="active" to="/" >Accueil</NavLink>
                <NavLink className="navbarLink" activeClassName="active" to="/about" >A Propos</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;