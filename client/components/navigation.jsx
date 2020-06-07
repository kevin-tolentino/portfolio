import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (

    <Navbar className="sticky-top"
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
              delay={100}
              duration={500}
              offset={(window.innerWidth <= 575 ? -255 : -40)}
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
              delay={100}
              duration={500}
              offset={(window.innerWidth <= 575 ? -59 : -40)}
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
              delay={100}
              duration={500}
              offset={(window.innerWidth <= 575 ? -59 : -40)}
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
              delay={100}
              duration={500}
              offset={(window.innerWidth <= 575 ? -59 : -40)}
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
              delay={100}
              duration={500}
              offset={(window.innerWidth <= 575 ? -59 : -40)}
              onClick={window.innerWidth <= 575 ? toggleNavbar : null}>
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  );
};

//
//
// tools
// applications
// contact

// class Navigation extends React.Component {
//   render() {
//     return (
//       <Navbar
//         collapseOnSelect
//         onSelect={
//           selectedKey => {
//             scroller.scrollTo(selectedKey, {
//               duration: 1000,
//               smooth: 'easeInOutQuint',
//               offset: (window.innerWidth < 575 ? -250 : -50)
//             });
//           }}
//         bg="dark"
//         variant="dark"
//         sticky="top"
//         expand="sm">
// <Navbar.Brand onClick={() => {
//   scroll.scrollToTop({
//     duration: 800,
//     delay: 100,
//     smooth: 'easeInOutQuint'
//   });
//         }}><i className="fas fa-laptop-code"></i> Kevin Tolentino</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
//           <Nav>
//             <Nav.Link active bsPrefix="nav-link" eventKey="about-me">About Me</Nav.Link>
//             <Nav.Link active bsPrefix="nav-link" eventKey="skills">Skills</Nav.Link>
//             <Nav.Link active bsPrefix="nav-link" eventKey="tools">Tools</Nav.Link>
//             <Nav.Link active bsPrefix="nav-link" eventKey="applications">Applications</Nav.Link>
//             <Nav.Link active bsPrefix="nav-link" eventKey="contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }

export default Navigation;
