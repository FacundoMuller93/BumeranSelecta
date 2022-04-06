import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Button, Form, Dropdown } from "react-bootstrap";
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
} from "../store/searchs";
import styles from "../assets/styles/Recruiters.module.scss";

const Search = () => {
  const [validation, setValidation] = useState(true)
  const start_date = useInput();
  const end_date = useInput();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = [start_date.value, end_date.value]
    let state=false
    data.forEach( element =>{ if(element == "") {state=true} });
    if ( state ) setValidation(false)
    else {
        //  await dispatch(addSearch({
        //     start_date: start_date.value,
        //     end_date: end_date.value,
        // }))
        // dispatch(getAllSearch())
        // navigate("/searchs")
    }
};


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
              type="datetime-local"
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
              type="datetime-local"
            />
          </Form.Group>

          <Button className={`w-lg-25  px-5 px-lg-7 ${styles.addSearchBtn}`}>Filtrar por Fecha</Button>{' '}

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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
