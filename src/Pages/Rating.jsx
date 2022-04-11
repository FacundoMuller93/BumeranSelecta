import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

import { FaStar } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover'

import styles from "../assets/styles/Rating.module.scss";
import { getSingleSearch, endSearch } from "../store/searchs";
import { getSingleRecruiter } from "../store/recruiters";
import useInput from "../hooks/useInput";



const Rating = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const end_date = useInput();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [search, setSearch] = useState();
  const [recruiter, setRecruiter] = useState();
  const [validation, setValidation] = useState(true)
  const [validationRating, setValidationRating] = useState(false)


  useEffect(() => {
    dispatch(getSingleSearch(id))
      .then(sear => {
        setSearch(sear.payload)
        return dispatch(getSingleRecruiter(sear.payload.recruiterId))
          .then(rec => setRecruiter(rec.payload))
      });
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!end_date.value || !rating) {
      if (!end_date.value) setValidation(false)
      if (!rating) setValidationRating(true)
      if (rating) setValidationRating(false)
    }
    else {
      dispatch(endSearch({
        id: search.id,
        end_date: end_date.value,
        rating: rating * 2,
        recruiterId : recruiter.id,
      }));
      navigate("/searchs");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Por favor, califique al reclutador que realizo esta búsqueda
      </div >
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className={styles.inputRadio}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={45}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}


      <Form onSubmit={handleSubmit} className=" mt-0 pt-lg-5 formLogin w-100" id="formSearch">
        <div className=" mb-3 fs-5 mx-5 d-flex justify-content-center">
          Información del reclutador
        </div>
        <Row className="mb-3">
          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Nombre</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={recruiter?.name} />
          </Form.Group>

          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Apellido</Form.Label >
            <Form.Control className="inputLogin rounded-pill text-center" value={recruiter?.surname} />
          </Form.Group>

          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Busquedas activas</Form.Label >
            <Form.Control className="inputLogin rounded-pill text-center" value={recruiter?.searchs.length} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>País</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={recruiter?.country} />
          </Form.Group>

          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Area</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={recruiter?.area_rec} />
          </Form.Group>

          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Ranking</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={recruiter?.rating} />
          </Form.Group>
        </Row>
        <div className="pt-2 mb-3 mt-5 mb-1 fs-5 mx-5 title d-flex justify-content-center">
          Información de la busqueda
        </div>
        <Row className="mb-3">
          <Form.Group className="col-md-6" controlId="formGridAddress1">
            <Form.Label>Candidatos presentados</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={search?.candidates} />
          </Form.Group>

          <Form.Group className="col-md-6" controlId="formGridCity">
            <Form.Label>vacantes disponibles</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={search?.vacancies} />
          </Form.Group>
        </Row>
        <Row className="mb-3 ">
          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Inicio</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={search?.start_date} />
          </Form.Group>

          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Caducidad</Form.Label>
            <Form.Control className="inputLogin rounded-pill text-center" value={search?.lapse_search} />
          </Form.Group>

          <Form.Group className="col-md-4" controlId="formGridCity">
            <Form.Label>Cierre</Form.Label>
            <Form.Control className={end_date.value || validation ? "inputLogin rounded-pill text-center" : "err rounded-pill"} type="date" {...end_date} />
          </Form.Group>
        </Row>

        <Button className=" rounded-pill px-5 mt-3 buttonLogin" type="submit">Finalizar</Button>

        <Overlay
          show={validationRating}
          target={null}
          placement="bottom"
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Body>
              <strong>Califique al reclutador</strong>
            </Popover.Body>
          </Popover>
        </Overlay>

      </Form>
    </div>
  );
};

export default Rating;
