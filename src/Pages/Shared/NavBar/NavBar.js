import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../Images/logo text.png'
import './Nav.css';
const NavBar = () => {
    return (
        <div>
            <Navbar className="" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="" className="img-fluid nav-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="nav-link" to="/#home">HOME</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-link" to="/#skills">SKILLS</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-link" to="/#projects">PROJECTS</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-link" to="/#contact">CONTACT </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;