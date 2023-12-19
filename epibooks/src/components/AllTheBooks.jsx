import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import horrorData from '../data/horror.json';

const AllTheBooks = () => {
    return (
      <Container>
        <h2>Horror Books</h2>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {horrorData.map((book) => (
            <Col key={book.asin}>
              <Card style={{ height: '100%' }}>
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
                  <Card.Text>Price: €{book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default AllTheBooks;