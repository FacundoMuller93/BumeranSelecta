import React from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import styles from "../assets/styles/AddRecruiter.module.scss";

const AddRecruiter = () => {
  //axios para crear producto
  const name = useInput();
  const surname = useInput();
  const country = useInput();
  const description_rec = useInput();
  const area_rec = useInput();
  const active_searchs = useInput();
  const status_rec = useInput();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/api/recruiter/add`, {
        name: name.value,
        surname: surname.value,
        country: country.value,
        description_rec: description_rec.value,
        area_rec: area_rec.value,
        active_searchs: active_searchs.value,
        status_rec: status_rec.value,
      })
      .then((res) => res.data)
      .then((newRecruiter) => console.log(newRecruiter));
    navigate("/Recruiters");
  };

  if (!name) return <div></div>;

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row mt-lg-5 mb-5 fs-4 title d-flex justify-content-center">
        Agregar nuevo Reclutador​
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
                className="inputLogin"
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
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...country}
                placeholder="País"
                type="text"
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...description_rec}
                placeholder="Descripción"
                type="text"
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...area_rec}
                placeholder="Área"
                type="text"
                className="inputLogin"
                id="inputPassword4"
              />
            </Form.Group>
          </div>

          <div className="col-lg-6">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...status_rec}
                type="text"
                className="inputLogin"
                id="inputPassword4"
                placeholder="Activo/Inactivo"
              />
            </Form.Group>
          </div>
        </div>

        <div className="col-lg-12">
          <Form.Group className="w-100 pe-lg-1 pb-3" controlId="formBasicEmail">
            <Form.Control
              {...active_searchs}
              type="text"
              className="inputLogin"
              id="inputAddress"
              placeholder="Búsquedas activas separadas por comas"
            />
          </Form.Group>
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
