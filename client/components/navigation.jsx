import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const offset = (window.innerWidth <= 575 ? -280 : -63);
  const delay = 0;
  const duration = 1000;

  return (

    <Navbar className="sticky-top navigation-background"
      color="dark"
      dark
      expand="sm">
      <NavbarBrand
        onClick={() => {
          scroll.scrollToTop({
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuint'
          });
          if (collapsed === false) {
            toggleNavbar();
          }
        }}
        className="cursor-pointer mr-auto"><img className="logo" src="/images/logo-white.png" alt="logo-white"/></NavbarBrand>
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
              offset={offset}
              isDynamic={true}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
                About Me
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
              offset={(window.innerWidth <= 575 ? -280 : -63)}
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
              offset={(window.innerWidth <= 575 ? -280 : -63)}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Tools
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
              offset={(window.innerWidth <= 575 ? -280 : -63)}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Applications
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
              offset={(window.innerWidth <= 575 ? -280 : -63)}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  );
};

export default Navigation;
