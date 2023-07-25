import React from "react";
import { Form, Container } from "./Style";
import { Title } from "@/components/Title";
import * as Icons from "react-bootstrap-icons";
import * as Box from "@/components/Box";

export const CriarLojaRoute = "/lojas/criar";

const categorias = [
  {
    id: 1,
    name: "Tecnologia",
  },
  {
    id: 2,
    name: "Alimentício",
  },
  {
    id: 3,
    name: "Moda",
  },
];

const CriarLoja = () => {
  return (
    <React.Fragment>
      <Box.Section>
        <Form>
          <Container>
            <Title icon={<Icons.PlusLg />}>Criar loja</Title>
            <Container.Button>
              <Form.Submit top={"0"}>Criar</Form.Submit>
            </Container.Button>
          </Container>
          <Form.Div>
            <Form.Div $column>
              <Form.Label>Nome da loja:</Form.Label>
              <Form.Input
                controlId={"name"}
                placeholder={"Digite o nome da loja"}
                required
              />
              <Form.Label>Slogan:</Form.Label>
              <Form.Input
                controlId={"slogan"}
                placeholder={"Digite o seu slogan"}
                required
              />
              <Form.Label>Localização:</Form.Label>
              <Form.Input
                controlId={"location"}
                placeholder={"Digite a Localização"}
                required
              />
              <Form.Label>Logo:</Form.Label>
              <Form.Input controlId={"logo"} type={"file"} required />
              <Form.Label>Imagens:</Form.Label>
              <Form.Input controlId={"image"} type={"file"} required />
              <Form.Label>Categoria:</Form.Label>
              <Form.Select controlId={"categoria"}>
                {categorias.map((categoria) => {
                  return (
                    <Form.Option value={categoria.id}>
                      {categoria.name}
                    </Form.Option>
                  );
                })}
              </Form.Select>
            </Form.Div>
            <Form.Div $column>
              <Form.Label>Whatsapp:</Form.Label>
              <Form.Input
                controlId={"whatsapp"}
                placeholder={"Digite o Whatsapp da loja"}
                required
              />
              <Form.Label>Instagram:</Form.Label>
              <Form.Input
                controlId={"instagram"}
                placeholder={"Digite o Instagram da loja"}
                required
              />
              <Form.Label>Produtos e/ou serviços:</Form.Label>
              <Form.Input
                controlId={"services"}
                placeholder={"O que sua loja oferece?"}
                required
              />
              <Form.Label>Descrição:</Form.Label>
              <Form.Textarea
                controlId={"description"}
                placeholder={"Descreva sua loja aqui"}
                required
              />
            </Form.Div>
          </Form.Div>
        </Form>
      </Box.Section>
    </React.Fragment>
  );
};

export default CriarLoja;
