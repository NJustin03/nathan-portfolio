import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function ContactPage(){
    return(
        <Container>
            <div>  
                <p className="ContactParagraph">
                Whether you're curious about my work, need more information, 
                or just want to chat, feel free to reach out via email. I will
                ensure to respond as quickly as possible. I'm always happy 
                to connect and answer any questions you may have!
                </p>
                <Button 
                    href="mailto:nathanjustin03@gmail.com" 
                    style={{background: '#1B1A55',
                    color: 'rgb(116, 230, 243)'}}
                    className='glowing'
                >
                    Contact Me
                </Button>
            </div>
        </Container>
    );
}