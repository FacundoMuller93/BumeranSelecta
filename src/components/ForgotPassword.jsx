import React, { useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import useInput from "../hooks/useInput"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../assets/styles/LoginForm.scss"

import { getUserRequest, sendRegisterRequest } from "../store/user"

const ForgotPassword = () => {
  const user = useSelector(state => state.user.data)
  const email = useInput()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    await dispatch(getUserRequest({ email }))
    //     await dispatch(
    //       sendLoginRequest({
    //         email: email.value,
    //         password: password.value,
    //       })
    //     )
    //     navigate("/")
  }

    console.log("USER", user)

  return (
    <>
      <div className="d-flex justify-content-center container-fluid">
        <img
          className="mt-5 pt-5 ms-1 pe-5 d-none d-lg-block"
          src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/contactos.png"
          alt=""
        />
        <Form
          onSubmit={handleSubmit}
          className="text-center mt-4 pt-5 ms-5 w-50 formLogin"
        >
          {/* <div className="pt-4 mb-5 fs-4 title">
          ¿Listo para encontrar el talento que estás buscando?​
        </div> */}
          <div className="fs-5 title">Olvidé mi Contraseña</div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              {...email}
              type="email"
              placeholder="Ingrese su email"
              className="rounded-pill mt-4 inputLogin"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <Button type="submit" className=" rounded-pill px-5 mt-3 buttonLogin">
            Aceptar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ForgotPassword
