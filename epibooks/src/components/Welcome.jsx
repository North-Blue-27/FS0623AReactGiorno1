import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div style={{ background: 'lightgray', textAlign: 'center', padding: '50px 0' }}>
      <Container>
        <h1>Welcome to EpiBook Shop</h1>
        <p>Choose between a wide selection of bestsellers books!</p>
      </Container>
    </div>
  );
};

export default Welcome;


