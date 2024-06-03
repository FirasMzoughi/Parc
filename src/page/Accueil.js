import React, { Component } from "react";
import './Accueil.css';
import image1 from '../assets/1.jpg';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';
import c5 from '../assets/c6.jpg';
import Title from "../component/Title";

class Accueil extends Component {
    render() {
        return (
            <div className="accueil-container">
                <main className="main-content">
                    <Title />
                    <p>
                        Bienvenue au Parc d'Aventures, votre destination ultime pour une journée de divertissement et d'excitation. Profitez de nos attractions variées, des montagnes russes palpitantes aux aires de jeux relaxantes, adaptées à tous les âges.
                    </p>
                </main>
                <img src={image1} alt="Image principale" className="main-image" />
                <section className="park-info">
                    <h2>À propos du parc</h2>
                    <p>
                        Situé au cœur de la nature, notre parc offre une multitude d'activités pour toute la famille. Que vous soyez amateur de sensations fortes ou que vous préfériez des moments de détente, vous trouverez de quoi vous satisfaire. Explorez nos nombreuses attractions, participez à nos événements spéciaux et savourez des repas délicieux dans nos restaurants variés.
                    </p>
                    <p>
                        Notre parc est conçu pour offrir une expérience inoubliable à chaque visiteur. De nos manèges les plus extrêmes à nos espaces verts paisibles, nous avons pensé à tout pour que chaque moment passé chez nous soit magique.
                    </p>
                </section>
                <div className="image-gallery">
                    <img src={c1} alt="Attraction 1" className="gallery-image" />
                    <img src={c2} alt="Attraction 2" className="gallery-image" />
                    <img src={c3} alt="Attraction 3" className="gallery-image" />
                    <img src={c4} alt="Attraction 4" className="gallery-image" />
                    <img src={c5} alt="Attraction 5" className="gallery-image" />
                </div>
            </div>
        );
    }
}

export default Accueil;
