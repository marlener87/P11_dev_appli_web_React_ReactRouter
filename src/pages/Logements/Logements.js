import React, { useEffect, useState } from 'react'; // Importation de React et des hooks useEffect et useState
import { useParams } from 'react-router-dom'; // Importation du hook useParams de react-router-dom pour récupérer les paramètres de l'URL
import Carrousel from '../../components/Carrousel/Carrousel'; // Importation du composant Carrousel
import InfoLogement from '../../components/InfoLogement/InfoLogement'; // Importation du composant InfoLogement
import Error from '../Error/Error'

//console.log(id);
const Logements = () => {
    const [logement, setLogement] = useState([]); 
    const [error, setError] = useState(false); 
    let { id } = useParams(); 
    
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
        <main>
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
        </main>
        
    );
};

export default Logements;