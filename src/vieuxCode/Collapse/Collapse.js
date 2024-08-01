// import React from 'react';
// import Dropdown from '../dropdown/Dropdown';

// // Dropdown de la page About
// const Collaspe = () => {
//     return (
//         <div className="dropdownAboutContainer">
//             {['Fiabilité', 'Respect', 'Service', 'Sécurité'].map((title, index) => (
//             <Dropdown index={index} title={title} description="Test" key={index} />
//              ))}
//         </div>
//     );
// };

// export default Collaspe;


import React from 'react';
import Dropdown from '../dropdown/Dropdown';

// Tableau à deux dimensions pour les titres et les descriptions
const data = [
  { title: 'Fiabilité', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Respect', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Service', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Sécurité', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
];

// Dropdown de la page About
const Collaspe = () => {
  return (
    <div className="dropdownAboutContainer">
      {data.map((item, index) => (
        <Dropdown index={index} title={item.title} description={item.description} key={index} />
      ))}
    </div>
  );
};

export default Collaspe;









// WILLIAM
// const Dropdown = ({}) => {
//   const [isOpen, setIsOpen] = useState(false);
// const toggleDrpdown = () => {
//   setIsOpen(prev =>!prev)
//   ou
//   setIsOpen(!isOpen)

// }


// return (
//   <div>
//     <button onClick={toggleDrpdown}> clique</button>
//     {isOpen && <div> contenu caché</div>}
//     ou 
//     {isOpen ? <div>contenu caché</div> : ''}
//   </div>
// )
// }




// const Dropdown = ({ title, description, index, content }) => {
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const toggleDropdown = (index) => {
//         setOpenDropdown(openDropdown === index ? null : index);
//     };

//     return (
//         <div className="dropdownAbout" key={index}>
//             <button className="dropdownTitle" onClick={() => toggleDropdown(index)}>
//                 <span className='dropdownButton'>{title}</span>
//                 <i className={`fa-solid fa-chevron-down ${openDropdown === index ? 'fa-chevron-down-rotate' : ''}`}></i>
//             </button>
//             <div className={`dropdownContent ${openDropdown === index ? 'menu-open' : ''}`}>
//                 {description && <p>{description}</p>}
//                 {content && content}
//             </div>
//         </div>
//     );
// };