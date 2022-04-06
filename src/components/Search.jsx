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
import { alertDeleteSearch } from "../utils/alerts";

const Search = () => {
  const [validation, setValidation] = useState(true)
  const start_date = useInput();
  const end_date = useInput();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = [start_date.value, end_date.value]
    let state = false
    data.forEach(element => { if (element == "") { state = true } });
    if (state) setValidation(false)
    else {
      //  await dispatch(addSearch({
      //     start_date: start_date.value,
      //     end_date: end_date.value,
      // }))
      // dispatch(getAllSearch())
      // navigate("/searchs")
    }
  };

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  
    const handleShow = (search) => {
      console.log(search);
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
  const handleDelete = (e, searchId) => {
    e.preventDefault();
    alertDeleteSearch({dispatch, deleteSearch, searchId, getAllSearch})
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
    await dispatch(getFilteredByDate( { filter_start: start_date.value, filter_end: end_date.value} ));
  };

  
  return (
    <div className="container-fluid px-4">
      <div className="row my-5">
        <div className={styles.titleContainer}>
          <h3 className={` mb-5 fs-4 title ${styles.title}`}>
            Lista de busquedas
          </h3>
        </div>

        <div className={styles.filtersContainer}>
        <Link to="/addSearch">
            <Button className={`w-lg-25  px-5 px-lg-4 ${styles.addSearchBtn}`}>
              Agregar Búsqueda
            </Button>
          </Link>{" "}

        <Dropdown>
          <Dropdown.Toggle className={`w-lg-25  px-5 px-lg-4 ${styles.addSearchBtn}`} id="dropdown-basic">
            Filtrar por Estado
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleAll} href="#/action-1">
              Todas
            </Dropdown.Item>
            <Dropdown.Item onClick={handleNew} href="#/action-4">
              Nuevas
            </Dropdown.Item>
            <Dropdown.Item onClick={handleStarted} href="#/action-2">
              Iniciadas
            </Dropdown.Item>
            <Dropdown.Item onClick={handlePresented} href="#/action-3">
              Presentadas
            </Dropdown.Item>
            <Dropdown.Item onClick={handleRevision} href="#/action-3">
              En Revisión
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClosed} href="#/action-4">
              Cerradas
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <Form className={`${styles.form} d-flex`} onSubmit={handleSubmit}>

          <div>Inicio</div>

          <Form.Group className="col-md-6" controlId="formGridCity">
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

          <div>Cierre</div>
          
          <Form.Group className="col-md-6" controlId="formGridCity">
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

          <Button variant="primary" onClick={()=>{filterDate()}} >Primary</Button>{' '}

        </Form>

          </div>

        <div className="col">
          <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width="50">
                  #
                </th>
                <th scope="col">Estado</th>
                <th scope="col">País</th>
                <th scope="col">Area</th>
                <th scope="col">Posición</th>
                <th scope="col">Vacantes</th>
                <th scope="col">Fecha de Inicio</th>
                <th scope="col">Fecha de Cierre</th>
              </tr>
            </thead>
            <tbody className={styles.tbodyContainer}>
              {search.map((search, i) => {
                return (
                  <tr className={styles.userContainer}>
                    <th scope="row">{i + 1}</th>
                    <td>{search.state_search}</td>
                    <td>{search.country}</td>
                    <td>{search.area_search}</td>
                    <td>{search.position}</td>
                    <td>{search.vacancies}</td>
                    {/* <td>{search.lapse_search.replace(" ", " a las ")}hs</td> */}
                    <td>{search.start_date}</td>
                    <td>{search.end_date}</td>


                    <td>
                        <i className={styles.pointerTrash} onClick={() => handleShow(search)}>
                          <svg
                            width="28"
                            height="30"
                            viewBox="0 0 28 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_9934_21817)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.3257 14.8987L23.7057 20.2787C23.8948 20.468 24.001 20.7246 24.0009 20.9921C24.0008 21.2596 23.8945 21.5161 23.7052 21.7052C23.516 21.8943 23.2594 22.0005 22.9919 22.0004C22.7244 22.0003 22.4678 21.894 22.2787 21.7047L16.8987 16.3247C15.2905 17.5704 13.268 18.1566 11.2429 17.9641C9.21772 17.7716 7.34198 16.8148 5.99723 15.2884C4.65248 13.7619 3.93973 11.7806 4.004 9.74729C4.06826 7.71402 4.9047 5.7816 6.34315 4.34315C7.7816 2.90469 9.71402 2.06826 11.7473 2.004C13.7806 1.93973 15.7619 2.65248 17.2884 3.99723C18.8148 5.34198 19.7716 7.21772 19.9641 9.24287C20.1566 11.268 19.5704 13.2905 18.3247 14.8987H18.3257ZM12.0007 15.9997C13.592 15.9997 15.1182 15.3676 16.2434 14.2424C17.3686 13.1172 18.0007 11.591 18.0007 9.99974C18.0007 8.40844 17.3686 6.88232 16.2434 5.7571C15.1182 4.63189 13.592 3.99974 12.0007 3.99974C10.4094 3.99974 8.88332 4.63189 7.7581 5.7571C6.63289 6.88232 6.00074 8.40844 6.00074 9.99974C6.00074 11.591 6.63289 13.1172 7.7581 14.2424C8.88332 15.3676 10.4094 15.9997 12.0007 15.9997Z"
                                fill="#000018"
                                fill-opacity="0.84"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_9934_21817"
                                x="-2"
                                y="0"
                                width="32"
                                height="32"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9934_21817"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9934_21817"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </i>
                      </td>

                    <td>
                      <Link to={`/search/${search.id}`}>
                        <Button
                          className={`${styles.buttonsAddRecruiter} w-lg-25  px-5 px-lg-4`}
                        >
                          Editar
                        </Button>
                      </Link>{" "}
                    </td>
                    <td>
                      <button
                        onClick={(e) => handleDelete(e, search.id)}
                        className={`w-lg-25 px-4 px-lg-5 ${styles.buttonDeleteRecruiter}`}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
              {
                <Modal show={show} size="lg" onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="title ms-auto">Detalles del Reclutador</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="title">
                    <div className="pt-3 pb-3 ps-2">Posición: {selected.position}</div>
                    <div className="pb-3 ps-2">País: {selected.country}</div>
                    <div className="pb-3 ps-2">Área: {selected.area_search}</div>
                    <div className="pb-3 ps-2">Descripción: {selected.description_search}</div>
                    <div className="pb-3 ps-2">Vacantes: {selected.vacancies}</div>
                    <div className="pb-3 ps-2">Fecha de Inicio: {selected.start_date}</div>
                    <div className="pb-3 ps-2">Fecha de Cierre {selected.end_date}</div>
                    <div className="pb-3 ps-2">Estado: {selected.state_search}</div>

                  </Modal.Body>
                </Modal>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
