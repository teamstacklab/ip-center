import React from "react";
import { Title } from "@/components/Title";
import * as Icons from "react-bootstrap-icons";
import { Calendar, Comunidados, Div, Icon } from "./Style";
import { SectionBox } from "../../components/Box/Style";


const EventosRoute = "/eventos";

const Eventos = () => {
  return (
    <SectionBox $row >
      <Div>
        <Title icon={<Icons.CalendarWeek />}>Eventos</Title>
        <Calendar />
      </Div>
      <Div>
        <Comunidados>
          <Icon />
          <h2>Comunicados</h2>
        </Comunidados>
        <div>
          {/* Mapeia os comunicados --> */}
          {/* <-- Mapeia os comunicados */}
        </div>
      </Div>
    </SectionBox>
  );
};


export default Eventos;
export { EventosRoute };