import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const NavbarComp = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand >  <img src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-1.png" alt="logo" /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/recruiters">Reclutadores</Link></Nav.Link>
          <Nav.Link><Link to="/searchs">Búsquedas</Link></Nav.Link>
          <Nav.Link><Link to="/reports">Reportes</Link></Nav.Link>
          <Nav.Link><Link to="/login">Iniciar Sesión</Link></Nav.Link>
          <Nav.Link><Link to="/register">Registrarse</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
