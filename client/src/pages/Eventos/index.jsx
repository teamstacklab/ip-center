import React from "react";
import "./CSS/mobile.css";
import "./CSS/desktop.css";
import CalendarAgenda from "../../components/Calendar";
import CardEventos from "../../components/CardEventos";
import CardComunicado from "../../components/CardComunicado";
import { ComunicatesController } from "../../controllers/ComunicatesController";
import {
  CalendarWeek,
  InfoCircle,
} from "react-bootstrap-icons";


const EventosRoute = "/eventos";

const Eventos = () => {
  const comunicatesController = new ComunicatesController();
  const [comunicates, setComunicates] = React.useState([]);

  React.useEffect(() => {
    const fetchComunicates = async() => {
      return await comunicatesController.getAll();
    }
    setComunicates(fetchComunicates());
  }, []);

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
            {/* {comunicates.map(comunicate=>{
              return <CardComunicado {...comunicate} />
            })} */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Eventos;
export { EventosRoute };