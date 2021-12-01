import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='bar'>
  <Container>
  <Navbar.Brand href="#home" className='logo'><Image src={logo}></Image></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav className='menu'>
      <Nav.Link  href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;