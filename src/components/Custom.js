import { Navbar, Nav, } from 'react-bootstrap';
import '../styles/App.css';

function CustomNavbar() {
  return (
    <Navbar id='Navbar' collapseOnSelect expand="lg" bg="transparent"  variant="light" className='text-dark p-2'>
      
        <Navbar.Brand href="#home"><b>Dedeh Star Spa. </b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default CustomNavbar;
