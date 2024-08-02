import React from 'react';
import Header from '../../components/Header/Header';
import imageHeader from '../../assets/img/apropos.jpg';
import Dropdown from '../../components/collapse/Collapse';

const About = () => {
    // Tableau à deux dimensions pour les titres et les descriptions
    const data = [
    { title: 'Fiabilité', description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.' },
    { title: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.' },
    { title: 'Sécurité', description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux criètres de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes." },
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