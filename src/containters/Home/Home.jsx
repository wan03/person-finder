import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import mockData from '../../data/mock-data.json';
import Person from '../../components/Person/Person';
import Logo from '../../components/Logo/Logo';
import { titleStyle, introStyle, title, intro } from './homeUtils';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';


const Home = () => {
    const [currentPeople, setCurrentPeople] = useState(mockData)

    const filterList = (searchTerm) => {
        const newPeople = mockData.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCurrentPeople(newPeople);
    }

    if (!currentPeople) {
        return <Spinner />
    }

    return (
        <Container>
            <Row>
                <Col xs={1} sm={2}>
                   <Logo /> 
                </Col>
                <Col>
                    <h1 className="mt-5" style={titleStyle}>{title}</h1>
                    <p className="mt-4" style={introStyle}>{intro}</p>
                    <SearchBar filterList={filterList} />
                    {currentPeople && currentPeople.map((person) => {
                        return <Person key={person.id} {...person} />
                    })}
                </Col>
                <Col xs={1} sm={2}></Col>
            </Row>
        </Container>
    )
}

export default Home;