import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest} from "../store/user";
import styles from "../assets/styles/NavbarComp.module.scss"

const NavbarComp = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => 
    state.user
  );


const handleLogOut = () => {
  dispatch(sendLogoutRequest());
};

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
        <Nav className="ml-auto">
          <Nav.Link >
            <Link className={styles.menu} to="/">Home</Link>
          </Nav.Link>
          <Nav.Link to="/recruiters">
            <Link className={styles.menu} to="/recruiters">Reclutadores</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className={styles.menu} to="/searchs">Búsquedas</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className={styles.menu} to="/reports">Reportes</Link>
          </Nav.Link>
          {user.data.id ? 
          <Nav className="me-auto">
           <Nav.Link>
            <Link className={styles.menu} onClick={handleLogOut} to="/">Cerrar Sesión</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className={styles.menu} to="/profile">Mi Perfil</Link>
          </Nav.Link>
          <Nav.Link>Bienvenido { `${user.data.firstName} ${user.data.surname}`}</Nav.Link>
          </Nav>
          :
          <Nav className="me-auto">
          <Nav.Link>
          <Link className={styles.menu} to="/login">Iniciar Sesión</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={styles.menu} to="/register">Registrarse</Link>
        </Nav.Link>
        </Nav>
          }
          
         
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
