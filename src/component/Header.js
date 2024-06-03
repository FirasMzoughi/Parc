import React from "react";
import { Link } from "react-router-dom";
import '../index.css';
import './Animation.css';
import ExpositionList from '../page/Exposition';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showExpositionList: false };
    }

    toggleExpositionList = () => {
        this.setState({ showExpositionList: !this.state.showExpositionList });
    };

    render() {
        const { showExpositionList } = this.state;

        return (
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li><Link to="/">Accueil</Link></li>
                    <li>
                        <a href="#!" onClick={this.toggleExpositionList}>
                            Exposition
                        </a>
                        {showExpositionList && <ExpositionList />}
                    </li>
                    <li><Link to="/anniversaire">Anniversaire</Link></li>
                    <li><Link to="/gallerie">Gallérie</Link></li>
                    <li><Link to="/reservations">Réservations</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/evenment">Evenement</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
