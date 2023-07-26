import React from "react";
import { useParams } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import {
  Carousel,
  Container,
  Content,
  Flex,
  Information,
  Slide,
  Slogan,
  Title,
  Image,
  Description,
  Label,
  Logo,
  Meta,
  Metadata,
} from "./Style";

const loja = {
  name: "Renan Store",
  images: [
    "https://i.imgur.com/JtnSmuG.jpeg",
    "https://i.imgur.com/JtnSmuG.jpeg",
    "https://i.imgur.com/JtnSmuG.jpeg",
  ],
  logo: "https://i.imgur.com/oASn9Hu.jpeg",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic dolorum eius magni non impedit similique laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic dolorum eius magni non impedit similique laborum.",
  whatsapp: "88981179878",
  instagram: "@lojaderenan",
  services: "Prestação de Serviços, Moda, Lojas",
  location: "Piso L1",
  slogan: "A loja da tecnologia",
  category: "Moda",
};

const Loja = ({ match }) => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <Container>
        <Flex>
          <Content>
            <Title>{loja.name}</Title>
            <Slogan>"{loja.slogan}"</Slogan>
            <Carousel>
              {loja.images.map((image) => {
                return (
                  <Slide>
                    <Image src={image} />
                  </Slide>
                );
              })}
            </Carousel>
            <Label>Descrição:</Label>
            <Description>{loja.description}</Description>
          </Content>
          <Information>
            <Logo>
              <Logo.Image src={loja.logo} />
              <Logo.Text>{loja.name}</Logo.Text>
            </Logo>
            <Metadata>
              <Meta>
                <Meta.Container>
                  <Meta.Icon>
                    <Icons.Tags />
                  </Meta.Icon>
                  <Meta.Title>Categorias:</Meta.Title>
                </Meta.Container>
                <Meta.List>
                  <Meta.Data>{loja.category}</Meta.Data>
                </Meta.List>
              </Meta>
              <Meta>
                <Meta.Container>
                  <Meta.Icon>
                    <Icons.GeoAlt />
                  </Meta.Icon>
                  <Meta.Title>Localização:</Meta.Title>
                </Meta.Container>
                <Meta.List>
                  <Meta.Data>{loja.location}</Meta.Data>
                </Meta.List>
              </Meta>
              <Meta>
                <Meta.Container>
                  <Meta.Icon>
                    <Icons.BagCheck />
                  </Meta.Icon>
                  <Meta.Title>Produtos e/ou serviços:</Meta.Title>
                </Meta.Container>
                <Meta.List>
                  <Meta.Data>{loja.services}</Meta.Data>
                </Meta.List>
              </Meta>
            </Metadata>
          </Information>
        </Flex>
      </Container>
    </React.Fragment>
  );
};

export default Loja;
