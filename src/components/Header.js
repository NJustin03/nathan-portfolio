import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import '../App.css';

import resumePic from '../images/iconmonstr-cv-1-240.png';
import linkedInPic from '../images/iconmonstr-linkedin-2-240.png';
import githubPic from '../images/iconmonstr-github-2-240.png';
import resumeFile from '../Nathan-Justin-Resume.pdf';

export default function AppHeader(){
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return(
        <div>
            <Navbar collapseOnSelect 
                    expand="lg" 
                    className={`Navbar-items ${showNavbar} ? 'visible' : 'hidden'}`}
                    style={{
                        transition: 'top 0.3s',
                        top: showNavbar ? '0' : '-100px', // Adjust -100px to match the height of your Navbar
                        position: 'fixed',
                        width: '100%',
                        bg: 'rgb(116, 230, 243)', 
                        borderBottom: '3px solid rgb(116, 230, 243)',
                        zIndex: '1000'
                    }}
            >
                <Container>
                    <Navbar.Brand href="#home"style={{color: 'rgb(116, 230, 243)'}}>NJ</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>
                        <Navbar.Collapse id="responsive-navbar-nav" style={{color: 'rgb(116, 230, 243)'}}>
                        <Nav className="ms-auto d-flex align-items-center" style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
                            <Nav.Link href="#about" style={{color: 'rgb(116, 230, 243)'}}>About</Nav.Link>
                            <Nav.Link href="#skills" style={{color: 'rgb(116, 230, 243)'}}>Skills</Nav.Link>
                            <Nav.Link href="#projects" style={{color: 'rgb(116, 230, 243)'}}>Projects</Nav.Link>
                            <Nav.Link eventKey={2} href="#contact" style={{color: 'rgb(116, 230, 243)'}}>Contact</Nav.Link>
                            <div style={{display: 'flex', justifyContent: 'center', gap: '40px'}}>
                                <a href={resumeFile} download>
                                    <Image src={resumePic} className="NavImage"/>
                                </a>
                                <a href="https://www.linkedin.com/in/nathan-justin-a5270b280/" target="_blank" rel="noopener noreferrer">
                                    <Image src={linkedInPic} className="NavImage"/>
                                </a>
                                <a href="https://github.com/SkyDrqgon" target="_blank" rel="noopener noreferrer">
                                    <Image src={githubPic} className="NavImage"/>
                                </a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}