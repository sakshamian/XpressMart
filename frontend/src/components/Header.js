import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
      <Container>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand>XpressMart</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/cart'>
              <i className='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
            <Nav.Link as={Link} to='/login'>
              <i className='fas fa-user'></i>Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
