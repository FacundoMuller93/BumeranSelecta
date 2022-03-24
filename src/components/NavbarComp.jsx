import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { persistUser} from "../store/user";

const NavbarComp = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => 
    state.user
  );

  useEffect(() => {
    dispatch(persistUser());
  }, []);
console.log(user)


  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          {" "}
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-1.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/recruiters">Reclutadores</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/searchs">Búsquedas</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/reports">Reportes</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login">Iniciar Sesión</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/register">Registrarse</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
