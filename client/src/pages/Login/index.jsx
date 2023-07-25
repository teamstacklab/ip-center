import React from "react";
import { LoginForm } from "@/components/Forms/Login";
import Logo from "../../assets/images/logo.svg";
import LogoAltenativa from "../../assets/images/logo-alternativa.svg"

import { styled } from "styled-components";

export const Main = styled.main`
  margin-top: var(--nav-top-desktop);
  padding: 40px 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    margin-top: var(--nav-top-mobile);
    padding: 0;
  }
`

export const Section =  styled.section`
  display: flex;
  flex-direction: row;
  width: 50vw;
  border-radius: 12px;
  overflow: hidden;
  background: var(--orange-tertiary);
  @media screen and (max-width: 1440px) {
    flex-direction: column;
    padding: var(--padding-mobile);
    width: 100%;
    max-width: 480px;
    background: transparent;

  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.$DivLogo ? "0" : "32px 24px"};
  gap: 20px;
  width: 100%;
  background-color: ${props => props.$DivLogo ? "var(--brown-primary)" :"none"};
  border-radius: 12px;
  @media screen and (max-width: 1440px) {
    display: ${props => props.$DivLogo ? "none" : "flex"};
    padding: 0;
  }
`

export const LogoImage = styled.img`
  width: 120px;
  height: fit-content;
  object-fit: cover;
`
export const LogoImageAltenativa = styled.img`
  width: 220px;
  object-fit: cover;
`

export const LoginRoute = '/login';

export default function Login() {
  return (
    <Main>
      <Section>
        <Div>
          <LogoImage src={Logo} alt="Logo do Ipe center" />
          <p>Faça <b>LogIn</b> para ter acesso a sua loja!</p>
          <LoginForm />
        </Div>
        <Div $DivLogo>
          <LogoImageAltenativa src={LogoAltenativa} alt="Logo Ipe alternativa" />
        </Div>
      </Section>
    </Main>
  );
}