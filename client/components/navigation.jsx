import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from 'react-scroll';

class Navigation extends React.Component {
  render() {
    return (

      <Navbar className="justify-content-between" bg="dark" variant="dark" sticky="top" expand="sm">
        <Navbar.Brand><i className="fas fa-laptop-code"></i> Kevin Tolentino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            {/* Change this component later to <Link> component when implementing
            the react-scroll dependency */}
            <Nav.Link>About Me</Nav.Link>
            <Nav.Link>Skills</Nav.Link>
            <Nav.Link>Tools</Nav.Link>
            <Nav.Link>Applications</Nav.Link>
            <Nav.Link><Link activeClass="active" className="test1" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
