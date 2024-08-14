import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/Header';
import WelcomePage from './components/WelcomePage';
import SkillsPage from './components/SkillsPage.js';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <div className="App-content">
        <WelcomePage></WelcomePage>
        <h1 className="Section" id="about">About</h1>
        <p className="AboutParagraph">Lorem ipsum odor amet, consectetuer adipiscing elit. Augue praesent sit in odio vulputate vehicula. Aliquet sit penatibus dapibus mauris elementum mauris etiam metus! Massa dis felis netus et euismod imperdiet felis augue. Cras ullamcorper libero inceptos mus elementum torquent vitae. Parturient lobortis class dignissim per erat, ultricies tempus luctus.
        </p>
        <h1 className="Section" id="skills">Skills</h1>
        <SkillsPage></SkillsPage>
        <h1 className="Section" id="projects">Projects</h1>
        <ProjectsPage></ProjectsPage>
        <h1 className="Section" id="contact">Contact</h1>
      </div>
    </div>
  );
}

export default App;
