import React, { useState } from 'react';

const Dropdown = ({ title, description, index, content }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="dropdownAbout" key={index}>
            <button className="dropdownTitle" onClick={() => toggleDropdown(index)}>
                <span className='dropdownButton'>{title}</span>
                <i className={`fa-solid fa-chevron-down ${openDropdown === index ? 'fa-chevron-down-rotate' : ''}`}></i>
            </button>
            <div className={`dropdownContent ${openDropdown === index ? 'menu-open' : ''}`}>
                {description && <p>{description}</p>}
                {content && content}
            </div>
        </div>
    );
};

export default Dropdown;