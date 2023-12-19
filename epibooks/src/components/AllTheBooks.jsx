import React, { useState } from 'react';
import { Container, Card, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import horrorData from '../data/horror.json';
import fantasyData from '../data/fantasy.json';
import thrillerData from '../data/history.json';
import romanceData from '../data/romance.json';
import scifiData from '../data/scifi.json';


const AllTheBooks = () => {
    const [books, setBooks] = useState(horrorData);
    const [currentCategory, setCurrentCategory] = useState('horror'); // Imposta la categoria iniziale
  
    const changeCategory = (category) => {
      setCurrentCategory(category); // Aggiorna la categoria corrente
      switch (category) {
        case 'horror':
          setBooks(horrorData);
          break;
        case 'fantasy':
          setBooks(fantasyData);
          break;
        case 'thriller':
          setBooks(thrillerData);
          break;
        case 'romance':
          setBooks(romanceData);
          break;
        case 'scifi':
          setBooks(scifiData);
          break;
        default:
          setBooks(horrorData);
      }
    };
  
    return (
      <Container>
        <Row className="justify-content-between align-items-center mb-3">
          <Col xs="auto">
            <h2>{currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Books</h2>
          </Col>
          <Col xs="auto">
            <DropdownButton id="dropdown-basic-button" title="Select Category">
              <Dropdown.Item onClick={() => changeCategory('horror')}>Horror</Dropdown.Item>
              <Dropdown.Item onClick={() => changeCategory('fantasy')}>Fantasy</Dropdown.Item>
              <Dropdown.Item onClick={() => changeCategory('thriller')}>Thriller</Dropdown.Item>
              <Dropdown.Item onClick={() => changeCategory('romance')}>Romance</Dropdown.Item>
              <Dropdown.Item onClick={() => changeCategory('scifi')}>Sci-Fi</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {books.map((book) => (
          <Col key={book.asin}>
          <Card style={{ height: '100%', backgroundColor: '#17192b', color: '#781c77' }}>
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                src={book.img}
                className="img-fluid"
                style={{ height: '100%', objectFit: 'contain' }}
              />
            </div>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text style={{ color: 'White' }}>Price: €{book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;