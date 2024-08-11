import '../App.css';
import pfp from '../images/NathanPFP.JPG';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function WelcomePage(){
    return(
        <Container>
            <Row>
            <div className="AboutHolder">
                    <Col xs={6} md={6}>
                        <h1 className="Introduction">Welcome!</h1>
                        <h2 className="Introduction">My name is Nathan</h2>
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={pfp} roundedCircle fluid className="Image"/>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}
