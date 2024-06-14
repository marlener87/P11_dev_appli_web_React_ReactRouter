import React from 'react';
import Dropdown from '../dropdown/Dropdown';

// Dropdown de la page About
const Collaspe = () => {
    return (
        <div className="dropdownAboutContainer">
            {['Fiabilité', 'Respect', 'Service', 'Sécurité'].map((title, index) => (
            <Dropdown index={index} title={title} description="Test" />
             ))}
        </div>
    );
};

export default Collaspe;