import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React>
    {/* BrowserRouter in der main.jsx für das umklammern von ALLEN React Komponenten auf unser Webseite.
    useContext wird später hier noch umklammert 
    dci.com/kontakt dci.com/firma
    dci.com/v1/kontakt dci.com/v1/firma
    */}
    <BrowserRouter basename='v1'>
      <App />
    </BrowserRouter>
  </React>,
)
