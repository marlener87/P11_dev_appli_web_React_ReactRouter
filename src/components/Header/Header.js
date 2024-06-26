import React from 'react';

const Header = ({ imageHeader, titreHeader }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageHeader})` }}>
            <div className="bgDark"></div>
            <h1>{titreHeader}</h1>
        </div>
    );
};

export default Header;