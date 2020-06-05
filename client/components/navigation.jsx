import React, { useState } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { scroller, animateScroll as scroll } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (

    <Navbar className="sticky-top" color="dark" dark expand="md">
      <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  );
};

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
//         <Navbar.Brand onClick={() => {
//           scroll.scrollToTop({
//             duration: 800,
//             delay: 100,
//             smooth: 'easeInOutQuint'
//           });
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
