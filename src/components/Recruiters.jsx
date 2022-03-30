import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecruiters, deleteRecruiter } from "../store/recruiters";
import styles from "../assets/styles/Recruiters.module.scss";

const Recruiters = () => {
  const dispatch = useDispatch();

  const recruiter = useSelector((state) => state.recruiter.data);

  useEffect(() => {
    dispatch(getAllRecruiters());
  }, []);

  //eliminar recruiter
  const handleDelete = async (e, userId) => {
    e.preventDefault();
    await dispatch(deleteRecruiter(userId));
    dispatch(getAllRecruiters());
  };

  return (
    <div className="container-fluid px-4">
      <div className="row d-flex align-items-center">
        <div className="col-12 text-center col-lg-3">
          <div className="pt-5 mb-5 fs-4 title">​Lista de Reclutadores</div>
        </div>

        <div className="col-12 text-center col-lg-2 ps-lg-0 ">
          <Link to="/addRecruiter">
            <Button
              className={`${styles.buttonsAddRecruiter} w-lg-25  px-5 px-lg-4`}
            >
              Agregar Reclutador
            </Button>
          </Link>{" "}
        </div>
      </div>

      <div className="row my-5">
        <div className="col">
          <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width="50">
                  #
                </th>
                <th scope="col">Nombre y Apellido</th>
                <th scope="col">País</th>
                <th scope="col">Estado</th>
                <th scope="col">Comentario</th>
              </tr>
            </thead>
            <tbody className={styles.tbodyContainer}>
              {recruiter.map((recruiter) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{recruiter.id}</th>
                      <td>{`${recruiter.name} ${recruiter.surname}`}</td>
                      <td>{recruiter.country}</td>
                      <td>{recruiter.status_rec}</td>
                      <td>{recruiter.description_rec}</td>
                      <td>
                        <Link to={`/recruiter/${recruiter.id}`}>
                          <Button
                            className={`${styles.buttonsAddRecruiter} w-lg-25  px-4 px-lg-5 `}
                          >
                            Editar
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={(e) => handleDelete(e, recruiter.id)}
                          className={`${styles.buttonDeleteRecruiter} w-lg-25 px-4 px-lg-5`}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;
