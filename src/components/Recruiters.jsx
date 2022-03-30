import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {getAllRecruiters, deleteRecruiter, getSingleRecruiter} from "../store/recruiters";
import styles from '../assets/styles/Recruiters.module.scss';

const Recruiters = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const recruiter = useSelector(state => 
      state.recruiter.data
    );

    useEffect(() => {
        dispatch(getAllRecruiters())
    }, []);


    //eliminar recruiter
    const handleDelete = async (e, recruiterId) => {
        e.preventDefault();
        await dispatch(deleteRecruiter(recruiterId))
        dispatch(getAllRecruiters())
        };

    //editar recruiter
    const handleEdit = async (e, recruiterId) => {
        e.preventDefault();
        await dispatch(getSingleRecruiter(recruiterId))
        navigate(`/recruiter/${recruiterId}`)
    }
    


    return (
        <div className="container-fluid px-4">
        <div className="row my-5">
            <div className={styles.titleContainer}>
            <h3 className={`fs-4 mb-3 ${styles.title}`}>Lista de Reclutadores</h3>
            <Link to="/addRecruiter"><Button className={`rounded-pill ${styles.btn}`} >Agregar Reclutador</Button></Link>{' '}
            </div>
            <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col">Nombre y Apellido</th>
                            <th scope="col">País</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Comentario</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbodyContainer} >
                        {recruiter.map((recruiter, i) => {
                             return (
                                 <>
                                 <tr key={i} className={styles.userContainer}>
                                 <th scope="row">{i + 1}</th>
                                 <td>{`${recruiter.name} ${recruiter.surname}`}</td>
                                 <td>{recruiter.country}</td>
                                 <td>{recruiter.status_rec}</td>
                                 <td>{recruiter.description_rec}</td>
                                 <td>{recruiter.rating}</td>
                                 <td><button onClick={(e) => handleEdit(e, recruiter.id)}className={`btn btn-danger rounded-pill ${styles.bg}`} >Editar</button></td>
                                 <td><button onClick={(e)=> handleDelete(e, recruiter.id)} className={`btn btn-danger rounded-pill ${styles.bg}`}>Eliminar</button></td>
                                 </tr>
                                </>
                            ) 
                         })} 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Recruiters;