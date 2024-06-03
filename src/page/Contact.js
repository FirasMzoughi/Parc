import React from "react";
import './Contact.css';
import parkImage from '../assets/e4.jpg'; // Ensure you have an image in this path

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <img src={parkImage} alt="Parc Blue Place" className="park-image" />
        <div className="text-info">
          <h2>VISITEZ NOTRE PARC ET SOYEZ LES BIENVENUS</h2>
          <p>Rue Balda Lakdima, Hammam Sousse, Bhayer Sousse, 4011 Tunisie</p>
          <p>Tél: (+216) 73 325 012 / (+216) 52 188 999</p>
          <p>Email: jomaaloisirs@hotmail.com</p>
          <p>Notre parc offre une variété d'attractions pour toute la famille, des aires de jeux pour enfants aux zones de détente pour les adultes. Venez profiter de nos manèges, de notre cafétéria et de nos espaces verts bien entretenus. Nous organisons également des événements spéciaux tout au long de l'année.</p>
        </div>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.785294527265!2d10.602587215738623!3d35.833912440264335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIyJzQ0LjMiTiAxMMKwMzEnMzguOSJF!5e0!3m2!1sen!2stn!4v1622623182921!5m2!1sen!2stn" 
          width="600" 
          height="450" 
          style={{ border: "0" }} 
          allowFullScreen="" 
          loading="lazy"> 
        </iframe> 
      </div>
      <div className="additional-info">
        <p>Route touristique, avenue Taha Hassine, derrière slim centre Sousse, Sousse, Tunisia</p>
        <p>Phone: (+216) 51 344 340</p>
        <a href="https://www.google.com/maps/place/Parc+Blue+Place/@35.8433799,10.602748,15z/data=!3m1!4b1!4m6!3m5!1s0x130275344ff9e7f7:0xed2ff83754e5cad7!8m2!3d35.8433639!4d10.621202!16s%2Fg%2F11k4qpj9kp?entry=ttu" target="_blank" rel="noopener noreferrer">Voir sur Google Maps</a>
      </div>
    </div>
  );
}

export default Contact;
