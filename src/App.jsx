import react from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Firma from "./Firma";
import Kontakt from "./Kontakt";

// React Router DOM
// Wichtig: Achtet auf eure React Router DOM Version in der package.json
// Routes, Route, Link (NavLink), BrowserRouter
// Alle diese Varianten sind Methoden aus dem Packet
// D.h. per Destructuring einbinden und im import bennen 
// Routes: Beschreiben alle möglichen URL Endpunkte, z.B. /kontakt und /firma
// <a href="/kontakt.html"> Link zu Kontakt</a>
// Route: Einen spezifischen URL Endpunkt beschreibt und wir jeweils eine React Komponente hinzufügen können z.B. /kontakt mit Kontakt.jsx
// Link: Beschreibt einen HTML Link zu einer Komponente oder einen URL Endpunkt
// NavLink: Beschreibt eine Navigation in einer Liste z.B. in einer UL>LI

// Ausblick: 
// 1. useParams und useLocation für die Übergabe von Parametern an verschiedne Andpunkte
// 2. Navigate für die Weiterleitung intern, z.B. wenn ihr eingeloggt seid oder nicht
// 3. Protected Routes für die Anwendung einer Rollensystem, z.B. seid ihr ein Admin oder User oder nicht-registriert
function App() {

  return (
    <div className='app'>
      <div className='main-navigation'>
          {/* /details/15 
          <Routes location={useLocation() || useParams()} key={location.pathName}> */}
          <Routes>
            <Route exact path="/kontakt" element={<Kontakt/>}/>
            <Route exact path="/firma" element = {<Firma/>}/>
            <Route path="*" element="<div>Not Found 404 page</div>" />
          </Routes>
      </div>
    </div>
  )
}

export default App
