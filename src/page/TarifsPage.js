import React from 'react';
import './TarifsPage.css'; // Importer votre fichier CSS pour les styles personnalisés

const TarifsPage = () => {
  return (
    <div className="tarifs-container"> {/* Ajouter une classe pour le conteneur */}
      <h2>Les Tarifs</h2>
      <p>Voici nos tarifs pour les différents services :</p>
      <ul className="tarifs-list"> {/* Ajouter une classe pour la liste de tarifs */}
        <li>Entrée adulte : 10dt</li>
        <li>Entrée enfant : 5dt</li>
        <li>Carte annuelle adulte : 100dt</li>
        <li>Carte annuelle enfant : 50dt</li>
        <li>Location de salle pour anniversaire : 200dt</li>
        <li>Animation spéciale (clown, magicien, etc.) : 150dt</li>
        <li>Atelier créatif : 30dt par enfant</li>
        <li>Accès au parcours aventure : 25dt</li>
        <li>Jeton de karting : 10dt</li>
        <li>Boisson au café : à partir de 3dt</li>
      </ul>
    </div>
  );
};

export default TarifsPage;
