import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/Header';
import WelcomePage from './components/WelcomePage';
//import SkillsPage from './components/SkillsPage.js';
import ProjectsPage from './components/ProjectsPage';

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
      <p className="AboutParagraph">Lorem ipsum odor amet, consectetuer adipiscing elit. Augue praesent sit in odio vulputate vehicula. Aliquet sit penatibus dapibus mauris elementum mauris etiam metus! Massa dis felis netus et euismod imperdiet felis augue. Cras ullamcorper libero inceptos mus elementum torquent vitae. Parturient lobortis class dignissim per erat, ultricies tempus luctus.
      </p>
      <h1 className="Section">Skills</h1>
      <br></br>
      <br></br>
      <h2 className="Introduction">Programming Languages</h2>
      <p className="Introduction">C/C++, C#, HTML, CSS, Java, JavaScript, Python</p>
      <h2 className="Introduction">Frameworks/Libraries</h2>
      <p className="Introduction">React, Bootstrap</p>
      <h2 className="Introduction">Other Technologies</h2>
      <p className="Introduction">Github/Github Desktop, Unity, Postman, mySQL, MongoDB, Firebase </p>
      <h1 className="Section">Projects</h1>
      <ProjectsPage></ProjectsPage>
      <h1 className="Section">Contact</h1>
      
    </div>
  );
}

export default App;
