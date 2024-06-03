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
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"
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
