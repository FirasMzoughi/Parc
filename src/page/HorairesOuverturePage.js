import React from 'react';
import './HorairesOuverturePage.css';

const HorairesOuverturePage = () => {
  return (
    <div className="horaires-container">
      <h2>Horaires d'ouverture</h2>
      <div className="horaires-section">
        <h3>PÉRIODE SCOLAIRE</h3>
        <p>Lundi / Mardi / Mercredi / Jeudi / Vendredi :<br /> De 11h à 20h</p>
        <p>Samedi :<br /> De 10h à 21h</p>
        <p>Dimanche :<br /> De 10h à 20h</p>
      </div>

      <div className="horaires-section">
        <h3>VACANCES D'HIVER (7/7)</h3>
        <p>Lundi / Mardi / Mercredi / Jeudi / Vendredi / Dimanche<br /> De 10h à 20h</p>
        <p>Samedi<br /> De 10h à 21h</p>
      </div>

      <div className="horaires-section">
        <h3>VACANCES D'ÉTÉ (7/7)</h3>
        <p>Du Lundi au Dimanche<br /> De 10h à 22h</p>
      </div>

      <div className="horaires-section">
        <h3>RAMADHAN</h3>
        <p>Tous Les jours de:<br /> 10h à 16:30h<br /> et de<br /> 20h à 23h</p>
      </div>

      <div className="horaires-section">
        <h3>Jours fériés</h3>
        <p>Tous Les jours férié : ouvert.<br /> Aid Al Fitr: ouvert.<br /> Aid Al Adha: ouvert.</p>
      </div>
    </div>
  );
};

export default HorairesOuverturePage;
