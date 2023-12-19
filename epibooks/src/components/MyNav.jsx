import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNav = () => {
  return (
    <Navbar  expand="lg" className='position-sticky sticky-top' style={{ backgroundColor: '#17192b'}}>
      <Navbar.Brand href="#home" style={{  color: '#781c77' }}>EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{  color: '#781c77' }}>Home</Nav.Link>
          <Nav.Link href="#about" style={{  color: '#781c77' }}>About</Nav.Link>
          <Nav.Link href="#browse" style={{  color: '#781c77' }}>Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
