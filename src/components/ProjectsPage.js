import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import '../App.css';

import pfp from '../images/c_6132222.png';

export default function ProjectsPage(){
    const cardInfo = [
        {image: pfp, title: "Gesturescape", text: "Test", dateCreated: "Dated",},
        {image: pfp, title: "cARnival", text: "Test", dateCreated: "Dated",},
        {image: pfp, title: "Space Havoc", text: "Test", dateCreated: "Dated",},
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(2);
    const totalPages = Math.ceil(cardInfo.length / cardsPerPage);

    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 1080) {
                setCardsPerPage(1);
            } else if (window.innerWidth < 1440) {
                setCardsPerPage(2);
            } else {
                setCardsPerPage(3);
            }
        };

        updateCardsPerPage();

        window.addEventListener('resize', updateCardsPerPage);
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardInfo.slice(indexOfFirstCard, indexOfLastCard);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    const renderCard = (card, index) => {
        return (
            <Card style={{background: '#535C91'}} key={index} className="Project">
                <Card.Header style={{background: '#070F2B', color: 'white'}}>
                    <div>
                        <span style={{fontSize: '24px'}}>{card.title}</span>  
                    </div>
                    <Button variant="link" style={{background: 'none', border: 'none'}}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-github-1767765-1502345.png" alt="Profile" roundedCircle style={{width: '50px', background: 'white'}}/>
                    </Button>
                </Card.Header>
                <Card.Img variant="top" src={card.image}></Card.Img>
                <Card.Body style={{background: '#1B1A55'}}>
                    <Card.Text style={{color: 'white'}}>
                        {card.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{background: '#070F2B', color: 'white'}}>{card.dateCreated}</Card.Footer>
            </Card>
        );

    }
    return(
        <div>
            <div className="ProjectHolder">
                {currentCards.map(renderCard)}
            </div>
            <Pagination style={{justifyContent: 'center', gap: '100px'}}>
                <Pagination.Prev onClick={handlePrevClick} disabled={currentPage === 1} />
                <Pagination.Next onClick={handleNextClick} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
        

        
    );
}