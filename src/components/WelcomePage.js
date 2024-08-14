import React, { useState, useEffect } from 'react';
import '../App.css';
import pfp from '../images/NathanPFP.JPG';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function WelcomePage(){
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

    return(
        <Container>
            {isMobile ? (
                //Mobile View
                <div className="AboutHolder-mobile">
                    <h1 className="Introduction" id="home">Welcome!</h1>
                    <h2 className="Introduction">My name is Nathan</h2>
                    <Image src={pfp} roundedCircle fluid className="Image-mobile"/>
                </div>
            ) : (
                <Row>
                <div className="AboutHolder">
                        <Col xs={6} md={6}>
                            <h1 className="Introduction" id="home">Welcome!</h1>
                            <h2 className="Introduction">My name is Nathan</h2>
                        </Col>
                        <Col xs={6} md={6}>
                            <Image src={pfp} roundedCircle fluid className="Image"/>
                        </Col>
                    </div>
                </Row>
            )}
            
        </Container>
    );
}
