import React, { useState } from 'react';

const Carrousel = ({ images }) => {
    /* initialisation du hook d'état associé à l'index dans la table pictures */
	let [id, setId] = useState(0);

    if (!images || images.length === 0) {
        return <p className='imageNulle'>Aucune image disponible</p>;
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
			
            <img src={images[id]} alt={`${id + 1}`} className='imageAppart' />

			<p className='numPages'>
				{id + 1}/{images.length}
			</p>

            <button className={classStringNext} onClick={next} aria-label="suivante">&#62;</button>
		</section>
    );
};

export default Carrousel;