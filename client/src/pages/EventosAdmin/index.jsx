import React from "react";

import './CSS/mobile.css';
import './CSS/desktop.css';

import Calendar from "../../components/Calendar"
import Card_eventos from "../../components/Card-eventos";
import EventosForm from "../../components/EventosForm"
import ComunicadosForm from "../../components/ComunicadosForm"


import {
  Shop,
  CalendarWeek,
  PeopleFill,
  ArrowRight,
  InfoCircle,
} from 'react-bootstrap-icons'

const EventosAdminRoute = '/eventos/admin';

const EventosAdmin = () => {
  return (
    <section className="home-eventos">
      <div className="eventos__navegation">
        <div className="navegation-eventos">
          <CalendarWeek className="navegation-eventos__icons" />
          <span className="navegation-eventos__title">Eventos</span>
        </div>
        <button className="eventos__navegation__btn"></button>
        <input type="search" className="eventos__navegation__search" placeholder="Pesquisar" />
      </div>
      <div className="eventos__infor">
        <div className="infor-eventos-calendar">
          <EventosForm />
          <Calendar className="infor__calendar" />
        </div>
        <div className="infor-eventos">
          <ComunicadosForm />
          <div className="infor-eventos__title">
            <InfoCircle className="title__icon" />
            <h2 className="title__nome">Comunicados</h2>
          </div>
          <div className="infor-eventos-card">
            <Card_eventos />
            <Card_eventos />
            <Card_eventos />
            <Card_eventos />
          </div>
        </div>
      </div>
    </section>
  );
};


export default EventosAdmin;
export { EventosAdminRoute };