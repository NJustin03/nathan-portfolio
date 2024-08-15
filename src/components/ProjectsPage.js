import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import '../App.css';

import spacehavocImg from '../images/SpaceHavoc2.png';
import gesturescapeImg from '../images/Gesturescape2.png';
import cARnivalImg from '../images/cARnival2.png'

export default function ProjectsPage(){
    const cardInfo = [
        {image: gesturescapeImg, title: "Gesturescape", text: "A 3D VR puzzle games that utilizes hand pose detection to trigger abilities to traverse through different levels.", dateCreated: "Unity, C#, Oculus SDK, VR", githubLink:"https://github.com/SkyDrqgon/Gesturescape-game"},
        {image: cARnivalImg, title: "cARnival", text: "A mobile application where users play different AR games to assist in learning different languages.", dateCreated: "Unity, AR Foundation, C#", githubLink:"https://github.com/SkyDrqgon/cARnival-app"},
        {image: spacehavocImg, title: "Space Havoc", text: "A 3D Space Shooter inspired by old Atari and arcade games where you shoot aliens from your spaceship.", dateCreated: "C++, Raylib/RayGUI", githubLink:"https://github.com/RyanTurner02/space-havoc"},
        {image: spacehavocImg, title: "Music App", text: "A simple music application with login and signup with Google that allows you to upload and play music.", dateCreated: "React, Express, MongoDB, Firebase, Nodejs", githubLink:"https://github.com/SkyDrqgon/MERN-Project"},    
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(2);
    const totalPages = Math.ceil(cardInfo.length / cardsPerPage);

    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth <= 1200) {
                setCardsPerPage(1);
            } else if (window.innerWidth <= 1440) {
                setCardsPerPage(2);
            } else if (window.innerWidth >= 1600){
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
            <Card style={{background: '#535C91', flex: '0 1 400px', textAlign: 'left'}} key={index} className="Project">
                <Card.Header style={{background: '#070F2B', color: 'white'}}>
                    <div>
                        <span className="glowing" style={{fontSize: '24px', color: 'rgb(116, 230, 243)'}}>{card.title}</span>  
                    </div>
                    <a href={card.githubLink} target="_blank" rel="noopener noreferrer" style={{textAlign: 'right'}}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-github-1767765-1502345.png" alt="Profile" roundedCircle style={{width: '50px', background: 'white'}}/>
                    </a>
                </Card.Header>
                <Card.Img variant="top" src={card.image} style={{background: 'rgb(116, 230, 243)'}}></Card.Img>
                <Card.Body style={{background: '#1B1A55'}}>
                    <Card.Text className="glowing" style={{color: 'rgb(116, 230, 243)'}}>
                        {card.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="glowing" style={{background: '#070F2B', color: 'rgb(116, 230, 243)'}}>{card.dateCreated}</Card.Footer>
            </Card>
        );

    }
    return(
        <div>
            <div className="ProjectHolder">
                {currentCards.map(renderCard)}
            </div>
            <Pagination style={{justifyContent: 'center', gap: '100px'}}>
                <Pagination.Prev 
                    onClick={handlePrevClick} 
                    disabled={currentPage === 1} 
                    style={{
                        borderColor: 'red', 
                        backgroundColor: 'rgb(116, 230, 243)', 
                        color: 'rgb(116, 230, 243)'}}
                        className={currentPage === 1 ? 'no-glow' : 'glowing-box'}
                />
                <Pagination.Next 
                    onClick={handleNextClick} 
                    disabled={currentPage === totalPages} 
                    style={{
                        borderColor: 'red', 
                        backgroundColor: 'rgb(116, 230, 243)', 
                        color: 'rgb(116, 230, 243)'}}
                    className={currentPage === totalPages ? 'no-glow' : 'glowing-box'}
                />
            </Pagination>
        </div>
        

        
    );
}