import React from "react";
import { AuthForm } from "../../components/AuthForm";
import Logo from '../../assets/images/logo.svg'
import LogoAlt from '../../assets/images/logo-alternativa.svg'
import './CSS/mobile.css';
import './CSS/desktop.css'


export const RegisterRoute = '/register';

export default function Register() {
  return (
    <main id="register">
      <section className="auth__register">
        <div className="register__group">
          <img className="register__image" src={Logo} alt="Logo do Ipe" />
          <p>Peça o <b>Registro</b> para adicionar sua loja no site.</p>
          <AuthForm forRegister />
        </div>
        <div className="register__background">
          <img className="register__background__image" src={LogoAlt} alt="Logo de Ipe alternativa" />
        </div>
      </section>
    </main>
  );
}