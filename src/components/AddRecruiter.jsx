import React from 'react';
import useInput from "../hooks/useInput";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import styles from '../assets/styles/AddRecruiter.module.scss';
import {getAllRecruiters, addRecruiter} from "../store/recruiters";
import { useDispatch } from "react-redux";

const AddRecruiter = () => {
//axios para crear producto
  const name = useInput();
  const surname = useInput();
  const country = useInput();
  const description_rec = useInput();
  const area_rec = useInput();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
      e.preventDefault();
    await dispatch(addRecruiter({name : name.value, surname : surname.value, country : country.value, description_rec : description_rec.value, area_rec : area_rec.value})) 
    dispatch(getAllRecruiters())
    navigate("/Recruiters")
  };

  if (!name ) return <div></div>
    

    return (


        <div className={styles.addRecruiterForm}>
             <h2 className="fs-4 mb-3 text-center text-uppercase">Agregar nuevo reclutador</h2>
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
                  placeholder="Apellido"
                  type="text"
                  className="form-control rounded-pill"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <input
                  {...country}
                  placeholder="País"
                  type="text"
                  className="form-control rounded-pill"
                  id="inputPassword4"
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
              <div className="col-md-6">
                <input
                  {...area_rec}
                  placeholder="Áreas"
                  type="text"
                  className="form-control rounded-pill"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12 modal-footer">
              <Link to="/recruiters"><Button className={styles.bg} variant="primary">Volver</Button>{' '}</Link>
                <button type="submit" className={`btn btn-primary pe-2 ${styles.bg}`}>
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
        </div>
    )
}

export default AddRecruiter;