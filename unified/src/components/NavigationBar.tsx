import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const NavigationBar = () => {
  // page content

  let location = useLocation();
  
  return (

    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand as={Link} to="/">UniFied</Navbar.Brand>
    <Nav className="me-auto" activeKey={location.pathname}>
      <Nav.Link as={Link} eventKey="/" to="/">Home</Nav.Link>
      <Nav.Link as={Link} eventKey="/about" to="/about">About</Nav.Link>
      <Nav.Link as={Link} eventKey="/profile/me" to="/profile/me">My Profile</Nav.Link>
      <Nav.Link as={Link} eventKey="/events" to="/events">Events</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  );
}

export default NavigationBar