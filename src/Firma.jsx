import React from 'react'
import {Link}from "react-router-dom"

function Firma() {
    // Aufgabe: Das Bild soll klickbar sein
  return (
    <div>
        <Link to="/kontakt" activeClassName="active-class">
            <img src="" alt="Firmenlogo" />
        </Link>
    </div>
  )
}

export default Firma