import React from 'react';
import './Anniversaire.css';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';
import c6 from '../assets/c6.jpg';
import c7 from '../assets/c7.jpg';
import c8 from '../assets/c8.jpg';
import c9 from '../assets/c9.jpg';

const Anniversaire = () => {
  return (
    <div className="anniversaire-container">
      <h2>ESPACE ANNIVERSAIRE SPÉCIALEMENT DÉDIÉ À VOS PETITS</h2>
      <div className="image-gallery">
        <img src={c1} alt="Anniversaire 1" />
        <img src={c2} alt="Anniversaire 2" />
        <img src={c3} alt="Anniversaire 3" />
        <img src={c4} alt="Anniversaire 4" />
        <img src={c6} alt="Anniversaire 6" />
        <img src={c7} alt="Anniversaire 7" />
        <img src={c8} alt="Anniversaire 8" />
        <img src={c9} alt="Anniversaire 9" />
      </div>
      <p>Le parc Blue Park met à votre disposition un espace spécialement conçu pour célébrer les anniversaires de vos enfants dans une ambiance festive et sécurisée. Nos services incluent :</p>
      <ul>
        <li>Un espace décoré selon le thème choisi par l'enfant</li>
        <li>Cartons d’invitation personnalisés</li>
        <li>Certificat et photo souvenir</li>
        <li>Animation sur mesure pour chaque groupe</li>
        <li>Délicieux gâteau d’anniversaire</li>
        <li>Boissons pour tous les invités</li>
        <li>Snacks variés : pizzas, frites, et bien plus</li>
        <li>Friandises pour tous les goûts</li>
        <li>Animateur dédié pour animer la fête</li>
      </ul>
      
      <p>L’anniversaire à Blue Park est une expérience inoubliable pour les enfants et un moment de tranquillité pour les parents grâce à notre organisation impeccable et notre attention aux détails.</p>
      
      <div className="extra-features">
        <h3>Activités Spéciales</h3>
        <ul>
          <li>Ateliers créatifs et artistiques</li>
          <li>Maquillage fantaisie</li>
          <li>Jeux interactifs et compétitions amusantes</li>
          <li>Photobooth avec accessoires amusants</li>
        </ul>
      </div>

      <div className="extra-features">
        <h3>Thèmes Populaires</h3>
        <ul>
          <li>Princesse et Chevalier</li>
          <li>Super-héros</li>
          <li>Aventure Safari</li>
          <li>Magie et Sorcellerie</li>
          <li>Animaux de la Ferme</li>
        </ul>
      </div>
      
      <p>Nous vous invitons à réserver dès maintenant pour offrir à votre enfant une fête d'anniversaire mémorable au parc Blue Park. Contactez-nous pour plus d'informations et pour personnaliser votre événement selon vos souhaits.</p>
    </div>
  );
}

export default Anniversaire;
