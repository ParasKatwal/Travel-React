import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// SCSS
import '../scss/navigation.scss';

// Bootstrap Components
import { Container, Navbar, Nav, Image } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="header__navbar" bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className="navbar-brand" href=""><Image src="assets/trip-logo.png" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="d-flex flex-row-reverse" id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link eventKey={1} componentClass={Link} href="/" to="/" className="active" >Home</Nav.Link>
                                <Nav.Link eventKey={2} componentClass={Link} href="/about" to="/about" >About</Nav.Link>
                                <Nav.Link eventKey={3} componentClass={Link} href="/trip" to="/trip" >Trips</Nav.Link>
                                <Nav.Link eventKey={4} componentClass={Link} href="/blog" to="/blog" >Blog</Nav.Link>
                                <Nav.Link eventKey={5} componentClass={Link} href="/contact" to="/contact" >Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
