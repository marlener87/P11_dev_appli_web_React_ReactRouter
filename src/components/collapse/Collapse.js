import React, { useState } from 'react';

/**
 * composant affichant un bouton qui, lorsqu'il est cliqué, bascule l'affichage du contenu déroulant associé
 */
const Dropdown = ({ title, description, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdownAbout">
            <button className="dropdownTitle" onClick={toggleDropdown}>
                <span className='dropdownButton'>{title}</span>
                <i className={`fa-solid fa-chevron-down ${isOpen ? 'fa-chevron-down-rotate' : ''}`}></i>
            </button>
            <div className={`dropdownContent ${isOpen ? 'menu-open' : ''}`}>
                {description && <p>{description}</p>}
                {content && content}
            </div>
        </div>
    );
};

export default Dropdown;