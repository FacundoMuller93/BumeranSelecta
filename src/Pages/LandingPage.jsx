import React from 'react';
import styles from '../assets/styles/LandingPage.module.scss'

const LandingPage = () => {
    return (
      <div>
        <div className={styles.container}>
        <img className={styles.picture} src="https://www.bumeran.com.ar/candidate/static/media/login.e6658ac3.svg" alt ="imagen" />
       
        <div className="d-flex align-items-center">
        <p className="lead ms-5 fs-1 title">Reinventando el Reclutamiento</p>
     
        </div>
        </div>
      </div>
    )
}

export default LandingPage;