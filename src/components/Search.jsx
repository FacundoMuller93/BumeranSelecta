import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getAllSearch, deleteSearch } from "../store/searchs";
import styles from '../assets/styles/Recruiters.module.scss';

const Search = () => {

    const dispatch = useDispatch();

    const search = useSelector(state =>
        state.search.data
    );

    useEffect(() => {
        dispatch(getAllSearch())
    }, []);

    //eliminar search
    const handleDelete = async (e, searchId) => {
        e.preventDefault();
        await dispatch(deleteSearch(searchId))
        dispatch(getAllSearch())
    };

    return (
        <div className="container-fluid px-4">
            <div className="row my-5">
                <div className={styles.titleContainer}>
                    <h3 className={`fs-4 mb-3 ${styles.title}`}>Lista de busquedas</h3>
                    <Link to="/addSearch"><Button className={`rounded-pill ${styles.btn}`} >Agregar Busqueda</Button></Link>{' '}
                </div>
                <div className="col">
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="50">#</th>
                                <th scope="col">País</th>
                                <th scope="col">Area</th>
                                <th scope="col">Posición</th>
                                <th scope="col">Vacantes</th>
                                <th scope="col">Caducidad</th>
                                <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbodyContainer} >
                            {search.map((search, i) => {
                                return (
                                    <tr className={styles.userContainer}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{search.country}</td>
                                        <td>{search.area_search}</td>
                                        <td>{search.position}</td>
                                        <td>{search.vacancies}</td>
                                        <td>{search.lapse_search.replace(" ", " a las ")}hs</td>
                                        <td>{search.description_search}</td>
                                        <td><button onClick={(e) => handleDelete(e, search.id)} className={`btn btn-danger rounded-pill ${styles.bg}`}>Eliminar</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Search;