import { Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest} from "../store/user";
import styles from "../assets/styles/NavbarComp.module.scss"

const NavbarComp = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => 
    state.user
  );

console.log(user.data.id)

const handleLogOut = () => {
  dispatch(sendLogoutRequest());
};

  return (
    <Navbar expand="lg">
      <Container fluid className="">
        
        {/* Navbar Logo */}
        <Navbar.Brand className="ms-4">
          <Link to="/">
            <img
              src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-1.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>

        {/* Navbar Menu */}
        <div className="d-none d-lg-block">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link>
              <Link className={styles.menu} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link to="/recruiters">
              <Link className={styles.menu} to="/recruiters">
                Reclutadores
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.menu} to="/searchs">
                Búsquedas
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.menu} to="/reports">
                Reportes
              </Link>
            </Nav.Link>
            {user.data.id ? (
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className={styles.menu} onClick={handleLogOut} to="/">
                    Cerrar Sesión
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={styles.menu} to="/profile">
                    Mi Perfil
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  Bienvenido {`${user.data.firstName} ${user.data.surname}`}
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className={styles.menu} to="/login">
                    Iniciar Sesión
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={styles.menu} to="/register">
                    Registrarse
                  </Link>
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </div>


        {/* Navbar Responsive (Offcanvas-menu-lateral) */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          className="w-50"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton className="">
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <Link className={styles.menu} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link to="/recruiters">
                <Link className={styles.menu} to="/recruiters">
                  Reclutadores
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={styles.menu} to="/searchs">
                  Búsquedas
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={styles.menu} to="/reports">
                  Reportes
                </Link>
              </Nav.Link>
              {user.data.id ? (
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link className={styles.menu} onClick={handleLogOut} to="/">
                      Cerrar Sesión
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className={styles.menu} to="/profile">
                      Mi Perfil
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    Bienvenido {`${user.data.firstName} ${user.data.surname}`}
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link className={styles.menu} to="/login">
                      Iniciar Sesión
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className={styles.menu} to="/register">
                      Registrarse
                    </Link>
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
