import React from "react";
import * as Box from "@/components/Box";
import * as Icons from "react-bootstrap-icons";
import { Title } from "@/components/Title";
import { Demand } from "@/components/Demand";
import { styled } from "styled-components";

const DemandasRoute = "/demandas";

const Section = styled(Box.Section)`
  @media screen and (max-width: 1440px){
        padding: .5rem 1.3rem;
        gap: 1rem;
  }
`
const ContainerDemandas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2em;
`

const Demandas = () => {
  return (
    <Section>
      <Title icon={<Icons.CheckAll />}>Demandas de Registro</Title>
      <ContainerDemandas >
      </ContainerDemandas>
    </Section>
  );
};

export default Demandas;
export { DemandasRoute };
