import React from "react";
import { RegisterForm } from "../../components/Forms/Register";
import Logo from "../../assets/images/logo.svg";
import LogoAlt from "../../assets/images/logo-alternativa.svg";
import { styled } from "styled-components";
import { Div, LogoImage, LogoImageAltenativa, Main, Section } from "../Login";

const SectionResgister = styled(Section)`
  width: 60vw;
  @media screen and (max-width: 1440px){
    width: auto;
  }
`

export const RegisterRoute = '/register';

export default function Register() {
  return (
    <Main>
      <SectionResgister>
        <Div>
          <LogoImage src={Logo} alt="Logo do Ipe" />
          <p>Peça o <b>Registro</b> para adicionar sua loja no site.</p>
          <RegisterForm />
        </Div>
        <Div $DivLogo>
          <LogoImageAltenativa src={LogoAlt} alt="Logo de Ipe alternativa" />
        </Div>
      </SectionResgister>
    </Main>
  );
}