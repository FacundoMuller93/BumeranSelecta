import React from 'react';
import {Form, Button} from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { sendLoginRequest } from '../store/user';

const LoginForm = () => {
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
        await dispatch(sendLoginRequest({
            email : email.value,
            password : password.value,
        }));
        navigate("/")
}



    return (
<Form onSubmit={handleSubmit} >
    <div>Iniciar sesión</div>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control {...email} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control {...password} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default LoginForm;