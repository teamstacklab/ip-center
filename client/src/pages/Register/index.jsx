import React from "react";
import { RegisterForm } from "../../components/Forms/Register";
import Logo from "../../assets/images/logo.svg";
import LogoAlt from "../../assets/images/logo-alternativa.svg";
import "./CSS/mobile.css";
import "./CSS/desktop.css";


export const RegisterRoute = '/register';

export default function Register() {
  return (
    <main id="register">
      <section className="auth__register">
        <div className="register__group">
          <img className="register__image" src={Logo} alt="Logo do Ipe" />
          <p>Peça o <b>Registro</b> para adicionar sua loja no site.</p>
          <RegisterForm />
        </div>
        <div className="register__background">
          <img className="register__background__image" src={LogoAlt} alt="Logo de Ipe alternativa" />
        </div>
      </section>
    </main>
  );
}