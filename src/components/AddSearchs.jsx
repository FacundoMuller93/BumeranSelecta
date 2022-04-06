import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import { useDispatch } from "react-redux"
import { getAllSearch, addSearch } from "../store/searchs";
import { useNavigate } from "react-router-dom";
import bumeranArriba from "../assets/img/bumeranArriba.png";
import bumeranAbajo from "../assets/img/bumeranAbajo.png"


import useInput from "../hooks/useInput";
import "../assets/styles/Search.scss"
import arr from "../hooks/array"

const AddSearchs = () => {
    const [show, setShow] = useState(false);
    const [validation, setValidation] = useState(true)
    const country = useInput();
    const area_ser = useInput();
    const position = useInput();
    const description_ser = useInput();
    const vacancies = useInput();
    const lapse_search = useInput();
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = [country.value, area_ser.value, position.value, description_ser.value, vacancies.value, lapse_search.value]
        let state=false
        data.forEach( element =>{ if(element == "") {state=true} });
        if ( state ) setValidation(false)
        else {
             await dispatch(addSearch({
                description_search: description_ser.value,
                country: country.value,
                area_search: area_ser.value,
                position: position.value,
                vacancies: parseInt(vacancies.value),
                lapse_search: (lapse_search.value).replace("T", " ")
            }))
            dispatch(getAllSearch())
            navigate("/searchs")
        }
    };

    return (
        <>
            <div className="containerSearch ">
                <div className="containerForm">
                    <div className="pt-2 mb-2 fs-4 mx-5 title d-flex justify-content-center">
                        Ingreso de Busqueda
                    </div>
                    <Form onSubmit={handleSubmit} className=" mt-4 pt-lg-5 formLogin w-100" id="formSearch">
                        <Row className="mb-3">
                            <Form.Group className="col-md-6 top" controlId="formGridState">
                                <Form.Select className={(country.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...country}>
                                    <option selected disabled value="" >Países</option>
                                    {arr.country.map(i => (
                                        <option >{i}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="col-md-6 top" controlId="formGridState">
                                <Form.Select className={(area_ser.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...area_ser}>
                                    <option selected disabled value="" >Area</option>
                                    {arr.area.map(i => (
                                        <option >{i}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Control className={(position.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...position} placeholder="Posición" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control className={(description_ser.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...description_ser} placeholder="Descripción" />
                        </Form.Group>

                        <Row className="mb-3">

                            <Form.Group className="col-md-6" controlId="formGridCity">
                                <Form.Control className={(lapse_search.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...lapse_search} type="datetime-local" />
                                <div>Ingrese el plazo estimado de búsqueda</div>
                            </Form.Group>

                            <Form.Group className="col-md-6 top" controlId="formGridState">
                                <Form.Select className={(vacancies.value || validation) ? "inputLogin rounded-pill" : "err rounded-pill"} {...vacancies}>
                                    <option selected disabled value="" >Vacantes</option>
                                    {arr.vacancies().map(i => (
                                        <option >{i}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Button className=" rounded-pill px-5 mt-3 buttonLogin" type="submit reset">
                            Cargar
                        </Button>

                        <Row className="mt-4">
                            <Col xs={6}>
                                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                    <Toast.Header>
                                        <img
                                            src="holder.js/20x20?text=%20"
                                            className="rounded me-2"
                                            alt=""
                                        />
                                        <strong className="me-auto">Busquedas</strong>
                                    </Toast.Header>
                                    <Toast.Body>La carga de datos fue exitosa</Toast.Body>
                                </Toast>
                            </Col>
                        </Row>

                    </Form>
                </div>

                <div className="imgContainer">
                    <img className="img1" src={bumeranArriba} />
                    <img className="img2" src={bumeranAbajo} />
                </div>
            </div>

        </>
    );
};

export default AddSearchs;