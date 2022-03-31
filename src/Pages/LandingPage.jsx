import React from "react";
import styles from "../assets/styles/LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className="container">
      <div className={`row ${styles.secondContainer}`}>
        <div className={`col-lg-6 text-center ${styles.picture}`}>
          <img
            src="https://www.bumeran.com.ar/candidate/static/media/login.e6658ac3.svg"
            alt="imagen"/>
        </div>
        <div className={`col-12 col-lg-6 mt-5 d-flex align-items-left justify-content-center ${styles.txtContainer}`}>
          <p className="lead fs-2 title">Reinventando el Reclutamiento</p>
          <p className={styles.message}>Somos la primera plataforma tecnológica aplicada a la selección de talento.</p>
          <p>Vinculamos la tecnología con la mayor red de expertos de la región y la base de candidatos más amplia de Latinoamérica.</p>
          <p>Reinventamos el reclutamiento por medio de procesos más transparentes, ágiles y asertivos; logrando una tasa de cierre mayor al 90%.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
