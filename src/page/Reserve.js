import React, { Component } from "react";
import './Reserve.css';

class Reserve extends Component {
  makeReservation = () => {
    // Get the values from the form fields
    const nameprenom = document.getElementById('nameprenom').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;
    const age = document.getElementById('age').value;
    const sexe = document.getElementById('sexe').value;
    const date = document.getElementById('date').value;

    // Check that all fields are filled
    if (!nameprenom || !email || !numero || !age || !sexe || !date) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Create a reservation object
    const reservation = {
      nameprenom: nameprenom,
      email: email,
      numero: numero,
      age: age,
      sexe: sexe,
      date: date,
    };

    // Simulate sending the reservation (e.g., sending it to a server)
    console.log('Réservation effectuée:', reservation);

    // Display the confirmation message
    document.getElementById('confirmation-message').textContent = `Merci, ${nameprenom}! Votre réservation pour le ${date} a été confirmée.`;
    document.getElementById('confirmation').style.display = 'block';

    // Reset the form
    document.getElementById('nameprenom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('age').value = '';
    document.getElementById('sexe').value = '';
    document.getElementById('date').value = '';
  }

  render() {
    return (
      <div className="reservation-container">
        <div className="reservation-form">
          <h2>Réservation</h2>
          <div className="form-group">
            <label htmlFor="nameprenom">Nom et Prénom:</label>
            <input type="text" id="nameprenom" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="numero">Numéro de Télephone:</label>
            <input type="number" id="numero" required />
          </div>

          <div className="form-group">
            <label htmlFor="age">Âge de l'enfant:</label>
            <input type="number" id="age" required />
          </div>

          <div className="form-group">
            <label htmlFor="sexe">Sexe:</label>
            <select id="sexe" required>
              <option selected hidden disabled>Choisissez ici...</option>
              <option>Féminin</option>
              <option>Masculin</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pays">Pays:</label>
            <select id="pays" required>
              <option selected hidden disabled>Choisissez ici...</option>
              {[
                "Tunisia"
              ].map((country, index) => (
                <option key={index}>{country}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date de Réservation:</label>
            <input type="date" id="date" required />
          </div>

          <button className="reservation-button" onClick={this.makeReservation}>Réserver</button>
          <div id="confirmation" className="confirmation">
            <h3>Confirmation de Réservation</h3>
            <p id="confirmation-message"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Reserve;
