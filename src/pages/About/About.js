import React from 'react';
//import Collapse from '../../components/Collapse/Collapse';
import Header from '../../components/Header/Header';
import imageHeader from '../../assets/img/apropos.jpg';
import Dropdown from '../../components/collapse/Collapse';

const About = () => {
    // Tableau à deux dimensions pour les titres et les descriptions
    const data = [
    { title: 'Fiabilité', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Respect', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Service', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Sécurité', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ];

    return (
        <main className="about">
            <div className="bannerAbout">
                <Header imageHeader={imageHeader} />
            </div>
            
            <div className="collapseAbout">
            {data.map((item, index) => (
                <Dropdown index={index} title={item.title} description={item.description} key={index} />
            ))}
            </div>
        </main>
    );
};

export default About;