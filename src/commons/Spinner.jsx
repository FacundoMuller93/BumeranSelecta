import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "../assets/styles/Spinner.scss";


const SpinnerComp = () => {

  const [state, setState] = useState(false)
  const user = useSelector(state => state.user);
  const recruiter = useSelector(state => state.recruiter)

 useEffect(() => {
    setState(user.loading)
  }, [user])

  return (
    <>{
      state ?
        <div className="fondo">
          <Spinner className="position">
            <div className="loader Loader__LoaderComponent-sc-1k8x2o2-1 giEtmK">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Spinner>
        </div>
        : null
    }</>
  )
}

export default SpinnerComp