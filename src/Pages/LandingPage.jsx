import React from "react";
import styles from "../assets/styles/LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 text-center mt-5 order-1 order-lg-0">
          <img
            src="https://www.bumeran.com.ar/candidate/static/media/login.e6658ac3.svg"
            alt="imagen"
          />
        </div>
        <div className="col-12 col-lg-6 mt-5 d-flex align-items-center justify-content-center">
          <p className="lead fs-2 title">Reinventando el Reclutamiento</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
