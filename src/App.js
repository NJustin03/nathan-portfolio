import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/Header';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      <night-sky
        id="nightSky"
        layers="4"
        density="30"
        velocity-x="5"
        velocity-y="15"
        star-color="#FFFF00"
        >
          
      </night-sky>
      <header id="header">
        <AppHeader />
      </header>

      <WelcomePage></WelcomePage>
      <h1 className="Section">About</h1>
      <h1 className="Section">Skills</h1>
      <h1 className="Section">Projects</h1>
      <h1 className="Section">Contact</h1>
      
    </div>
  );
}

export default App;
