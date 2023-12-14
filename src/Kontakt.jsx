import React from 'react'
import {NavLink} from "react-router-dom";
import Home from "./App";

function Kontakt() {
  return (
    <div className='kontakt'>
        <ul className="kontakt-navigation">
            <li>
                <NavLink to="/firma">
                    Firma
                </NavLink>
            </li>
            <li>
                <NavLink to="/kontakt">
                    Kontakt
                </NavLink>
            </li>
            <li>
                <NavLink to={<Home/>}>
                    Home
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Kontakt