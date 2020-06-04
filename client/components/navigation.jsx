import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, scroller, animateScroll as scroll } from 'react-scroll';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm">
        <Navbar.Brand><i className="fas fa-laptop-code"></i> Kevin Tolentino</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="">About Me</Nav.Link>
            <Nav.Link>Skills</Nav.Link>
            <Nav.Link>Tools</Nav.Link>
            <Nav.Link>Applications</Nav.Link>
            <Nav.Item>
              <Link onClick={() => {
                scroller.scrollTo('contact', {
                  durration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                });
              }}
              // activeClass="active"
              //   className=""
              //   to="contact"
              //   spy={true}
              //   smooth={true}
              //   duration={500}
              >Contact</Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
