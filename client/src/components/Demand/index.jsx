import React from "react";

import "./CSS/mobile.css";
import "./CSS/desktop.css";

import * as Icons from "react-bootstrap-icons";
import * as Box from "@/components/Box";
import { Bold, Button, Container, Info, Marked, Store, Sub } from "./styled";

export const Demand = (props) => {
  return (
    <Container>
      <Container.Content column>
        <Store>{props.loja}</Store>
        <Info>
          <Bold>Owner: </Bold>
          <Marked>{props.name}</Marked>
        </Info>
        <Info>
          <Bold>CPF: </Bold>
          <Marked $secondary>{props.cpf}</Marked>
        </Info>
        <Info>
          <Bold>Emissão: </Bold>
          <Marked $tertiary>{props.createdAt}</Marked>
        </Info>
      </Container.Content>
      <Container.Actions column>
        <Sub>Autorizar?</Sub>
        <Container.Buttons>
          <Button $success>
            <Icons.Check />
          </Button>
          <Button $alert>
            <Icons.X />
          </Button>
        </Container.Buttons>
      </Container.Actions>
    </Container>
  );
};
