import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import {Button} from 'react-bootstrap';
import styles from '../assets/styles/EditRecruiter.module.scss';
import {editRecruiter} from "../store/recruiters";
import { useDispatch, useSelector} from "react-redux";

const EditRecruiter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recruiter = useSelector(state => 
    state.recruiter.singleRecruiter
  );

  const name = useInput(recruiter.name);
  const surname = useInput(recruiter.surname);
  const country = useInput(recruiter.country);
  const description_rec = useInput(recruiter.description_rec);
  const area_rec = useInput(recruiter.area_rec);
  const active_searchs = useInput(recruiter.active_searchs);
  const status_rec = useInput(recruiter.status_rec);

  //envio del recruiter editado al servidor

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editRecruiter({id: recruiter.id, name : name.value, surname : surname.value, country : country.value, description_rec : description_rec.value, area_rec : area_rec.value, active_searchs :active_searchs.value, status_rec : status_rec.value}))
    navigate("/recruiters")
  };

  if (!recruiter.id) return <div></div>;

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