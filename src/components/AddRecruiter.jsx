import React from 'react';
import useInput from "../hooks/useInput";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';

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
    .then((newRecruiter) => console.log(newRecruiter))
    navigate("/Recruiters")
  };

  if (!name ) return <div></div>
    
    return (


        <div>
             <h2 className="fs-4 mb-3 text-center text-uppercase">Agregar nuevo reclutador</h2>
      <section className="container mt-5">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Nombre
                </label>
                <input
                  {...name}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Apellido
                </label>
                <input
                  {...surname}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Pais
                </label>
                <input
                  {...country}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Descripción
                </label>
                <input
                  {...description_rec}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Area
                </label>
                <input
                  {...area_rec}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Búsquedas Activas
                </label>
                <input
                  {...active_searchs}
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="URL de imágenes separadas por comas"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Estado
                </label>
                <input
                  {...status_rec}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Números para cada categoría separados por comas"
                />
              </div>
              <div className="col-12 modal-footer">
              <Link to="/recruiters"><Button variant="primary">Volver</Button>{' '}</Link>
                <button type="submit" className="btn btn-primary pe-2">
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