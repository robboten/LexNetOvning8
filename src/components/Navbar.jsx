import React from "react";
import { Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarHead() {
    return (
        <header>
        <Navbar expand="sm" bg="light">
            <Container>
                <Navbar.Brand href="/">Kaffeparty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default NavbarHead;