import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarMain.css'


const NavbarMain = ({menu, logo}) => {
    return (
    <Navbar collapseOnSelect expand="lg" className="navbarmain" variant="light">
      <Container>
        <Navbar.Brand href={logo} className="logo"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {menu.map((item) => (<Nav.Link  href={item.link}>
              {item.text}
            </Nav.Link> ) )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarMain;