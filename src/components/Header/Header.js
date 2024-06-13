import React from 'react';

const Header = ({ imageHeader, titreHeader }) => {
    return (
        <div className="banner">
            <img src={imageHeader} alt="" className="bgDark" />
            <h1>{titreHeader}</h1>
        </div>
    );
};

export default Header;