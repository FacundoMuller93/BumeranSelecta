import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../assets/styles/Rating.module.scss";
import { useDispatch } from "react-redux";
import { editRecruiter } from "../store/recruiters";
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(rating);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editRecruiter({ id: 3, rating: rating * 2 }));
    navigate("/searchs");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Por favor, califique al reclutador que realizo esta búsqueda
      </div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={45}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <form onSubmit={handleSubmit}>
        <div className={styles.totalCandidates}>Total de Candidatos Presentados: 20</div>
        <button
          type="submit"
          className={`btn btn-danger rounded-pill ${styles.bg}`}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Rating;
