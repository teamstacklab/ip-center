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
          <CalendarWeek className="eventos__icon" />
          <h1 className="eventos__heading">Eventos</h1>
        </div>
        <CalendarAgenda className="eventos__agenda" />
      </div>
      <div className="comunicados">
        <div className="comunicados__title eventos__title">
          <InfoCircle className="comunicados__icon eventos__icon" />
          <h1 className="comunicados__heading eventos__heading">Comunicados</h1>
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