import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function MainNavbar() {
  const { isAuthed } = useAuth();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-self-center">
            <Link className="text-dark mx-3 text-decoration-none" to="/">
              Home
            </Link>
            <Link className="text-dark mx-3 text-decoration-none" to="/counter">
              Counter
            </Link>
            <Link className="text-dark mx-3 text-decoration-none" to="/shop">
              Shop
            </Link>
            <Link className="text-dark mx-3 text-decoration-none" to="/contact">
              Contact
            </Link>
            {!isAuthed && (
              <Link className="text-dark mx-3 text-decoration-none" to="/login">
                Login
              </Link>
            )}
            {isAuthed && (
              <Link
                className="text-dark mx-3 text-decoration-none"
                to="/profile"
              >
                Profile
              </Link>
            )}
            <Link
              className="text-dark mx-3 text-decoration-none"
              to="/asdfsafdsa"
            >
              Error
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
