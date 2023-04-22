import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CSS/mobile.css';
import './CSS/desktop.css';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { HomeRoute } from '../../pages/Home';



function RegisterForm() {
  const [username, setUsername] = React.useState();
  const [name, setName] = React.useState();
  const [loja, setLoja] = React.useState();
  const [email, setEmail] = React.useState();
  const [cpf, setCpf] = React.useState();
  const [password, setPassword] = React.useState();
  const [whatsapp, setWhatsapp] = React.useState();
  const [confirmation, setConfirmation] = React.useState();
  const accessToken = JSON.parse(sessionStorage.getItem('access_token'));

  if (accessToken !== null) {
    return <h1>Você já está logado!</h1>
  } else {
    return (
      <Form className="auth__form" method="POST">
        <Form.Label className="auth__label">Nome:</Form.Label>
        <Form.Control onChange={e => setName(e.target.value)} className="auth__input" type="text" controlId="name" placeholder="Digite seu nome" required />
        <Form.Label className="auth__label">Username:</Form.Label>
        <Form.Control onChange={e => setUsername(e.target.value)} className="auth__input" type="text" controlId="username" placeholder="Digite seu usuário" required />
        <Form.Label className="auth__label">Email:</Form.Label>
        <Form.Control onChange={e => setEmail(e.target.value)} className="auth__input" type="text" controlId="email" placeholder="Digite seu email" required />
        <Form.Label className="auth__label">Nome da loja:</Form.Label>
        <Form.Control onChange={e => setLoja(e.target.value)} className="auth__input" type="text" controlId="loja" placeholder="Digite o nome da loja" required />
        <span className="auth__group">
          <div className="auth__group__item">
            <Form.Label className="auth__label">CPF:</Form.Label>
            <Form.Control onChange={e => setCpf(e.target.value)} className="auth__input" type="text" controlId="cpf" placeholder="Digite seu CPF" required />
          </div>
          <div className="auth__group__item">
            <Form.Label className="auth__label">Whatsapp:</Form.Label>
            <Form.Control onChange={e => setWhatsapp(e.target.value)} className="auth__input" type="text" controlId="whatsapp" placeholder="Digite seu Whatsapp" required />
          </div>
        </span>
        <Form.Label className="auth__label">Senha:</Form.Label>
        <Form.Control onChange={e => setPassword(e.target.value)} className="auth__input" type="password" controlId="password" placeholder="Digite sua senha" required />
        <Form.Label className="auth__label">Confirmar:</Form.Label>
        <Form.Control onChange={e => setConfirmation(e.target.value)} className="auth__input" type="password" controlId="confirmation" placeholder="Confirme sua senha" required />

        <Button className="auth__submit" type="submit">Pedir cadastro</Button>
      </Form>
    );
  };
}

function LoginForm() {
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

function ForView(props) {
  if (props.forLogin) {
    return <LoginForm />
  } else if (props.forRegister) {
    return <RegisterForm />
  } else {
    return <p>Digite uma AuthView válida. opções = 'register' ou 'login'.</p>
  }
}

export function AuthForm(props) {
  return <ForView {...props} />
}