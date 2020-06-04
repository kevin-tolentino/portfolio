import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, scroller, animateScroll as scroll } from 'react-scroll';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        onSelect={selectedKey => {
          scroller.scrollTo(selectedKey, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
        }}
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm">
        <Navbar.Brand><i className="fas fa-laptop-code"></i> Kevin Tolentino</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link eventKey="about-me">About Me</Nav.Link>
            <Nav.Link eventKey="skills">Skills</Nav.Link>
            <Nav.Link eventKey="tools">Tools</Nav.Link>
            <Nav.Link eventKey="applications">Applications</Nav.Link>
            <Nav.Link eventKey="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
