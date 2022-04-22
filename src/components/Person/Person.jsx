import React, { useState } from 'react';
import { imageStyle, textStyle, getBorderStyle } from './personUtils';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Person = ({name, description, avatar, id}) => {
    const [active, setActive] = useState(-1);

    return (
        <Card
        key={id} 
        border={getBorderStyle(active, id)} 
        className="mt-4" 
        onMouseOver={() => {
            setActive(id);
          }}
          onMouseOut={() => {
            setActive(-1);
          }}
        >
            <Row>
            <Col xs={5} sm={5} md={4} lg={3}>
            <Card.Img src={avatar} style={imageStyle} />
            </Col>
            <Col>
            <Card.Title style={textStyle}>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            </Col>    
            </Row>
        </Card>
    )
}

export default Person;