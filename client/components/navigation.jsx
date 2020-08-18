import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

function Navigation(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const offset = (window.innerWidth <= 575 ? -84 : -68);
  const delay = 0;
  const duration = 1000;

  return (

    <Navbar className="fixed-top"
      color="dark"
      dark
      expand="sm">
      <Link
        activeClass="is-visible"
        className="text-secondary cursor-pointer not-visible"
        to="hero"
        spy={true}
        smooth='easeInOutQuint'
        delay={delay}
        duration={duration}
        offset={offset}>
        <img className="logo" src="/images/logo-white.png" alt="logo-white" />
      </Link>

      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse className="justify-content-end" isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem className='mx-2 my-2'>
            <Link
              activeClass="text-light"
              className="text-secondary cursor-pointer"
              to="about-me"
              spy={true}
              smooth='easeInOutQuint'
              delay={delay}
              duration={duration}
              offset={(window.innerWidth <= 575 ? -80 : -50)}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
                About Me
            </Link>
          </NavItem>
          <NavItem className='mx-2 my-2'>
            <Link
              activeClass="text-light"
              className="text-secondary cursor-pointer"
              to="applications"
              spy={true}
              smooth='easeInOutQuint'
              delay={delay}
              duration={duration}
              offset={offset}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Applications
            </Link>
          </NavItem>
          <NavItem className='mx-2 my-2'>
            <Link
              activeClass="text-light"
              className="text-secondary cursor-pointer"
              to="skills"
              spy={true}
              smooth='easeInOutQuint'
              delay={delay}
              duration={duration}
              offset={offset}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Technical Skills
            </Link>
          </NavItem>
          <NavItem className='mx-2 my-2'>
            <Link
              activeClass="text-light"
              className="text-secondary cursor-pointer"
              to="tools"
              spy={true}
              smooth='easeInOutQuint'
              delay={delay}
              duration={duration}
              offset={offset}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Tools
            </Link>
          </NavItem>
          <NavItem className='mx-2 my-2'>
            <Link
              activeClass="text-light"
              className="text-secondary cursor-pointer"
              to="media"
              spy={true}
              smooth='easeInOutQuint'
              delay={delay}
              duration={duration}
              offset={offset}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Media
            </Link>
          </NavItem>
          <NavItem className='mx-2 my-2'>
            <Link
              activeClass="text-light"
              className="text-secondary cursor-pointer"
              to="contact"
              spy={true}
              smooth='easeInOutQuint'
              delay={delay}
              duration={duration}
              offset={offset}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  );
}

export default Navigation;
