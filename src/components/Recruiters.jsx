import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { getAllRecruiters, deleteRecruiter } from "../store/recruiters";
import styles from "../assets/styles/Recruiters.module.scss";
import Progress from "../commons/Progress"
import { alertDeleteRecruiter } from "../utils/alerts";

const Recruiters = () => {
  const dispatch = useDispatch();

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (recruiter) => {
    console.log(recruiter);
    setSelected(recruiter);
    setShow(true);
  };

  const [selected, setSelected] = useState({});
  //

  const recruiter = useSelector((state) => state.recruiter.data);

  useEffect(() => {
    dispatch(getAllRecruiters());
  }, []);

  //eliminar recruiter
  const handleDelete = (e, userId) => {
    e.preventDefault();
    alertDeleteRecruiter({dispatch, deleteRecruiter, userId, getAllRecruiters})
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
          <table className="table bg-white rounded shadow-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre y Apellido</th>
                <th scope="col">País</th>
                <th scope="col">Área</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody className={styles.tbodyContainer}>
              {recruiter.map((recruiter, i) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{`${recruiter.name} ${recruiter.surname}`}</td>
                      <td>{recruiter.country}</td>
                      <td>{recruiter.area_rec}</td>
                      <td> <Progress ranking={recruiter.rating}/></td>

                      

                      <td>
                        <i title="Ver detalles de este reclutador" className={styles.pointerTrash} onClick={() => handleShow(recruiter)}>
                          <svg
                            width="28"
                            height="30"
                            viewBox="0 0 28 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_9934_21817)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.3257 14.8987L23.7057 20.2787C23.8948 20.468 24.001 20.7246 24.0009 20.9921C24.0008 21.2596 23.8945 21.5161 23.7052 21.7052C23.516 21.8943 23.2594 22.0005 22.9919 22.0004C22.7244 22.0003 22.4678 21.894 22.2787 21.7047L16.8987 16.3247C15.2905 17.5704 13.268 18.1566 11.2429 17.9641C9.21772 17.7716 7.34198 16.8148 5.99723 15.2884C4.65248 13.7619 3.93973 11.7806 4.004 9.74729C4.06826 7.71402 4.9047 5.7816 6.34315 4.34315C7.7816 2.90469 9.71402 2.06826 11.7473 2.004C13.7806 1.93973 15.7619 2.65248 17.2884 3.99723C18.8148 5.34198 19.7716 7.21772 19.9641 9.24287C20.1566 11.268 19.5704 13.2905 18.3247 14.8987H18.3257ZM12.0007 15.9997C13.592 15.9997 15.1182 15.3676 16.2434 14.2424C17.3686 13.1172 18.0007 11.591 18.0007 9.99974C18.0007 8.40844 17.3686 6.88232 16.2434 5.7571C15.1182 4.63189 13.592 3.99974 12.0007 3.99974C10.4094 3.99974 8.88332 4.63189 7.7581 5.7571C6.63289 6.88232 6.00074 8.40844 6.00074 9.99974C6.00074 11.591 6.63289 13.1172 7.7581 14.2424C8.88332 15.3676 10.4094 15.9997 12.0007 15.9997Z"
                                fill="#000018"
                                fill-opacity="0.84"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_9934_21817"
                                x="-2"
                                y="0"
                                width="32"
                                height="32"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_9934_21817"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_9934_21817"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </i>
                      </td>

                      <td>
                        {" "}
                        <Link to={`/recruiter/${recruiter.id}`}>
                          <i title="Gestionar reclutador">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                // fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.1026 15.8735L9.0796 15.6025L14.6796 9.99746L11.9836 7.30046L6.3666 12.9175L6.1026 15.8735ZM13.3236 5.96146L16.0186 8.65646L17.9656 6.70646L15.2716 4.01246L13.3236 5.96146ZM4.2926 17.6855C4.0826 17.4755 3.9776 17.1835 4.0036 16.8875L4.3826 12.7175C4.4246 12.2605 4.6266 11.8295 4.9526 11.5035L13.9486 2.50746C14.6506 1.80246 15.9236 1.83746 16.6646 2.57646L19.4026 5.31446L19.4036 5.31546C20.1686 6.08146 20.1996 7.29946 19.4716 8.02946L10.4746 17.0265C10.1496 17.3515 9.7186 17.5535 9.2606 17.5955L5.0906 17.9745C5.0606 17.9765 5.0306 17.9775 4.9996 17.9775C4.7366 17.9775 4.4816 17.8735 4.2926 17.6855V17.6855ZM19.9996 20.9775C19.9996 21.5275 19.5496 21.9775 18.9996 21.9775H4.9996C4.4506 21.9775 3.9996 21.5275 3.9996 20.9775C3.9996 20.4285 4.4506 19.9775 4.9996 19.9775H18.9996C19.5496 19.9775 19.9996 20.4285 19.9996 20.9775V20.9775Z"
                                fill="#222B45"
                              />
                            </svg>
                          </i>
                        </Link>
                      </td>
                      <td>
                        <i
                          onClick={(e) => handleDelete(e, recruiter.id)}
                          className={styles.pointerTrash}
                          title="Eliminar reclutador"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="non-zero"
                              clip-rule="evenodd"
                              d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6V6Z"
                              fill="#222B45"
                            />
                          </svg>
                        </i>
                      </td>
                    </tr>
                  </>
                );
              })}
              {
                <Modal show={show} size="lg" onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="ms-auto">Detalles del Reclutador</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="ps-5 py-4">
                    <div className="pb-3">Nombre: {`${selected.name} ${selected.surname}`}</div>
                    <div className="pb-3">País: {selected.country}</div>
                    <div className="pb-3">Área: {selected.rec_area}</div>
                    <div className="pb-3">Búsquedas activas: {selected.searchs}</div>
                    <div className="pb-3">Comentarios: {selected.description_rec}</div>
                    <div className="pb-3">Calificación Promedio: {selected.rating}</div>
                  </Modal.Body>
                </Modal>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;