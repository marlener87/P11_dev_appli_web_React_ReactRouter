import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Carrousel = (images) => {
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
                console.log(logementsDatas.locationData);
                setLogementsDatas(logementsDatas.locationData)})
            .catch(error => {
                console.error("dommage", error);
            });
    }, []);

    /* initialisation du hook d'état associé à l'index dans la table pictures */
	let [id, setId] = useState(0);

	/* S'il n'y a qu'une seule image, on masque les flèches de navigation */
	let classStringPrevious = "previous";
	let classStringNext = "next";
	if (images.length === 1) {
		classStringPrevious += " hidden";
		classStringNext += " hidden";
	}

	/* fonctions associées aux flèches de navigation du carrousel */
	function next() {
		id === images.length - 1 ? setId(0) : setId(id + 1);
	}
	function previous() {
		id === 0 ? setId(images.length - 1) : setId(id - 1);
	}
    return (
        <section className="carrousel-container">
            <button className={classStringPrevious} onClick={previous} alt="précédente">&#60;</button>
			
              {logementsDatas.map(logement => {
                console.log(logement);
                return (
                    <Link key={logement.id} className="cardLogement" to={`/logements/${logement.id}`}>
                    {logement.pictures.length > 0 && (
                        <img src={logement.pictures[0]} alt={logement.title} key={logement.id} />
                    )}
                </Link>
                )
            }
            )}

			<p>
				{id + 1}/{images.length}
			</p>

          
            <button className={classStringNext} onClick={next} alt="suivante">&#62;</button>
		</section>
    );
};

/* 
<img src={previousIcon} className={classStringPrevious} onClick={previous} alt="précédente" />
<img src={nextIcon} className={classStringNext} onClick={next} alt="suivante" />

<img src={images[id]} className="picture" alt={titre} />

<section className="carrousel" id="carrousel" aria-label="carrousel">
            <div className="containerCarrousel"></div>
            <button className="chevron chevronG" aria-label="précédent">&lt;</button>
            <button className="chevron chevronD" aria-label="suivant">&gt;</button>
        </section>
*/
export default Carrousel;