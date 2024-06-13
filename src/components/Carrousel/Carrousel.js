import React, { useState } from 'react';


const Carrousel = ({ images }) => {
    /* initialisation du hook d'état associé à l'index dans la table pictures */
	let [id, setId] = useState(0);

    if (!images || images.length === 0) {
        return <p>Aucune image disponible</p>;
    }

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
            <button className={classStringPrevious} onClick={previous} aria-label="précédente">&#60;</button>
			
            <img src={images[id]} alt={`photo ${id + 1}`} className='imageAppart' />

			<p className='numPages'>
				{id + 1}/{images.length}
			</p>

            <button className={classStringNext} onClick={next} aria-label="suivante">&#62;</button>
		</section>
    );
};

/* 
{images && images.map(image => (
                    <img src={image} alt={image} key={image} className='imageAppart' />
                )
            )}




<img src={previousIcon} className={classStringPrevious} onClick={previous} alt="précédente" />
<img src={nextIcon} className={classStringNext} onClick={next} alt="suivante" />

<img src={images[id]} className="picture" alt={titre} />

<section className="carrousel" id="carrousel" aria-label="carrousel">
            <div className="containerCarrousel"></div>
            <button className="chevron chevronG" aria-label="précédent">&lt;</button>
            <button className="chevron chevronD" aria-label="suivant">&gt;</button>
        </section>




console.log(image);

/*return (
                    <Link key={image} className="cardLogement" to={`/logements/${logement.id}`}>
                    {logement.pictures.length > 0 && (
                        <img src={logement.pictures[0]} alt={logement.title} key={logement.id} />
                    )}
                </Link>
                )*/

export default Carrousel;