import React from "react";
import * as Icons from "react-bootstrap-icons";
import { LojasRoute } from "@/pages/Stores";
import { Button, Container, Description, Image, Title } from "./styled";

const whatsLink = (numTel) => {
  return `https://api.whatsapp.com/send/?phone=%2B55${numTel}&text&type=phone_number&app_absent=0`;
};

export default function Store(props) {
  return (
    <Container column>
      <Container.Image>
        <Image src={props.images[0]} alt={"Imagem da loja"} />
      </Container.Image>
      <Container.Content column>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Container.Buttons>
          <Button width={"75%"} to={`${LojasRoute}/${props.id}`}>
            Ver loja
            <Button.Icon>
              <Icons.ArrowRight />
            </Button.Icon>
          </Button>
          <Button
            as={"a"}
            width={"25%"}
            variant={"green"}
            href={whatsLink(props.whatsapp)}
            rel={"noopener noreferrer"}
          >
            <Button.Icon>
              <Icons.Whatsapp />
            </Button.Icon>
          </Button>
        </Container.Buttons>
      </Container.Content>
    </Container>
  );
}
