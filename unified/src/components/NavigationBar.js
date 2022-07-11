import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  // page content
  
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand as={Link} to="/">UniFied</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/events">Events</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavigationBar