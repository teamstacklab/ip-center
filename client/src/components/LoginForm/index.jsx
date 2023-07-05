import React from "react";
import './CSS/mobile.css';
import './CSS/desktop.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { HomeRoute } from '../../pages/Home';


export function LoginForm() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [user, setUser] = React.useState();
  const accessToken = JSON.parse(sessionStorage.getItem('access_token'));
  const navigate = useNavigate();

  if (accessToken !== null) {
    return <h1>Você já está logado!</h1>
  } else {
    return (
      <Form className="auth__form" method="POST">
        <Form.Label className="auth__label">Username:</Form.Label>
        <Form.Control onChange={e => setUsername(e.target.value)} className="auth__input" type="text" controlId="username" placeholder="Digite seu username" required />
        <Form.Label className="auth__label">Senha:</Form.Label>
        <Form.Control onChange={e => setPassword(e.target.value)} className="auth__input" type="password" controlId="password" placeholder="Digite sua senha" required />
        <Button className="auth__submit" type="submit">Entrar</Button>
      </Form>
    );
  }
}