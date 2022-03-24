import React, {useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';

import { sendRegisterRequest } from '../store/user';

const RegisterForm = () => {

    const firstName = useInput();
    const surname = useInput();
    const age = useInput();
    const country = useInput();
    const email = useInput();
    const password = useInput();

    const dispatch = useDispatch();
    const navigate = useNavigate()
  


    const handleSubmit = async (e) => {
        e.preventDefault();
            await dispatch(sendRegisterRequest({
                firstName : firstName.value,
                surname : surname.value,
                age : age.value,
                country : country.value,
                email : email.value,
                password : password.value
            }));
            navigate("/login")
    }

    return (

<Form onSubmit={handleSubmit}>
    <div>Crear una cuenta</div>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control {...firstName} type="text" placeholder="Ingrese su nombre" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control {...surname} type="text" placeholder="Ingrese su apellido" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control {...age} type="number" placeholder="Ingrese su edad" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control {...country} type="text" placeholder="Ingrese su nacionalidad" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control {...email} type="email" placeholder="Ingrese su email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control {...password} type="password" placeholder="Ingrese su contraseña" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Registrarse
  </Button>
</Form>
    )
}

export default RegisterForm;