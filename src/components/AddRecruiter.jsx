import React, { useState } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import styles from "../assets/styles/AddRecruiter.module.scss";
import arr from "../hooks/array"
import { getAllRecruiters } from "../store/recruiters";
import { useDispatch } from "react-redux";

const AddRecruiter = () => {
  //axios para crear producto
  const name = useInput();
  const surname = useInput();
  const country = useInput();
  const description_rec = useInput();
  const area_rec = useInput();
  const [validation, setValidation] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [name.value, surname.value, country.value, description_rec.value, area_rec.value]
    let state = false
    data.forEach(element => { if (element == "") { state = true } });
    if (state) {setValidation(false)}
   else {
      console.log('---------> ', {
        name: name.value,
        surname: surname.value,
        country: country.value,
        description_rec: description_rec.value,
        area_rec: area_rec.value,
      })
      axios
        .post(`http://localhost:3001/api/recruiter/add`, 
        {
          name: name.value,
          surname: surname.value,
          country: country.value,
          description_rec: description_rec.value,
          area_rec: area_rec.value,
        })
        .then((res) => res.data)
        .then((newRecruiter) => console.log(newRecruiter));
      dispatch(getAllRecruiters())
      navigate("/Recruiters");
    }
  };

  if (!name) return <div></div>;

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row mt-lg-5 mb-5 fs-4 title d-flex justify-content-center">
        Agregar nuevo Reclutador
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-75 formLogin d-flex flex-column "
      >
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...name}
                placeholder="Nombre"
                type="text"
                className={(name.value || validation) ? "inputLogin" : "err rounded-pill"}
                id="inputEmail4"
              />
            </Form.Group>
          </div>

          <div className="col-lg-6">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...surname}
                placeholder="Apellido"
                type="text"
                className={(surname.value || validation) ? "inputLogin" : "err rounded-pill"}
                id="inputPassword4"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Form.Group className="w-100 pe-lg-1 pb-3" controlId="formGridState">
              <Form.Select className={(country.value || validation) ? "inputLogin" : "err rounded-pill"} {...country}>
                <option selected disabled value="" >Países</option>
                {arr.country.map(i => (
                  <option >{i}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group className="w-100 ps-lg-1 pb-3" controlId="formGridState">
              <Form.Select className={(area_rec.value || validation) ? "inputLogin" : "err rounded-pill"} {...area_rec}>
                <option selected disabled value="" >Area</option>
                {arr.area.map(i => (
                  <option >{i}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <Form.Group
              className="w-100 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...description_rec}
                placeholder="Descripción"
                type="text"
                className={(description_rec.value || validation) ? "inputLogin" : "err rounded-pill"}
                id="inputPassword4"
              />
            </Form.Group>
          </div>

        </div>

        <div className="col-12 modal-footer">
          <Link to="/recruiters">
            <Button
              className="mt-5 w-lg-25 px-5 px-lg-5 buttonLogin"
              variant="primary"
            >
              Volver
            </Button>{" "}
          </Link>
          <button
            type="submit"
            className={`${styles.buttonsAddRecruiter} mt-5 w-lg-25 px-5 px-lg-5 `}
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecruiter;
