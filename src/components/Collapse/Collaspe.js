import React, { useState } from 'react';

const Collaspe = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="dropdownAboutContainer">
            {['Fiabilité', 'Respect', 'Service', 'Sécurité'].map((title, index) => (
            <div className="dropdownAbout" key={index}>
                <button className="dropdownTitle" onClick={() => toggleDropdown(index)}>
                    <span className='dropdownButton'>{title}</span>
                    <i className={`fa-solid fa-chevron-down ${openDropdown === index ? 'fa-chevron-down-rotate' : ''}`}></i>
                </button>
                <div className={`dropdownContent ${openDropdown === index ? 'menu-open' : ''}`}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique qui vel illo! Ad mollitia cupiditate dolorum laudantium maiores minima iusto nostrum praesentium vel natus, impedit consequuntur provident alias asperiores explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt sequi doloremque quas beatae accusantium dolor assumenda id repellendus quibusdam! Vero laborum illo ipsa nesciunt, fugit non similique quia doloremque.</p>
                </div>
            </div>
             ))}
        </div>
    );
};

/* 
<div className="dropdownAboutContainer">
    {['Fiabilité', 'Respect', 'Service', 'Sécurité'].map((title, index) => (
        <div className="dropdownAbout" key={index}>
            <button className="dropdownTitle" onClick={() => toggleDropdown(index)}>
                <span className='dropdownButton'>{title}</span>
                <i className={`fa-solid fa-chevron-down ${openDropdown === index ? 'fa-chevron-down-rotate' : ''}`}></i>
            </button>
            <div className={`dropdownContent ${openDropdown === index ? 'menu-open' : ''}`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique qui vel illo! Ad mollitia cupiditate dolorum laudantium maiores minima iusto nostrum praesentium vel natus, impedit consequuntur provident alias asperiores explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt sequi doloremque quas beatae accusantium dolor assumenda id repellendus quibusdam! Vero laborum illo ipsa nesciunt, fugit non similique quia doloremque.</p>
            </div>
        </div>
    ))}
</div>
*/

export default Collaspe;