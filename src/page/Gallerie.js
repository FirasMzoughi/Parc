import React from "react";
import './Gallerie.css';
import grandparcour1 from '../assets/grandparcour.jpg'; // Import the image for old people
import grandparcour2 from '../assets/grandparcour2.jpg'; // Import the image for old people
import grandparcour3 from '../assets/grandparcour3.jpg'; // Import the image for old people
import petitparcour1 from '../assets/petitparcour.jpg'; // Import the image for kids
import petitparcour2 from '../assets/petitparcour2.jpg'; // Import the image for kids
import petitparcour3 from '../assets/petitparcour3.jpg'; // Import the image for kids
import cafeteria from '../assets/cofetiria.jpg'; // Import the image for cafeteria

const Gallerie = () => {
  return (
    <div className="gallery-container">
      <h2>Galerie</h2>
      <div className="image-grid">
        {/* Images for places for kids */}
        <section className="gallery-item">
          <img src={petitparcour1} alt="Aire de jeux pour enfants" />
        </section>
        <section className="gallery-item">
          <p>Aire de jeux pour enfants</p>
          <img src={petitparcour2} alt="Aire de jeux pour enfants" />
        </section>
        <section className="gallery-item">
          <img src={petitparcour3} alt="Aire de jeux pour enfants" />
        </section>

        {/* Images for places for the elderly */}
        <section className="gallery-item">
          <img src={grandparcour1} alt="Espace pour les personnes âgées" />
        </section>
        <section className="gallery-item">
          <p>Espace pour les personnes âgées</p>
          <img src={grandparcour2} alt="Espace pour les personnes âgées" />
        </section>
        <section className="gallery-item">
          <img src={grandparcour3} alt="Espace pour les personnes âgées" />
        </section>

        {/* Image for cafeteria */}
        <section className="gallery-item">
          <p>Cafétéria</p>
          <img src={cafeteria} alt="Cafétéria" />
        </section>
      </div>
    </div>
  );
};

export default Gallerie;
