import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">

        {/* Logo que redirige al inicio */}
        <Link to="/">
          <img
            src="/logominas.jpeg"
            alt="Logo Escuela de Minas"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Link>

        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/alumnos">Lista de Alumnos</Nav.Link>
            <Nav.Link as={Link} to="/alumnos/nuevo">Nuevo Alumno</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
