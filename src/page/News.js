import React from 'react';
import './News.css';
import e1 from '../assets/e1.jpg';
import e2 from '../assets/e2.jpg';
import e3 from '../assets/e3.jpg';
import e4 from '../assets/e4.jpg';
import e5 from '../assets/e5.jpg';

const events = [
  {
    img: e1,
    title: 'Fête Foraine',
    description: 'Venez profiter de la fête foraine avec des manèges pour tous les âges et des friandises délicieuses.',
  },
  {
    img: e2,
    title: 'Concert en Plein Air',
    description: 'Assistez à des concerts en plein air avec des artistes de renommée mondiale dans une ambiance festive.',
  },
  {
    img: e3,
    title: 'Spectacle de Feu',
    description: 'Admirez un spectacle de feu époustouflant qui illumine la nuit avec des performances incroyables.',
  },
  {
    img: e4,
    title: 'Parade de Nuit',
    description: 'Ne manquez pas notre parade de nuit, un défilé magique avec des chars illuminés et des costumes colorés.',
  },
  {
    img: e5,
    title: 'Ateliers Créatifs',
    description: 'Participez à nos ateliers créatifs et laissez libre cours à votre imagination avec des activités pour tous les âges.',
  },
];

const Evenement = () => {
  return (
    <div className="evenement-container">
      <h2>Événements à Venir</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.img} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evenement;
