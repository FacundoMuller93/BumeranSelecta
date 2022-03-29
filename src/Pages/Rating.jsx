import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import styles from "../assets/styles/Rating.module.scss"

const Rating = () => {
        const [rating, setRating] = useState(null);
        const [hover, setHover] = useState(null);
        return (
          <div className={styles.container} >
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
          </div>
        );
      };
    


export default Rating;