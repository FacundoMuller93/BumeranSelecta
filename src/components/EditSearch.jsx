import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllSearch, getSingleSearch, editRecruiter } from "../store/searchs";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"

import Progress from "../commons/Progress"
import arr from "../hooks/array"
import useInput from "../hooks/useInput";
import "../assets/styles/SearchEdit.scss"
import styles from '../assets/styles/Recruiters.module.scss';

const EditSearch = () => {

    const recruiter = [
        {
            id: 1,
            valoracion: 94,
            nombre: "jonatan",
            pais: "Argentina",
            areas: ['Administración, Contabilidad y Finanzas', 'Comercial, Ventas y Negocios', 'Producción y Manufactura'],
        },
        {
            id: 2,
            valoracion: 90,
            nombre: "pepe",
            pais: "Argentina",
            areas: ['Oficios y Otros', 'Tecnología, Sistemas y Telecomunicaciones', 'Abastecimiento y Logística'],
        },
        {
            id: 3,
            valoracion: 86,
            nombre: "pana",
            pais: "Argentina",
            areas: ['Gastronomía y Turismo', 'Recursos Humanos y Capacitación', 'Salud, Medicina y Farmacia',],
        },
        {
            id: 4,
            valoracion: 84,
            nombre: "lala",
            pais: "Argentina",
            areas: ['Gastronomía y Turismo', 'Recursos Humanos y Capacitación', 'Salud, Medicina y Farmacia',],
        },
        {
            id: 5,
            valoracion: 80,
            nombre: "lala",
            pais: "Argentina",
            areas: ['Gastronomía y Turismo', 'Recursos Humanos y Capacitación', 'Salud, Medicina y Farmacia',],
        }
    ]

    const dispatch = useDispatch();
    const { id } = useParams();
    const [validation, setValidation] = useState(true)
    const [recruiterInfo, setRecruiterInfo] = useState({})
    const navigate = useNavigate();
    const searchId = useSelector(state => state.search.singleSearch)

    useEffect(() => {
        dispatch(getSingleSearch(id))
        .then(data => console.log("ESTE ES EL DISPACH", ))
    }, [])
    
    const country = useInput(searchId.country ? searchId.country : "");
    const area_ser = useInput(searchId.area_search ? searchId.area_search : "");
    const position = useInput(searchId.position ? searchId.position : "");
    const description_ser = useInput(searchId.description_search ? searchId.description_search : "");
    const vacancies = useInput(searchId.vacancies ? searchId.vacancies : "");
    const lapse_search = useInput(searchId.lapse_search ? searchId.lapse_search : "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = [country.value, area_ser.value, position.value, description_ser.value, vacancies.value, lapse_search.value]
        let state = false
        data.forEach(element => { if (element == "") { state = true } });
        if (state) setValidation(false)
        else {
            await dispatch(editRecruiter({
                id: id,
                idRecruiter: recruiterInfo.id,
                description_search: description_ser.value,
                country: country.value,
                area_search: area_ser.value,
                position: position.value,
                vacancies: parseInt(vacancies.value),
                lapse_search: (lapse_search.value)
            }))
            dispatch(getAllSearch())
            navigate("/searchs")
            
        }
    };

    return (

        <div className="containerSearchEdit ">
            <div className="containerForm">
                <div className="pt-2 mb-2 fs-4 mx-5 title d-flex justify-content-center">
                    Editar de Busqueda
                </div>
                <Form onSubmit={handleSubmit} className=" mt-4 pt-lg-5 formLogin w-100" id="formSearch">
                    <Row className="mb-3">
                        <Form.Group className="col-md-4 top" controlId="formGridState">
                            <Form.Select className={(country.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...country} placeholder={country.value}>
                                <option selected disabled value="" >Países</option>
                                {arr.country.map(i => (
                                    <option >{i}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="col-md-4 top" controlId="formGridState">
                            <Form.Select className={(area_ser.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...area_ser}>
                                <option selected disabled value="" >Area</option>
                                {arr.area.map(i => (
                                    <option >{i}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="col-md-4" controlId="formGridAddress2">
                            <Form.Control className={(position.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...position} placeholder="Posición" />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">

                        <Form.Group className="col-md-4" controlId="formGridAddress1">
                            <Form.Control className={(description_ser.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...description_ser} placeholder="Descripción" />
                        </Form.Group>

                        <Form.Group className="col-md-4" controlId="formGridCity">
                            <Form.Control className={(lapse_search.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} type={lapse_search.value ? "" : "date"} {...lapse_search} />
                        </Form.Group>

                        <Form.Group className="col-md-4 top" controlId="formGridState">
                            <Form.Select className={(vacancies.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...vacancies}>
                                <option selected disabled value="" >Vacantes</option>
                                {arr.vacancies().map(i => (
                                    <option >{i}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">

                        <Form.Group className="col-md-6" controlId="formGridAddress1">
                            <Form.Control className={(description_ser.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} value={recruiterInfo.nombre} placeholder="Nombre del reclutador"  />
                        </Form.Group>

                        <Form.Group className="col-md-6" controlId="formGridCity">
                            <Form.Control className={(lapse_search.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} value={recruiterInfo.valoracion} placeholder="Valoracion del reclutador" />
                        </Form.Group>

                    </Row>

                    <Button className=" rounded-pill px-5 mt-3 buttonLogin" type="submit reset">
                        Cargar
                    </Button>

                </Form>
            </div>
            <div className="container-fluid px-5 containerTable">
                <div className="row my-3">
                    <div className={styles.titleContainer}>
                        <h3 className={` mb-5 fs-4 title ${styles.title}`}>Reclutadores</h3>
                    </div>
                    <div className="col w-100">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">Valoración</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Areas</th>
                                    <th scope="col">Selección</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tbodyContainer} >
                                {recruiter.map((recruiter, i) => {
                                    return (
                                        <tr className={styles.userContainer}>
                                            <th scope="row">{i + 1}</th>
                                            <td>  <Progress ranking={recruiter.valoracion} /></td>
                                            <td>{recruiter.nombre}</td>
                                            <td>
                                                <tr>{recruiter.areas[0]}</tr>
                                                <tr>{recruiter?.areas[1]}</tr>
                                                <tr>{recruiter?.areas[2]}</tr>
                                            </td>
                                            <td>
                                                <Form.Check
                                                    className="inputRadio"
                                                    name="group1"
                                                    type='radio'
                                                    id={1}
                                                    onClick={() => setRecruiterInfo(recruiter)}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div >

    );

};

export default EditSearch;