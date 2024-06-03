import React, { Component } from 'react';
import './Dashboard.css';

class AdminDashboard extends Component {
  state = {
    reservations: [
      {
        id: 1,
        nameprenom: 'John Doe',
        email: 'john.doe@example.com',
        numero: '1234567890',
        age: 10,
        sexe: 'Masculin',
        pays: 'France',
        date: '2024-06-15',
        status: 'Pending'
      },
      {
        id: 2,
        nameprenom: 'Jane Smith',
        email: 'jane.smith@example.com',
        numero: '0987654321',
        age: 8,
        sexe: 'Féminin',
        pays: 'Canada',
        date: '2024-06-20',
        status: 'Pending'
      }
      // Add more sample reservations as needed
    ]
  };

  handleAccept = (id) => {
    const reservations = this.state.reservations.map(reservation => {
      if (reservation.id === id) {
        reservation.status = 'Accepted';
      }
      return reservation;
    });
    this.setState({ reservations });
  };

  handleDecline = (id) => {
    const reservations = this.state.reservations.map(reservation => {
      if (reservation.id === id) {
        reservation.status = 'Declined';
      }
      return reservation;
    });
    this.setState({ reservations });
  };

  render() {
    return (
      <div className="dashboard-container">
        <h2>Tableau de Bord de l'Administrateur</h2>
        <div className="reservations-list">
          {this.state.reservations.map(reservation => (
            <div key={reservation.id} className="reservation-card">
              <h3>{reservation.nameprenom}</h3>
              <p>Email: {reservation.email}</p>
              <p>Numéro: {reservation.numero}</p>
              <p>Âge: {reservation.age}</p>
              <p>Sexe: {reservation.sexe}</p>
              <p>Pays: {reservation.pays}</p>
              <p>Date: {reservation.date}</p>
              <p>Status: <span className={`status ${reservation.status.toLowerCase()}`}>{reservation.status}</span></p>
              <div className="reservation-actions">
                <button className="accept-button" onClick={() => this.handleAccept(reservation.id)}>Accepter</button>
                <button className="decline-button" onClick={() => this.handleDecline(reservation.id)}>Décliner</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
