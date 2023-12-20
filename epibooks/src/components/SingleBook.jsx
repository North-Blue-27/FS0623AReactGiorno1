import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  return (
    <Card className="mb-4" style={{ height: '100%', backgroundColor: '#17192b', color: '#781c77', position: 'relative' }}>
  <div className="overflow-hidden" style={{ height: '300px'}}>
    <Card.Img variant="top" src={book.img} className="img-fluid" style={{ height: '100%', objectFit: 'fill' }} />
  </div>
  <Card.Body className="position-relative">
    <Card.Title>{book.title}</Card.Title>
    <Card.Text className="text-white" style={{ position: 'absolute', bottom: '0', right: '0' }}>Price: €{book.price}</Card.Text>
  </Card.Body>
</Card>

  );
};

export default SingleBook;