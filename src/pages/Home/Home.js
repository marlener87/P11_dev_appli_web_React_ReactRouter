import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import imageHeader from '../../assets/img/accueil.jpg'; // Importation de l'image     image.png

const Home = () => {
    return (
        <main>
            <div className="headerHome">
                <Header imageHeader={imageHeader} titreHeader='Chez vous, partout et ailleurs'/>
            </div>
            <Card />
        </main>
    );
};

export default Home;