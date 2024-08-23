import React from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/Header';
import WelcomePage from './components/WelcomePage';
import SkillsPage from './components/SkillsPage.js';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage.js';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <Container>
        <WelcomePage></WelcomePage>
        <h1 className="Section" id="about" style={{paddingTop: '35%'}}>About</h1>
        <p className="AboutParagraph">
          I am a Computer Science major with a Mathematics minor at the University of 
          Central Florida, aspiring to build a career as a Software Engineer. My 
          professional interests span across several key areas, including Machine 
          Learning, Artificial Intelligence, Virtual and Augmented Reality, and 
          Full-Stack Web Development. I am passionate about leveraging technology 
          to solve complex problems and am eager to contribute to cutting-edge 
          advancements in the field.
        </p>
        <br></br>
        <p className="AboutParagraph">
          As far as my strengths, I am someone who thrives in a group setting. I am a 
          very open and honest communicator, and I make it a priority to maintain clear 
          communication with others in a team environment. I actively listen to others, 
          provide constructive feedback, and adapt to different perspectives, all of 
          which help me contribute effectively to team goals.  
        </p>

        <h1 className="Section" id="skills" style={{paddingTop: '35%'}}>Skills</h1>
        <SkillsPage></SkillsPage>
        <h1 className="Section" id="projects">Projects</h1>
        <ProjectsPage></ProjectsPage>
        <h1 className="SectionContact" id="contact" style={{paddingTop: '0px'}}>Contact</h1>
        <ContactPage></ContactPage>
      </Container>
    </div>
  );
}

export default App;
