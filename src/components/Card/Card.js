import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const [ logementsDatas, setLogementsDatas ] = useState(null);

    useEffect(() => {
        fetch('/data/location.json')
            .then(res => {
                if(!res.ok) {
                    throw new Error('faux');
                }
                return res.json();
            })
            .then(logementsDatas => {
                // console.log(logementsDatas.locationData);
                setLogementsDatas(logementsDatas.locationData)})
            .catch(error => {
                console.error("dommage", error);
            });
    }, []);

    if (!logementsDatas) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cardsContainer">
            {logementsDatas.map(logement => (
                <Link key={logement.id} className="cardLogement" to={`/logements/${logement.id}`}>
                    <figure>
                        {logement.cover.length > 0 && (
                            <img src={logement.cover} alt={logement.title} key={logement.id} />
                        )}

                        <figcaption className="titreLogement">{logement.title}</figcaption>
                    </figure>
                    
                </Link>
            ))}
        </div>
    );
};

export default Card;