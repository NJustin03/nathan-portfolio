import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/Header';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <night-sky
        id="nightSky"
        layers="4"
        density="30"
        velocity-x="5"
        velocity-y="15"
        star-color="#FFFF00"
        background-color="transparent"
        >
          
      </night-sky>

      <h1 className="AboutPage">About</h1>
    </div>
  );
}

export default App;
