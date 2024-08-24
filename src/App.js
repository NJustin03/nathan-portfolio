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
          I am a Computer Science major with a minor in Mathematics at the University of Central Florida, 
          graduating in December 2024. My passion for technology drives me to solve complex problems and 
          create innovative solutions, with professional interests spanning Machine Learning, Artificial 
          Intelligence, Virtual and Augmented Reality, and Full-Stack Web Development.
        </p>
        <br></br>
        <p className="AboutParagraph">
          I am highly self-motivated and thrive in independent work environments, where I can focus 
          deeply on tasks and bring projects to completion. I excel at working autonomously, allowing me 
          to immerse myself in challenges and deliver high-quality, meticulously crafted solutions. My 
          commitment to perfection drives me to push the boundaries of my skills, ensuring that every 
          project I undertake is of the highest standard. I enjoy working on intricate problems, often 
          obsessing over details until I find the perfect solution.
        </p>
        <br></br>
        <p className="AboutParagraph">
          One of my proudest achievements was developing a unique data structure for a project, which 
          allowed me to combine my technical expertise with my love for creativity. I am passionate 
          about creating new things and exploring emerging technologies.
        </p>
        <br></br>
        <p className="AboutParagraph">
          Outside of my professional interests, I am an avid fan of anime and video games, both of which 
          inspire my creativity and problem-solving skills.
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
