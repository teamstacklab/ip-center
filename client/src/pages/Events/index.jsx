import React from "react";
import { Title } from "@/components/Title";
import * as Icons from "react-bootstrap-icons";
import { Calendar, ComunidadosItem, Div } from "./Style";
import { SectionBox } from "../../components/Box/Style";


const EventosRoute = "/eventos";

const comunicado = {
  name: "Comunicado 1",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia.",
};

const comunicados = [comunicado, comunicado, comunicado];

const Eventos = () => {
  return (
    <SectionBox $row >
      <Div>
        <Title icon={<Icons.CalendarWeek />}>Eventos</Title>
        <Calendar />
      </Div>
      <Div>
        <Title icon={<Icons.InfoCircle />}>Comunicados</Title>
        <Div>
          {comunicados.map(comunicado => {
            return <ComunidadosItem {...comunicado} />;
          })}
        </Div>
      </Div>
    </SectionBox>
  );
};

export default Eventos;
export { EventosRoute };
