import React from "react";
import "./CSS/mobile.css";
import "./CSS/desktop.css";
import CalendarAgenda from "../../components/Calendar";
import ComunicadosList from "../../components/ComunicadosList";
import {
  CalendarWeek,
  InfoCircle,
} from "react-bootstrap-icons";


const EventosRoute = "/eventos";

const Eventos = () => {

  return (
    <section id="eventos-view">
      <div className="eventos">
        <div className="eventos__title">
          <CalendarWeek className="eventos__icon h2 m-0" />
          <h2 className="eventos__heading">Eventos</h2>
        </div>
        <CalendarAgenda className="eventos__agenda" />
      </div>
      <div className="comunicados">
        <div className="comunicados__title eventos__title">
          <InfoCircle className="comunicados__icon eventos__icon h2 m-0" />
          <h2 className="comunicados__heading eventos__heading">Comunicados</h2>
        </div>
        <div className="comunicados__list">
          {/* Mapeia os comunicados --> */}
          <ComunicadosList />
          {/* <-- Mapeia os comunicados */}
        </div>
      </div>
    </section>
  );
};


export default Eventos;
export { EventosRoute };