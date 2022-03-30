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
  const password = useInput()
  const passCheck = useInput()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEmailSubmit = async e => {
    e.preventDefault()
    await dispatch(getUserRequest({ email }))
  }

  const handlePassSubmit = async e => {
    // e.preventDefault()
    if (password !== passCheck) (alert("La contraseña debe ser igual."))
    await dispatch(getUserRequest({ email }))
  }

//   console.log("USER", user)

  return (
    <>
      <div className="d-flex justify-content-center container-fluid">
        <img
          className="mt-5 pt-5 ms-1 pe-5 d-none d-lg-block"
          src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/contactos.png"
          alt=""
        />
        {!user.id ? (
          <Form
            onSubmit={handleEmailSubmit}
            className="text-center mt-4 pt-5 ms-5 w-50 formLogin"
          >
            <div className="fs-5 title">Olvidé mi Contraseña</div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                {...email}
                type="email"
                placeholder="Ingrese su email"
                className="rounded-pill mt-4 inputLogin"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              type="submit"
              className=" rounded-pill px-5 mt-3 buttonLogin"
            >
              Aceptar
            </Button>
          </Form>
        ) : (
          <Form
            onSubmit={handlePassSubmit}
            className="text-center mt-4 pt-5 ms-5 w-50 formLogin"
          >

            <div className="fs-5 title">Olvidé mi Contraseña</div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                {...password}
                type="password"
                placeholder="Contraseña"
                className="rounded-pill inputLogin"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                {...passCheck}
                type="password"
                placeholder="Confirme Contraseña"
                className="rounded-pill inputLogin"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">

            </Form.Group>
            <Button
              type="submit"
              className=" rounded-pill px-5 mt-3 buttonLogin"
            >
              Enviar
            </Button>
          </Form>
        )}
      </div>
    </>
  )
}

export default ForgotPassword
