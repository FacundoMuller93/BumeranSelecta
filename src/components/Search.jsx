import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Dropdown, Modal } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllSearch,
  deleteSearch,
  getNewSearchs,
  getStartedSearchs,
  getPresentedSearchs,
  getRevisionSearchs,
  getClosedSearchs,
  getFilteredByDate,
} from "../store/searchs";
import styles from "../assets/styles/Recruiters.module.scss";

const Search = () => {
  const [validation, setValidation] = useState(true);
  const start_date = useInput();
  const end_date = useInput();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = [start_date.value, end_date.value];
    let state = false;
    data.forEach((element) => {
      if (element == "") {
        state = true;
      }
    });
    if (state) setValidation(false);
    else {
      //  await dispatch(addSearch({
      //     start_date: start_date.value,
      //     end_date: end_date.value,
      // }))
      // dispatch(getAllSearch())
      // navigate("/searchs")
    }
  };

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (search) => {
    setSelected(search);
    setShow(true);
  };

  const [selected, setSelected] = useState({});

  //
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.data);

  useEffect(() => {
    dispatch(getAllSearch());
  }, []);

  //eliminar busqueda
  const handleDelete = async (e, searchId) => {
    e.preventDefault();
    await dispatch(deleteSearch(searchId));
    dispatch(getAllSearch());
  };

  const handleAll = async () => {
    await dispatch(getAllSearch());
  };

  const handleNew = async () => {
    await dispatch(getNewSearchs());
  };

  const handleStarted = async () => {
    await dispatch(getStartedSearchs());
  };

  const handlePresented = async () => {
    await dispatch(getPresentedSearchs());
  };

  const handleRevision = async () => {
    await dispatch(getRevisionSearchs());
  };

  const handleClosed = async () => {
    await dispatch(getClosedSearchs());
  };

  const filterDate = async () => {
    await dispatch(
      getFilteredByDate({
        filter_start: start_date.value,
        filter_end: end_date.value,
      })
    );
  };

  return (
    <div className="container-fluid ps-4 pe-0 pe-lg-3 min-vh-100">
      <div className="row my-5 ms-lg-5">
        <div className="col-12 col-md-4 mx-md-auto col-lg-6">
          <div className="row">
            <div className="col-12 mb-4 ps-0 pe-0 text-center col-lg-4">
              <div className={`fs-5 title mt-3`}>Lista de Busquedas</div>
            </div>
            <div
              className={`${styles.filtersContainer} col-12 ms-5 ps-3 col-md-12 ms-md-4 ps-md-0 ms-lg-0 ps-lg-0 col-lg-4 px-lg-0`}
            >
              <Link to="/addSearch">
                <Button
                  className={`w-lg-25 mb-3 px-5  px-md-4  px-lg-4 pb-lg-1 mb-lg-3 ${styles.addSearchBtn}`}
                >
                  Agregar Búsqueda
                </Button>
              </Link>{" "}
            </div>
            <div className="col-12 ms-5 ps-3  col-md-12 ms-md-4 ps-md-0  col-lg-2 mb-3 ms-lg-0">
              <Dropdown>
                <Dropdown.Toggle
                  className={`w-lg-25 px-5 px-md-4 px-lg-4 ${styles.addSearchBtn}`}
                  id="dropdown-basic"
                >
                  Filtrar por Estado
                </Dropdown.Toggle>

                <Dropdown.Menu className={`w-75 ${styles.carlAcutis}`}>
                  <Dropdown.Item
                    onClick={handleAll}
                    href="#/action-1"
                    className="title fw-bold"
                  >
                    Todas
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleNew}
                    href="#/action-4"
                    className="nueva title"
                  >
                    Nuevas
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleStarted}
                    href="#/action-2"
                    className="iniciada title"
                  >
                    Iniciadas
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handlePresented}
                    href="#/action-3"
                    className="presentada title"
                  >
                    Presentadas
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleRevision}
                    href="#/action-3"
                    className="revision title"
                  >
                    En Revisión
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleClosed}
                    href="#/action-4"
                    className="title"
                  >
                    Cerradas
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-6 mt-3 mt-lg-1">
          <div className="row">
            <Form
              className={`${styles.form} row px-0 d-flex justify-content-md-center ps-lg-4 justify-content-lg-start`}
              onSubmit={handleSubmit}
            >
              <div className="col-3 mt-2 ps-5 col-md-1 px-md-0 text-center col-lg-1 title">
                Inicio
              </div>
              <Form.Group
                className="col-7 pb-3 col-md-3 ps-md-0 col-lg-3"
                controlId="formGridCity"
              >
                <Form.Control
                  className={
                    start_date.value || validation
                      ? "inputLogin rounded-pill"
                      : "err rounded-pill"
                  }
                  {...start_date}
                  type="date"
                />
              </Form.Group>
              <div className="col-3 mt-2 ps-5 col-md-1 px-md-0 text-center col-lg-1 title">
                Cierre
              </div>
              <Form.Group
                className="col-7 col-md-3 ps-md-0 col-lg-3"
                controlId="formGridCity"
              >
                <Form.Control
                  className={
                    end_date.value || validation
                      ? "inputLogin rounded-pill"
                      : "err rounded-pill"
                  }
                  {...end_date}
                  type="date"
                />
              </Form.Group>

              <div className="col-12 mt-3 ms-4 text-center col-lg-4 mt-lg-0 ms-lg-0 ps-lg-0 text-lg-start">
                <Button
                  className={`${styles.addSearchBtn} w-50 mt-3 mt-lg-0`}
                  onClick={() => {
                    filterDate();
                  }}
                >
                  Buscar
                </Button>{" "}
              </div>
            </Form>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="container-fluid pt-lg-4 pe-0 pe-md-3">
        <div className="row  text-center sticky-top bg-light border-bottom border-2 border-dark py-3">
          <div className="col-4 col-md-3 col-lg-1">
            <div className="row">
              <div className="col-1 col-md-1 col-lg-4">
                <strong>#</strong>
              </div>
              <div className="col-1 ps-4 col-md-3 col-lg-8">
                <strong>Estado</strong>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-1 col-lg-1">
            <strong>País</strong>
          </div>
          <div className="d-none d-lg-block col-2">
            <strong>Area</strong>
          </div>
          <div className="col-4 col-md-6 col-lg-2">
            <strong>Posición</strong>
          </div>
          <div className="d-none d-lg-block col-1">
            <strong>Vacantes</strong>
          </div>
          <div className="d-none d-lg-block col-2">
            <strong>Fecha de Inicio</strong>
          </div>
          <div className="d-none d-lg-block col-2">
            <strong>Fecha de Cierre</strong>
          </div>
        </div>
        {search.map((search, i) => {
          return (
            <div
              className={`row py-3  border border-1 title ${styles.hoverPointer}`}
            >
              <div className="col-4 col-md-3 col-lg-1">
                <div className="row">
                  <div className="col-1 col-md-1 col-lg-1">{i + 1}</div>
                  <div
                    className={`col-1 ps-4 col-md-1 col-lg-1 ps-lg-4 ${
                      search.state_search === "Nueva"
                        ? "nueva"
                        : search.state_search === "Iniciada"
                        ? "iniciada"
                        : search.state_search === "Presentada"
                        ? "presentada"
                        : search.state_search === "Revision"
                        ? "revision"
                        : "#000"
                    }`}
                  >
                    {search.state_search}
                  </div>
                </div>
              </div>

              <div className="col-3 col-md-2 col-lg-1 ps-lg-4">
                {search.country}
              </div>
              <div className="d-none d-lg-block col-lg-2 ps-lg-5">
                {search.area_search}
              </div>
              <div className="col-5 col-md-4 text-center col-lg-2">
                {search.position}
              </div>
              <div className="d-none d-lg-block col-lg-1 text-center">
                {search.vacancies}
              </div>

              <div className="d-none d-lg-block col-lg-2 text-center">
                {search.start_date}
              </div>
              <div className="d-none d-lg-block col-lg-2 text-center">
                {search.end_date}
              </div>

              <div className="col-12 pt-4 ms-4 col-md-2 pt-md-0 col-lg-1 pt-lg-0 ms-lg-0">
                <div className="row">
                  <div className="className col-3 col-lg-3 ps-0">
                    <Link to={`/rating/${search.id}`}>
                      <i>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z"
                            fill={search.start_date ? "#00ff00" : "#222B45"}
                          />
                        </svg>
                      </i>
                    </Link>{" "}
                  </div>
                  <div className="className col-3 col-lg-3 ps-0">
                    <i
                      title="Ver detalles de búsqueda"
                      className={styles.pointerTrash}
                      onClick={() => handleShow(search)}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8ZM11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z"
                          fill="#0dcaf0"
                        />
                      </svg>
                    </i>
                  </div>

                  <div className="className col-3 col-lg-3 ps-0">
                    <Link to={`/search/${search.id}`}>
                      <i title="Editar, cambiar estado o asignar reclutador">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.1026 15.8735L9.0796 15.6025L14.6796 9.99746L11.9836 7.30046L6.3666 12.9175L6.1026 15.8735ZM13.3236 5.96146L16.0186 8.65646L17.9656 6.70646L15.2716 4.01246L13.3236 5.96146ZM4.2926 17.6855C4.0826 17.4755 3.9776 17.1835 4.0036 16.8875L4.3826 12.7175C4.4246 12.2605 4.6266 11.8295 4.9526 11.5035L13.9486 2.50746C14.6506 1.80246 15.9236 1.83746 16.6646 2.57646L19.4026 5.31446L19.4036 5.31546C20.1686 6.08146 20.1996 7.29946 19.4716 8.02946L10.4746 17.0265C10.1496 17.3515 9.7186 17.5535 9.2606 17.5955L5.0906 17.9745C5.0606 17.9765 5.0306 17.9775 4.9996 17.9775C4.7366 17.9775 4.4816 17.8735 4.2926 17.6855V17.6855ZM19.9996 20.9775C19.9996 21.5275 19.5496 21.9775 18.9996 21.9775H4.9996C4.4506 21.9775 3.9996 21.5275 3.9996 20.9775C3.9996 20.4285 4.4506 19.9775 4.9996 19.9775H18.9996C19.5496 19.9775 19.9996 20.4285 19.9996 20.9775V20.9775Z"
                            fill="#ffc107"
                          />
                        </svg>
                      </i>
                    </Link>{" "}
                  </div>
                  <div className="className col-3 col-lg-3 ps-0">
                    <i
                      onClick={(e) => handleDelete(e, search.id)}
                      className={styles.pointerTrash}
                      title="Eliminar búsqueda"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="non-zero"
                          clip-rule="evenodd"
                          d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6V6Z"
                          fill="#ff0000"
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {
          <Modal show={show} size="lg" onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="title ms-auto">
                Detalles de Búsqueda
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="title ps-5 py-5">
              <div className="pb-3">Posición: {selected.position}</div>
              <div className="pb-3">País: {selected.country}</div>
              <div className="pb-3">Área: {selected.area_search}</div>
              <div className="pb-3">
                Descripción: {selected.description_search}
              </div>
              <div className="pb-3">Vacantes: {selected.vacancies}</div>
              <div className="pb-3">Fecha de Inicio: {selected.start_date}</div>
              <div className="pb-3">Fecha de Cierre: {selected.end_date}</div>
              <div className="pb-3">Estado: {selected.state_search}</div>
            </Modal.Body>
          </Modal>
        }
      </div>
    </div>
  );
};

export default Search;
