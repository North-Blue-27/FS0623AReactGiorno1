import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div style={{ backgroundColor: '#17192b', textAlign: 'center', padding: '50px 0', color: '#781c77' }}>
      <Container>
        <h1>Welcome to EpiBooks Shop</h1>
        <p>Choose between a wide selection of bestsellers books!</p>
      </Container>
    </div>
  );
};

export default Welcome;


