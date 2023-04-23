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
    <section className="home-eventos">
      <div className="eventos__infor">
        <div className="navegation-eventos">
          <CalendarWeek className="navegation-eventos__icons" />
          <span className="navegation-eventos__title">Eventos</span>
        </div>
        <CalendarAgenda className="infor__calendar" />
      </div>
      <div className="infor-eventos-card">
        <div className="infor-eventos">
          <div className="infor-eventos__title">
            <InfoCircle className="title__icon" />
            <h2 className="title__nome">Comunicados</h2>
          </div>
          <div className="infor-comunicados__list">
            {/* Mapeia os comunicados --> */}
            <ComunicadosList />
            {/* <-- Mapeia os comunicados */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Eventos;
export { EventosRoute };