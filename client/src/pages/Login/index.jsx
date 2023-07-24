import React from "react";
import { LoginForm } from "@/components/Forms/Login";
import Logo from "../../assets/images/logo.svg";
import LogoAlt from "../../assets/images/logo-alternativa.svg";
import "./CSS/mobile.css";
import "./CSS/desktop.css";


export const LoginRoute = '/login';

export default function Login() {
  return (
    <main id="login">
      <section className="auth__login">
        <div className="login__group">
          <img className="login__image" src={Logo} alt="Logo do Ipe" />
          <p>Faça <b>LogIn</b> para ter acesso a sua loja!</p>
          <LoginForm />
        </div>
        <div className="login__background">
          <img className="login__background__image" src={LogoAlt} alt="Logo Ipe alternativa" />
        </div>
      </section>
    </main>
  );
}