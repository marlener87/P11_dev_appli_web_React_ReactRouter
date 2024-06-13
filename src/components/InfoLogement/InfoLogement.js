import React from 'react';

const InfoLogement = ({ nom, picture, title, location, rating }) => {
    //console.log(logement);
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
    
    return (
        <section className='descriptionLogement'>
            <div className='left'>
                <div className="locationBlock">
                    <h2 className='logementTitle'>{title}</h2>
                    <p>{location}</p>
                </div>
                <div className="tagsBlock">
                
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

    );
};

export default InfoLogement;