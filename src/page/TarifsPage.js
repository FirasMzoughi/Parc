import React from 'react';
import './TarifsPage.css'; // Importer votre fichier CSS pour les styles personnalisés

const TarifsPage = () => {
  return (
    <div className="tarifs-container"> {/* Ajouter une classe pour le conteneur */}
      <h2>Les Tarifs</h2>
      <p>Voici nos tarifs pour les différents services :</p>
      <ul className="tarifs-list"> {/* Ajouter une classe pour la liste de tarifs */}
        <li>Enfant -3 ans 12 DT </li>
        <li>Enfant +3 ans 16 DT</li>
        <li>jeton de karting 3 DT</li>
        {/* <li>Carte annuelle enfant : 50dt</li>
        <li>Location de salle pour anniversaire : 200dt</li>
        <li>Animation spéciale (clown, magicien, etc.) : 150dt</li>
        <li>Atelier créatif : 30dt par enfant</li>
        <li>Accès au parcours aventure : 25dt</li>
        <li>Jeton de karting : 10dt</li>
        <li>Boisson au café : à partir de 3dt</li> */}
      </ul>
    </div>
  );
};

export default TarifsPage;
