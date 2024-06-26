import React, { useEffect, useState } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import { useParams } from 'react-router-dom';
import InfoLogement from '../../components/InfoLogement/InfoLogement';
import Error from '../Error/Error'

    //const [imagesArray, setImagesArray] = useState([]);

const Logements = () => {
    const [logement, setLogement] = useState([]);
    const [error, setError] = useState(false);
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
                    setError(true);
                }
            })
            .catch(error => {
                console.error("Erreur:", error);
            });
    }, [id]);


    if (error) {
        return <Error />;
    }

    if (!logement || !host) {
        return <div>Chargement...</div>; // Ou un spinner de chargement
    }


    return (
        <div className='ficheLogement'>

            <Carrousel images={logement.pictures} />
            <InfoLogement 
                title={logement.title} 
                location={logement.location} 
                nom={host.name} 
                picture={host.picture} 
                rating={logement.rating} 
                tags={logement.tags}
                description={logement.description}
                equipments={logement.equipments}
            /> 
        </div>
    );
};

export default Logements;