import React from "react";

import './CSS/mobile.css';
import './CSS/desktop.css';

import CalendarAgenda from "../../components/Calendar";
import CardEventos from "../../components/CardEventos";

import {
  Shop,
  CalendarWeek,
  PeopleFill,
  ArrowRight,
  InfoCircle,
} from 'react-bootstrap-icons'
import { ApiComunicados } from "../../api/routes";
import QueryActions from "../../components/QueryActions";
import CardComunicado from "../../components/CardComunicado";
import api from "../../api";

const EventosRoute = '/eventos';

const Eventos = () => {
  const [comunicados, setComunicados] = React.useState([]);

  React.useEffect(() => {
    api.get(ApiComunicados.all).then((res)=> {
      setComunicados(res.data);
    })
  }, [])

  if (!comunicados) return null;

  return (
    <section className="home-eventos">
      <div className="eventos__navegation">
        <div className="navegation-eventos">
          <CalendarWeek className="navegation-eventos__icons" />
          <span className="navegation-eventos__title">Eventos</span>
        </div>
      </div>
      <div className="eventos__infor">
        <CalendarAgenda className="infor__calendar" />
        <div className="infor-eventos">
          <div className="infor-eventos__title">
            <InfoCircle className="title__icon" />
            <h2 className="title__nome">Comunicados</h2>
          </div>
          <div className="infor-eventos-card">
            {comunicados.map(comunicado=>{
              return <CardComunicado {...comunicado} />
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Eventos;
export { EventosRoute };