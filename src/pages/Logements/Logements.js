import React, { useEffect, useState } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import { useParams } from 'react-router-dom';
import InfoLogement from '../../components/InfoLogement/InfoLogement';
import TagList from '../../components/tags/Tags';
    //const [imagesArray, setImagesArray] = useState([]);

const Logements = ({tags}) => {
    const [logement, setLogement] = useState([]);
    let { id } = useParams();
    console.log(id);

    const [host, setHost] = useState([]);

    useEffect(() => {
        fetch(`/data/location.json`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return res.json();
            })
            .then(data => {
                const logement = data.locationData.find(logement => logement.id === id);
                if (logement) {
                    setLogement(logement);
                    //console.log(logement.host);
                    setHost(logement.host);
                } else {
                    console.error("Logement non trouvé");
                }
            })
            .catch(error => {
                console.error("Erreur:", error);
            });
    }, [id]);

    return (
        <div className='ficheLogement'>

            <Carrousel images={logement.pictures} />
            <InfoLogement 
                title={logement.title} 
                location={logement.location} 
                nom={host.name} 
                picture={host.picture} 
                rating={logement.rating} 
            /> 
            <TagList tags={tags} />

        </div>
    );
};

export default Logements;