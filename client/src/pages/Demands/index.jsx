import React from "react";
import * as Box from "@/components/Box";
import * as Icons from "react-bootstrap-icons";
import { Title } from "@/components/Title";
import { Demand } from "@/components/Demand";
import { styled } from "styled-components";

const DemandasRoute = "/demandas";

const demand = {
  id: 1,
  loja: "Renan Store",
  name: "Renan Alves",
  cpf: "09890987654",
  createdAt: "2023-07-22",
};

const demandas = [demand, demand, demand, demand];

const Demandas = () => {
  return (
    <React.Fragment>
      <Box.Section>
        <Title icon={<Icons.Check2All />}>Demandas de Registro</Title>
        <Box.Flex column>
          {demandas.map((demanda) => {
            return <Demand {...demanda} />;
          })}
        </Box.Flex>
      </Box.Section>
    </React.Fragment>
  );
};

export default Demandas;
export { DemandasRoute };
