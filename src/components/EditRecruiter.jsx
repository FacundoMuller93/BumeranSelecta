import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput";
import {Button} from 'react-bootstrap';
import styles from '../assets/styles/EditRecruiter.module.scss';

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
  console.log(recruiterId)

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
        status_rec: status_rec.value
      })
      .then((res) => res.data);
      navigate("/recruiters")
  };

  if (!recruiterInfo) return <div></div>;

  return (
    <div>
      <h2 className="fs-4 mb-3 text-center text-uppercase">Editar Reclutador </h2>
      <section className="container mt-5">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <input
                  {...name}
                  placeholder="Nombre"
                  type="text"
                  className="form-control rounded-pill"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <input
                  {...surname}
                  type="text"
                  className="form-control rounded-pill"
                  id="inputPassword4"
                  placeholder="Apellido"
                />
              </div>
              <div className="col-md-6">
                <input
                  {...country}
                  type="text"
                  className="form-control rounded-pill"
                  id="inputEmail4"
                  placeholder="País"
                />
              </div>
              <div className="col-md-6">
                <input
                  {...description_rec}
                  placeholder="Descripción"
                  type="text"
                  className="form-control rounded-pill"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <input
                  {...area_rec}
                  placeholder="Áreas"
                  type="text"
                  className="form-control rounded-pill"
                  id="inputAddress"
                />
              </div>
              <div className="col-12">
                <input
                  {...active_searchs}
                  placeholder="Búsquedas activas"
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                />
              </div>
              <div className="col-12">
                <input
                  {...status_rec}
                  placeholder="Estado"
                  type="text"
                  className="form-control rounded-pill"
                  id="inputAddress2"
                />
              </div>
              <div className="col-12 modal-footer">
              <Link to="/recruiters"><Button className={styles.bg} variant="primary">Volver</Button>{' '}</Link>
                <button type="submit" className={`btn btn-primary pe-2 ${styles.bg}`}>
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
      )
}

export default EditRecruiter;