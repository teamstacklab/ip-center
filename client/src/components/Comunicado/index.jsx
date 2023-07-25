import React from "react";
import { Container, Name, Description } from "./Style";

export const Comunicado = (props) => {
  return (
    <Container>
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>
    </Container>
  );
};
