import React from "react";
import { Form, Button } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendLoginRequest } from "../store/user";
import "../assets/styles/LoginForm.scss";

const LoginForm = () => {
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      sendLoginRequest({
        email: email.value,
        password: password.value,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center container-fluid">
      <img
        className="mt-5 pt-5 ms-1 pe-5"
        src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/contactos.png"
        alt=""
      />
      <Form onSubmit={handleSubmit} className="text-center mt-4 pt-5 ms-5 w-50 formLogin">
        <div className="pt-4 mb-5 fs-4 title">
          ¿Listo para encontrar el talento que estás buscando?​
        </div>
        <div className="fs-5 title">Iniciar sesión</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            {...email}
            type="email"
            placeholder="Email"
            className="rounded-pill mt-4 inputLogin"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            {...password}
            type="password"
            placeholder="Contraseña"
            className="rounded-pill inputLogin"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button type="submit" className=" rounded-pill px-5 mt-3 buttonLogin">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
