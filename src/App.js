import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import Accueil from "./page/Accueil";
import ExpositionList from "./page/Exposition";
import Reserve from "./page/Reserve";
import Anniversaire from "./page/Anniversaire";
import Gallerie from "./page/Gallerie";
import Contact from "./page/Contact";
import News from "./page/News";
import Footer from "./component/Footer";
import TarifsPage from "./page/TarifsPage";
import ReglementInternePage from "./page/ReglementInternePage";
import HorairesOuverturePage from "./page/HorairesOuverturePage";
import MenusRestaurationPage from "./page/MenusRestaurationPage";
import AdminLogin from "./page/AdminLogin";
import Dashboard from "./page/Dashboard";
import AdminDashboard from "./page/Dashboard";
import Evenement from "./page/News";



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/exposition" element={<ExpositionList />} />
      <Route path="/reservations" element={<Reserve />} />
      <Route path="/anniversaire" element={<Anniversaire />} />
      <Route path="/gallerie" element={<Gallerie/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/evenment" element={<Evenement/>} />
      <Route path="/tarifs" element={<TarifsPage/>} />
      <Route path="/reglement-interne" element={<ReglementInternePage/>} />
      <Route path="/horaires-ouverture" element={<HorairesOuverturePage/>} />
      <Route path="/menus-restauration" element={<MenusRestaurationPage/>} />
      <Route path="/login" element={<AdminLogin/>} />
      <Route path="/dashboard" element={<AdminDashboard/>} />
      
      </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
