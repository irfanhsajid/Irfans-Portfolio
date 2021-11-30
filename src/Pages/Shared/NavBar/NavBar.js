import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                        <Nav.Link className="nav-link" href="/">HOME</Nav.Link>
                        <Nav.Link className="nav-link" href="/projects">PROJECTS</Nav.Link>
                        <Nav.Link className="nav-link" href="#pricing">ABOUT ME</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;