// src/App.js
import React from 'react';
import CampusMap from './components/CampusMap';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>LPU Campus Police Station and Crime Map</h1>
      <div id="map-container">
        <CampusMap />
      </div>
      <footer>
        © 2024 LPU Crime Tracker | <a href="https://www.pokemon.com/us">Contact Us</a>
      </footer>
    </div>
  );
}

export default App;
