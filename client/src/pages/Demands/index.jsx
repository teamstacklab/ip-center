import React from "react";
import './CSS/mobile.css';
import './CSS/desktop.css';
import { CheckAll } from 'react-bootstrap-icons'

const DemandasRoute = '/demandas';

const Demandas = () => {
  return (
    <section className="demandas">
      <div className="demandas__title">
        <CheckAll className="title__icon" />
        <h1 className="title__text">Demandas de Registro</h1>
      </div>
      <div className="demandas__cards">
      </div>
    </section>
  );
};


export default Demandas;
export { DemandasRoute };