import React from 'react';
import './App.css';

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
        background-color="transparent"
        >
      </night-sky>
    </div>
  );
}

export default App;
