import React from 'react';
import Dropdown from '../collapse/Collapse';
//import Error from '../../pages/Error/Error'


const InfoLogement = ({ nom, picture, title, location, rating, tags, description, equipments }) => {
    console.log(equipments);

    

    // Composant pour afficher une seule étoile
    // Fonction pour générer les étoiles
    const generateStars = (totalStars, highlightedStars) => {
        console.log(totalStars);
        console.log(highlightedStars);
        const stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < highlightedStars) {
                stars.push(<span key={i} className="star red"><i className="fa-solid fa-star"></i></span>);
            } else {
                stars.push(<span key={i} className="star"><i className="fa-solid fa-star"></i></span>);
            }
        }
        return stars;
    };

    // TAGS
    // vérifie si la variable tags est falsy (null, undefined, false, vide...) ou si tags n'est pas un tableau. vérifie si la variable tags existe et est un tableau
    if (!tags || !Array.isArray(tags)) {
        return null;
    }
    console.log('TagList props:', tags); // Add this line for debugging

    
    return (
        <>
        <section className='descriptionLogement'>
            <div className='left'>
                <div className="locationBlock">
                    <h2 className='logementTitle'>{title}</h2>
                    <p>{location}</p>
                </div>
                <div className="tagsBlock">
                    <ul>
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>                

            <div className='right'>
                <div className='ownerBlock'>
                    <p className='ownerName'>{nom}</p>
                    <img src={picture} alt="" className='ownerImg' />
                </div>
                <div className="rating">
                    {generateStars(5, rating)}
                </div>
            </div>
        </section>  

        <section>
            <div className="dropdownAboutContainer">
                <Dropdown title="Description" description={description} index="1"/>
                <Dropdown title="Equipements" content={
                    <ul>
                        {equipments && equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                } index="2"/> 
            </div>
        </section>
        </>
    );
};

export default InfoLogement;
