import React from "react";
import { styled } from "styled-components";

import './CSS/mobile.css';
import './CSS/desktop.css';
import * as Icons from "react-bootstrap-icons";
import { Title } from "@/components/Title";
import * as Box from "@/components/Box";

const DemandasRoute = '/demandas';

const Section = styled(Box.Section)`
  @media screen and (max-width: 1440px){
        padding: .5rem 1.3rem;
        gap: 1rem;
  }
`

const Demandas = () => {
  return (
    <Section>
      <Title icon={<Icons.CheckAll />}>Demandas de Registro</Title>
      <div className="demandas__cards">
      </div>
    </Section>
  );
};


export default Demandas;
export { DemandasRoute };