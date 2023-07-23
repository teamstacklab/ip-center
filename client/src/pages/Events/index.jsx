import React from "react";
import { Title } from "@/components/Title";
import * as Icons from "react-bootstrap-icons";
import { Calendar, Div, Section } from "./Style";
import { Comunicado } from "@/components/Comunicado";

const EventosRoute = "/eventos";

const comunicado = {
  name: "Comunicado 1",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia.",
};

const comunicados = [comunicado, comunicado, comunicado];

const Eventos = () => {
  return (
    <Section>
      <Div>
        <Title icon={<Icons.CalendarWeek />}>Eventos</Title>
        <Calendar />
      </Div>
      <Div>
        <Title icon={<Icons.InfoCircle />}>Comunicados</Title>
        <Div>
          {comunicados.map(comunicado => {
            return <Comunicado {...comunicado} />;
          })}
        </Div>
      </Div>
    </Section>
  );
};

export default Eventos;
export { EventosRoute };
