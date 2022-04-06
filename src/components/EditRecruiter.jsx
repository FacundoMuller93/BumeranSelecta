import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput";
import { Button, Form } from "react-bootstrap";
import styles from "../assets/styles/EditRecruiter.module.scss";
import Swal from "sweetalert2";

const EditRecruiter = () => {
  //obtener id del usuario a partir de la url
  let currentURL = window.location.href;
  let arrayURL = currentURL.split("/");
  let reducedURL = [];

  for (let i = 0; i < arrayURL.length; i++) {
    if (i === arrayURL.length - 1) {
      reducedURL.push(arrayURL[i]);
    }
  }

  let recruiterId = parseInt(reducedURL);
  console.log(recruiterId);

  //axios trayendo info del recruiter

  const [recruiterInfo, setRecruiterInfo] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/recruiter/${recruiterId}`)
      .then((res) => res.data)
      .then((product) => {
        setRecruiterInfo(product);
        name.setValue(product.name);
        surname.setValue(product.surname);
        country.setValue(product.country);
        description_rec.setValue(product.description_rec);
        area_rec.setValue(product.area_rec);
        active_searchs.setValue(product.active_searchs);
        status_rec.setValue(product.status_rec);
      });
  }, []);

  //envio del recruiter editado al servidor
  const navigate = useNavigate();

  const name = useInput();
  const surname = useInput();
  const country = useInput();
  const description_rec = useInput();
  const area_rec = useInput();
  const active_searchs = useInput();
  const status_rec = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/recruiter/${recruiterId}`, {
        name: name.value,
        surname: surname.value,
        country: country.value,
        description_rec: description_rec.value,
        area_rec: area_rec.value,
        active_searchs: active_searchs.value,
        status_rec: status_rec.value,
      })
      .then((res) => res.data);
    Swal.fire({
      iconHtml: `<i><svg width="70" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z" fill="#222B45"/>
        </svg></i>`,
      title: "Los Cambios fueron Guardados",
      showConfirmButton: false,
      iconColor: "#fff",
      timer: 2000,
      customClass: {
        title: "title fs-4",
      },
    });
    navigate("/recruiters");
  };

  if (!recruiterInfo) return <div></div>;

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row mt-lg-5 mb-5 fs-4 title d-flex justify-content-center">
        Editar Reclutador
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

        <div className="row mb-5">
          <div className="col-6 text-end">
            <Link to="/recruiters">
              <Button className="mt-5 w-lg-25 px-5 px-lg-5 buttonLogin">
                Volver
              </Button>{" "}
            </Link>
          </div>
          <div className="col-6">
            <button
              type="submit"
              className={`${styles.buttonsEditRecruiter} mt-5 w-lg-25 px-5 px-lg-5 `}
            >
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditRecruiter;
