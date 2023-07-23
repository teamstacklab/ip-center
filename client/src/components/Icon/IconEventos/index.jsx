import { styled } from "styled-components";
import { Title } from "@/components/Title";
import * as Icons from "react-bootstrap-icons";

import { CalendarWeek } from "react-bootstrap-icons";

import { TitleLojas } from "../IconLojas";
import { ContainerTitle } from "../../Home/HomeLojas/Style";

const ContainerIcon = styled(ContainerTitle)`
  margin-top: 10px;
  display: flex;
  gap: 7px;
  justify-content: start;
`;

const IconCalendar = styled(CalendarWeek)`
  font-size: 2em;
  color: var(--brown-tertiaty);
  @media screen and (max-width: 1440px) {
    font-size: 1.8em;
  }
`;

const TitleEventos = styled(TitleLojas)`
  color: var(--black);
`;

function IconEventos() {
  return (
    <ContainerIcon>
      <IconCalendar />
      <TitleEventos $color="var(--black)">Eventos</TitleEventos>
    </ContainerIcon>
  );
}

export default IconEventos;
