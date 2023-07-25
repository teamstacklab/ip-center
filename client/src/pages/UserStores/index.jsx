import React from "react";
import { Shop } from 'react-bootstrap-icons'

import { Title } from "@/components/Title";
import ButtonCriar from "../../components/ButtonCriar";
import { Container, ContainerLojas, Lojas } from "./Style";
import { SectionBox } from "../../components/Box/Style";

const MinhasLojasRoute = '/lojas/minhas';

const MinhasLojas = (props) => {
  const accessToken = JSON.parse(sessionStorage.getItem('access_token'));
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [lojas, setLojas] = React.useState([]);



  return (
    <SectionBox>
      <Container>
        <Title icon={<Shop />}>{props.individual ? "Minhas" : null}Lojas</Title>
        <ButtonCriar/>
      </Container>
      <ContainerLojas>
        <Lojas>
          {lojas.map(loja => {
            return (
              <CardLoja {...loja} />
            );
          })}
        </Lojas>
      </ContainerLojas>
    </SectionBox>
  );
};


export default MinhasLojas;
export { MinhasLojasRoute };