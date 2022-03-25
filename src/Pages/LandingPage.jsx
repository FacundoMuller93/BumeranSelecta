import React from 'react';
import styles from '../styles/LandingPage.module.css'

const LandingPage = () => {
    return (
      <div>
        <div className={styles.container}>
        <img className={styles.picture} src="https://www.bumeran.com.ar/candidate/static/media/login.e6658ac3.svg" alt ="imagen" />
        <div className={styles.txtContainer}>
        <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo culpa ex odio sit totam officia possimus optio nam voluptatum porro, assumenda odit corrupti necessitatibus recusandae sint autem, alias eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente, quaerat eaque doloremque cum incidunt, ipsam expedita officia nostrum amet voluptatibus esse omnis, in odit animi exercitationem culpa quis adipisci! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem alias voluptatum, ipsam veniam totam animi a iste! Repudiandae eaque dolorum expedita, quaerat harum aut blanditiis. Suscipit iure eveniet nam qui.</div>
        </div>
        </div>
      </div>
    )
}

export default LandingPage;