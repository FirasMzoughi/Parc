import React from 'react';
import './ReglementInternePage.css';

const ReglementInternePage = () => {
  return (
    <div className="reglement-container">
      <h2>Règlement Interne</h2>
      <p>Les règlements internes de sécurité pour un parc de jeux d'enfants sont essentiels pour assurer la sécurité et le bien-être des enfants qui y jouent.</p>
      <p>Voici une liste de règles et de recommandations courantes que l'on trouve généralement dans ces règlements :</p>

      <div className="reglement-section general">
        <h3>Règlements Généraux</h3>
        <ul>
          <li>Tous les enfants sont sous la surveillance d'un adulte à tout moment.</li>
          <li>Le port de chaussettes est obligatoire.</li>
          <li>Les équipements de jeu sont souvent conçus pour des tranches d'âge spécifiques.</li>
          <li>Respecter les indications d'âge pour chaque équipement.</li>
          <li>Utiliser chaque équipement de jeu de manière appropriée et conformément à son usage prévu.</li>
          <li>Les enfants doivent respecter les autres utilisateurs du parc.</li>
          <li>Pas de violence, d'intimidation ou de comportement dangereux.</li>
          <li>Porter des vêtements appropriés, éviter les vêtements amples, les cordons, ou les bijoux qui peuvent s'accrocher aux équipements.</li>
          <li>Jeter les déchets dans les poubelles prévues à cet effet.</li>
          <li>Ne pas laisser de débris qui pourraient causer des accidents.</li>
        </ul>
      </div>

      <div className="reglement-section specific">
        <h3>Réglementations Spécifiques</h3>
        <ul>
          <li>Respecter les heures d'ouverture et de fermeture du parc.</li>
          <li>Généralement, les animaux de compagnie ne sont pas autorisés dans les aires de jeux.</li>
          <li>Pas de consommation d'alcool, de tabac ou de substances illégales dans le parc.</li>
        </ul>
      </div>

      <div className="reglement-section urgences">
        <h3>Urgences</h3>
        <ul>
          <li>Connaître l'emplacement des téléphones d'urgence ou des numéros à appeler en cas de blessure.</li>
          <li>Disposer d'un kit de premiers secours et savoir comment l'utiliser.</li>
          <li>En cas d'incendie ou d'autre urgence, suivre les procédures d'évacuation indiquées.</li>
        </ul>
      </div>
    </div>
  );
};

export default ReglementInternePage;
