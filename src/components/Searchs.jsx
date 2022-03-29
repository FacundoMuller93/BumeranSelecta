import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import axios from 'axios'

import useInput from "../hooks/useInput";
import "../assets/styles/Search.scss"
import arr from "../hooks/array"

const Searchs = () => {
    const [show, setShow] = useState(false);
    const country = useInput();
    const area_ser = useInput();
    const position = useInput();
    const description_ser = useInput();
    const vacancies = useInput();
    const lapse_search = useInput();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/search/add",
            {
                description_ser: description_ser.value,
                country: country.value,
                area_ser: area_ser.value,
                position: position.value,
                vacancies: vacancies.value,
                state_ser: lapse_search.value
            })
            await setShow(true)
    };

    return (
        <>
            <div className="containerSearch ">
                <div className="containerForm">
                    <div className="pt-2 mb-2 fs-4 mx-5 title d-flex justify-content-center">
                        Ingreso de busqueda
                    </div>
                    <Form onSubmit={handleSubmit} className=" mt-4 pt-5 formLogin w-100" id="formSearch">
                        <Row className="mb-3">
                            <Form.Group className="col-md-6" controlId="formGridEmail">

                                <Form.Control className="inputLogin rounded-pill" {...country} placeholder="País" />
                            </Form.Group>

                            <Form.Group className="col-md-6 top" controlId="formGridPassword">
                                <Form.Control className="inputLogin rounded-pill" {...area_ser} placeholder="Area" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control className="inputLogin rounded-pill" {...description_ser} placeholder="Descripción" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Control className="inputLogin rounded-pill" {...position} placeholder="Posición" />
                        </Form.Group>

                        <Row className="mb-3">

                            <Form.Group className="col-md-6" controlId="formGridCity">
                                <Form.Control className="inputLogin rounded-pill" {...lapse_search} type="datetime-local" placeholder="Mes" />
                            </Form.Group>

                            <Form.Group className="col-md-6 top" controlId="formGridState">
                                <Form.Select className="inputLogin rounded-pill" {...vacancies}>
                                    <option >Vacantes</option>
                                    {arr().map(i => (
                                        <option >{i}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Button className=" rounded-pill px-5 mt-3 buttonLogin " variant="primary" type="submit reset">
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
                    <img className="img1" src="img.png" />
                    <img className="img2" src="img 2.png" />
                </div>
            </div>








        </>
    );
};

export default Searchs;


